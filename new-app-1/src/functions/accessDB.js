/* const sqlite3 = require('sqlite3').verbose();

function getUserName(userName) {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database(`${__dirname}/../database/LifeHack.db`);
        db.get(`SELECT * FROM users WHERE username = '${userName}'`,(err, row) => {
            if (err) reject(err);
            resolve(row);
        });
        db.close()
    });
}
async function gettingUserName(userName) {
    const userNames = await getUserName(userName);
    return userNames;
  } */
