import fs from "fs";

export function printToFile(contents) {
	console.log("Printing to file");
	fs.writeFileSync("output.txt", contents);
}
