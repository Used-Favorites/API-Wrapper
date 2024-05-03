import * as fs from "fs";
import * as path from "path";

export function getRouteFilePaths(): string[] {
  const routesFolderPath = path.join(__dirname, "../Routes");
  const fileNames = fs.readdirSync(routesFolderPath);
  const filePaths = fileNames.map((fileName) =>
    path.join(routesFolderPath, fileName)
  );
  return filePaths;
}
