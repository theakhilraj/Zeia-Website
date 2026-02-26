import { getDriveDirectUrl } from "@/lib/google";

export const siteImages = {
    logo: getDriveDirectUrl(import.meta.env.VITE_SITE_LOGO_URL as string | undefined),
    hero: getDriveDirectUrl(import.meta.env.VITE_SITE_HERO_IMAGE_URL as string | undefined),
    collectionMotherhood: getDriveDirectUrl(import.meta.env.VITE_COLLECTION_MOTHERHOOD_IMAGE_URL as string | undefined),
    collectionWomen: getDriveDirectUrl(import.meta.env.VITE_COLLECTION_WOMEN_IMAGE_URL as string | undefined),
    collectionEssentials: getDriveDirectUrl(import.meta.env.VITE_COLLECTION_ESSENTIALS_IMAGE_URL as string | undefined),
};
