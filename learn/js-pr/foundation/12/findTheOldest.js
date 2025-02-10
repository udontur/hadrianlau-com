const findTheOldest = function(listOfPeople) {
    let oldestPerson={
        name: "",
        age: 0,
    }
    for(let current of listOfPeople){
        let currentPerson={...current};
        currentPerson.age=currentPerson.yearOfDeath-currentPerson.yearOfBirth;
        if(currentPerson.age>oldestPerson.age){
            oldestPerson.age=currentPerson.age;
            oldestPerson.name=currentPerson.name;
        }
        //console.log(oldestPerson);
        //console.log(currentPerson);
    }
    console.log(typeof oldestPerson.name);
    
    return 0;
};

// Do not edit below this line
module.exports = findTheOldest;
