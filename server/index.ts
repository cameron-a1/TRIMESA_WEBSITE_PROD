import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Parse JSON bodies
  app.use(express.json());

  // Contact form API endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { fullName, email, organisation, subject, message } = req.body;

      // Validate required fields
      if (!fullName || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Log the contact form submission
      console.log("Contact form submission:", {
        fullName,
        email,
        organisation,
        subject,
        message,
        timestamp: new Date().toISOString(),
      });

      // In production, this would send an email via SendGrid, AWS SES, etc.
      // For now, we'll just log it and return success
      
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Failed to process contact form" });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
