//Random Students

const students = ["Allison", "Riley", "Abby", "Patrick", "Christian"]

document
  .querySelector("#studentBtn")
  .addEventListener("click", pickRandomStudent)

function pickRandomStudent() {
  let randomStudent = students[Math.floor(Math.random() * students.length)]
  document.querySelector("#studentText").innerText = randomStudent
}

// Flam Rudiments
const flamRudiments = [
  "Flam Accent",
  "Flam Tap",
  "Flam Paradiddle",
  "Pata-Flafla",
  "Single Flammed Mill",
  "Swiss Army Triplet",
]

document.querySelector("#flamBtn").addEventListener("click", pickFlamRudiment)

function pickFlamRudiment() {
  let randomFlam =
    flamRudiments[Math.floor(Math.random() * flamRudiments.length)]
  console.log(randomFlam)
  document.querySelector("#flamText").innerText = randomFlam
}

// Drag Rudiments
const dragRudiments = [
  "Single Drag Tap",
  "Double Drag Tap",
  "Lesson 25",
  "Drag Paradiddle No. 2",
  "Single Ratamacue",
]

document.querySelector("#dragBtn").addEventListener("click", pickDragRudiment)

function pickDragRudiment() {
  let randomDrag =
    dragRudiments[Math.floor(Math.random() * dragRudiments.length)]
  document.querySelector("#dragText").innerText = randomDrag
}

// Major Scales

const minorScales = [
  "A Minor",
  "D Minor",
  "G Minor",
  "C Minor",
  "F Minor",
  "Bb Minor",
]

document.querySelector("#scaleBtn").addEventListener("click", pickScale)

function pickScale() {
  let randomScale = minorScales[Math.floor(Math.random() * minorScales.length)]
  document.querySelector("#scaleText").innerText = randomScale
}

//Flat Scales
const flatScales = [
  "F Major",
  "Bb Major",
  "Eb Major",
  "Ab Major",
  "Db Major",
  "Gb Major",
]

document.querySelector("#flatScaleBtn").addEventListener("click", pickFlatScale)

function pickFlatScale() {
  let randomScale = flatScales[Math.floor(Math.random() * flatScales.length)]
  document.querySelector("#flatScaleName").innerText = randomScale
}

//Sharp Scales
const sharpScales = [
  "G Major",
  "D Major",
  "A Major",
  "E Major",
  "B Major",
  "F# Major",
]

document
  .querySelector("#sharpScaleBtn")
  .addEventListener("click", pickSharpScale)

function pickSharpScale() {
  let randomScale = sharpScales[Math.floor(Math.random() * sharpScales.length)]
  document.querySelector("#sharpScaleName").innerText = randomScale
}
