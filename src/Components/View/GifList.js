import React from "react";
import { Link } from "react-router-dom";

const GifList = ({ gif, id }) => {
  return (
    <div>
      {
        <Link to={`/${gif.id}`}  className="m-2" data-testid={`image-${id}`}>
          <img
            src={gif.images.fixed_height.url}
            className="h-56 w-full rounded"
            alt=""
          />
        </Link>
      }
    </div>
  );
};

export default GifList;
