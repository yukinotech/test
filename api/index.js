const express = require('express')
const bodyParser = require('body-parser')
// Create express instnace
const app = express()

// Require API routes
const users = require('./routes/users')
const test = require('./routes/test')

// parse application/json,解析JSPON
app.use(bodyParser.json())
// Import API Routes
app.use(users)
app.use(test)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
