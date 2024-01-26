const btn = document.querySelector(".calculate");
const date = document.querySelector(".date");
const age = document.querySelector(".age");

date.max = new Date().toISOString().split("T")[0];

let currentDate = new Date();
console.log(currentDate);

let cy = currentDate.getFullYear();
let cm = currentDate.getMonth()+1;
let cd = currentDate.getDate();

const displayAge = (year, month, day) => {
    age.style.display = 'block';
    age.innerHTML = `You are ${year} years, ${month} months and ${day} days old.`
} 

const ageCalculator = (dob) => {
    let by = dob.getFullYear();
    let bm = dob.getMonth()+1;
    let bd = dob.getDate();

    let years = cy - by;
    let months = cm - bm;
    if(months < 0){
        years--;
        months += 12;
    }
    let days = cd - bd;
    if(days < 0){
        months--;
        let maxDay = new Date(cy,bm,0).getDate();
        days+=maxDay;
    }
    console.log(years);
    console.log(months);
    console.log(days);

    displayAge(years,months,days);
}

btn.addEventListener("click", function(){
    console.log("calculating");
    let dateValue = new Date(date.value);
    console.log(dateValue); 
    ageCalculator(dateValue);
})