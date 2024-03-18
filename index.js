const cors = require("cors")
App.use(cors());

const sql = require("msnodesqlv8");
const connectionString = "server=DESKTOP-SQ8RU2R;Database=Master;Trusted_Connection=Yes;Driver={SQL Server}";
const query = "SELECT * FROM LOGINS";

sql.query(connectionString, query, (err, rows) => {
    console.log(rows);
    console.log(err);
});

const cors = require("cors")
App.use(cors());