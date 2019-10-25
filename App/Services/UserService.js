/**  manage database user requests*/

import Message from './Message';

import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'Database.db' });


// result: boolean
const userRegister = (user) => {

  return new Promise((resolve, reject) => {
    let msg = new Message();
    if (!user) {
      msg.result = false;
      msg.message = 'Invalid user input!';
      resolve({ result: msg.result, message: msg.message });
    }

    db.transaction(function(txn) {
      txn.executeSql('DROP TABLE IF EXISTS table_user', []);
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS table_user(username VARCHAR(30) PRIMARY KEY, company_name VARCHAR(30), phone INTEGER, address VARCHAR(30), city VARCHAR(30), state TEXT, zip_code INTEGER, logo VARCHAR(255))',
        []
      );
    })
    const { username, company_name, phone, address, city, state, zip_code } = user

    db.transaction(function(tx) {
      tx.executeSql(
        'INSERT INTO table_user (username, company_name, phone, address, city, state, zip_code) VALUES (?,?,?,?,?,?,?)',
        [username, company_name, phone, address, city, state, zip_code],
        (tx, results) => {
            if (results.rowsAffected > 0) {
                msg.result = true;
                msg.message = 'Registred user successfully!';
            } else {
                msg.result = false;
                msg.message = 'Registred user failed!';
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

// return an object of user information
const fetchUser = () => {
    db.transaction(function(txn) {
        txn.executeSql('DROP TABLE IF EXISTS table_user', []);
      })
  return new Promise((resolve, reject) => {
    let msg = new Message();
    db.transaction(function(tx) {
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



export const userService = {
  fetchUser,
  userRegister,
}