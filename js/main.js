$(document).ready(function (){
    $(".slider-2").slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
       variableWidth: true
    });
});

let map;
      async function initMap() {
        const { Map } = await google.maps.importLibrary("maps");

        map = new Map(document.getElementById("map"), {
          center: { lat: 40.6745, lng: -73.9205 },
          zoom: 14,
          disableDefaultUI: true,
          styles: [
            {
              "elementType": "geometry",
              "stylers": [{ "color": "#f5f5f5" }]
            },
            {
              "elementType": "labels.icon",
              "stylers": [{ "visibility": "off" }]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#616161" }]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [{ "color": "#f5f5f5" }]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#bdbdbd" }]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [{ "color": "#eeeeee" }]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#757575" }]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [{ "color": "#e5e5e5" }]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#9e9e9e" }]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [{ "color": "#ffffff" }]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#757575" }]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [{ "color": "#dadada" }]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#616161" }]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#9e9e9e" }]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [{ "color": "#e5e5e5" }]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [{ "color": "#eeeeee" }]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [{ "color": "#c9c9c9" }]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#9e9e9e" }]
            }
          ]
        });

        const svgString = `
          <svg width="106" height="106" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.3" cx="53" cy="53" r="53" fill="white"/>
            <g opacity="0.8" filter="url(#filter0_d_9_39)">
              <circle cx="53" cy="53" r="35" fill="white"/>
            </g>
            <circle cx="53" cy="53" r="8" fill="#7E5AFF"/>
            <defs>
              <filter id="filter0_d_9_39" x="3" y="3" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="7.5"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.690196 0 0 0 0 0.690196 0 0 0 0 0.690196 0 0 0 0.25 0"/>
                <feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_9_39"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9_39" result="shape"/>
              </filter>
            </defs>
          </svg>
        `;
        const encodedSvg = encodeURIComponent(svgString);

        const svgIcon = {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodedSvg,
          scaledSize: new google.maps.Size(106, 106), 
        };

        new google.maps.Marker({
          position: { lat: 40.6766, lng: -73.9240 },
          map: map,
          icon: svgIcon,
          title: "A marker using a custom SVG image."
        });
        
      }

      initMap();


const imagesBtn = document.querySelector(".gallery-section__see-more-btn");
const gallerySectionWrapper =document.querySelector(".gallery-section__wrapper");
const gallerySection =document.querySelector(".gallery-section");
let moreImagesContainer;

imagesBtn.addEventListener("click", (e) => {

  gallerySection.classList.add("gallery-section--loaded-more");

  if (imagesBtn.textContent === "SEE MORE") {
  moreImagesContainer = document.createElement("div");
  moreImagesContainer.classList.add("gallery-section__images--second-container")
  const image1 = document.createElement("img");
  image1.src = "./images/Image4.png";
  const image2 = document.createElement("img");
  image2.src = "./images/Image3.png";
  const image3 = document.createElement("img");
  image3.src = "./images/Image2.png";
  const image4 = document.createElement("img");
  image4.src = "./images/Image5.png";
  const image5 = document.createElement("img");
  image5.src = "./images/Image5.png";
  const image6 = document.createElement("img");
  image6.src = "./images/Image4.png";
  const image7 = document.createElement("img");
  image7.src = "./images/Image3.png";
  const image8 = document.createElement("img");
  image8.src = "./images/Image2.png";
  moreImagesContainer.appendChild(image1);
  moreImagesContainer.appendChild(image2);
  moreImagesContainer.appendChild(image3);
  moreImagesContainer.appendChild(image4);
  moreImagesContainer.appendChild(image5);
  moreImagesContainer.appendChild(image6);
  moreImagesContainer.appendChild(image7);
  moreImagesContainer.appendChild(image8);
  gallerySectionWrapper.appendChild(moreImagesContainer);

  imagesBtn.textContent= "SEE LESS";

 }else{
  moreImagesContainer.style.display = "none";
  imagesBtn.textContent = "SEE MORE";
}

});


