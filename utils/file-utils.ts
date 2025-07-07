import * as fs from "fs";

export function saveToFile(path: string, text: string) {
  fs.writeFileSync(path, text);
}
