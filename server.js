// Serves the built site (dist/) — the same Express setup the Replit deployment uses.
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.static(path.join(dir, "dist"), { maxAge: "1h" }));
app.get("*", (_req, res) => res.sendFile(path.join(dir, "dist", "index.html")));
app.listen(process.env.PORT || 3000, "0.0.0.0");
