import './App.css';
import React, { useRef, useEffect, useState } from "react";
import Rest from './rest'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import data1 from "./data1.json";

import mapboxgl from 'mapbox-gl';

//import Filter from './input'
mapboxgl.accessToken = 'pk.eyJ1IjoiYmViOG5qIiwiYSI6ImNrb3locG90cTBtNGMyb3BncDVyOGQ0dXYifQ.jZZU_v_IQ5iQzWeBr_kbFA';
export default function App() {
  const[lat, setLat] = useState(38.0335540);
  const [long, setLong] = useState(-78.5079800);
  const [data, setData] = useState([data1]);
  const [type, setType] = useState([]);
 // const [data2,setData2] =useState([]);
  const [locationData, setLocation] = useState([]);
 
 // const mapContainer = useRef(null);
 // const map = useRef(null);
  const [ userInput, setUserInput ] = useState('');
  const [ userInput2, setUserInput2 ] = useState('');
  const [zoom, setZoom] = useState(12);
  //setLat(lat = -33.8670522);
  //setLong(long = 151.1957362);
  useEffect(() => {
    const fetchData = async ()=> {
     const url  = new URL("https://maps.googleapis.com/maps/api/place/nearbysearch/json?"); 

  const location = `location=${lat},${long}`;
   //const location = 'location=-33.8670522,151.1957362';
    const radius = '&radius=2000';
    const filter = `&keyword=${type}`;
    const key = '&key=AIzaSyCAaq8naO2mIatbIWG1U4tbVlrU36nE0YI';

   const restaurantSearchUrl = url + location + radius + filter+ key;
  
   await fetch(`${restaurantSearchUrl}`)
   //  await fetch ('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.0335540,-78.5079800&radius=2000&keyword=restaurant&key=AIzaSyCAaq8naO2mIatbIWG1U4tbVlrU36nE0YI')
      .then(res => res.json())
      .then(result => {
   
        setData(result)
        
     
      });
      
    }   
    fetchData();
   // if (map.current) return; // initialize map only once
     //map.current = new mapboxgl.Map({
    //container: mapContainer.current,
    //style: 'mapbox://styles/mapbox/streets-v11',
    //center: [long, lat],
    //zoom: zoom
 // });

  })
  
 
  
  
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleChange2 = (e) => {
      setUserInput2(e.currentTarget.value)
  }
 
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setType(userInput);
      //  alert(data.results[0].name);
        setUserInput("");
    }
 
    const handleSubmit2 = (e) => {
      e.preventDefault();
      let add = userInput2;
      //{alert(lat)}
      fetch (`http://api.positionstack.com/v1/forward?access_key=c36f5a82d94223eabe3f8a90ae3f6463&query=${add}`)
      .then(res => res.json()) 
      .then(result => {
     
       setLocation(result)
   
      });
      if(typeof locationData.data != 'undefined')
      {
      setLat(locationData.data[0].latitude);
      setLong(locationData.data[0].longitude);
      }
 
      setUserInput("");
  }
 //<div ref={mapContainer} className="map-container" />
  return (
    <div className="App">
    
      <form onSubmit={handleSubmit} >
            <Input value={userInput} color="secondary" type="text" onChange={handleChange} placeholder="Enter what type of restaraunt you are looking for"/>
            <Button variant="contained" color="primary" onClick={handleSubmit}>Filter</Button>
            
        </form>
        <form onSubmit={handleSubmit2}>
            <Input  color="secondary" value={userInput2} type="text" onChange={handleChange2} placeholder="What is your address?"/>
            <Button variant="contained" color="primary" onClick={handleSubmit2}>Search by Location</Button>
            
        </form>
       
    {(typeof data.results != 'undefined')?
    ( 
     <Rest restData={data} />):
     <div></div>
    }
      
    
   </div>
  );
}