import * from 'mysql';



//constants


exports.DatabaseCommand = function {

  var DatabaseConnect = function {
    var con = mysql.createConnection({
      host: "localhost",
      user: "yourusername",
      password: "yourpassword"
    });

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
      });
    });
  }
}
