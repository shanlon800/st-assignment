let destinationArray = document.getElementById('q-destination').value.split(',');
let city = destinationArray[0];
let messagingWrapper = document.getElementsByClassName('compression-messaging-wrapper')[0]

messagingWrapper.insertAdjacentHTML('afterend', `<div style='padding: 14px 16px 16px 16px; border: 1px solid #b6b6b6; border-radius: 3px; margin-bottom: 12px;' id='results-counter'><h1>Viewing ${document.getElementsByClassName('hotel').length} ${city} Hotels</h1></div>`);
let counterMessage = document.getElementById('results-counter');
let hotelList = document.getElementsByClassName('listings infinite-scroll-enabled')[0];

let observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    counterMessage.innerHTML = `<div id='results-counter'><h1>Viewing ${document.getElementsByClassName('hotel').length} ${city} Hotels</h1></div>`;
  });
});
var config = {
  childList: true,
};
observer.observe(hotelList, config);
