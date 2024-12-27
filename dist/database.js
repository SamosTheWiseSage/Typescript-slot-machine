"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// database.ts
const mariadb_1 = __importDefault(require("mariadb"));
// Create a pool of connections to your local MariaDB instance
const pool = mariadb_1.default.createPool({
    host: 'localhost', // Database host (localhost for local server)
    user: 'root', // Your MariaDB username
    password: 'Underfell5958', // Your MariaDB password
    database: 'TokenDB', // The name of your database
    connectionLimit: 5, // Limit on number of simultaneous connections
});
exports.default = pool;
//# sourceMappingURL=database.js.map