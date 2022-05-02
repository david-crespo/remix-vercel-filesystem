import fs from "fs/promises";
import path from "path";

const CONTENT = path.join(__dirname, "..", "content");

export const readContentDir = async () => fs.readdir(CONTENT);

export const readContentFile = async (file: string) =>
  fs.readFile(path.join(CONTENT, file), "utf-8");
