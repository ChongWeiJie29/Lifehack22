const sqlite3 = require('sqlite3');
const path = require('path');

function getUsername(userName){
    return new Promise((resolve, reject) => {
      const db = new sqlite3.Database(path.resolve(__dirname, '../database/LifeHack.db'));
      console.log("Connection successful.")
      var query = `SELECT * FROM users WHERE username='${userName}'`;
      db.all(query, function (err, rows) {
        if (err) reject(err);
        resolve(rows);
      });
    })
  }

  let promise = getUsername("ntyythepro") // => Promise { <pending> }
    .then((results) => {
      return results; // => { slug: 'adding-matomo-website', read_times: 1, shares: 0, likes: 0 }
    });
  console.log(promise)
