export const getDriveDirectUrl = (url?: string): string => {
    if (!url) return "";

    const trimmed = url.trim();
    if (!trimmed) return "";

    if (trimmed.includes("drive.google.com")) {
        const fileMatch = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
        if (fileMatch?.[1]) {
            return `https://drive.google.com/uc?export=view&id=${fileMatch[1]}`;
        }

        const idMatch = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
        if (idMatch?.[1]) {
            return `https://drive.google.com/uc?export=view&id=${idMatch[1]}`;
        }
    }

    return trimmed;
};

export const getGoogleSheetCsvUrl = (sheetUrl?: string): string => {
    if (!sheetUrl) return "";

    const trimmed = sheetUrl.trim();
    if (!trimmed) return "";

    if (trimmed.includes("gviz/tq") || trimmed.endsWith(".csv")) {
        return trimmed;
    }

    const idMatch = trimmed.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
    if (idMatch?.[1]) {
        return `https://docs.google.com/spreadsheets/d/${idMatch[1]}/gviz/tq?tqx=out:csv`;
    }

    return trimmed;
};

export const splitPipeValues = (value?: string): string[] => {
    if (!value) return [];
    return value
        .split("|")
        .map((item) => item.trim())
        .filter(Boolean);
};
