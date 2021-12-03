const controller = require('../controllers/telefonesControllers.js');

server.post('/telefones', controller.telefonesNova)

server.get('/telefones', controller.telefonesMenu)

server.get('/telefones/:id', controller.telefonesGetById)

server.put('/telefones/:id', controller.telefonesEditById)