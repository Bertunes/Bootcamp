const express = require('express');

const server = express();

// Query params = ?teste=1
// Route params = /users/1
// Request body = {"name":"Tharlley","email":"tharlleybertunes@gmail.com"}

//localhost:3000/teste

server.get('/users/:id', (req, res) =>{
  const {id} = req.params;

  return res.json({ message:`Buscando o usuário ${id}`}); 
})

server.listen(3000);
