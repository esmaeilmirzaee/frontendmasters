const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

console.log(daysOfWeek[0]);
console.log(daysOfWeek);

console.log(daysOfWeek.length); // length is a property
console.log(daysOfWeek.join(' | ')); // join is a method or function


daysOfWeek.push('Mercredi');
console.log(daysOfWeek);

daysOfWeek.shift('Vendredi');
daysOfWeek.unshift('Lundi');

const courses = [
    {name: "Esmaeil MIRZAEE"},
    {name: "Brian Holt"},
    {name: "Brian Holt"}
]

for (let i = 0; i < courses.length; i++) {
    console.log(courses[i]);
    console.log(courses[i].name);
}

daysOfWeek.forEach(function(day) {
    console.log(day.toUpperCase());
});
