'use strict';

let money = +prompt('Ваш бюджет на месяц?', ''),
    time  = prompt('Введите дату в формате YYYY-MM-DD', '');
    

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ((typeof(a))==="string" && a!=null && a!='' && a.length<50 && b!= null && b!='' && b.length<10) {
        console.log("DONE");
        appData.expenses[a] = b;
    } else {
        i = 0;
        console.log("Возврат к вопросам");
    }
}

appData.moneyPerDay = appData.budget/30;
alert("Бюджет на 1 день: " + appData.moneyPerDay);
//console.log(appData);

if(appData.moneyPerDay < 100) {
    console.log("Меньше 100");
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Больше 100 и меньше 2000");
} else {
    console.log("Больше 2000");
}

console.log(appData.expenses);