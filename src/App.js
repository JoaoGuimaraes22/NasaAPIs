import React, { useEffect, useState } from 'react';
import "./css/main.css";
import Picture from './components/Picture';
import Navbar from "./components/Navbar";
import Curiosity from './components/Curiosity';
import Opportunity from './components/Opportunity';
import Spirit from "./components/Spirit";
import Fetch from "./components/Fetch";

const App = () =>{

  const [img, setImg] = useState([]);
  const [curiosity, setCuriosity] = useState([]);
  const [opportunity, setOpportunity] = useState([]);
  const [spirit, setSpirit] = useState([]);


  useEffect(()=>{
    getData();
  }, []);

  const API_KEY = "Eeu3pZRMW8vOCSLnfFhSvbsDoD58oJhG76aGj0Wa";
  const getData = async() =>{
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    const data = await response.json();
    setImg(data);
  }

  const getCuriosityData = async () => {
    const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`)
    const data = await response.json();
    let limitedData = []
    let rand = Math.floor(Math.random() * 60);
    for(let i = rand; i < rand + 6; i++){
      limitedData.push(data.photos[i])
    }
    setCuriosity(limitedData)
  }

  const getOpportunnityData = async () => {
    const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=${API_KEY}`)
    const data = await response.json();
    let limitedData = []
    for(let e = 0; e < 6; e++){
      limitedData.push(data.photos[e])
    }
    setOpportunity(limitedData);
  }

  const getSpiritData = async () => {
    const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=${API_KEY}`)
    const data = await response.json();
    let limitedData = [];
    for(let r = 0; r < 6; r++){
      limitedData.push(data.photos[r])
    }
    setSpirit(limitedData);
  }

  return(
    <div>
      <Navbar/>
      <Picture 
        image={img.url}
        title={img.title}
        photo={img.copyright}
      />
      <Fetch
        opportunity={getOpportunnityData}
        curiosity={getCuriosityData}
        spirit={getSpiritData}
      />
      <div id="curiosity">
      {curiosity.map((comp)=>(
        <Curiosity
          key={comp.id}
          imgSrc={comp.img_src}
          fullName={comp.rover.name}
          camera={comp.camera.full_name}
        />
      ))}
      </div>
      <div id="opportunity">
        {opportunity.map((comp)=>(
          <Opportunity
            key={comp.id}
            imgSrcO={comp.img_src}
            fullNameO={comp.rover.name}
            cameraO={comp.camera.full_name}
          />
        ))}
      </div>
      <div id="spirit">
      {spirit.map((comp)=>(
          <Spirit
            key={comp.id}
            imgSrcS={comp.img_src}
            fullNameS={comp.rover.name}
            cameraS={comp.camera.full_name}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
