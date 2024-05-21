import * as fs from "fs";
import * as path from "path";

export function getRouteFilePaths(): string[] {
  const routesFolderPath = path.join(__dirname, "../Routes");
  const filePaths = fs
    .readdirSync(routesFolderPath)
    .filter(
      (file: string) =>
        !file.startsWith("_") && (file.endsWith(".js") || file.endsWith(".ts"))
    )
    .map((file: string) => path.join(routesFolderPath, file));
  return filePaths;
}
