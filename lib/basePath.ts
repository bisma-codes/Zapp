const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const DEMO_APK_URL = "https://litter.catbox.moe/tvl5n2.apk";

export function assetPath(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
