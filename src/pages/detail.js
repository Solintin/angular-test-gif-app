// This page render the Detail view of each gif

import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Detail from '../Components/Detail/More_Detail'
const Details = ({ match }) => {
  const { gifs } = useSelector((state) => state.giphy);
  const history = useHistory();
  const { id } = match.params;
  const moreInfo = gifs.find((gif) => gif.id === id);


  return (
    <div>
      <div className="p-5  space-y-2">
        <button
          onClick={() => {
            history.goBack();
          }}
          className="text-black mb-2 bg-gray-300 p-1 rounded-md "
        >
          &#8592; Back
        </button>
      <Detail moreInfo={moreInfo} />
      </div>
    </div>
  );
};

export default Details;
