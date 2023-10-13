const findTheOldest = function(people_array) {
    const CURRENT_YEAR = new Date().getFullYear();
    let max_age = 0;
    let oldest_person = '';
    for (let i=0; i < people_array.length; i++) { 
        let age = 0;
        let person_obj = people_array[i];
        let name = person_obj.name;
        if (person_obj.hasOwnProperty('yearOfDeath')) {
            console.log(name, 'has death date');
            age = person_obj.yearOfDeath - person_obj.yearOfBirth;
        } else {
            console.log(name, 'has no death date')
            age = CURRENT_YEAR - person_obj.yearOfBirth;
        }
        if (age > max_age) {
            max_age = age;
            oldest_person = person_obj;
        }
    }
    return oldest_person;
};

// Do not edit below this line
module.exports = findTheOldest;
