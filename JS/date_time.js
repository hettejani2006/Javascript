// console.log(Temporal.Now.instant());
// const now = Temporal.Now.instant();
// const date = Temporal.PlainDate.from("2026-08-02");
// console.log(date.toString()); // "2026-08-02"   

const date = new Date();
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleTimeString());
// console.log(date.toTimeString());
// console.log(date.toUTCString());
// console.log(typeof date);


// const firstdate = new Date(2026,7,2,5,2);
const firstdate = new Date("02-08-2026,05:06:00");
console.log(firstdate.toLocaleString());


const seconddate = Date.now();
console.log(seconddate); // it is in miliseconds
console.log(firstdate.getTime()); // it is in miliseconds

const thirddate = new Date();
console.log(thirddate.getDate());
console.log(thirddate.getMonth() + 1);
console.log(thirddate.getFullYear());

console.log(thirddate.toLocaleString("default",{
    // timeStyle:"full",
    hour:"2-digit",
    minute:"2-digit",
    hour12:true,
    timeZone:"UTC",
    weekday:"long",
    day:"2-digit",
    month:"2-digit",
    year:"numeric"
}));

