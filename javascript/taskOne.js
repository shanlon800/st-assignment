let destinationName = document.getElementById('q-destination').value;
let checkInDate = document.getElementById('q-localised-check-in').value;
let checkOutDate = document.getElementById('q-localised-check-out').value;

function printToConsole(destinationName, checkInDate, checkOutDate){
  return `${destinationName} | ${checkInDate} | ${checkOutDate}`;
}

console.log(printToConsole(destinationName, checkInDate, checkOutDate));
