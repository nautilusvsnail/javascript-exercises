const findTheOldest = function(people) {
    // people is an array of person objects
    // const people = [
    //   {
    //     name: "Carly",
    //     yearOfBirth: 1942,
    //     yearOfDeath: 1970,
    //   },
    //   {
    //     name: "Ray",
    //     yearOfBirth: 1962,
    //     yearOfDeath: 2011,
    //   },
    //   {
    //     name: "Jane",
    //     yearOfBirth: 1912,
    //     yearOfDeath: 1941,
    //   },
    // ]
    const thisYear = new Date().getFullYear();
    
    people.forEach((person) => {
        if (person.yearOfDeath) {
            person.age = person.yearOfDeath - person.yearOfBirth;
        } else {
            person.age = thisYear - person.yearOfBirth;
            console.log(`person: ${person.name}  age: ${person.age}`);
        }
        
    })

    // people.forEach((person) => console.log(`name: ${person.name} age: ${person.age}`));

    people.sort((a, b) => b.age - a.age);

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
