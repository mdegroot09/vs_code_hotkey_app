const express = require('express')
const app = express()
const port = 4000

const HotkeyCtrl = require('./controllers/Hotkeys')

app.use(express.json())

app.get('/api/hotkeys', HotkeyCtrl.get)
app.post('/api/hotkeys', HotkeyCtrl.create)
app.put('/api/hotkeys/:id', HotkeyCtrl.update)
app.delete('/api/hotkeys/:id', HotkeyCtrl.delete)

app.listen(port, () => {
  console.log('Listening on port', port)
})