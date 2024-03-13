/*
const sql = require('mssql/msnodesqlv8');

var config = {
    server: "DESKTOP-SQ8RU2R\\SQLEXPRESS",
    database: "master",
    driver: "{SQL Server}",
    options: {
        trustedConnection: true
    }
}


sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query("SELECT * FROM LOGINS", function (err, records) {
        if (err) console.log(err);
        else console.log(records);
    })
})


*/
const sql = require("msnodesqlv8");
const connectionString = "server=DESKTOP-SQ8RU2R;Database=Master;Trusted_Connection=Yes;Driver={SQL Server}";
const query = "SELECT * FROM LOGINS";

sql.query(connectionString, query, (err, rows) => {
    console.log(rows);
    console.log(err);
});
