const Slot1 = document.querySelector("#Slot1")
const NumberSlot1 = document.querySelector("#NumberSlot1")
const Slot2 = document.querySelector("#Slot2")
const NumberSlot2 = document.querySelector("#NumberSlot2")
const Slot3 = document.querySelector("#Slot3")
const NumberSlot3 = document.querySelector("#NumberSlot3")
const Button = document.querySelector('#ButtonRoller')

    let Filled1 = false
    let Filled2 = false
    let Filled3 = false
const collection = [
    "./Images/FlonneSlot1.webp",
    "./Images/LaharlSlot2.webp",
    "./Images/EtnaSlot3.webp",
    "./Images/DisgeaLoveCombo.webp",
    "./Images/DisgeaWinCutscene1.webp",
    "./Images/DisgeaBankruptCutscene1.webp"
]


Button!.addEventListener('click',()=>{    
        var eventTrigger = document.querySelector("#SlotImage1")
        var work = document.createElement("img")
    var eventTrigger2 = document.querySelector("#SlotImage2")
    var work2 = document.createElement("img")
    var eventTrigger3 = document.querySelector("#SlotImage3")
    var work3 = document.createElement("img")
    var a = Math.floor(Math.random() * 10 + 1);
    var b = Math.floor(Math.random() * 10 + 1);
    var c = Math.floor(Math.random() * 10 + 1);
NumberSlot1!.innerHTML = a as unknown as string
NumberSlot2!.innerHTML = b as unknown as string
NumberSlot3!.innerHTML = c as unknown as string
if (a >=4 && Filled1 == false) {
Filled1 = true
work!.src = collection[0]
eventTrigger!.append(work!)
}
if (b >= 4 && Filled2 == false) {
    Filled2 = true
    work2!.src = collection[0]
eventTrigger2!.append(work2!)
}
if (c >= 4 && Filled3 == false) {
    Filled3 = true
    work3!.src = collection[0]
eventTrigger3!.append(work3!) 
}
if (a >=4&&b >= 4&&c >= 4) {
    
}
})