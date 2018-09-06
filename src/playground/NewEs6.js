// const person = {
//     name : 'Nilesh',
//     age : 20,
//     location : {
//         city : 'Pune',
//         temp : 70
//     },

// }

// const {name,age} = person
// const {city,temp} = person.location

// console.log(`${name} is ${age}`);
// console.log(`${name} lives in ${city} where temprature is ${temp}`);


const book = {
    name : 'Ego is Enemy',
    author : 'Rayan Holiday',
    publisher : {
        
    }
}

const {name : publisher = "Self Publish"} = book.publisher

console.log(publisher);

const coffee = ['Coffee (hot)', '$2.50', '$2.75', '$2.35'];

const [coffeeName, , price = '$1'] = coffee

console.log(`${coffeeName} price is ${price}`);
