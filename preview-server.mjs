import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseDir = __dirname;
const port = Number(process.env.PORT || 4289);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml"
};

createServer(async (request, response) => {
  const rawPath = decodeURIComponent((request.url || "/").split("?")[0]);
  const targetPath = rawPath === "/" ? "/index.html" : rawPath;
  const normalizedPath = path.normalize(targetPath).replace(/^(\.\.[/\\])+/, "");
  const initialPath = path.join(baseDir, normalizedPath);

  if (!initialPath.startsWith(baseDir)) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }

  try {
    let filePath = initialPath;

    try {
      await readFile(filePath);
    } catch {
      if (!path.extname(filePath)) {
        filePath = `${filePath}.html`;
      }
    }

    const file = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream"
    });
    response.end(file);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Preview server running at http://127.0.0.1:${port}`);
});
