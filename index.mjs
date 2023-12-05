import { printToFile } from "./printToFile.mjs"

const p = 5;

let s = "";

for(let i=0; i<p; i++) {
	s += i + " buckets of pufferfish!";
}

printToFile(s);
