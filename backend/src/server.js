import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const port = parseInt(process.env.NODE_SERVER_PORT || "4000");

app.listen(port, () => {
  console.log(`🚀 Portfolio backend running on http://localhost:${port}`);
});
