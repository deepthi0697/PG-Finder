const express = require('express')
const Router = express.Router()
const buildingsController = require('../app/controller/buildingsController')
const roomsController = require('../app/controller/roomsController')
const tenantsController = require('../app/controller/tenantsController')

Router.get('/buildings', buildingsController.list)
Router.post('/buildings', buildingsController.create)
Router.get('/buildings/:id', buildingsController.show)
Router.put('/buildings/:id', buildingsController.update)
Router.get('/buildings/:id', buildingsController.destroy)

Router.get('/rooms', roomsController.list)
Router.post('/rooms', roomsController.create)
Router.get('/rooms/:id', roomsController.show)
Router.put('/rooms/:id', roomsController.update)
Router.get('/rooms/:id', roomsController.destroy)

Router.get('/tenants', tenantsController.list)
Router.post('/tenants', tenantsController.create)
Router.get('/tenants/:id', tenantsController.show)
Router.put('/tenants/:id', tenantsController.update)
Router.get('/tenants/:id', tenantsController.destroy)


module.exports = Router