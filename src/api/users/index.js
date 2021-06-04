const Router = require('koa-router')
const users = new Router();
const usersCtrl = require('./users.controller')

users.get('/', usersCtrl.index)
users.get('/:id', usersCtrl.show)
users.post('/', usersCtrl.create)
users.delete('/:id', usersCtrl.delete)
// books.put('/:id', usersCtrl.replace)
users.patch('/:id', usersCtrl.update)


module.exports = users;