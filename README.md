# leaflet-challenge
// use d3 to fetch the data and callback
```const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(url).then(data =>{
    // Data processing and visualization code here...
});
```
//extracting information from Json 
```
d3.json(url).then(data =>{
    // console.log(data);
    data.features.forEach(function(item){}
```

//creating the map and adding a tile layer
```let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 3
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

```
//color function
```function getColor(dep) {
    // Color assignment logic based on depth...
}
```
//legend on js
```var legend = L.control({position: 'bottomright'});

legend.onAdd = function (myMap) {
    // Legend creation code...
};

legend.addTo(myMap);
```
//legend on css
```.legend {
  padding: 6px 8px;
  font: 14px Arial, Helvetica, sans-serif;
  background: white;
  background: rgba(255, 255, 255, 0.8);
  line-height: 24px;
  color: #555;
}
.legend i {
  width: 20px;
  height: 20px;
  float: left;
  margin-right: 20px;
  opacity: 0.9;
}```