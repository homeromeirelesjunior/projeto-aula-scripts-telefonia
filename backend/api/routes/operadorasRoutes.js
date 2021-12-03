const controller = require('../controllers/operadorasControllers.js');

server.post('/operadoras', controller.operadorasNova)

server.get('/operadoras', controller.operadorasMenu)

server.get('/operadoras/:id', controller.operadorasGetById)

server.put('/operadoras/:id', controller.operadorasEditById)