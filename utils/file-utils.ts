import * as fs from "fs";

export function saveToFile(dir: string, fileName: string, text: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.appendFileSync(dir + "/" + fileName, text);
}
