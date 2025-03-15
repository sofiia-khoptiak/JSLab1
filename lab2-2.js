const paragraph = "IP-адреса: 175.128.0.1 Колір RGBA: rgba (125, 200, 100, 0.7) HEX Кольори: #aabbcc #23ff4d #ag5390 Теги: <h1> <img>  Дата: 2021.02.23 Email: user@gmail.com  student1@example.com" ;
const paragraphNum = "Набір чисел: 32, 4, 0, -6, 1";

function isIPAdress(ip){
    const regEx = /(\d{1,3}).(\d{1,3}).(\d{1,3}).(\d{1,3})/gm;
    const check = regEx.test(ip);
    return check;
}

function findRGBA(text){
    const regEx = /\((\d{1,3}), (\d{1,3}), (\d{1,3}), (\b0(\.\d+)?\b|\b1(\.0+)?\s*)\)/gm;
    const found = text.match(regEx);
    if(!found) 
        return null;
    else
        return found;
}

function findHexColor(text){
    const regEx = /#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})\b/gm;
    const found = text.match(regEx);
    if(!found) 
        return null;
    else
        return found;
}

function findTags(text, tag){
    const regEx = new RegExp(`<${tag}[^>]*>`, "gm");
    const found = text.match(regEx);
    return found;
}

function findPosNum(text){
    const regEx =/-?\d+(\.\d+)?/g;
    const found = text.match(regEx) || [];
    const numbers = found.map(Number);
    return numbers.filter(num => num > 0);
}

function findDates(text){
    const regEx = /\b(1\d{3}|20[0-2]\d).(0[1-9]|1[0-2]).(\d[1-9]|1[0-9]|2[0-9]|3[0-1])/gm;
    const found = text.match(regEx);
    return found;
}

function findEmail(text){
    const regEx = /\b[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
    const found = text.match(regEx);
    return found;
}
