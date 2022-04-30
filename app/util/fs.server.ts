import fs from "fs/promises";
import path from "path";

const CONTENT = "content";

export const readContentDir = async () =>
  fs.readdir(path.join(__dirname, "..", CONTENT));

export const readContentFile = async (file: string) =>
  fs.readFile(path.join(__dirname, "..", CONTENT, file), "utf-8");
