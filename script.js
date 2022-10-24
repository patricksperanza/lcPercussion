//Random Students

const students = ['Jocelyn Amezcu', 'Noah Baker', 'Dylan Bazant', 'Cameron Bianco', 'Matthew Borowski', 'Micah Carney', 'Gracie Cockrell', 'Allison Farmer', 'Anna Girman', 'Andrew Knight', 'Anna Kras', 'Ryan Lamont', 'Alex McGaha', 'Owen Minnich', 'Jillamae Monter', 'Benjamin Peters', 'Jacob Scaggs', 'Abby Sullivan', 'Patrick Sullivan', 'Max Textor', 'Christian Tortoriello']

document.querySelector('#studentBtn').addEventListener('click', pickRandomStudent)

function pickRandomStudent(){
    let randomStudent = students[Math.floor(Math.random() * students.length)]
    document.querySelector('#studentName').innerText = randomStudent
}

// Roll Rudiments

const rudiments = ['Single Stroke Roll', 'Single Stroke Four', 'Single Stroke Seven', 'Multiple Bounce Roll', 'Triple Stroke Roll', 'Double Stroke Roll', 'Five Stroke Roll', 'Six Stroke Roll', 'Seven Stroke Roll', 'Nine Stroke Roll', 'Ten Stroke Roll', 'Eleven Stroke Roll', 'Thirteen Stroke Roll', 'Fifteen Stroke Roll', 'Seventeen Stroke Roll', 'Single Paradiddle', 'Double Paradiddle', 'Triple Paradiddle', 'Paradiddle-diddle']

document.querySelector('#rollRudimentBtn').addEventListener('click', pickRollRudiment)

function pickRollRudiment(){
    let randomRoll = rudiments[Math.floor(Math.random() * 9 + 6)]
    document.querySelector('#rollRudimentName').innerText = randomRoll
}

// Paradiddle Rudiments
document.querySelector('#paradiddleRudimentBtn').addEventListener('click', pickParadiddleRudiment)

function pickParadiddleRudiment(){
    let randomPara = rudiments[Math.floor(Math.random() * 4 + 15)]
    document.querySelector('#paradiddleRudimentName').innerText = randomPara
}

// Major Scales

const allMajorScales = ['F Major', 'Bb Major', 'Eb Major', 'Ab Major', 'Db Major', 'Gb Major', 'G Major', 'D Major', 'A Major', 'E Major', 'B Major', 'F# Major']

document.querySelector('#majorScaleBtn').addEventListener('click', pickMajorScale)

function pickMajorScale(){
    let randomScale = allMajorScales[Math.floor(Math.random() * allMajorScales.length)]
    document.querySelector('#majorScaleName').innerText = randomScale
}


//Flat Scales
const flatScales = ['F Major', 'Bb Major', 'Eb Major', 'Ab Major', 'Db Major', 'Gb Major']

document.querySelector('#flatScaleBtn').addEventListener('click', pickFlatScale)

function pickFlatScale(){
    let randomScale = flatScales[Math.floor(Math.random() * flatScales.length)]
    document.querySelector('#flatScaleName').innerText = randomScale
}

//Sharp Scales
const sharpScales = ['G Major', 'D Major', 'A Major', 'E Major', 'B Major', 'F# Major']

document.querySelector('#sharpScaleBtn').addEventListener('click', pickSharpScale)

function pickSharpScale(){
    let randomScale = sharpScales[Math.floor(Math.random() * sharpScales.length)]
    document.querySelector('#sharpScaleName').innerText = randomScale
}