/**  manage database user requests*/

import Message from './Message';

import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'billa.db' });



// result: boolean
const addItem = newItem => {

  return new Promise((resolve, reject) => {
    let msg = new Message();
    const {codeType, itemCode, name , price, available, description } = newItem

    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO table_items (itemCode, codeType, name, price, available, description) VALUES (?,?,?,?,?,?)',
        [itemCode, codeType, name , price, available, description],
        (tx, results) => {
            if (results.rowsAffected > 0) {
                msg.result = results.insertId;
                msg.message = 'Item added successfully!';
            } else {
                msg.result = false;
                msg.message = 'Item adding failed!';
            }
            resolve({ result: msg.result, message: msg.message });
        }, (error) => {
            msg.result = false;
            msg.message = `${error.message}`;

            resolve({ result: msg.result, message: msg.message });
        });
    })
  });
}

const updateItem = item => {
  return new Promise((resolve, reject) => {
    let msg = new Message();
    const { itemCode, name , price, available, description } = item

    db.transaction(tx => {
      tx.executeSql(
        'UPDATE table_items set name=? , price=?, available=?, description=? WHERE itemCode=?',
        [name , price, available, description, itemCode],
        (tx, results) => {
            if (results.rowsAffected > 0) {
                msg.result = true;
                msg.message = 'Item Updated successfully!';
            } else {
                msg.result = false;
                msg.message = 'Item updating failed!';
            }
            resolve({ result: msg.result, message: msg.message });
        }, (error) => {
            msg.result = false;
            msg.message = `${error.message}`;

            resolve({ result: msg.result, message: msg.message });
        });
    })
  });
}




const updateAvailable = query => {
  return new Promise((resolve, reject) => {
    let msg = new Message();
    for (var i=0; i<= query.length; i++){
      ((i) => {
        db.transaction(tx => {
          tx.executeSql( 
            'UPDATE table_items set available=? WHERE itemCode=?', query[i],
            (tx, results) => {
                if (results.rowsAffected > 0) {
                    msg.result = true;
                    msg.message = 'Items Updated successfully!';
                } else {
                    msg.result = false;
                    msg.message = 'Items updating failed!';
                }
                resolve({ result: msg.result, message: msg.message });
            }, (error) => {
                msg.result = false;
                msg.message = `${error.message}`;
                resolve({ result: msg.result, message: msg.message });
          })
        })
    })(i)
  }
});

}

// return an array of object 
const fetchAllItems = () => {

return new Promise((resolve, reject) => {
  let msg = new Message();
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM table_items', [],
      (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
      msg.result = temp
      msg.message = 'Get items successfully!';
      resolve({ result: msg.result, message: msg.message });
  }, (error) => {
      msg.result = false;
      msg.message = `${error.message}`;
      resolve({ result: msg.result, message: msg.message });
  });
  })
});
}


const deleteItem = itemCode => {
  return new Promise((resolve, reject) => {
    let msg = new Message();

    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM  table_items where itemCode = ?', [itemCode],
        (tx, results) => {
            if (results.rowsAffected > 0) {
                msg.result = true;
                msg.message = 'Item removed successfully!';
            } else {
                msg.result = false;
                msg.message = 'removing Item failed!';
            }
            resolve({ result: msg.result, message: msg.message });
        }, (error) => {
            msg.result = false;
            msg.message = `${error.message}`;

            resolve({ result: msg.result, message: msg.message });
        });
    })
  });
}

const clearStock = () => {
  db.transaction(txn => {
    txn.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='tabele_items'",
      [],
      function(tx, res) {
        if (res.rows.length == 0) {
          txn.executeSql('DROP TABLE IF EXISTS table_items', []);
          txn.executeSql(
            'CREATE TABLE IF NOT EXISTS table_items(itemCode VARCHAR(20) PRIMARY KEY, codeType VARCHAR(20), name VARCHAR(40), price INTEGER, available INTEGER, description VARCHAR(120))',
            []
          );
        }
      }
    );
  });
}

const createTable = () => {
  db.transaction(txn => {
    txn.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='tabele_items'",
      [],
      function(tx, res) {
        if (res.rows.length == 0) {
          txn.executeSql('DROP TABLE IF EXISTS table_items', []);
          txn.executeSql(
            'CREATE TABLE IF NOT EXISTS table_items(itemCode VARCHAR(20) PRIMARY KEY, codeType VARCHAR(20), name VARCHAR(40), price INTEGER, available INTEGER, description VARCHAR(120))',
            []
          );
        }
      }
    );
  });
}

export const stockApi = {
  addItem,
  updateItem,
  deleteItem,
  fetchAllItems,
  clearStock,
  createTable,
  updateAvailable
}
