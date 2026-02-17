const findTheOldest = function(persons) {
    let listOfAge = [];
    const currentDate = (new Date()).getFullYear();

    persons.forEach(x => {
        if (!x.hasOwnProperty('yearOfDeath')) {
            x.yearOfDeath = currentDate;
        }
        listOfAge.push(x.yearOfDeath-x.yearOfBirth)
     }
    )
    
    let targetIndex = 0;

    for (let i = 1; i < listOfAge.length; i++) {
        if (listOfAge[i] > listOfAge[targetIndex]) {
            targetIndex = i;
        }
    }

    return persons[targetIndex]
};

// Do not edit below this line
module.exports = findTheOldest;
