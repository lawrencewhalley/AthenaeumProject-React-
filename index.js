const app = require('express')();
const PORT = 8080;

app.get('/test',(req, res) => {
    res.status(200).send({
        test:'wagwarn'
        })
    })

app.listen(
    PORT,
    () => console.log('tis alive')
)