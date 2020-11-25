import React from "react";
import { Link } from "react-router-dom";
import "./track.css";

function Track(props) {
  const { track } = props;

  return (
    <div className="col-md-6 box">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play" /> Track
            </strong>
            : {track.track_name}
            <br />
            <strong>
              <i className="fas fa-compact-disc" /> Album
            </strong>
            : {track.album_name}
          </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-dark btn-block btncolor"
          >
            {" "}
            <i className="fas fa-chevron-right" /> Show Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Track;
