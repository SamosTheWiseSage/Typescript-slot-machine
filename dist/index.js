var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { increment, update } from 'firebase/database';
import { database, ref, get } from './firebaseconfig';
const Button = document.querySelector('#ButtonRoller');
const Button2 = document.querySelector('#Buttonreset');
const Button3 = document.querySelector('#Buttonreset2');
const Button4 = document.querySelector('#Buttonreset3');
const ShopButton = document.querySelector('#ShopButton');
const ExitShopButton = document.querySelector('#ExitButton');
const GameOverDiv = document.querySelector('#Game-Over');
const SlotWindow = document.querySelector('#SlotWindow');
const shopdiv = document.querySelector('#shop');
shopdiv.classList.add('hidden');
const buttonDiv = document.querySelector('#buttonDiv');
const Alert = document.querySelector('#Alert');
const AlertGame = document.querySelector('#AlertGame');
const bet20 = document.querySelector('#bet20');
const bet40 = document.querySelector('#bet40');
const bet120 = document.querySelector('#bet120');
var eventTrigger = document.querySelector("#SlotImage1");
var work = document.createElement("img");
var eventTrigger2 = document.querySelector("#SlotImage2");
var work2 = document.createElement("img");
var eventTrigger3 = document.querySelector("#SlotImage3");
var work3 = document.createElement("img");
let debt = 0;
const Debt = document.querySelector('#Debt');
let trueSpend = 0;
const BetStake = document.querySelector('#Bet');
const Currency = document.querySelector('#Currency');
let currency = 0;
const Chips = document.querySelector('#Chips');
let chips = 0;
const Profit = document.querySelector('#Profit');
let flonne = 0;
let flonneToken = 0;
const FlonneToken = document.querySelector("#flonneToken");
let etna = 0;
let etnaToken = 0;
const EtnaToken = document.querySelector("#etnaToken");
let laharl = 0;
let laharlToken = 0;
const LaharlToken = document.querySelector("#laharlToken");
let LOVE = 0;
let loveToken = 0;
const LOVEToken = document.querySelector('#loveToken');
let Win = 0;
let wintoken = 0;
const WINToken = document.querySelector('#win');
let Filled1 = false;
let Filled2 = false;
let Filled3 = false;
const collection = [
    "./Images/FlonneSlot1.webp",
    "./Images/LaharlSlot2.webp",
    "./Images/EtnaSlot3.webp",
    "./Images/DisgeaLoveCombo.webp",
    "./Images/DisgeaWinCutscene1.webp",
    "./Images/DisgeaBankruptCutscene1.webp",
    "./Images/DisgeaJackPot1.jpg",
    "./Images/dis-rouge.jpg",
    "./Images/Prinny_d1p.webp",
    "./Images/Hoggmeiserportait.webp"
];
bet20.addEventListener('click', () => {
    fetchData();
    update(ref(database, 'Money-Balance'), {
        Chips: increment(+20),
        Credit: increment(-20)
    });
});
bet40.addEventListener('click', () => {
    fetchData();
    update(ref(database, 'Money-Balance'), {
        Chips: increment(+40),
        Credit: increment(-40)
    });
});
bet120.addEventListener('click', () => {
    fetchData();
    update(ref(database, 'Money-Balance'), {
        Chips: increment(+120),
        Credit: increment(-120)
    });
});
window.addEventListener('load', function () {
    console.log("heloooooo");
    work.style.width = "80px";
    work.src = collection[0];
    eventTrigger.append(work);
    work2.style.width = "80px";
    work2.src = collection[1];
    eventTrigger2.append(work2);
    work3.style.width = "80px";
    work3.src = collection[2];
    eventTrigger3.append(work3);
});
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataRef = ref(database, 'Tokens');
        const dataRef2 = ref(database, 'Tokens/LaharlToken');
        const dataref3 = ref(database, 'Tokens/FlonneToken');
        const dataref4 = ref(database, 'Tokens/EtnaToken');
        const dataref5 = ref(database, 'Tokens/LOVE');
        const dataCurrency = ref(database, 'Money-Balance/Credit');
        const dataCurrency2 = ref(database, 'Money-Balance/Debt');
        const dataCurrency3 = ref(database, 'Money-Balance/Bet');
        const dataCurrency4 = ref(database, 'Money-Balance/Profit');
        const dataCurrency5 = ref(database, 'Money-Balance/Chips');
        const snapshot = yield get(dataRef);
        if (snapshot.exists()) {
            const snap2 = yield get(dataRef2);
            const data2 = snap2.val();
            laharlToken = data2;
            LaharlToken.innerHTML = laharlToken;
            const snap3 = yield get(dataref3);
            const data3 = snap3.val();
            flonneToken = data3;
            FlonneToken.innerHTML = flonneToken;
            const snap4 = yield get(dataref4);
            const data4 = snap4.val();
            etnaToken = data4;
            EtnaToken.innerHTML = etnaToken;
            const snap5 = yield get(dataref5);
            const data5 = snap5.val();
            loveToken = data5;
            LOVEToken.innerHTML = loveToken;
            const snapcredit = yield get(dataCurrency);
            const datacredit = snapcredit.val();
            currency = datacredit;
            Currency.innerHTML = 'Credit: ' + currency;
            const snapDebt = yield get(dataCurrency2);
            const debtData = snapDebt.val();
            debt = debtData;
            Debt.innerHTML = 'Debt: ' + debt;
            const snapBet = yield get(dataCurrency3);
            const betData = snapBet.val();
            trueSpend = betData;
            BetStake.innerHTML = 'Bet: ' + trueSpend;
            const snapProfit = yield get(dataCurrency4);
            const ProfitData = snapProfit.val();
            const profits = ProfitData;
            Profit.innerHTML = 'Profits: ' + profits;
            const snapchips = yield get(dataCurrency5);
            const datachips = snapchips.val();
            chips = datachips;
            Chips.innerHTML = 'Chips: ' + chips;
            const data = snapshot.val();
            console.log('Fetched data:', data);
        }
        else {
            console.log('No data available');
        }
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
});
window.onload = fetchData;
const GameCheck = () => __awaiter(void 0, void 0, void 0, function* () {
    if (chips <= 0 && currency != 0) {
        Alert.innerHTML = "You cannot bet 0 chips sir/madam. please use the shop";
        shopdiv.classList.remove('hidden');
        SlotWindow.classList.remove('Slot-Window');
        SlotWindow.classList.add('hidden');
        buttonDiv.classList.add('hidden');
        ShopButton.classList.add('hidden');
    }
    if (chips <= 0 && currency <= 0) {
        console.log(chips, currency);
        AlertGame.innerHTML = "Game OVER";
        const RetryButton = document.createElement('button');
        GameOverDiv.append(RetryButton);
        RetryButton.innerText = "Try Again";
        GameOverDiv.classList.add('Slot-Window');
        SlotWindow.classList.remove('Slot-Window');
        SlotWindow.classList.add('hidden');
        buttonDiv.classList.add('hidden');
        RetryButton.addEventListener('click', () => {
            fetchData();
            GameOverDiv.classList.remove('Slot-Window');
            GameOverDiv.classList.add('hidden');
            SlotWindow.classList.add('Slot-Window');
            SlotWindow.classList.remove('hidden');
            buttonDiv.classList.remove('hidden');
            update(ref(database, 'Money-Balance'), {
                Chips: 200,
                Credit: 2000,
                Debt: 0
            });
        });
    }
});
ExitShopButton.addEventListener('click', () => {
    shopdiv.classList.add('hidden');
    SlotWindow.classList.add('Slot-Window');
    SlotWindow.classList.remove('hidden');
    buttonDiv.classList.remove('hidden');
    ShopButton.classList.remove('hidden');
});
ShopButton.addEventListener('click', () => {
    shopdiv.classList.remove('hidden');
    SlotWindow.classList.remove('Slot-Window');
    SlotWindow.classList.add('hidden');
    buttonDiv.classList.add('hidden');
    ShopButton.classList.add('hidden');
});
Button2.addEventListener('click', () => {
    fetchData();
    Alert.innerHTML = "";
    update(ref(database, 'Money-Balance'), {
        Bet: 20
    });
});
Button3.addEventListener('click', () => {
    fetchData();
    update(ref(database, 'Money-Balance'), {
        Bet: 40
    });
});
Button4.addEventListener('click', () => {
    fetchData();
    Alert.innerHTML = "";
    update(ref(database, 'Money-Balance'), {
        Bet: 120
    });
});
Button.addEventListener('click', () => {
    fetchData();
    console.log(chips, currency);
    GameCheck();
    if (chips != 0 && chips > 0) {
        fetchData();
        update(ref(database, 'Money-Balance'), {
            Debt: increment(-trueSpend)
        });
        update(ref(database, 'Money-Balance'), {
            Chips: increment(-trueSpend)
        });
        if (chips - debt > 0) {
            fetchData();
            let profitschange = chips - debt;
            update(ref(database, 'Money-Balance'), {
                Profit: profitschange
            });
        }
        Filled1 = false;
        Filled2 = false;
        Filled3 = false;
        laharl = 0;
        flonne = 0;
        etna = 0;
        LOVE = 0;
        eventTrigger.replaceChildren(work.src = "");
        eventTrigger2.replaceChildren(work2.src = "");
        eventTrigger3.replaceChildren(work3.src = "");
        var a = Math.floor(Math.random() * 10 + 1);
        var b = Math.floor(Math.random() * 10 + 1);
        var c = Math.floor(Math.random() * 10 + 1);
        if (a == 1 && Filled1 == false) {
            Filled1 = true;
            work.src = collection[0];
            work.style.width = "80px";
            eventTrigger.append(work);
            flonne += 1;
        }
        if (b == 1 && Filled2 == false) {
            Filled2 = true;
            work2.src = collection[0];
            work2.style.width = "80px";
            eventTrigger2.append(work2);
            flonne += 1;
        }
        if (c == 1 && Filled3 == false) {
            Filled3 = true;
            work3.style.width = "80px";
            work3.src = collection[0];
            eventTrigger3.append(work3);
            flonne += 1;
        }
        if (a == 2 && Filled1 == false) {
            Filled1 = true;
            work.src = collection[1];
            work.style.width = "80px";
            eventTrigger.append(work);
            laharl += 1;
        }
        if (b == 2 && Filled2 == false) {
            Filled2 = true;
            work2.src = collection[1];
            work2.style.width = "80px";
            eventTrigger2.append(work2);
            laharl += 1;
        }
        if (c == 2 && Filled3 == false) {
            Filled3 = true;
            work3.src = collection[1];
            work3.style.width = "80px";
            eventTrigger3.append(work3);
            laharl += 1;
        }
        if (a == 3 && Filled1 == false) {
            Filled1 = true;
            work.src = collection[2];
            work.style.width = "80px";
            eventTrigger.append(work);
            etna += 1;
        }
        if (b == 3 && Filled2 == false) {
            Filled2 = true;
            work2.src = collection[2];
            work2.style.width = "80px";
            eventTrigger2.append(work2);
            etna += 1;
        }
        if (c == 3 && Filled3 == false) {
            Filled3 = true;
            work3.src = collection[2];
            work3.style.width = "80px";
            eventTrigger3.append(work3);
            etna += 1;
        }
        if (a == 4 && Filled1 == false) {
            Filled1 = true;
            work.src = collection[3];
            work.style.width = "80px";
            eventTrigger.append(work);
            LOVE += 1;
        }
        if (b == 4 && Filled2 == false) {
            Filled2 = true;
            work2.src = collection[3];
            work2.style.width = "80px";
            eventTrigger2.append(work2);
            LOVE += 1;
        }
        if (c == 4 && Filled3 == false) {
            Filled3 = true;
            work3.src = collection[3];
            work3.style.width = "80px";
            eventTrigger3.append(work3);
            LOVE += 1;
        }
        if (a == 5 && Filled1 == false) {
            Filled1 = true;
            work.src = collection[4];
            work.style.width = "80px";
            eventTrigger.append(work);
        }
        if (b == 5 && Filled2 == false) {
            Filled2 = true;
            work2.src = collection[4];
            work2.style.width = "80px";
            eventTrigger2.append(work2);
        }
        if (c == 5 && Filled3 == false) {
            Filled3 = true;
            work3.src = collection[4];
            work3.style.width = "80px";
            eventTrigger3.append(work3);
        }
        if (a == 6 && Filled1 == false) {
            Filled1 = true;
            work.src = collection[5]; //WORKRORKORKOR
            work.style.width = "80px";
            eventTrigger.append(work);
        }
        if (b == 6 && Filled2 == false) {
            Filled2 = true;
            work2.src = collection[5];
            work2.style.width = "80px";
            eventTrigger2.append(work2);
        }
        if (c == 6 && Filled3 == false) {
            Filled3 = true;
            work3.src = collection[5];
            work3.style.width = "80px";
            eventTrigger3.append(work3);
        }
        if (a == 7 && Filled1 == false) {
            Filled1 = true;
            work.src = collection[6]; //WORKRORKORKOR
            work.style.width = "80px";
            eventTrigger.append(work);
        }
        if (b == 7 && Filled2 == false) {
            Filled2 = true;
            work2.src = collection[6];
            work2.style.width = "80px";
            eventTrigger2.append(work2);
        }
        if (c == 7 && Filled3 == false) {
            Filled3 = true;
            work3.src = collection[6];
            work3.style.width = "80px";
            eventTrigger3.append(work3);
        }
        if (Win == 3) {
            update(ref(database, 'Money-Balance'), {
                Credit: +155000
            });
        }
        if (LOVE == 3) {
            update(ref(database, 'Tokens'), {
                LOVE: increment(1)
            });
        }
        if (etna == 3) {
            update(ref(database, 'Tokens'), {
                EtnaToken: increment(1)
            });
        }
        if (flonne == 3) {
            update(ref(database, 'Tokens'), {
                FlonneToken: increment(1)
            });
        }
        if (laharl == 3) {
            //laharlToken+= 1
            //LaharlToken!.innerHTML = laharlToken as unknown as string
            update(ref(database, 'Tokens'), {
                LaharlToken: increment(1)
            });
        }
    }
});
