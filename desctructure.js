const person = {
    name: 'Jack William',
    age: 18,
    job: 'facebooker',
    gfName: 'Emma Watson',
    address: "Nikunja",
    phone:'01010100101',
    friends: ['Tom Hanks', 'Tom Cruise','Tom Hiddleston']
}


const complexObject= {
    name: 'abc',
    info:{
        address:'kola bagan',
        leader: 'tiger bhai'
    }
}

const {leader} = complexObject.info;
console.log(leader);
const {phone, gfName, salary, address} = person;

const friends = ['Sakib', 'Rashed', 'Sami','Mazed', 'Sazed'];
const [chotoFriend,nextFriend, ...restFriends] = friends;
// const gfName = person.gfName;
// const phone = person.phone;
// console.log(gfName);
// console.log(gfName);
// console.log(gfName, phone, salary, address);
// console.log(gfName, phone,salary, address);
console.log(chotoFriend, nextFriend, restFriends);