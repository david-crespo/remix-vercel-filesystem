import fs from "fs/promises";
import path from "path";

const CONTENT = "app/content";

export const readContentDir = async () =>
  fs.readdir(path.join(process.cwd(), CONTENT));

export const readContentFile = async (file: string) =>
  fs.readFile(path.join(process.cwd(), CONTENT, file), "utf-8");
