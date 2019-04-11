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
  }
]

module.exports = {
  get: (req, res) => {
    res.send(Hotkeys)
  }

  
}