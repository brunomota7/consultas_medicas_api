const express = require('express')
const consultasRouters = require('./consultasRouers')

module.exports = (app, express) => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(consultasRouters)
}