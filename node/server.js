const express = require('express')
const { faker } = require('@faker-js/faker')
const mysql = require('mysql2')
const app = express()
const port = process.env.APP_PORT || 3000

const config = {
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'nodedb',
};

const connection = mysql.createConnection(config)

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.stack)
    return
  }
  console.log('Connected to database as id', connection.threadId)
})

app.get('/', (req, res) => {
  const name = faker.name.findName()

  const insertQuery = 'INSERT INTO people (nome) VALUES (?)'
  connection.query(insertQuery, [name], (insertErr) => {
    if (insertErr) {
      console.error('Error inserting data:', insertErr.stack)
      res.status(500).send('Error inserting data')
      return
    }

    const selectQuery = 'SELECT nome FROM people'
    connection.query(selectQuery, (selectErr, results) => {
      if (selectErr) {
        console.error('Error retrieving data:', selectErr.stack)
        res.status(500).send('Error retrieving data')
        return
      }

      res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ol>
          ${results.length ? results.map(el => `<li>${el.nome}</li>`).join('') : ''}
        </ol>
      `)
    })
  })
})

app.listen(port, () => {
  console.log('Up on:', port)
})
