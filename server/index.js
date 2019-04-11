const express = require('express')
const app = express()
const port = 4000

const HotkeyCtrl = require('./controllers/Hotkeys')

app.use(express.json())

app.get('/api/hotkeys', HotkeyCtrl.get)

app.listen(port, () => {
  console.log('Listening on port', port)
})