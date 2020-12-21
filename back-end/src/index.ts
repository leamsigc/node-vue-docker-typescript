import dotenv from "dotenv";
import App from "./app";

dotenv.config();

const PORT = process.env.PORT || 3000;

App.listen(PORT, () => console.log(`Àpp running  in ${PORT}`));
