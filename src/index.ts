import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
