import initSqlJs from 'sql.js';
import { readFileSync } from 'fs';
import fileUrl from 'file-url';

export async function checkUserName(username) {
    let correct = false;
    
    const SQL = await initSqlJs();
    const buf = readFileSync(fileUrl('../database/LifeHack.db/'));
    const db = new SQL.Database(new Uint8Array(buf));
    
    const query = db.exec(`SELECT * FROM users WHERE username = '${username}';`);
    if (query[0]) {
        correct = true
    } else {
        correct = false
    }
    return correct;
}
