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
const GameOverDivImage = document.querySelector('#Game-Over-Image');
const winimages = document.querySelector("#winimages");
let buttonok = document.createElement('button');
winimages.classList.add('hidden');
let assignedimg = document.createElement('img');
const SlotWindow = document.querySelector('#SlotWindow');
const SlotBaseText = document.querySelector('#basetext');
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
let profitschange = 0;
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
let jackpot = 0;
let rob = 0;
let rob2 = 0;
let rob3 = 0;
let robToken = 0;
const RobToken = document.querySelector('#rob');
let bankrupt = 0;
const bankruptShow = document.createElement('img');
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
    "./Images/DisgeaTheifMale.webp",
    "./Images/Prinny_d1p.webp",
    "./Images/Hoggmeiserportrait.webp"
];
bet20.addEventListener('click', () => {
    fetchData();
    if (currency >= 20) {
        update(ref(database, 'Money-Balance'), {
            Chips: increment(+20),
            Credit: increment(-20)
        });
    }
    else {
        Alert.innerHTML = "Sorry you dont have enough credit";
    }
});
bet40.addEventListener('click', () => {
    fetchData();
    if (currency >= 40) {
        update(ref(database, 'Money-Balance'), {
            Chips: increment(+40),
            Credit: increment(-40)
        });
    }
    else {
        Alert.innerHTML = "Sorry you dont have enough credit";
    }
});
bet120.addEventListener('click', () => {
    fetchData();
    if (currency >= 120) {
        update(ref(database, 'Money-Balance'), {
            Chips: increment(+120),
            Credit: increment(-120)
        });
    }
    else {
        Alert.innerHTML = "Sorry you dont have enough credit";
    }
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
let isFetchingData = false;
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    if (isFetchingData) {
        return;
    }
    isFetchingData = true;
    try {
        Button.disabled = true;
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
        }
        else {
        }
    }
    catch (error) {
    }
    finally {
        Button.disabled = false;
        isFetchingData = false;
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
        bankruptShow.src = collection[5];
        bankruptShow.style.width = '300px';
        bankruptShow.style.height = '300px';
        GameOverDivImage.classList.add('Slot-Window-Image');
        SlotBaseText.classList.add('hidden');
        GameOverDivImage.append(bankruptShow);
        GameOverDiv.append(RetryButton);
        RetryButton.innerText = "Try Again";
        GameOverDiv.classList.add('Slot-Windowtwo');
        SlotWindow.classList.remove('Slot-Window');
        SlotWindow.classList.add('hidden');
        buttonDiv.classList.add('hidden');
        RetryButton.addEventListener('click', () => {
            fetchData();
            SlotBaseText.classList.remove('hidden');
            GameOverDivImage.classList.add('hidden');
            GameOverDivImage.classList.remove('Slot-Window-Image');
            GameOverDiv.classList.remove('Slot-Windowtwo');
            GameOverDiv.classList.add('hidden');
            SlotWindow.classList.add('Slot-Window');
            SlotWindow.classList.remove('hidden');
            buttonDiv.classList.remove('hidden');
            update(ref(database, 'Money-Balance'), {
                Chips: 200,
                Credit: 2000,
                Debt: 0,
                Profit: 0
            });
        });
    }
});
ExitShopButton.addEventListener('click', () => {
    Alert.innerHTML = "";
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
    if (chips != 0 && chips > 0 && trueSpend <= chips) {
        fetchData();
        update(ref(database, 'Money-Balance'), {
            Debt: increment(-trueSpend)
        });
        update(ref(database, 'Money-Balance'), {
            Chips: increment(-trueSpend)
        });
        Alert.innerHTML = "";
        Filled1 = false;
        Filled2 = false;
        Filled3 = false;
        laharl = 0;
        flonne = 0;
        etna = 0;
        LOVE = 0;
        rob = 0;
        rob2 = 0;
        rob3 = 0;
        Win = 0;
        jackpot = 0;
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
            Win += 1;
        }
        if (b == 5 && Filled2 == false) {
            Filled2 = true;
            work2.src = collection[4];
            work2.style.width = "80px";
            eventTrigger2.append(work2);
            Win += 1;
        }
        if (c == 5 && Filled3 == false) {
            Filled3 = true;
            work3.src = collection[4];
            work3.style.width = "80px";
            eventTrigger3.append(work3);
            Win += 1;
        }
        if (a == 6 && Filled1 == false) {
            Filled1 = true;
            work.src = collection[5]; //WORKRORKORKOR
            work.style.width = "80px";
            eventTrigger.append(work);
            bankrupt += 1;
        }
        if (b == 6 && Filled2 == false) {
            Filled2 = true;
            work2.src = collection[5];
            work2.style.width = "80px";
            eventTrigger2.append(work2);
            bankrupt += 1;
        }
        if (c == 6 && Filled3 == false) {
            Filled3 = true;
            work3.src = collection[5];
            work3.style.width = "80px";
            eventTrigger3.append(work3);
            bankrupt += 1;
        }
        if (a == 7 && Filled1 == false) {
            Filled1 = true;
            work.src = collection[6]; //WORKRORKORKOR
            work.style.width = "80px";
            eventTrigger.append(work);
            jackpot += 1;
        }
        if (b == 7 && Filled2 == false) {
            Filled2 = true;
            work2.src = collection[6];
            work2.style.width = "80px";
            eventTrigger2.append(work2);
            jackpot += 1;
        }
        if (c == 7 && Filled3 == false) {
            Filled3 = true;
            work3.src = collection[6];
            work3.style.width = "80px";
            eventTrigger3.append(work3);
            jackpot += 1;
        }
        if (a == 8 && Filled1 == false) {
            Filled1 = true;
            work.src = collection[7]; //WORKRORKORKOR
            work.style.width = "80px";
            eventTrigger.append(work);
            rob += 1;
        }
        if (b == 8 && Filled2 == false) {
            Filled2 = true;
            work2.src = collection[7];
            work2.style.width = "80px";
            eventTrigger2.append(work2);
            rob += 1;
        }
        if (c == 8 && Filled3 == false) {
            Filled3 = true;
            work3.src = collection[7];
            work3.style.width = "80px";
            eventTrigger3.append(work3);
            rob += 1;
        }
        if (a == 9 && Filled1 == false) {
            Filled1 = true;
            work.src = collection[8]; //WORKRORKORKOR
            work.style.width = "80px";
            eventTrigger.append(work);
            rob2 += 1;
        }
        if (b == 9 && Filled2 == false) {
            Filled2 = true;
            work2.src = collection[8];
            work2.style.width = "80px";
            eventTrigger2.append(work2);
            rob2 += 1;
        }
        if (c == 9 && Filled3 == false) {
            Filled3 = true;
            work3.src = collection[8];
            work3.style.width = "80px";
            eventTrigger3.append(work3);
            rob2 += 1;
        }
        if (a == 10 && Filled1 == false) {
            Filled1 = true;
            work.src = collection[9]; //WORKRORKORKOR
            work.style.width = "80px";
            eventTrigger.append(work);
            rob3 += 1;
        }
        if (b == 10 && Filled2 == false) {
            Filled2 = true;
            work2.src = collection[9];
            work2.style.width = "80px";
            eventTrigger2.append(work2);
            rob3 += 1;
        }
        if (c == 10 && Filled3 == false) {
            Filled3 = true;
            work3.src = collection[9];
            work3.style.width = "80px";
            eventTrigger3.append(work3);
            rob3 += 1;
        }
        if (rob == 3) {
            fetchData();
            console.log(rob);
            Alert.innerHTML = "holymothers! your Robbed!";
            update(ref(database, 'Money-Balance'), {
                Credit: increment(-120)
            });
        }
        if (rob2 == 3) {
            fetchData();
            console.log(rob);
            Alert.innerHTML = "It is Prinny Day dud! Salary is Due! thanks for the 220 coins!";
            update(ref(database, 'Money-Balance'), {
                Credit: increment(-150)
            });
        }
        if (rob3 == 3) {
            fetchData();
            Alert.innerHTML = "holymothers! your Robbed!";
            update(ref(database, 'Money-Balance'), {
                Credit: increment(-220)
            });
        }
        if (Win == 3 || laharlToken >= 5 && flonneToken >= 5 && EtnaToken >= 5) {
            fetchData();
            Alert.innerHTML = "You win! Congratulations!";
            update(ref(database, 'Money-Balance'), {
                Credit: increment(1500)
            });
            update(ref(database, 'Money-Balance'), {
                Profit: increment(1500)
            });
            AlertGame.innerHTML = "You have raised enough founds for the Overlord! you can now retire!";
            const RetryButton = document.createElement('button');
            bankruptShow.src = collection[4];
            bankruptShow.style.width = '300px';
            bankruptShow.style.height = '300px';
            GameOverDivImage.classList.add('Slot-Window-Image');
            SlotBaseText.classList.add('hidden');
            GameOverDiv.classList.add('TrueWinImages');
            GameOverDivImage.append(bankruptShow);
            GameOverDiv.append(RetryButton);
            RetryButton.innerText = "Play again?";
            GameOverDiv.classList.add('Slot-Windowtwo');
            SlotWindow.classList.remove('Slot-Window');
            SlotWindow.classList.add('hidden');
            buttonDiv.classList.add('hidden');
            RetryButton.addEventListener('click', () => {
                fetchData();
                SlotBaseText.classList.remove('hidden');
                GameOverDivImage.classList.add('hidden');
                GameOverDivImage.classList.remove('Slot-Window-Image');
                GameOverDiv.classList.remove('Slot-Windowtwo');
                GameOverDiv.classList.add('hidden');
                SlotWindow.classList.add('Slot-Window');
                SlotWindow.classList.remove('hidden');
                buttonDiv.classList.remove('hidden');
                update(ref(database, 'Money-Balance'), {
                    Chips: 200,
                    Credit: 2000,
                    Debt: 0,
                    Profit: 0
                });
            });
        }
        if (jackpot == 3) {
            fetchData();
            Alert.innerHTML = "JACKPOT!";
            update(ref(database, 'Money-Balance'), {
                Credit: increment(10000)
            });
            update(ref(database, 'Money-Balance'), {
                Profit: increment(10000)
            });
        }
        if (LOVE == 3) {
            fetchData();
            Alert.innerHTML = "LOVE! LOVE! *you sit through the lecture it earns you some credit atleast*";
            update(ref(database, 'Money-Balance'), {
                Credit: increment(100)
            });
            update(ref(database, 'Tokens'), {
                LOVE: increment(1)
            });
            update(ref(database, 'Money-Balance'), {
                Profit: increment(100)
            });
            fetchData();
        }
        if (etna == 1 && flonne == 1 && laharl == 1) {
            fetchData();
            Alert.innerHTML = "The orginal Trio, ah such sweet memories~";
            update(ref(database, 'Money-Balance'), {
                Credit: increment(55)
            });
            update(ref(database, 'Tokens'), {
                EtnaToken: increment(1),
                FlonneToken: increment(1),
                LaharlToken: increment(1)
            });
            update(ref(database, 'Money-Balance'), {
                Profit: increment(55)
            });
            assignedimg.src = './Images/Disgaea_Wallpaper.webp';
            winimages.classList.remove('hidden');
            SlotWindow.classList.remove('Slot-Window');
            winimages.classList.add('Slot-Window');
            SlotWindow.classList.add('hidden');
            buttonDiv.classList.add('hidden');
            buttonok.textContent = 'ok';
            winimages.append(assignedimg);
            winimages.append(buttonok);
            buttonok.addEventListener('click', () => {
                winimages.classList.add('hidden');
                buttonDiv.classList.remove('hidden');
                winimages.classList.remove('TrueWinImages');
                winimages.classList.remove('Slot-Window');
                SlotWindow.classList.add('Slot-Window');
                SlotWindow.classList.remove('hidden');
            });
            fetchData();
        }
        if (etna == 3) {
            fetchData();
            Alert.innerHTML = "ETNA MODE!";
            update(ref(database, 'Money-Balance'), {
                Credit: increment(155)
            });
            update(ref(database, 'Tokens'), {
                EtnaToken: increment(1)
            });
            update(ref(database, 'Money-Balance'), {
                Profit: increment(155)
            });
            assignedimg.src = './Images/Etnagif.gif';
            winimages.classList.remove('hidden');
            SlotWindow.classList.remove('Slot-Window');
            winimages.classList.add('Slot-Window');
            SlotWindow.classList.add('hidden');
            buttonDiv.classList.add('hidden');
            buttonok.textContent = 'ok';
            winimages.append(assignedimg);
            winimages.append(buttonok);
            buttonok.addEventListener('click', () => {
                winimages.classList.add('hidden');
                buttonDiv.classList.remove('hidden');
                winimages.classList.remove('TrueWinImages');
                winimages.classList.remove('Slot-Window');
                SlotWindow.classList.add('Slot-Window');
                SlotWindow.classList.remove('hidden');
            });
            fetchData();
        }
        if (flonne == 3) {
            fetchData();
            Alert.innerHTML = "Angel Power!";
            update(ref(database, 'Money-Balance'), {
                Credit: increment(100)
            });
            update(ref(database, 'Tokens'), {
                FlonneToken: increment(1)
            });
            update(ref(database, 'Money-Balance'), {
                Credit: increment(100)
            });
            assignedimg.src = './Images/Flonnegif.gif';
            winimages.classList.remove('hidden');
            SlotWindow.classList.remove('Slot-Window');
            winimages.classList.add('Slot-Window');
            SlotWindow.classList.add('hidden');
            buttonDiv.classList.add('hidden');
            buttonok.textContent = 'ok';
            winimages.append(assignedimg);
            winimages.append(buttonok);
            buttonok.addEventListener('click', () => {
                winimages.classList.add('hidden');
                buttonDiv.classList.remove('hidden');
                winimages.classList.remove('TrueWinImages');
                winimages.classList.remove('Slot-Window');
                SlotWindow.classList.add('Slot-Window');
                SlotWindow.classList.remove('hidden');
            });
            fetchData();
        }
        if (laharl == 3) {
            fetchData();
            Alert.innerHTML = "The one true Overlord!";
            update(ref(database, 'Money-Balance'), {
                Credit: increment(200)
            });
            update(ref(database, 'Tokens'), {
                LaharlToken: increment(1)
            });
            update(ref(database, 'Money-Balance'), {
                Profit: increment(200)
            });
            assignedimg.src = './Images/LaharlGif.gif';
            winimages.classList.remove('hidden');
            SlotWindow.classList.remove('Slot-Window');
            winimages.classList.add('Slot-Window');
            SlotWindow.classList.add('hidden');
            buttonDiv.classList.add('hidden');
            buttonok.textContent = 'ok';
            winimages.append(assignedimg);
            winimages.append(buttonok);
            buttonok.addEventListener('click', () => {
                winimages.classList.add('hidden');
                buttonDiv.classList.remove('hidden');
                winimages.classList.remove('TrueWinImages');
                winimages.classList.remove('Slot-Window');
                SlotWindow.classList.add('Slot-Window');
                SlotWindow.classList.remove('hidden');
            });
            fetchData();
        }
    }
});
