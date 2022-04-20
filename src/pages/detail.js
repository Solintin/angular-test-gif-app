import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Details = ({ match }) => {
  const { gifs } = useSelector((state) => state.giphy);
  const history = useHistory();
  const { id } = match.params;
  const moreInfo = gifs.find((gif) => gif.id == id);
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
        <img
          src={moreInfo.images.fixed_height.url}
          className="h-56 w-56 rounded"
          alt=""
        />
        <div className="text-white details space-y-4">
          <div>
            <span className="font-medium">Id</span> : {moreInfo.id}
          </div>
          <div>
            <span className="font-medium">Title</span> : {moreInfo.title}
          </div>
          <div>
            <span className="font-medium">Image Type</span> : {moreInfo.type}
          </div>
          <div>
            <span className="font-medium">Image Url</span> : {moreInfo.url}
          </div>
          <div>
            <span className="font-medium">Username</span> : {moreInfo.username}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
