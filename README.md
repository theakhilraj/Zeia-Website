# Zeia Website

## Product data from Google Sheet

The website now reads product details from Google Sheet CSV instead of hardcoding products in code.

Required columns in the sheet:

`id, name, item Code, collections, description, price, original Price, discount, image1, image2, image3, fabric, care, details, sizes`

- `collections` values: `motherhood`, `women`, `essentials`
- `image1`, `image2`, `image3` should be Google Drive links (file/view links are supported and converted automatically)
- `care` and `sizes` should use `|` separator (example: `Machine wash cold|Do not bleach`)

Configured sheet:
## website.env

Store sheet URL and website image links in `website.env` at repo root:

```bash
VITE_PRODUCTS_SHEET_CSV_URL=https://docs.google.com/spreadsheets/d/1Rkjtqf842fOb2sZ3C3OzbgLYIuZ_RlnNUm-L54qwmM0/edit?usp=drive_link

VITE_SITE_LOGO_URL=https://drive.google.com/file/d/17r5VLA9mRcORREdqwLI5VsUOpvUilu68/view?usp=drive_link
VITE_SITE_HERO_IMAGE_URL=https://drive.google.com/file/d/1FoyZA1yDm-zj_GSToJJ6Q5ZzVZZSmJwx/view?usp=drive_link
VITE_COLLECTION_MOTHERHOOD_IMAGE_URL=https://drive.google.com/file/d/1CMvJy9V_yPMFJLguaBXyA6JNRNi60z3t/view?usp=drive_link
VITE_COLLECTION_WOMEN_IMAGE_URL=https://drive.google.com/file/d/1At5j0htRBXiBoV2YQRi6PbpnW39q9Rd0/view?usp=drive_link
VITE_COLLECTION_ESSENTIALS_IMAGE_URL=https://drive.google.com/file/d/1EiWRUuLC9ZJ4QeOe9CBuiLqSuVbUTUUm/view?usp=drive_link
```

Vite config reads `website.env` and injects all `VITE_` keys during build/dev.