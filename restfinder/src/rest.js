
import React, { useRef, useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import mapboxgl from 'mapbox-gl';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
const Rest = ({restData}) => {
//var dataSet = [];
const mapContainer = useRef(null);
const [map, setMap] = useState(null);
//const map = useRef(null);
const [data, setData] = useState(restData.results);
const [zoom, setZoom] = useState(15);
const[lat, setLat] = useState(38.0335540);
const [long, setLong] = useState(-78.5079800);
const styles = {
  width: "100vw",
  height: "calc(100vh - 80px)",
  position: "absolute"
};
 // if (map.current) return; // initialize map only once
 useEffect(() => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYmViOG5qIiwiYSI6ImNrb3locG90cTBtNGMyb3BncDVyOGQ0dXYifQ.jZZU_v_IQ5iQzWeBr_kbFA';
  const initializeMap = ({ setMap, mapContainer }) => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: [restData.results[0].geometry.location.lng, restData.results[0].geometry.location.lat],
      zoom: zoom
    });

    map.on("load", () => {
      setMap(map);
      map.resize();
    });
  };

   if (!map) initializeMap({ setMap, mapContainer });
 if(map){
    var markerHeight = 50, markerRadius = 10, linearOffset = 25;

    var popupOffsets = {
      'top': [0, 0],
      'top-left': [0,0],
      'top-right': [0,0],
      'bottom': [0, -markerHeight],
      'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
      'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
      'left': [markerRadius, (markerHeight - markerRadius) * -1],
      'right': [-markerRadius, (markerHeight - markerRadius) * -1]
      };
  var marker = new mapboxgl.Marker()
  .setLngLat([restData.results[0].geometry.location.lng, restData.results[0].geometry.location.lat])
  .addTo(map);
 
    var popup = new mapboxgl.Popup({offset: popupOffsets, className: 'my-class'})
    .setLngLat([restData.results[0].geometry.location.lng, restData.results[0].geometry.location.lat])
    .setHTML(restData.results[0].name)
    .setMaxWidth("300px")
    .addTo(map);
    var marker2 = new mapboxgl.Marker()
    .setLngLat([restData.results[1].geometry.location.lng, restData.results[1].geometry.location.lat])
    .addTo(map);
   
      var popup2 = new mapboxgl.Popup({offset: popupOffsets, className: 'my-class'})
      .setLngLat([restData.results[1].geometry.location.lng, restData.results[1].geometry.location.lat])
      .setHTML(restData.results[1].name)
      .setMaxWidth("300px")
      .addTo(map);
      var marker3 = new mapboxgl.Marker()
      .setLngLat([restData.results[2].geometry.location.lng, restData.results[2].geometry.location.lat])
      .addTo(map);
     
        var popup3 = new mapboxgl.Popup({offset: popupOffsets, className: 'my-class'})
        .setLngLat([restData.results[2].geometry.location.lng, restData.results[2].geometry.location.lat])
        .setHTML(restData.results[2].name)
        .setMaxWidth("300px")
        .addTo(map);
        var marker4 = new mapboxgl.Marker()
      .setLngLat([restData.results[3].geometry.location.lng, restData.results[3].geometry.location.lat])
      .addTo(map);
     
        var popup4 = new mapboxgl.Popup({offset: popupOffsets, className: 'my-class'})
        .setLngLat([restData.results[3].geometry.location.lng, restData.results[3].geometry.location.lat])
        .setHTML(restData.results[3].name)
        .setMaxWidth("300px")
        .addTo(map);
        var marker5 = new mapboxgl.Marker()
      .setLngLat([restData.results[4].geometry.location.lng, restData.results[4].geometry.location.lat])
      .addTo(map);
     
        var popup5 = new mapboxgl.Popup({offset: popupOffsets, className: 'my-class'})
        .setLngLat([restData.results[4].geometry.location.lng, restData.results[4].geometry.location.lat])
        .setHTML(restData.results[4].name)
        .setMaxWidth("300px")
        .addTo(map);
  }
})
const update =() =>
{
    if(typeof restData.results !="undefined")
    {
        setData(restData.results);
    }
    else
        alert("Invalid Parameters");
}
const sortByDist = (e) =>
{   
  //  e.preventDefault();
  //  let dataSet = data;
   // alert(dataSet.results[0].name);
  var dataSet = data;
  if(typeof  dataSet != "undefined")
  dataSet=  dataSet.sort(function(a, b) {
        return b.geometry.location.lat - a.geometry.location.lat;
      });
      setData(dataSet);
     // alert(dataSet[0].name)
   //  n=0;

 //  setData(dataSet);\

    
}
const sortByRating = (e) =>
{   
  //  e.preventDefault();
  //  let dataSet = data;
   // alert(dataSet.results[0].name);
  var dataSet = data;
  if(typeof  dataSet != "undefined")
  dataSet=  dataSet.sort(function(a, b) {
        return b.rating - a.rating;
      });
      setData(dataSet);
     // alert(dataSet[0].name)
   //  n=0;

 //  setData(dataSet);\

    
}
const sortByPrice = (e) =>
{
   // e.preventDefault();
    var dataSet = data;
    if(typeof dataSet != "undefined")
    dataSet=  dataSet.sort(function(a, b) {
        return b.price_level - a.price_level;
      }); 
     setData(dataSet);
    //  alert(dataSet[0].name)
 //  n=0;
}
const sortByName = (e) =>
{
    var dataSet = data;
   // e.preventDefault();
   // var dataSet = data;
    //if(typeof  data.results != "undefined")
    if(typeof dataSet != "undefined")
    dataSet= dataSet.sort(function(a, b) {
        if(a.name<b.name)
            return -1;
        if(a.name > b.name )
            return 1;
        else
            return 0;
      }); 
     setData(dataSet);
      //n=0;
}
//{readData(restData)}
return (
<div>



  <Button variant="contained" color="secondary" onClick ={()=>update()}>Update Results</Button>
  <Button variant="contained" color="secondary" onClick = {()=>sortByRating()}>Sort By Rating</Button>
  <Button variant="contained" color="secondary"onClick = {()=>sortByPrice()}>Sort By Price</Button>
  <Button variant="contained" color="secondary" onClick = {()=>sortByName()}>Sort By Name</Button>
  <Button variant="contained" color="secondary" onClick = {()=>sortByDist()}>Sort By Distance</Button>
  {( typeof data[0]!="undefined"&& data[0].business_status ==="OPERATIONAL") ? (
        <Card  >
          <CardContent>
        <Typography  color="textSecondary" gutterBottom>
        Restaurants: { data[0].name}
        </Typography>
        <Typography  color="textSecondary" gutterBottom>
        Price: { data[0].price_level}
        </Typography>
        <Typography  color="textSecondary" gutterBottom>
        Rating: { data[0].rating}
        </Typography></CardContent>
        <CardActions>
        <Link href={`http://www.google.com/maps/place/${data[2].geometry.location.lat},${data[2].geometry.location.lng}`}>
        Get Directions
      </Link>
        </CardActions>
        </Card >
        
    ): (
      <div></div>
    )}
   {( typeof data[1]!="undefined" && data[1].business_status ==="OPERATIONAL") ? (
       <Card  >
       <CardContent>
     <Typography  color="textSecondary" gutterBottom>
     Restaurants: { data[1].name}
     </Typography><Typography  color="textSecondary" gutterBottom>
        Price: { data[1].price_level}
        </Typography>
        <Typography  color="textSecondary" gutterBottom>
        Rating: { data[1].rating}
        </Typography></CardContent>
        <CardActions>
        
        <Link href={`http://www.google.com/maps/place/${data[1].geometry.location.lat},${data[1].geometry.location.lng}`}>
        Get Directions
      </Link>
        </CardActions>
     </Card >
    ): (
      <div></div>
    )}
    
    {(  typeof data[2]!="undefined" && data[2].business_status ==="OPERATIONAL") ? (
       <Card  >
       <CardContent>
     <Typography  color="textSecondary" gutterBottom>
     Restaurants: { data[2].name}
     </Typography><Typography  color="textSecondary" gutterBottom>
        Price: { data[2].price_level}
        </Typography>
        <Typography  color="textSecondary" gutterBottom>
        Rating: { data[2].rating}
        </Typography></CardContent>
        <CardActions>
        <Link href={`http://www.google.com/maps/place/${data[2].geometry.location.lat},${data[2].geometry.location.lng}`}>
        Get Directions
      </Link>
        </CardActions>
     </Card >
    ): (
      <div>
        
      </div>
    )}
    {( typeof data[3]!="undefined" && data[3].business_status ==="OPERATIONAL") ? (
        
        <Card  >
          <CardContent>
        <Typography  color="textSecondary" gutterBottom>
        Restaurants: { data[3].name}
        </Typography>
        <Typography  color="textSecondary" gutterBottom>
        Price: { data[3].price_level}
        </Typography>
        <Typography  color="textSecondary" gutterBottom>
        Rating: { data[3].rating}
        </Typography></CardContent>
        <CardActions>
        <Link href={`http://www.google.com/maps/place/${data[3].geometry.location.lat},${data[3].geometry.location.lng}`}>
        Get Directions
      </Link>
        </CardActions>
        </Card >
    ): (
      <div></div>
    )}
    {( typeof data[4]!="undefined" && data[4].business_status ==="OPERATIONAL") ? (
        
        <Card  >
          <CardContent>
        <Typography  color="textSecondary" gutterBottom>
        Restaurants: { data[4].name}
        </Typography><Typography  color="textSecondary" gutterBottom>
        Price: { data[4].price_level}
        </Typography>
        <Typography  color="textSecondary" gutterBottom>
        Rating: { data[4].rating}
        </Typography></CardContent>
        <CardActions>
        <Link href={`http://www.google.com/maps/place/${data[4].geometry.location.lat},${data[4].geometry.location.lng}`}>
        Get Directions
      </Link>
        </CardActions>
        </Card >
    ): (
      <div></div>
    )}
    {( typeof data[5]!="undefined" && data[5].business_status ==="OPERATIONAL") ? (
        
        <Card  >
        <CardContent>
      <Typography  color="textSecondary" gutterBottom>
      Restaurants: { data[5].name}
      </Typography><Typography  color="textSecondary" gutterBottom>
        Price: { data[5].price_level}
        </Typography>
        <Typography  color="textSecondary" gutterBottom>
        Rating: { data[5].rating}
        </Typography></CardContent>
        <CardActions>
        <Link href={`http://www.google.com/maps/place/${data[5].geometry.location.lat},${data[5].geometry.location.lng}`}>
        Get Directions
      </Link>
        </CardActions>
      </Card >
    ): (
      <div></div>
    )}
    {( typeof data[6]!="undefined" && data[6].business_status ==="OPERATIONAL") ? (
        
        <Card  >
        <CardContent>
      <Typography color="textSecondary" gutterBottom>
      Restaurants: { data[6].name}
      </Typography><Typography  color="textSecondary" gutterBottom>
        Price: { data[6].price_level}
        </Typography>
        <Typography  color="textSecondary" gutterBottom>
        Rating: { data[6].rating}
        </Typography></CardContent>
        <CardActions>
        <Link href={`http://www.google.com/maps/place/${data[6].geometry.location.lat},${data[6].geometry.location.lng}`}>
        Get Directions
      </Link>
        </CardActions>
      </Card >
    ): (
      <div></div>
    )}
    {( typeof data[7]!="undefined" && data[7].business_status ==="OPERATIONAL") ? (
        
        <Card  >
        <CardContent>
      <Typography color="textSecondary" gutterBottom>
      Restaurants: { data[7].name}
      </Typography><Typography  color="textSecondary" gutterBottom>
        Price: { data[7].price_level}
        </Typography>
        <Typography  color="textSecondary" gutterBottom>
        Rating: { data[7].rating}
        </Typography></CardContent>
        <CardActions>
        <Link href={`http://www.google.com/maps/place/${data[7].geometry.location.lat},${data[7].geometry.location.lng}`}>
        Get Directions
      </Link>
        </CardActions>
      </Card >
    ): (
      <div></div>
    )}
    {(  typeof data[8]!="undefined" &&data[8].business_status ==="OPERATIONAL") ? (
        
        <Card  >
          <CardContent>
        <Typography color="textSecondary" gutterBottom>
        Restaurants: { data[8].name}
        </Typography><Typography  color="textSecondary" gutterBottom>
        Price: { data[8].price_level}
        </Typography>
        <Typography  color="textSecondary" gutterBottom>
        Rating: { data[8].rating}
        </Typography></CardContent>
        <CardActions>
        <Link href={`http://www.google.com/maps/place/${data[8].geometry.location.lat},${data[8].geometry.location.lng}`}>
        Get Directions
      </Link>
        </CardActions>
        </Card >
    ): (
      <div></div>
    )} <div ref={el => (mapContainer.current = el)}style={styles} />

</div>
)
}

export default Rest;