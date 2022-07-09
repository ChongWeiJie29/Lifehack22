import initSqlJs from 'sql.js';
import fetch from "node-fetch";

const SQL = await initSqlJs();
const fetched = await fetch('../database/LifeHack.db');
const buf = await fetched.arrayBuffer();
const db = new SQL.Database(new Uint8Array(buf));

const query = db.exec(`SELECT * FROM users;`);
const columns = query[0].columns;
const values = query[0].values;
let rows = [];
console.log(query);