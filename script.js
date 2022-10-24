//Random Students

const students = ['Jocelyn Amezcu', 'Noah Baker', 'Dylan Bazant', 'Cameron Bianco', 'Matthew Borowski', 'Micah Carney', 'Gracie Cockrell', 'Allison Farmer', 'Anna Girman', 'Andrew Knight', 'Anna Kras', 'Ryan Lamont', 'Alex McGaha', 'Owen Minnich', 'Jillamae Monter', 'Benjamin Peters', 'Jacob Scaggs', 'Abby Sullivan', 'Patrick Sullivan', 'Max Textor', 'Christian Tortoriello']

document.querySelector('#studentBtn').addEventListener('click', pickRandomStudent)

function pickRandomStudent(){
    let randomStudent = students[Math.floor(Math.random() * students.length)]
    document.querySelector('#studentName').innerText = randomStudent
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