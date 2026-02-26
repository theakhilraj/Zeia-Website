export const extractDriveFileId = (url?: string): string => {
    if (!url) return "";

    const trimmed = url.trim();
    if (!trimmed || !trimmed.includes("drive.google.com")) return "";

    const fileMatch = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (fileMatch?.[1]) {
        return fileMatch[1];
    }

    const idMatch = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (idMatch?.[1]) {
        return idMatch[1];
    }

    return "";
};

export const getDriveDirectUrl = (url?: string): string => {
    if (!url) return "";

    const trimmed = url.trim();
    if (!trimmed) return "";

    const fileId = extractDriveFileId(trimmed);
    if (fileId) {
        // The thumbnail endpoint is usually more reliable in <img> tags than
        // the legacy /uc endpoint for publicly shared Google Drive image files.
        return `https://drive.google.com/thumbnail?id=${fileId}&sz=w2000`;
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
