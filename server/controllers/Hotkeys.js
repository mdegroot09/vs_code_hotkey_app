let id = 0

let Hotkeys = [
  {
    beforeImg: 'https://i.ibb.co/zFWsGFD/Shift-Sheet-Over-Before.png',
    afterImg: 'https://i.ibb.co/v4MJhLL/Shift-Sheet-Over-After.png',
    task: 'Push the active file to the right side of the screen',
    charCode1: 'control',
    charCode2: 'alt',
    charCode3: 'arrowright',
    comboCode1: '',
    comboCode2: '',
    id: id++
  },
  {
    beforeImg: 'https://i.ibb.co/zFWsGFD/Shift-Sheet-Over-Before.png',
    afterImg: 'https://i.ibb.co/v4MJhLL/Shift-Sheet-Over-After.png',
    task: 'Push the selected document to the right side of the screen',
    charCode1: 'control',
    charCode2: 'alt',
    charCode3: 'arrowright',
    comboCode1: '',
    comboCode2: '',
    id: id++
  },
  {
    beforeImg: 'https://i.ibb.co/K9G7nCm/Delete-Line-Before.png',
    afterImg: 'https://i.ibb.co/Jnmzpt0/Delete-Line-After.png',
    task: 'Delete the entire line',
    charCode1: 'control',
    charCode2: 'shift',
    charCode3: 'k',
    comboCode1: '',
    comboCode2: '',
    id: id++
  },
  {
    beforeImg: 'https://i.ibb.co/zFWsGFD/Shift-Sheet-Over-Before.png',
    afterImg: 'https://i.ibb.co/v4MJhLL/Shift-Sheet-Over-After.png',
    task: 'Push the selected document to the right side of the screen',
    charCode1: 'control',
    charCode2: 'alt',
    charCode3: 'arrowright',
    comboCode1: '',
    comboCode2: '',
    id: id++
  }
]

module.exports = {
  get: (req, res) => {
    res.send(Hotkeys)
  },

  create: (req, res) => {
    let newHotkey = req.body
    newHotkey.id = id++
    Hotkeys.unshift(newHotkey)
    res.send(Hotkeys)
  },

  update: (req, res) => {
    let updateHotkey = req.body
    updateHotkey.id = +req.params.id
    let index = Hotkeys.findIndex(hotkey => {
      return hotkey.id === updateHotkey.id
    })
    Hotkeys.splice(index, 1, updateHotkey)
    res.send(Hotkeys)
  },

  delete: (req, res) => {
    let hotkeyToDelete = req.body
    hotkeyToDelete.id = +req.params.id
    let index = Hotkeys.findIndex(hotkey => {
      return hotkey.id === hotkeyToDelete.id
    })
    console.log('index:', index)
    Hotkeys.splice(index, 1)
    res.send(Hotkeys)
  }
}