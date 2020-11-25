import React, { useContext } from "react";
import { Context } from "../../context";
import Track from "./Track";

function TracksList() {
  const [state] = useContext(Context);
  const { track_list, heading } = state;

  return (
    <div>
      <h3 className="text-center mb-4">{heading}</h3>
      <div className="row">
        {track_list.map((item) => (
          <Track key={item.track.track_id} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default TracksList;
