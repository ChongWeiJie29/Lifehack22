const sqlite3 = require('sqlite3');
const path = require('path');

const db = new sqlite3.Database(path.resolve(__dirname, '../database/LifeHack.db'));
console.log("Connection successful.")

function getUsername(uid, callback){
    var query = `SELECT * FROM users WHERE userid = '${uid}'`;
    db.all(query, function (err, rows) {
      if(err){
          console.log(err);
      }else{
          callback(rows);
      }
    });
    db.close();
  }

  function print(uid) {
    console.log(uid);
  }

  getUserId("002", print)