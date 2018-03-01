var printToConsole = function(destinationName, checkInDate, checkOutDate){
  return `${destinationName} | ${checkInDate} | ${checkOutDate}`;
}


var alreadyListed = function(array, hotelId){
  for (let step = 0; step < array.length; step++){
    let hotelObject = array[step];
    if (hotelObject.id === hotelId) {
      return true;
    }
  }
  return false;
}

var priceSort = function(array){
  array.sort(function(a, b) {
    return parseFloat(a.price) - parseFloat(b.price);
  });
  return array;
}
