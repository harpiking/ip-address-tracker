const button = document.querySelector(".btn");
const ip = document.querySelector(".ipAdd");
const loc = document.querySelector(".loc");
const tZ = document.querySelector(".tZ");
const isp = document.querySelector(".isp");

button.addEventListener("click", handleClick);

function handleClick(){
    const value = document.querySelector(".ipInput").value;
    const url = `https://geo.ipify.org/api/v1?apiKey=at_L8J9XDZ3QLy4SAEzvuji8gufdTNwL&ipAddress=${value}`;

    fetch(url)
    .then((res) => res.json())
    .then((data) =>{
            ip.innerHTML = `<span>${data.ip}</span>`;
            loc.innerHTML = `<span>${data.location.region},  ${data.location.city} <br> ${data.location.postalCode}</span>`
            tZ.innerHTML = `<h4>UTC  ${data.location.timezone}</span>`
            isp.innerHTML = `<span>${data.isp}</span>`

            let lat = data.location.lat;
            let lon = data.location.lng;
           
     var mymap = L.map('mapid').setView([lat, lon], 15);
     
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaGFycGlraW5nIiwiYSI6ImNra3lxZmhoZDA0MzAybmxicjI4OWh4bDkifQ.3JSINxaIvevm4EicvvKhUw'
    }).addTo(mymap);

    var myIcon = L.icon({
      iconUrl: 'images/icon-location.svg',
      iconSize: [50, 70],
      iconAnchor: [30, 90],
      popupAnchor: [-3, -76],
  });
    var marker = L.marker([lat, lon], {icon: myIcon}).addTo(mymap);
    console.log(marker);
    //marker.bindPopup(`<img src="images/icon-location.svg">`).openPopup();

  })
}

/*var map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13
});*/
