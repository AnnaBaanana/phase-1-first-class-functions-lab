// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(names) {
    return names.slice(0,2)
};

const returnLastTwoDrivers = function(names) {
    return names.slice([names.length-2],[names.length])
}
//console.log("this is the test:", returnFirstTwoDrivers(drivers))

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//console.log(selectingDrivers[0](drivers));

function createFareMultiplier(multiplier) {
    const fareMultiplier = function(fare) {
        return fare*multiplier};
    return fareMultiplier;
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
};

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
};

function selectDifferentDrivers(names, choice) {
    return choice(names);
}

const selectedDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
console.log(selectedDrivers)