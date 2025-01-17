import { set, increment,update, DatabaseReference, DataSnapshot } from 'firebase/database';
import { database, ref, get } from './firebaseconfig';
const Button:HTMLElement | any = document.querySelector('#ButtonRoller')
const Button2:HTMLElement | any = document.querySelector('#Buttonreset')
const Button3:HTMLElement | any = document.querySelector('#Buttonreset2') 
const Button4:HTMLElement | any = document.querySelector('#Buttonreset3')       
const ShopButton:HTMLButtonElement | any = document.querySelector('#ShopButton') 
const ExitShopButton:HTMLButtonElement | any = document.querySelector('#ExitButton')
const GameOverDiv:HTMLDivElement | any = document.querySelector('#Game-Over')
const GameOverDivImage:HTMLDivElement| any = document.querySelector('#Game-Over-Image')  
const winimages: HTMLImageElement| any = document.querySelector("#winimages")
let buttonok = document.createElement('button')
winimages.classList.add('hidden')
let assignedimg:HTMLImageElement|any = document.createElement('img')
const SlotWindow = document.querySelector('#SlotWindow')
const SlotBaseText = document.querySelector('#basetext')
const shopdiv = document.querySelector('#shop')
shopdiv!.classList.add('hidden')
const buttonDiv = document.querySelector('#buttonDiv')
const Alert:HTMLElement | any = document.querySelector('#Alert')      
const AlertGame:HTMLElement | any = document.querySelector('#AlertGame')  
const bet20:HTMLElement | any = document.querySelector('#bet20')
const bet40:HTMLElement | any = document.querySelector('#bet40')
const bet120:HTMLElement | any = document.querySelector('#bet120')
var eventTrigger:HTMLElement | any = document.querySelector("#SlotImage1")
        var work:HTMLElement | any = document.createElement("img")
    var eventTrigger2:HTMLElement | any = document.querySelector("#SlotImage2")
    var work2:HTMLElement | any = document.createElement("img")
    var eventTrigger3:HTMLElement | any = document.querySelector("#SlotImage3")
    var work3:HTMLElement | any = document.createElement("img") 
     let debt: number = 0
  const Debt:HTMLElement | any = document.querySelector('#Debt')  
  let trueSpend: number = 0
  const BetStake:HTMLElement | any = document.querySelector('#Bet')
    const Currency:HTMLElement | any = document.querySelector('#Currency')
    let currency: number = 0
    const Chips:HTMLElement|any = document.querySelector('#Chips')
    let chips:number = 0
    let profitschange =0
    const Profit:HTMLElement | any = document.querySelector('#Profit')
 let flonne: number = 0
 let flonneToken: number = 0
 const FlonneToken:HTMLElement | any = document.querySelector("#flonneToken")
 let etna: number = 0
 let etnaToken: number = 0
 const EtnaToken:HTMLElement | any = document.querySelector("#etnaToken")
 let laharl: number = 0
 let laharlToken: number = 0
 const LaharlToken:HTMLElement | any = document.querySelector("#laharlToken")
 let LOVE: number = 0
 let loveToken: number = 0
  const LOVEToken:HTMLElement | any = document.querySelector('#loveToken')
  let Win: number = 0
  let wintoken: number = 0
  const WINToken:HTMLElement | any = document.querySelector('#win')
  let jackpot:number = 0
  let rob:number = 0
  let rob2:number = 0
  let rob3:number = 0
  let robToken: number = 0
  const RobToken:HTMLElement | any = document.querySelector('#rob')
  let bankrupt:number = 0
  const bankruptShow:HTMLElement | any = document.createElement('img')

    let Filled1:boolean = false
    let Filled2:boolean = false
    let Filled3:boolean = false
const collection = [
    "./Images/FlonneSlot1.webp",
    "./Images/LaharlSlot2.webp",
    "./Images/EtnaSlot3.webp",
    "./Images/DisgeaLoveCombo.webp",
    "./Images/DisgeaWinCutscene1.webp",
    "./Images/DisgeaBankruptCutscene1.webp",
    "./Images/DisgeaJackPot1.jpg",
    "./Images/DisgeaTheifMale.webp",
    "./Images/Prinny_d1p.webp",
    "./Images/Hoggmeiserportrait.webp"
]
bet20!.addEventListener('click',()=>{
  fetchData()
  if (currency>=20) {
          update(ref(database, 'Money-Balance'), {
    Chips: increment(+20),
    Credit: increment(-20)
  });
  } else{
    Alert.innerHTML = "Sorry you dont have enough credit"
  }
})
bet40!.addEventListener('click',()=>{
  fetchData()
  if (currency>=40) {
          update(ref(database, 'Money-Balance'), {
    Chips: increment(+40),
    Credit: increment(-40)
  });
  } else{
    Alert.innerHTML = "Sorry you dont have enough credit"
  }
})
bet120!.addEventListener('click',()=>{
  fetchData()
  if (currency>=120) {
    update(ref(database, 'Money-Balance'), {
      Chips: increment(+120),
      Credit: increment(-120)
    });
} else{
Alert.innerHTML = "Sorry you dont have enough credit"
}
})
window.addEventListener('load', function() {
  console.log("heloooooo")
  work.style.width = "80px"
  work!.src = collection[0]
eventTrigger!.append(work!) 
work2.style.width = "80px"
work2!.src = collection[1]
eventTrigger2!.append(work2!) 
  work3.style.width = "80px"
  work3!.src = collection[2]
eventTrigger3!.append(work3!) 
});
let isFetchingData = false;
const fetchData = async () => {
  if (isFetchingData) {

    return; 
  }

  isFetchingData = true; 

  try { 
    Button.disabled = true;
    const dataRef:DatabaseReference = ref(database, 'Tokens'); 
    const dataRef2:DatabaseReference = ref(database,'Tokens/LaharlToken')
    const dataref3:DatabaseReference = ref(database,'Tokens/FlonneToken')
    const dataref4:DatabaseReference = ref(database,'Tokens/EtnaToken')
    const dataref5:DatabaseReference = ref(database,'Tokens/LOVE')
    const dataCurrency:DatabaseReference = ref(database,'Money-Balance/Credit')
    const dataCurrency2:DatabaseReference = ref(database,'Money-Balance/Debt')
    const dataCurrency3:DatabaseReference = ref(database, 'Money-Balance/Bet')
    const dataCurrency4:DatabaseReference = ref(database,'Money-Balance/Profit')
    const dataCurrency5:DatabaseReference = ref(database,'Money-Balance/Chips')
    
   
    const snapshot:DataSnapshot = await get(dataRef);
    if (snapshot.exists()) {  
      const snap2:DataSnapshot = await get(dataRef2)
   const data2:any = snap2.val()
   laharlToken = data2
   LaharlToken!.innerHTML = laharlToken as unknown as string
   const snap3:DataSnapshot = await get(dataref3)
   const data3:any = snap3.val()
   flonneToken = data3
   FlonneToken!.innerHTML = flonneToken as unknown as string
   const snap4:DataSnapshot = await get(dataref4)
   const data4:any = snap4.val()
   etnaToken = data4
  EtnaToken!.innerHTML = etnaToken as unknown as string
  const snap5:DataSnapshot = await get(dataref5)
  const data5:any = snap5.val()
  loveToken = data5
  LOVEToken!.innerHTML = loveToken as unknown as string
  const snapcredit:DataSnapshot = await get(dataCurrency)
  const datacredit:any = snapcredit.val()
  currency = datacredit
  Currency!.innerHTML = 'Credit: ' +currency as unknown as string  
  const snapDebt:DataSnapshot = await get(dataCurrency2)
  const debtData:any = snapDebt.val()
  debt = debtData
  Debt!.innerHTML = 'Debt: ' +debt as unknown as string
  const snapBet:DataSnapshot = await get(dataCurrency3)
  const betData:any = snapBet.val()
  trueSpend = betData
  BetStake!.innerHTML = 'Bet: '+trueSpend as unknown as string
  const snapProfit:DataSnapshot = await get(dataCurrency4)
  const ProfitData:any = snapProfit.val()
  const profits = ProfitData
  Profit!.innerHTML = 'Profits: '+profits as unknown as string      
  const snapchips:DataSnapshot = await get(dataCurrency5)
      const datachips:any = snapchips.val()
      chips = datachips
      Chips!.innerHTML = 'Chips: ' +chips as unknown as string  

      const data:any = snapshot.val();

    } else {

    }
  } catch (error) {

  } finally{
    Button.disabled = false;
    isFetchingData = false;
  }
};
window.onload = fetchData
const GameCheck = async ()=> {

  if (chips <= 0 && currency <= 0 || chips <=0 && currency <20) {
    console.log(chips,currency)
    AlertGame.innerHTML = "Game OVER"
    const RetryButton = document.createElement('button')
    bankruptShow!.src = collection[5]
    bankruptShow.style.width = '300px'
    bankruptShow.style.height = '300px'
    GameOverDivImage!.classList.add('Slot-Window-Image')
    SlotBaseText!.classList.add('hidden')
    GameOverDivImage!.append(bankruptShow)
    GameOverDiv!.append(RetryButton)
    RetryButton.innerText = "Try Again"
    GameOverDiv!.classList.add('Slot-Windowtwo')
    SlotWindow!.classList.remove('Slot-Window')
    SlotWindow!.classList.add('hidden')
    buttonDiv!.classList.add('hidden')
    RetryButton.addEventListener('click', ()=>{
      fetchData()
      SlotBaseText!.classList.remove('hidden')
      GameOverDivImage!.classList.add('hidden')
      GameOverDivImage!.classList.remove('Slot-Window-Image')
      GameOverDiv!.classList.remove('Slot-Windowtwo')
      GameOverDiv!.classList.add('hidden')
      SlotWindow!.classList.add('Slot-Window')
      SlotWindow!.classList.remove('hidden')
      buttonDiv!.classList.remove('hidden')
      update(ref(database, 'Money-Balance'), {
        Chips:200,
        Credit: 2000,
        Debt: 0,
        Profit: 0
      });
})} else{
    if (chips <= 0 && currency !=0) {
    Alert!.innerHTML = "You cannot bet 0 chips sir/madam. please use the shop"
    shopdiv!.classList.remove('hidden')
    SlotWindow!.classList.remove('Slot-Window')
    SlotWindow!.classList.add('hidden')
    buttonDiv!.classList.add('hidden')
    ShopButton.classList.add('hidden')
  } 
}
}
ExitShopButton.addEventListener('click', ()=>{
  Alert!.innerHTML = ""
  shopdiv!.classList.add('hidden')
  SlotWindow!.classList.add('Slot-Window')
  SlotWindow!.classList.remove('hidden')
  buttonDiv!.classList.remove('hidden')
  ShopButton.classList.remove('hidden')
})
ShopButton.addEventListener('click',()=>{
  shopdiv!.classList.remove('hidden')
  SlotWindow!.classList.remove('Slot-Window')
  SlotWindow!.classList.add('hidden')
  buttonDiv!.classList.add('hidden')
  ShopButton.classList.add('hidden')
})
Button2!.addEventListener('click',()=>{
  fetchData()
     Alert!.innerHTML = ""
     update(ref(database, 'Money-Balance'), {
      Bet: 20
    });
})
Button3!.addEventListener('click',()=>{
  fetchData()
  update(ref(database, 'Money-Balance'), {
    Bet: 40
  });
})
Button4!.addEventListener('click',()=>{
  fetchData()
  Alert!.innerHTML = ""
  update(ref(database, 'Money-Balance'), {
    Bet: 120
  });
})
Button!.addEventListener('click',()=>{  
  fetchData()
  console.log(chips,currency)  
  GameCheck()
  if (chips !=0 && chips >0 && trueSpend<=chips) {
     fetchData()
      update(ref(database, 'Money-Balance'), {
        Debt: increment(-trueSpend)
      });
    
    update(ref(database, 'Money-Balance'), {
      Chips: increment(-trueSpend)
    });  
    Alert!.innerHTML = ""
    Filled1 = false
    Filled2 = false
    Filled3 = false     
    laharl = 0
    flonne = 0
    etna = 0
    LOVE = 0
    rob = 0
    rob2 = 0
    rob3 = 0
    Win = 0
    jackpot = 0
    eventTrigger!.replaceChildren(work.src = "")
    eventTrigger2!.replaceChildren(work2.src= "")
    eventTrigger3!.replaceChildren(work3.src= "")
    var a = Math.floor(Math.random() * 10 + 1);
    var b = Math.floor(Math.random() * 10 + 1);
    var c = Math.floor(Math.random() * 10 + 1);

if (a ==1 && Filled1 == false) {
Filled1 = true
work!.src = collection[0]
work.style.width = "80px"
eventTrigger!.append(work!)
flonne+= 1
}if (b == 1 && Filled2 == false) {
    Filled2 = true
    work2!.src = collection[0]
    work2.style.width = "80px"
eventTrigger2!.append(work2!)
flonne+= 1
}if (c == 1 && Filled3 == false) {
    Filled3 = true
    work3.style.width = "80px"
    work3!.src = collection[0]
eventTrigger3!.append(work3!) 
flonne+= 1
}
if (a ==2 && Filled1 == false) {
    Filled1 = true
    work!.src = collection[1]
    work.style.width = "80px"
    eventTrigger!.append(work!)
    laharl+= 1
}

if (b ==2 && Filled2 == false) {
    Filled2 = true
    work2!.src = collection[1]
    work2.style.width = "80px"
    eventTrigger2!.append(work2!)
    laharl+= 1
}

if (c ==2 && Filled3 == false) {
    Filled3 = true
    work3!.src = collection[1]
    work3.style.width = "80px"
    eventTrigger3!.append(work3!)
    laharl+= 1
}
if (a ==3 && Filled1 == false) {
  Filled1 = true
  work!.src = collection[2]
  work.style.width = "80px"
  eventTrigger!.append(work!)
  etna+= 1
}
if (b ==3 && Filled2 == false) {
  Filled2 = true
  work2!.src = collection[2]
  work2.style.width = "80px"
  eventTrigger2!.append(work2!)
  etna+= 1
}
if (c ==3 && Filled3 == false) {
  Filled3 = true
  work3!.src = collection[2]
  work3.style.width = "80px"
  eventTrigger3!.append(work3!)
  etna+= 1
}
if (a ==4 && Filled1 == false) {
  Filled1 = true
  work!.src = collection[3]
  work.style.width = "80px"
  eventTrigger!.append(work!)
  LOVE+= 1
}
if (b ==4 && Filled2 == false) {
  Filled2 = true
  work2!.src = collection[3]
  work2.style.width = "80px"
  eventTrigger2!.append(work2!)
  LOVE+= 1
}
if (c ==4 && Filled3 == false) {
  Filled3 = true
  work3!.src = collection[3]
  work3.style.width = "80px"
  eventTrigger3!.append(work3!)
  LOVE+= 1
}
if (a ==5 && Filled1 == false) {
  Filled1 = true
  work!.src = collection[4]
  work.style.width = "80px"
  eventTrigger!.append(work!)
  Win+=1
  
}
if (b ==5 && Filled2 == false) {
  Filled2 = true
  work2!.src = collection[4]
  work2.style.width = "80px"
  eventTrigger2!.append(work2!)
  Win+=1
}
if (c ==5 && Filled3 == false) {
  Filled3 = true
  work3!.src = collection[4]
  work3.style.width = "80px"
  eventTrigger3!.append(work3!)
  Win+=1
}
if (a ==6 && Filled1 == false) {
  Filled1 = true
  work!.src = collection[5] //WORKRORKORKOR
  work.style.width = "80px"
  eventTrigger!.append(work!)
 bankrupt+=1
}
if (b ==6 && Filled2 == false) {
  Filled2 = true
  work2!.src = collection[5]
  work2.style.width = "80px"
  eventTrigger2!.append(work2!)
 bankrupt+=1
}
if (c ==6 && Filled3 == false) {
  Filled3 = true
  work3!.src = collection[5]
  work3.style.width = "80px"
  eventTrigger3!.append(work3!)
  bankrupt+=1
}
if (a ==7 && Filled1 == false) {
  Filled1 = true
  work!.src = collection[6] //WORKRORKORKOR
  work.style.width = "80px"
  eventTrigger!.append(work!)
  jackpot+=1
}
if (b ==7 && Filled2 == false) {
  Filled2 = true
  work2!.src = collection[6]
  work2.style.width = "80px"
  eventTrigger2!.append(work2!)
  jackpot+=1
}
if (c ==7 && Filled3 == false) {
  Filled3 = true
  work3!.src = collection[6]
  work3.style.width = "80px"
  eventTrigger3!.append(work3!)
  jackpot+=1
}
if (a ==8 && Filled1 == false) {
  Filled1 = true
  work!.src = collection[7] //WORKRORKORKOR
  work.style.width = "80px"
  eventTrigger!.append(work!)
  rob+=1
}
if (b ==8 && Filled2 == false) {
  Filled2 = true
  work2!.src = collection[7]
  work2.style.width = "80px"
  eventTrigger2!.append(work2!)
  rob+=1
}
if (c ==8 && Filled3 == false) {
  Filled3 = true
  work3!.src = collection[7]
  work3.style.width = "80px"
  eventTrigger3!.append(work3!)
  rob+=1
}

if (a ==9 && Filled1 == false) {
  Filled1 = true
  work!.src = collection[8] //WORKRORKORKOR
  work.style.width = "80px"
  eventTrigger!.append(work!)
 rob2+=1
}
if (b ==9 && Filled2 == false) {
  Filled2 = true
  work2!.src = collection[8]
  work2.style.width = "80px"
  eventTrigger2!.append(work2!)
 rob2+=1
}
if (c ==9 && Filled3 == false) {
  Filled3 = true
  work3!.src = collection[8]
  work3.style.width = "80px"
  eventTrigger3!.append(work3!)
  rob2+=1
}

if (a ==10 && Filled1 == false) {
  Filled1 = true
  work!.src = collection[9] //WORKRORKORKOR
  work.style.width = "80px"
  eventTrigger!.append(work!)
  rob3+=1
}
if (b ==10 && Filled2 == false) {
  Filled2 = true
  work2!.src = collection[9]
  work2.style.width = "80px"
  eventTrigger2!.append(work2!)
  rob3+=1
}
if (c ==10 && Filled3 == false) {
  Filled3 = true
  work3!.src = collection[9]
  work3.style.width = "80px"
  eventTrigger3!.append(work3!)
  rob3+=1
}
if (rob==3) {
  fetchData()
  console.log(rob)
  Alert.innerHTML="holymothers! your Robbed!"
  update(ref(database, 'Money-Balance'), {
    Credit: increment(-120)
  });
}
if (rob2==3) {
  fetchData()
  console.log(rob)
  Alert.innerHTML="It is Prinny Day dud! Salary is Due! thanks for the 220 coins!"
  update(ref(database, 'Money-Balance'), {
    Credit: increment(-150)
  });
}
if (rob3==3) {
  fetchData()
  Alert.innerHTML="holymothers! your Robbed!"
  update(ref(database, 'Money-Balance'), {
    Credit: increment(-220)
  });
}
if (Win==3 || laharlToken>=5 && flonneToken >=5 && EtnaToken>=5 || currency >= 5000) {
  fetchData()
  Alert.innerHTML="You win! Congratulations!"
  update(ref(database, 'Money-Balance'), {
    Credit: increment(1500)
  });
update(ref(database, 'Money-Balance'), {
Profit: increment(1500)
});
AlertGame.innerHTML = "You have raised enough founds for the Overlord! you can now retire!"
const RetryButton = document.createElement('button')
bankruptShow!.src = collection[4]
bankruptShow.style.width = '300px'
bankruptShow.style.height = '300px'
GameOverDivImage!.classList.add('Slot-Window-Image')
SlotBaseText!.classList.add('hidden')
GameOverDiv!.classList.add('TrueWinImages')
GameOverDivImage!.append(bankruptShow)
GameOverDiv!.append(RetryButton)
RetryButton.innerText = "Play again?"
GameOverDiv!.classList.add('Slot-Windowtwo')
SlotWindow!.classList.remove('Slot-Window')
SlotWindow!.classList.add('hidden')
buttonDiv!.classList.add('hidden')
RetryButton.addEventListener('click', ()=>{
  fetchData()
  SlotBaseText!.classList.remove('hidden')
  GameOverDivImage!.classList.add('hidden')
  GameOverDivImage!.classList.remove('Slot-Window-Image')
  GameOverDiv!.classList.remove('Slot-Windowtwo')
  GameOverDiv!.classList.add('hidden')
  SlotWindow!.classList.add('Slot-Window')
  SlotWindow!.classList.remove('hidden')
  buttonDiv!.classList.remove('hidden')
  update(ref(database, 'Money-Balance'), {
    Chips:200,
    Credit: 2000,
    Debt: 0,
    Profit: 0
  });
})
}
if (jackpot==3) {
  fetchData()
  Alert.innerHTML="JACKPOT!"
  update(ref(database, 'Money-Balance'), {
    Credit: increment(10000)
  });
update(ref(database, 'Money-Balance'), {
Profit: increment(10000)
});
}
if (LOVE==3) {
  fetchData()
  Alert.innerHTML="LOVE! LOVE! *you sit through the lecture it earns you some credit atleast*"
  update(ref(database, 'Money-Balance'), {
    Credit: increment(200)
  });
  update(ref(database, 'Tokens'), {
    LOVE: increment(1)
  });
update(ref(database, 'Money-Balance'), {
Profit: increment(200)
});
fetchData()
}
if (etna ==1 && flonne ==1 && laharl==1) {
  fetchData()
  Alert.innerHTML="The orginal Trio, ah such sweet memories~"
  update(ref(database, 'Money-Balance'), {
    Credit: increment(255)
  });
  update(ref(database, 'Tokens'), {
    EtnaToken: increment(1),
    FlonneToken: increment(1),
    LaharlToken: increment(1)
  });
update(ref(database, 'Money-Balance'), {
Profit: increment(255)
});
assignedimg.src = './Images/Disgaea_Wallpaper.webp'
winimages.classList.remove('hidden')
SlotWindow!.classList.remove('Slot-Window')
winimages.classList.add('Slot-Window')
assignedimg.style.width = "200px"
assignedimg.style.height = "200px"
SlotWindow!.classList.add('hidden')
buttonDiv!.classList.add('hidden')
buttonok.textContent = 'ok'
winimages.append(assignedimg)
winimages.append(buttonok)
buttonok.addEventListener('click',()=>{
  winimages.classList.add('hidden')
  buttonDiv!.classList.remove('hidden')
  winimages.classList.remove('TrueWinImages')
  winimages.classList.remove('Slot-Window')
  SlotWindow!.classList.add('Slot-Window')
SlotWindow!.classList.remove('hidden')
})
fetchData()
}
if (etna == 3) {
  fetchData()
  Alert.innerHTML="ETNA MODE!"
  update(ref(database, 'Money-Balance'), {
    Credit: increment(155)
  });
  update(ref(database, 'Tokens'), {
    EtnaToken: increment(1)
  });
update(ref(database, 'Money-Balance'), {
Profit: increment(155)
});
assignedimg.src = './Images/Etnagif.gif'
winimages.classList.remove('hidden')
SlotWindow!.classList.remove('Slot-Window')
winimages.classList.add('Slot-Window')
SlotWindow!.classList.add('hidden')
buttonDiv!.classList.add('hidden')
buttonok.textContent = 'ok'
winimages.append(assignedimg)
winimages.append(buttonok)
buttonok.addEventListener('click',()=>{
  winimages.classList.add('hidden')
  buttonDiv!.classList.remove('hidden')
  winimages.classList.remove('TrueWinImages')
  winimages.classList.remove('Slot-Window')
  SlotWindow!.classList.add('Slot-Window')
SlotWindow!.classList.remove('hidden')
})
fetchData()
}
if (flonne == 3) {
  fetchData()
  Alert.innerHTML="Angel Power!"
  update(ref(database, 'Money-Balance'), {
    Credit: increment(100)
  });
  update(ref(database, 'Tokens'), {
    FlonneToken: increment(1)
  });
update(ref(database, 'Money-Balance'), {
  Credit: increment(100)
});
assignedimg.src = './Images/Flonnegif.gif'
winimages.classList.remove('hidden')
SlotWindow!.classList.remove('Slot-Window')
winimages.classList.add('Slot-Window')
SlotWindow!.classList.add('hidden')
buttonDiv!.classList.add('hidden')
buttonok.textContent = 'ok'
winimages.append(assignedimg)
winimages.append(buttonok)
buttonok.addEventListener('click',()=>{
  winimages.classList.add('hidden')
  buttonDiv!.classList.remove('hidden')
  winimages.classList.remove('TrueWinImages')
  winimages.classList.remove('Slot-Window')
  SlotWindow!.classList.add('Slot-Window')
SlotWindow!.classList.remove('hidden')
})
fetchData()
}
if (laharl == 3) {
  fetchData()
  Alert.innerHTML="The one true Overlord!"
  update(ref(database, 'Money-Balance'), {
    Credit: increment(200)
  });
  update(ref(database, 'Tokens'), {
    LaharlToken: increment(1)
  });
update(ref(database, 'Money-Balance'), {
Profit: increment(200)
});
assignedimg.src = './Images/LaharlGif.gif'
winimages.classList.remove('hidden')
SlotWindow!.classList.remove('Slot-Window')
winimages.classList.add('Slot-Window')
SlotWindow!.classList.add('hidden')
buttonDiv!.classList.add('hidden')
buttonok.textContent = 'ok'
winimages.append(assignedimg)
winimages.append(buttonok)
buttonok.addEventListener('click',()=>{
  winimages.classList.add('hidden')
  buttonDiv!.classList.remove('hidden')
  winimages.classList.remove('TrueWinImages')
  winimages.classList.remove('Slot-Window')
  SlotWindow!.classList.add('Slot-Window')
SlotWindow!.classList.remove('hidden')
})
fetchData()
}}})