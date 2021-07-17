import { useState } from "react";
import axios from "axios";
import {useHistory, withRouter} from "react-router-dom";
import {apiURL} from "../util/apiURL";

const API = apiURL()
function SongNewForm() {
  let history = useHistory()
  const addSong = async(newSong) =>{
    try {
      await axios.post(`${API}/songs`, newSong)
      history.push(`/songs`)
    } catch (error) {
      console.log(error)
    }
  }
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const handleTextInput = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckBox = (event) => {
    setSong({ ...song, [event.target.id]: !song.is_favorite });
  };

 const handleSubmit = (e) => {
     addSong(song);
     e.preventDefault()
 }; 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Song Name:</label>
        <input type="text" onChange={handleTextInput} required />

        <label>Artist:</label>
        <input type="text" onChange={handleTextInput} required />

        <label>Album:</label>
        <input type="text" onChange={handleTextInput} required />

        <label>Time:</label>
        <input type="text" onChange={handleTextInput} required />

        <label>Favorite:</label>
        <input type="checkbox" onChange={handleCheckBox} />

        <input type="submit" />
      </form>
    </div>
  );
}
export default withRouter(SongNewForm);
