/**  manage database user requests*/

import Message from './Message';
import { openDatabase } from 'react-native-sqlite-storage';
const db = openDatabase({ name: 'billa.db' });



// result: boolean
const addCustomer = customer => {

  return new Promise((resolve, reject) => {
    let msg = new Message();
    const { name , email, phone, address, city, state, zip_code, taxReg, note } = customer

    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO table_customers (name , email, phone, address, city, state, zip_code, taxReg, note) VALUES (?,?,?,?,?,?,?,?,?)',
        [name , email, phone, address, city, state, zip_code, taxReg, note],
        (tx, results) => {
            if (results.rowsAffected > 0) {
                msg.result = results.insertId;
                msg.message = 'Adding customer successfully!';
            } else {
                msg.result = false;
                msg.message = 'Adding customer failed!';
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

// return an array of object {customer_id, customer_name, ..}
const fetchAllCustomers = () => {

return new Promise((resolve, reject) => {
  let msg = new Message();

  
  db.transaction(txn => {
    txn.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='table_customers'",
      [],
      (tx, res) => {
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

  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM table_customers', [],
      (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
      msg.result = temp
      msg.message = 'Get customers successfully!';
      resolve({ result: msg.result, message: msg.message });
  }, (error) => {
      msg.result = false;
      msg.message = `${error.message}`;
      resolve({ result: msg.result, message: msg.message });
  });
  })
});
}


const deleteCustomer = customer_id => {
  return new Promise((resolve, reject) => {
    let msg = new Message();

    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM  table_customers where customer_id = ?', [customer_id],
        (tx, results) => {
            if (results.rowsAffected > 0) {
                msg.result = true;
                msg.message = 'customer removed successfully!';
            } else {
                msg.result = false;
                msg.message = 'removing customer failed!';
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

const updateCustomer = customer => {
  return new Promise((resolve, reject) => {
    let msg = new Message();
    const { name , email, phone, address, city, state, zip_code, taxReg, note, customer_id } = customer

    db.transaction(tx => {
      tx.executeSql(
        'UPDATE table_customers set name=? , email=?, phone=?, address=?, city=?, state=?, zip_code=?, taxReg=?, note=? WHERE customer_id=?',
        [name , email, phone, address, city, state, zip_code, taxReg, note, customer_id],
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

export const customerApi = {
  fetchAllCustomers,
  addCustomer,
  deleteCustomer,
  updateCustomer,
}
