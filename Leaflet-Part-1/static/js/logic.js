const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

//load data from url
d3.json(url).then(data =>{
    // console.log(data);
    data.features.forEach(function(item){
        // console.log(item);
        let lat = item.geometry.coordinates[1]
        let lng = item.geometry.coordinates[0]
        let mag = item.properties.mag;
        let dep = item.geometry.coordinates[2];
        L.circle([lat, lng], {
            radius: mag*50000,
            color: "black",
            weight: 0.3,
            fillColor: getColor(dep),
            fillOpacity: 1,
        }).bindPopup(`<h1>${item.properties.place}</h1> <hr> <h3>Magnitude: ${mag}</h3> <h3>Depth: ${dep}</h3>`).addTo(myMap);
    });
});

 // Create a map object.
let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 3
});
  
// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);
  
function getColor(dep) {
    if (dep <= 10) {
        return "#9bf541"
    } else if (dep <= 30) {
        return "#dcf238"
    } else if (dep <= 50) {
        return "#fbd335"
    } else if (dep <= 70) {
        return "#ffac37"
    } else if (dep <= 90) {
        return "#ff9558"
    } else {
        return "#ff4f5b"
    }
}

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (myMap) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [-10, 10, 30, 50, 70, 90],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(myMap);