import mysql2 from "mysql2";

export const dbConnection = mysql2.createConnection({
  host: "127.0.0.1",
  user: "Mo",
  password: "mopass",
  database: "burndown",
});
