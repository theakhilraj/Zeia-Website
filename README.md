# Zeia Website

## Google Sheet product source

The website now fetches product details from a Google Sheet (CSV publish URL) using these columns:

`id, name, item Code, collections, description, price, original Price, discount, image1, image2, image3, fabric, care, details, sizes`

- `collections` accepts: `motherhood`, `women`, `essentials`
- `image1`, `image2`, `image3` must be public Google Drive image links (recommended format: `https://drive.google.com/uc?export=view&id=<FILE_ID>`)
- `care` and `sizes` should use `|` as separator (example: `Machine wash cold|Do not bleach`)

### Google Sheet link

Use this template and fill your products:

- Sheet (editable template): https://docs.google.com/spreadsheets/d/1M6nE2lBy6f0K3QhR5j7ZgJZxY4QmKp8uWnT2v9D0aBc/edit?usp=sharing
- CSV publish URL format: `https://docs.google.com/spreadsheets/d/<SHEET_ID>/gviz/tq?tqx=out:csv`

## Where to paste image links (non-product website images)

Paste these in your `.env` file (or deployment env vars):

- `VITE_SITE_LOGO_URL` → Navbar + Footer logo
- `VITE_SITE_HERO_IMAGE_URL` → Home hero + Collection “All Products” banner
- `VITE_COLLECTION_MOTHERHOOD_IMAGE_URL` → Motherhood collection tile/banner
- `VITE_COLLECTION_WOMEN_IMAGE_URL` → Women collection tile/banner
- `VITE_COLLECTION_ESSENTIALS_IMAGE_URL` → Essentials collection tile/banner
- `VITE_LOOKBOOK_IMAGE_1_URL` ... `VITE_LOOKBOOK_IMAGE_7_URL` → Lookbook gallery images

If any variable is empty, the app uses local fallback images.

### Configure the app

Create a `.env` file:

```bash
VITE_PRODUCTS_SHEET_CSV_URL=https://docs.google.com/spreadsheets/d/<SHEET_ID>/gviz/tq?tqx=out:csv

# Optional non-product images
VITE_SITE_LOGO_URL=https://drive.google.com/uc?export=view&id=<FILE_ID>
VITE_SITE_HERO_IMAGE_URL=https://drive.google.com/uc?export=view&id=<FILE_ID>
VITE_COLLECTION_MOTHERHOOD_IMAGE_URL=https://drive.google.com/uc?export=view&id=<FILE_ID>
VITE_COLLECTION_WOMEN_IMAGE_URL=https://drive.google.com/uc?export=view&id=<FILE_ID>
VITE_COLLECTION_ESSENTIALS_IMAGE_URL=https://drive.google.com/uc?export=view&id=<FILE_ID>
VITE_LOOKBOOK_IMAGE_1_URL=https://drive.google.com/uc?export=view&id=<FILE_ID>
```

If `VITE_PRODUCTS_SHEET_CSV_URL` is missing/unreachable, the app falls back to bundled sample product data that already uses Google Drive image links.