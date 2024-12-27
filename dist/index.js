"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./database")); // Import database connection
function getToken() {
    return __awaiter(this, void 0, void 0, function* () {
        let conn;
        try {
            conn = yield database_1.default.getConnection(); // Get connection from pool
            const rows = yield conn.query('SELECT * FROM users');
            console.log(rows); // Log the query results
            return rows;
        }
        catch (err) {
            console.error('Error fetching users:', err);
        }
        finally {
            if (conn)
                conn.release(); // Always release the connection back to the pool
        }
    });
}
// Fetch tokens and display
getToken().then((Tokens) => {
    Tokens.forEach((Token) => {
        console.log(`Name: ${Token.TokenName}, Value: ${Token.TokenValue}`);
    });
});
const Slot1 = document.querySelector("#Slot1");
const NumberSlot1 = document.querySelector("#NumberSlot1");
const Slot2 = document.querySelector("#Slot2");
const NumberSlot2 = document.querySelector("#NumberSlot2");
const Slot3 = document.querySelector("#Slot3");
const NumberSlot3 = document.querySelector("#NumberSlot3");
const Button = document.querySelector('#ButtonRoller');
const Button2 = document.querySelector('#Buttonreset');
var eventTrigger = document.querySelector("#SlotImage1");
var work = document.createElement("img");
var eventTrigger2 = document.querySelector("#SlotImage2");
var work2 = document.createElement("img");
var eventTrigger3 = document.querySelector("#SlotImage3");
var work3 = document.createElement("img");
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
const LoveToken = document.querySelector("#loveToken");
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
Button2.addEventListener('click', () => {
    Filled1 = false;
    Filled2 = false;
    Filled3 = false;
    eventTrigger.replaceChildren(work.src = "");
    eventTrigger2.replaceChildren(work2.src = "");
    eventTrigger3.replaceChildren(work3.src = "");
});
Button.addEventListener('click', () => {
    Filled1 = false;
    Filled2 = false;
    Filled3 = false;
    flonne = 0;
    etna = 0;
    laharl = 0;
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
    if (a >= 5 && Filled1 == false && a <= 6) {
        Filled1 = true;
        work.src = collection[0];
        work.style.width = "30px";
        eventTrigger.append(work);
        flonne += 1;
    }
    if (a >= 1 && Filled1 == false && a <= 3) {
        Filled1 = true;
        work.src = collection[1];
        work.style.width = "30px";
        eventTrigger.append(work);
        laharl += 1;
    }
    if (b >= 5 && Filled2 == false && b <= 6) {
        Filled2 = true;
        work2.src = collection[0];
        work2.style.width = "30px";
        eventTrigger2.append(work2);
        flonne += 1;
    }
    if (b >= 1 && Filled2 == false && b <= 3) {
        Filled2 = true;
        work2.src = collection[1];
        work2.style.width = "30px";
        eventTrigger2.append(work2);
        laharl += 1;
    }
    if (c >= 5 && Filled3 == false && c <= 6) {
        Filled3 = true;
        work3.style.width = "30px";
        work3.src = collection[0];
        eventTrigger3.append(work3);
        flonne += 1;
    }
    if (c >= 1 && Filled3 == false && c <= 3) {
        Filled3 = true;
        work3.src = collection[1];
        work3.style.width = "30px";
        eventTrigger3.append(work3);
        laharl += 1;
    }
    if (etna == 3) {
    }
    if (flonne == 3) {
        var FLooneend = document.createElement('p');
        FLooneend.textContent = flonne + "how many flooone";
        Slot1.append(FLooneend);
        flonneToken += 1;
        FlonneToken.innerHTML = flonneToken;
    }
    if (laharl == 3) {
        laharlToken += 1;
        LaharlToken.innerHTML = laharlToken;
    }
});
//# sourceMappingURL=index.js.map