import fs from "fs/promises";
import path from "path";

const CONTENT = "_content";

export const readContentDir = async () => {
  console.log(await fs.readdir(__dirname));
  console.log(await fs.readdir(path.join(__dirname, "..")));
  console.log(await fs.readdir(path.join(__dirname, "../..")));
  console.log(await fs.readdir(path.join(__dirname, "../../..")));
  return fs.readdir(path.join(__dirname, CONTENT));
};

export const readContentFile = async (file: string) =>
  fs.readFile(path.join(__dirname, CONTENT, file), "utf-8");
