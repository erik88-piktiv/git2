import fs from "fs";

export function printToFile(contents) {
	fs.writeFileSync("output.txt", "===\n" + contents + "\n===");
}
