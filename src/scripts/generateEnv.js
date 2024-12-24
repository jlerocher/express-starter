import { readFile, writeFile } from "fs";
import path, { join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envFilePath = join(__dirname, "../../.env");
const outputFilePath = join(__dirname, "../../.env.example");

readFile(envFilePath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading .env file:", err);
        return;
    }

    const lines = data.split(/\r?\n/); // Gérer les fins de ligne Windows/Unix
    const outputLines = lines.map((line) => {
        // Garder les commentaires et lignes vides tels quels
        if (line.trim().startsWith("#") || line.trim() === "") {
            return line;
        }

        // Diviser sur le premier "=" tout en gérant les espaces et guillemets
        const [key] = line.split("=");
        if (key) {
            return `${key.trim()}=`; // Conserver uniquement la clé
        }
        return ""; // Si la ligne est mal formée
    });

    writeFile(outputFilePath, outputLines.join("\n"), "utf8", (err) => {
        if (err) {
            console.error("Error writing .env.example file:", err);
        } else {
            console.log(".env.example file generated successfully.");
        }
    });
});
