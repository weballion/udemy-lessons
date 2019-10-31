'use strict';

let money, time;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time  = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
        if ((typeof(a))==="string" && a!=null && a!='' && a.length<50 && b!= null && b!='' && b.length<10) {
            console.log("DONE");
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert("Бюджет на 1 день: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Меньше 100");
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Больше 100 и меньше 2000");
    } else {
        console.log("Больше 2000");
    }
}

detectLevel();

function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt("Какая сумма накомлений?", ""),
            percent = +prompt("Под какой %?", "");
        appData.monthIncome = save/100/12*percent;
        alert("Доход с депозита: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i <= 3; i++) {
        let a = prompt("Статья необязательных расходов?", '');
        if ((typeof(a))==="string" && a!=null && a!='' && a.length<50) {
            console.log("DONE");
            appData.optionalExpenses[i] = a;
        } else {
            i--;
        }
    }
}