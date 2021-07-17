import React, { useState } from "react";
import axios from "axios";
import {useHistory, withRouter} from "react-router-dom";
import apiURL from "../util/apiURL";

const API = apiURL()

function SongNewForm() {
  let history = useHistory()

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const addSong = async(newSong) =>{
    try {
      let res = await axios.post(`${API}/songs`, newSong)
      history.push(`/songs`)
console.log(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleTextInput = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckBox = (event) => {
    setSong({ ...song, [event.target.id]: !song.is_favorite });
  };

 const handleSubmit =  (e) => {
     e.preventDefault()
     addSong(song);
    }; 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Song Name:</label>
        <input id="name" value={song.name} type="text" onChange={handleTextInput} required />

        <label htmlFor="artist">Artist:</label>
        <input id="artist" type="text" onChange={handleTextInput} required />

        <label htmlFor="album">Album:</label>
        <input id="album" type="text" onChange={handleTextInput} required />

        <label htmlFor="time">Time:</label>
        <input id="time" type="text" onChange={handleTextInput} required />

        <label htmlFor="is_favorite">Favorite:</label>
        <input id="is_favorite" type="checkbox" onChange={handleCheckBox} />

        <input type="submit" />
      </form>
    </div>
  );
}
export default withRouter(SongNewForm);
