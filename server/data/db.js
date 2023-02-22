import { config } from "./config.js";

import mysql from "mysql2/promise";

export const pool = mysql.createPool(config.db);

