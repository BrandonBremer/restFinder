import './App.css';
import React, { useEffect, useState } from "react";
import Rest from './rest'
export default function App() {
  
  //const [lat, setLat] = useState([]);
 // const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url  = new URL("https://maps.googleapis.com/maps/api/place/nearbysearch/json?"); 
      //navigator.geolocation.getCurrentPosition(function(position) {
        //setLat(position.coords.latitude);
        //setLong(position.coords.longitude);
    //const location = `location=${lat},${long}`;
    const location = 'location=-33.8670522,151.1957362';
    const radius = '&radius=2000';
    const type = '&keyword=restaurant';
    const key = '&key=AIzaSyCAaq8naO2mIatbIWG1U4tbVlrU36nE0YI';

   // const restaurantSearchUrl = url + location + radius + type + key;
   // await fetch(`${restaurantSearchUrl}`)
   await fetch (`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=2000&keyword=restaurant&key=AIzaSyCAaq8naO2mIatbIWG1U4tbVlrU36nE0YI`)
      .then(res => res.json())
      .then(result => {
        setData(result.results)
      });
      
    }
    fetchData();
  })

  return (
    <div className="App">
    <Rest restData={data}/>
   </div>
  );
}