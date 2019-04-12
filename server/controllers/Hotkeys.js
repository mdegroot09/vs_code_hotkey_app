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
    Hotkeys.splice(index, 1)
    if (Hotkeys.length === 0) {
      let blankHotkey = {  
        beforeImg: 'https://assets.parents.com/s3fs-public/styles/nfp_1080_portrait/public/ZdorovKirillVladimirovich_0.jpg?HZo9_mI3Bdq5KNVEKWPF9SPETsqtRISw',
        afterImg: '',
        task: 'You deleted all of the hotkeys. What a jerk.',
        charCode1: 0,
        charCode2: 0,
        charCode3: 0,
        comboCode1: null,
        comboCode2: null,
      }
      Hotkeys.push(blankHotkey)
    }
    res.send(Hotkeys)
  }
}