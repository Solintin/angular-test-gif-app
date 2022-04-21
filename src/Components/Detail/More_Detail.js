import React from "react";

const More_Detail = ({ moreInfo }) => {
  return (
    <div>
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
  );
};

export default More_Detail;
