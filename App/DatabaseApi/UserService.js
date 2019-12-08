/**  manage database user requests*/

import Message from './Message';

import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'billa.db' });



// result: boolean
const userRegister = user => {
  return new Promise((resolve, reject) => {
    let msg = new Message();

    db.transaction(function(txn) {
      txn.executeSql('DROP TABLE IF EXISTS table_user', []);
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS table_user(first_name VARCHAR(30), last_name VARCHAR(30), email VARCHAR(30) PRIMARY KEY, buisness_name VARCHAR(30), phone VARCHAR(15), address VARCHAR(30), city VARCHAR(30), state TEXT, zip_code TEXT, logo Text)',
        []
      );
    })

    db.transaction(txn => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_customers'",
        [],
        function(tx, res) {
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_customers', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_customers(customer_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(40), email VARCHAR(30), phone VARCHAR(15), address VARCHAR(50), city VARCHAR(20), state VARCHAR(20), zip_code VARCHAR(5), taxReg VARCHAR(10), note VARCHAR(120))',
              []
            );
          }
        }
      );
    });
    db.transaction(txn => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_items'",
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


    const { first_name, last_name, buisness_name, phone, email, address, city, state, zip_code } = user
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO table_user (first_name, last_name, buisness_name, phone, email, address, city, state, zip_code) VALUES (?,?,?,?,?,?,?,?,?)',
        [first_name, last_name, buisness_name, phone, email, address, city, state, zip_code],
        (tx, results) => 
        {
            if (results.rowsAffected > 0) {
                msg.result = true;
                msg.message = 'Register user successfully!';
            } else {
                msg.result = false;
                msg.message = 'Register user failed!';
            }
            resolve({ result: msg.result, message: msg.message });
        }, (error) => {
            msg.result = false;
            msg.message = `${error.message}`;

            resolve({ result: msg.result, message: msg.message });
        }
        );
    })
  });
}

// return an object of user information
const fetchUser = () => {
    // db.transaction(function(txn) {
    //     txn.executeSql('DROP TABLE IF EXISTS table_user', []);
    //   })
    //   db.transaction(function(txn) {
    //     txn.executeSql('DROP TABLE IF EXISTS table_customers', []);
    //   })
       //   db.transaction(function(txn) {
    //     txn.executeSql('DROP TABLE IF EXISTS table_items', []);
    //   })
  return new Promise((resolve, reject) => {
    let msg = new Message();
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM table_user', [],
        (tx, results) => {
        msg.result = results.rows.item(0)
        msg.message = 'Get user successfully!';

        resolve({ result: msg.result, message: msg.message });
    }, (error) => {
        msg.result = false;
        msg.message = `${error.message}`;

        resolve({ result: msg.result, message: msg.message });
    });
    })
  });
}

const userUpdate = () => {
    return new Promise((resolve, reject) => {
      let msg = new Message();
      const { username, buisness_name, email, address, phone, city, state, zip_code, logo } = user

      db.transaction(tx => {
        tx.executeSql(
          'UPDATE table_user set username=? , buisness_name=?, email=?, address=?, phone=?, city=?, state=?, zip_code=?, logo=? WHERE customer_id=?',
          [username, buisness_name, email, address, phone, city, state, zip_code, logo],
          (tx, results) => {
              if (results.rowsAffected > 0) {
                  msg.result = true;
                  msg.message = 'updating customer successfully!';
              } else {
                  msg.result = false;
                  msg.message = 'updating customer failed!';
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


export const userService = {
  fetchUser,
  userRegister,
  userUpdate,
}
