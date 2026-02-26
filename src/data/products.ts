import { getDriveDirectUrl, getGoogleSheetCsvUrl, splitPipeValues } from "@/lib/google";

export type ProductCollection = "motherhood" | "women" | "essentials";

export interface Product {
  id: number;
  name: string;
  itemCode: string;
  collection: ProductCollection;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  images: string[];
  fabric: string;
  care: string[];
  details: string;
  sizes: string[];
}

const normalizeHeader = (header: string) =>
  header.trim().toLowerCase().replace(/\s+/g, " ");

const csvRowToArray = (row: string): string[] => {
  const values: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < row.length; i += 1) {
    const char = row[i];

    if (char === '"') {
      const nextChar = row[i + 1];
      if (inQuotes && nextChar === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      values.push(current.trim());
      current = "";
      continue;
    }

    current += char;
  }

  values.push(current.trim());
  return values;
};

const toNumber = (value?: string): number => {
  const parsed = Number((value || "").replace(/[^\d.-]/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
};

const normalizeCollection = (value?: string): ProductCollection => {
  const normalized = (value || "").trim().toLowerCase();
  if (normalized === "motherhood" || normalized === "women" || normalized === "essentials") {
    return normalized;
  }
  return "essentials";
};

const parseProductsCsv = (csvText: string): Product[] => {
  const lines = csvText
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 2) return [];

  const headers = csvRowToArray(lines[0]).map(normalizeHeader);
  const headerMap = new Map(headers.map((header, index) => [header, index]));

  const getValue = (values: string[], ...headers: string[]): string => {
    for (const header of headers) {
      const index = headerMap.get(header);
      if (typeof index === "number") {
        return values[index] || "";
      }
    }

    return "";
  };

  return lines
    .slice(1)
    .map((line) => {
      const values = csvRowToArray(line);
      const image1 = getDriveDirectUrl(getValue(values, "image1"));
      const image2 = getDriveDirectUrl(getValue(values, "image2"));
      const image3 = getDriveDirectUrl(getValue(values, "image3"));
      const images = [image1, image2, image3].filter(Boolean);

      const product: Product = {
        id: toNumber(getValue(values, "id")),
        name: getValue(values, "name"),
        itemCode: getValue(values, "item code", "itemcode"),
        collection: normalizeCollection(getValue(values, "collections")),
        description: getValue(values, "description"),
        price: toNumber(getValue(values, "price")),
        originalPrice: toNumber(getValue(values, "original price", "originalprice")),
        discount: toNumber(getValue(values, "discount")),
        image: images[0] || "",
        images,
        fabric: getValue(values, "fabric"),
        care: splitPipeValues(getValue(values, "care")),
        details: getValue(values, "details"),
        sizes: splitPipeValues(getValue(values, "sizes")),
      };

      return product;
    })
    .filter((product) => product.id > 0 && Boolean(product.name) && product.images.length > 0);
};

export const fetchProductsFromSheet = async (): Promise<Product[]> => {
  const envUrl = import.meta.env.VITE_PRODUCTS_SHEET_CSV_URL as string | undefined;
  const csvUrl = getGoogleSheetCsvUrl(envUrl);

  if (!csvUrl) return [];

  const response = await fetch(csvUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch products sheet (${response.status})`);
  }

  const csvText = await response.text();
  return parseProductsCsv(csvText);
};
