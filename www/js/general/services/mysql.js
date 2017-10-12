/**
 * Created by Administrator on 2017/5/22 0022.
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});

connection.connect();

connection.query('SELECT * AS user', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
