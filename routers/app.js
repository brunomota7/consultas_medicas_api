const express = require('express')
const consultasRouters = require('./consultasRouers')

module.exports = (app) => {
    app.use(consultasRouters)
}