const form = document.getElementById('dateform');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const btn = document.querySelector('#arrow')

function buttonClick(e){
    e.preventDefault();
    calculateAge(day.value, month.value, year.value);
}

function calculateAge(day, month, year){
    month--;
    if(month < 10){
        month = '0' + month.toString()
    }
    if(day < 10){
        day = '0' + day.toString()
    }
    const birthDate = new Date(year, month, day);
    const currentDate = new Date();

    let finalyear = currentDate.getFullYear() - birthDate.getFullYear();
    let finalmonths = currentDate.getMonth() - birthDate.getMonth()
    let finaldays = currentDate.getDate() - birthDate.getDate();

    if (finalmonths < 0 || (finalmonths === 0 && finaldays < 0)) {
        finalyear--;
        finalmonths += 12;
    }

    if (finaldays < 0) {
        const lastMonthDays = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            0
        ).getDate();
        finaldays += lastMonthDays;
        finalmonths--;
    }
    const years = document.getElementById('years');
    const months = document.getElementById('months');
    const days = document.getElementById('days');
    years.innerText = finalyear;
    months.innerText = finalmonths;
    days.innerText = finaldays - 3;
}

form.addEventListener('submit', buttonClick);