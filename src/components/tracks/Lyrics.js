import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./lyrics.css";

const Lyrics = (props) => {
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=674d69b8841c38da1ec73e07c35d189d`
      )
      .then((res) => {
        console.log(res.data.message.body.lyrics);
        let lyrics = res.data.message.body.lyrics;
        setLyrics({ lyrics });

        return axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${props.match.params.id}&apikey=674d69b8841c38da1ec73e07c35d189d`
        );
      })
      .then((res) => {
        console.log(res.data);
        let track = res.data.message.body.track;
        setTrack({ track });
      })
      .catch((err) => console.log(err));
  }, [props.match.params.id]);

  return (
    <div className="box-lyrics">
      <Link to="/" className="btn btn-dark btn-sm mb-4 ">
        Go Back
      </Link>
      <div className="card">
        <h5 className="card-header">
          {track.track_name} by{" "}
          <span className="text-secondary">{track.artist_name}</span>
        </h5>
        <div className="card-body">
          <p className="card-text">{lyrics.lyrics_body}</p>
        </div>
      </div>
    </div>
  );
};

export default Lyrics;
