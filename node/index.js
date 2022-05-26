const express = require('express')
const app = express()
const port = 3000

const config = { 
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb' 
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql_insert = `INSERT INTO people(name) values('Diego')`
connection.query(sql_insert)
//connection.end()

const sql_query = `SELECT * FROM people;`
let people = []
connection.query(sql_query, (err, result, fields) => {
    if (err) throw err;
    people = result;
})
connection.end()

app.get('/', (req, res) => {
    let result = '<table>';
    people.forEach(function(person) {
        result += "<tr><td>" + person.id + "</td><td>" + person.name + "</td></tr>";
    })
    result += '</table>';
    res.send("<h1>Full Cycle Rocks!</h1>\b" + result);
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})