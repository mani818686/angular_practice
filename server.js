const express = require('express')
const app = express()
const port = 3000|process.env.PORT;


app.use(express.static(__dirname + '/dist/angular-practice'));
app.get('/', (req, res) => {
    res.sendFile(__dirname +"/dist/angular-practice/index.html");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})