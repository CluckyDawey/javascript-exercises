const findTheOldest = function(persons) {
    let listOfAge = [];
    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    persons.forEach(x => {

        if (!x.hasOwnProperty('yearOfDeath')) {
            x.yearOfDeath = currentYear;
        }

        listOfAge.push(x.yearOfDeath-x.yearOfBirth)

    
     }
    )
    
    let targetIndex = 0;
    let i = 1;

    for ( i ; i < listOfAge.length; i++) {
        if (listOfAge[i] > listOfAge[targetIndex]) {
            targetIndex = i;
        }
        
    }

    console.log(listOfAge)

    return persons[targetIndex]

};

// Do not edit below this line
module.exports = findTheOldest;
