// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 2, 5)
let plate = makePottery("plate", 3, 1)
let chalice = makePottery("chalice", 3, 7)
let pitcher = makePottery("pitcher", 6, 12)
let pot = makePottery("pot", 5, 8)


// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2100)
let firedPlate = firePottery(plate, 2000)
let firedChalice = firePottery(chalice, 2150)
let firedPitcher = firePottery(pitcher, 1900)
let firedPot = firePottery(pot, 2200)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



