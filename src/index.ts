const Slot1 = document.querySelector("#Slot1")
const NumberSlot1 = document.querySelector("#NumberSlot1")
const Slot2 = document.querySelector("#Slot2")
const NumberSlot2 = document.querySelector("#NumberSlot2")
const Slot3 = document.querySelector("#Slot3")
const NumberSlot3 = document.querySelector("#NumberSlot3")
const Button = document.querySelector('#ButtonRoller')
const Button2 = document.querySelector('#Buttonreset')        
var eventTrigger = document.querySelector("#SlotImage1")
        var work = document.createElement("img")
    var eventTrigger2 = document.querySelector("#SlotImage2")
    var work2 = document.createElement("img")
    var eventTrigger3 = document.querySelector("#SlotImage3")
    var work3 = document.createElement("img")
 let flonne: number = 0
 let flonneToken: number = 0
 const FlonneToken = document.querySelector("#flonneToken")
 let etna: number = 0
 let etnaToken: number = 0
 const EtnaToken = document.querySelector("#etnaToken")
 let laharl: number = 0
 let laharlToken: number = 0
 const LaharlToken = document.querySelector("#laharlToken")
 let LOVE: number = 0
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

Button2!.addEventListener('click',()=>{
     Filled1 = false
     Filled2 = false
     Filled3 = false
     eventTrigger!.replaceChildren(work.src = "")
     eventTrigger2!.replaceChildren(work2.src= "")
     eventTrigger3!.replaceChildren(work3.src= "")
})
Button!.addEventListener('click',()=>{    
    Filled1 = false
    Filled2 = false
    Filled3 = false

     flonne = 0
     etna = 0
     laharl = 0
     LOVE = 0
    eventTrigger!.replaceChildren(work.src = "")
    eventTrigger2!.replaceChildren(work2.src= "")
    eventTrigger3!.replaceChildren(work3.src= "")
    var a = Math.floor(Math.random() * 10 + 1);
    var b = Math.floor(Math.random() * 10 + 1);
    var c = Math.floor(Math.random() * 10 + 1);
NumberSlot1!.innerHTML = a as unknown as string
NumberSlot2!.innerHTML = b as unknown as string
NumberSlot3!.innerHTML = c as unknown as string

if (a >=5 && Filled1 == false && a<=6) {
Filled1 = true
work!.src = collection[0]
work.style.width = "30px"
eventTrigger!.append(work!)
flonne+= 1
}
if (a >=1 && Filled1 == false && a<=3) {
    Filled1 = true
    work!.src = collection[1]
    work.style.width = "30px"
    eventTrigger!.append(work!)
    laharl+= 1
}
if (b >= 5 && Filled2 == false && b <=6) {
    Filled2 = true
    work2!.src = collection[0]
    work2.style.width = "30px"
eventTrigger2!.append(work2!)
flonne+= 1
}
if (b >=1 && Filled2 == false && b<=3) {
    Filled2 = true
    work2!.src = collection[1]
    work2.style.width = "30px"
    eventTrigger2!.append(work2!)
    laharl+= 1
}
if (c >= 5 && Filled3 == false && c<=6) {
    Filled3 = true
    work3.style.width = "30px"
    work3!.src = collection[0]
eventTrigger3!.append(work3!) 
flonne+= 1

}
if (c >=1 && Filled3 == false && c<=3) {
    Filled3 = true
    work3!.src = collection[1]
    work3.style.width = "30px"
    eventTrigger3!.append(work3!)
    laharl+= 1
}
if (etna == 3) {
    
}
if (flonne == 3) {
        var FLooneend = document.createElement('p')
    FLooneend.textContent = flonne as unknown as string + "how many flooone"
    Slot1!.append(FLooneend)
    flonneToken+=1
    FlonneToken!.innerHTML = flonneToken as unknown as string
}
if (laharl == 3) {
    laharlToken+= 1
    LaharlToken!.innerHTML = laharlToken as unknown as string
}
})