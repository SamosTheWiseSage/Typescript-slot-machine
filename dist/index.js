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
const Slot1 = document.querySelector("#Slot1");
const NumberSlot1 = document.querySelector("#NumberSlot1");
const Slot2 = document.querySelector("#Slot2");
const NumberSlot2 = document.querySelector("#NumberSlot2");
const Slot3 = document.querySelector("#Slot3");
const NumberSlot3 = document.querySelector("#NumberSlot3");
const Button = document.querySelector('#ButtonRoller');
const Button2 = document.querySelector('#Buttonreset');
const Button3 = document.querySelector('#Buttonreset2');
const Button4 = document.querySelector('#Buttonreset3');
const Button5 = document.querySelector('#Buttonreset4');
const Button6 = document.querySelector('#Buttonreset5');
const Button7 = document.querySelector('#Buttonreset6');
const Alert = document.querySelector('#Alert');
var eventTrigger = document.querySelector("#SlotImage1");
var work = document.createElement("img");
var eventTrigger2 = document.querySelector("#SlotImage2");
var work2 = document.createElement("img");
var eventTrigger3 = document.querySelector("#SlotImage3");
var work3 = document.createElement("img");
let debt = 0;
const Debt = document.querySelector('#Debt');
let SpendingDefault = 20;
let Spending2 = 40;
let spending3 = 120;
let betnumber = 0;
let trueSpend = 0;
const BetStake = document.querySelector('#Bet');
const Currency = document.querySelector('#Currency');
let currency = 0;
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
    "./Images/DisgeaBankruptCutscene1.webp"
];
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
Button2.addEventListener('click', () => {
    fetchData();
    Filled1 = false;
    Filled2 = false;
    Filled3 = false;
    eventTrigger.replaceChildren(work.src = "");
    eventTrigger2.replaceChildren(work2.src = "");
    eventTrigger3.replaceChildren(work3.src = "");
    update(ref(database, 'Money-Balance'), {
        Bet: increment(+20)
    });
});
Button3.addEventListener('click', () => {
    fetchData();
    Filled1 = false;
    Filled2 = false;
    Filled3 = false;
    eventTrigger.replaceChildren(work.src = "");
    eventTrigger2.replaceChildren(work2.src = "");
    eventTrigger3.replaceChildren(work3.src = "");
    update(ref(database, 'Money-Balance'), {
        Bet: increment(+40)
    });
});
Button4.addEventListener('click', () => {
    fetchData();
    Filled1 = false;
    Filled2 = false;
    Filled3 = false;
    eventTrigger.replaceChildren(work.src = "");
    eventTrigger2.replaceChildren(work2.src = "");
    eventTrigger3.replaceChildren(work3.src = "");
    update(ref(database, 'Money-Balance'), {
        Bet: increment(+120)
    });
});
Button5.addEventListener('click', () => {
    fetchData();
    Filled1 = false;
    Filled2 = false;
    Filled3 = false;
    eventTrigger.replaceChildren(work.src = "");
    eventTrigger2.replaceChildren(work2.src = "");
    eventTrigger3.replaceChildren(work3.src = "");
    Alert.innerHTML = "";
    update(ref(database, 'Money-Balance'), {
        Bet: increment(-20)
    });
});
Button6.addEventListener('click', () => {
    fetchData();
    Filled1 = false;
    Filled2 = false;
    Filled3 = false;
    eventTrigger.replaceChildren(work.src = "");
    eventTrigger2.replaceChildren(work2.src = "");
    eventTrigger3.replaceChildren(work3.src = "");
    Alert.innerHTML = "";
    update(ref(database, 'Money-Balance'), {
        Bet: increment(-40)
    });
});
Button7.addEventListener('click', () => {
    fetchData();
    Filled1 = false;
    Filled2 = false;
    Filled3 = false;
    eventTrigger.replaceChildren(work.src = "");
    eventTrigger2.replaceChildren(work2.src = "");
    eventTrigger3.replaceChildren(work3.src = "");
    Alert.innerHTML = "";
    if (trueSpend <= 0) {
        update(ref(database, 'Money-Balance'), {
            Bet: increment(-120)
        });
        console.log('hello testing');
    }
});
Button.addEventListener('click', () => {
    Filled1 = false;
    Filled2 = false;
    Filled3 = false;
    fetchData();
    if (currency <= 0) {
        update(ref(database, 'Money-Balance'), {
            Debt: increment(-trueSpend)
        });
    }
    update(ref(database, 'Money-Balance'), {
        Credit: increment(-trueSpend)
    });
    Debt.innerHTML = 'Debt: ' + debt;
    Currency.innerHTML = 'Credit: ' + currency;
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
    NumberSlot1.innerHTML = a;
    NumberSlot2.innerHTML = b;
    NumberSlot3.innerHTML = c;
    if (a == 4 && Filled1 == false) {
        Filled1 = true;
        work.src = collection[0];
        work.style.width = "30px";
        eventTrigger.append(work);
        flonne += 1;
    }
    if (b == 4 && Filled2 == false) {
        Filled2 = true;
        work2.src = collection[0];
        work2.style.width = "30px";
        eventTrigger2.append(work2);
        flonne += 1;
    }
    if (c == 4 && Filled3 == false) {
        Filled3 = true;
        work3.style.width = "30px";
        work3.src = collection[0];
        eventTrigger3.append(work3);
        flonne += 1;
    }
    if (a == 1 && Filled1 == false) {
        Filled1 = true;
        work.src = collection[1];
        work.style.width = "30px";
        eventTrigger.append(work);
        laharl += 1;
    }
    if (b == 1 && Filled2 == false) {
        Filled2 = true;
        work2.src = collection[1];
        work2.style.width = "30px";
        eventTrigger2.append(work2);
        laharl += 1;
    }
    if (c == 1 && Filled3 == false) {
        Filled3 = true;
        work3.src = collection[1];
        work3.style.width = "30px";
        eventTrigger3.append(work3);
        laharl += 1;
    }
    if (a == 2 && Filled1 == false) {
        Filled1 = true;
        work.src = collection[2];
        work.style.width = "30px";
        eventTrigger3.append(work);
        etna += 1;
    }
    if (b == 2 && Filled2 == false) {
        Filled2 = true;
        work2.src = collection[2];
        work2.style.width = "30px";
        eventTrigger3.append(work2);
        etna += 1;
    }
    if (c == 2 && Filled3 == false) {
        Filled3 = true;
        work3.src = collection[2];
        work3.style.width = "30px";
        eventTrigger3.append(work3);
        etna += 1;
    }
    if (a == 3 && Filled1 == false) {
        Filled1 = true;
        work.src = collection[3];
        work.style.width = "30px";
        eventTrigger3.append(work);
        etna += 1;
    }
    if (b == 3 && Filled2 == false) {
        Filled2 = true;
        work2.src = collection[3];
        work2.style.width = "30px";
        eventTrigger3.append(work2);
        LOVE += 1;
    }
    if (c == 3 && Filled3 == false) {
        Filled3 = true;
        work3.src = collection[3];
        work3.style.width = "30px";
        eventTrigger3.append(work3);
        LOVE += 1;
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
});
