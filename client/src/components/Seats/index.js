import React from 'react'

var seatNumber = "1A";
function incrementNumber(seatNumber){
    var seatNumberletter;
    var seatNumber;
    var numberInSeatNumber=seatNumber.subString(0);
    var letterInSeatNumber=seatNumber.subString(1);
    if(seatNumberletter === 'A' || seatNumberletter === 'B'||seatNumberletter === 'C'||seatNumberletter === 'D'||seatNumberletter === 'E' )
     {  seatNumberletter = letterInSeatNumber;
        seatNumberletter = seatNumberletter +1;
        numberInSeatNumber= letterInSeatNumber;}

    if(letterInSeatNumber === '6'){


    } 
function Seats(seatsAvailableEco,seatsAvailableBus, SeatsAvailableFirst) {



};

let seats={
    seatNumber: seatNumber,
    isReserved: false
};

    return (
        <div>
            
        </div>
    )
}

export default Seats
