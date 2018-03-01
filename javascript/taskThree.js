let displayList = [];
document.getElementById('filters').insertAdjacentHTML('afterend', "<div style='padding: 14px 16px 16px 16px; border: 1px solid #b6b6b6; border-radius: 3px; margin-top: 12px; background:#F5F5F5; width: 190px;' id='select-history'><h4>Selected History</h4></div>");

function alreadyListed(array, hotelId){
  for (let step = 0; step < array.length; step++){
    let hotelObject = array[step];
    if (hotelObject.id === hotelId) {
      return true;
    }
  }
  return false;
}

function priceSort(array){
  array.sort(function(a, b) {
    return parseFloat(a.price) - parseFloat(b.price);
  });
  return array;
}

function handleClick(button){
  let selectHistory = document.getElementById('select-history');
  let hotelPrice;
  let hotelName = button.parentNode.parentNode.getElementsByClassName('p-name')[0].innerText;
  let priceDiv = button.parentNode.parentNode.getElementsByClassName('price')[0];
  let hotelId = button.parentNode.parentNode.parentNode.parentNode.getAttribute('data-hotel-id');

  if (priceDiv.getElementsByTagName('ins').length > 0){
    hotelPrice = priceDiv.getElementsByTagName('ins')[0].innerText.replace(/[,$]/g, '');
  } else{
    hotelPrice = priceDiv.getElementsByTagName('a')[0].innerText.replace(/[,$]/g, '');
  }
  if (alreadyListed(displayList, hotelId) === false){
    displayList.push({name: hotelName, price: hotelPrice, id: hotelId});
  }

  let sortedList = priceSort(displayList);
  selectHistory.innerHTML = `<div id='select-history'><h4>Selected Hotels</h4></div>`;
  sortedList.map(function(hotel){
    return(
      selectHistory.insertAdjacentHTML('beforeend', `<h5>${hotel.name} | $${hotel.price}</h5>`)
    );
  });
}

let hotelListings = document.getElementsByClassName('listings infinite-scroll-enabled')[0];
let selectButton = Array.from(document.getElementsByClassName('cta-wrap'));
selectButton.forEach(function(button) {
  button.onclick = function() {handleClick(button);};
});

let clickObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    Array.from(document.getElementsByClassName('cta-wrap')).forEach(function(button) {
      button.removeAttribute("onclick");
    });

    selectButton = Array.from(document.getElementsByClassName('cta-wrap'));
    selectButton.forEach(function(button) {
      button.onclick = function() {handleClick(button);};
    });
  });
});
var config = {
  childList: true,
};
clickObserver.observe(hotelListings, config);
