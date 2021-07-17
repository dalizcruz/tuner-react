import axios from "axios";
import { useState, useEffect } from "react";
import  apiURL  from "../util/apiURL";


const API = apiURL();

function SongList() {
  const [songs, setSongs] = useState([]);

useEffect(async () => {
    try {
        
    } catch (error) {
        
    }
})

  return (
    <div>
      <h3>List of all Songs</h3>

      
    </div>
  );
}

export default SongList;
