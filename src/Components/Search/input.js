import React from "react";

const input = ({ handleSearchQuery, handleSearch, searchQuery }) => {
  return (
    <div>
      <div className="flex">
      learn react
        <input
          value={searchQuery}
          type="text"
          className="p-3 md:w-[400px] font-medium bg-white rounded-l-md outline-none border-none"
          placeholder="Search your fav gif..."
          onChange={(e) => {
            handleSearchQuery(e);
          }}
          onKeyPress={(e) => {
            handleSearchQuery(e);
          }}
        />
        <button
        id='search'
        data-testid={'search'}
          onClick={handleSearch}
          className="p-3 font-medium bg-green-500 flex space-x-2 rounded-r-md outline-none border-none"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default input;
