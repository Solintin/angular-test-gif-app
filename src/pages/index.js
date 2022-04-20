import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGiphy } from "../Redux/Actions/ActionCreators";
const Index = () => {
  const dispatch = useDispatch();
  const { gifs, loading } = useSelector((state) => state.giphy);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    dispatch(fetchGiphy(searchQuery));
    setSearchQuery("");
  };

  const handleSearchQuery = (e) => {
    const { value } = e.target;
    if (e.key === "Enter") {
      setSearchQuery(value);
      handleSearch();
    }

    setSearchQuery(value);
  };

  return (
    <div className="">
      <div
        className=" mx-auto  flex md:flex-row md:justify-between flex-col justify-center items-center">
        <div className="text-white text-3xl font-bold sm:mb-0 mb-2">.GIF SEARCH APP</div>
        <div className='flex'>
          {" "}
          <input
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
            onClick={handleSearch}
            className="p-3 font-medium bg-green-500 flex space-x-2 rounded-r-md outline-none border-none"
          >
            Search
          </button>
        </div>
      </div>
      {loading ? (
        <div className="mt-20 text-white flex flex-col space-y-4 text-center justify-center items-center">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : gifs.length > 0 ? (
        <div className=" mx-auto mt-4 text-white grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {gifs.map((gif, i) => (
            <Link to={`/${gif.id}`} key={i} className="m-2">
              <img
                src={gif.images.fixed_height.url}
                className="h-56 w-full rounded"
                alt=""
              />
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-20 text-white text-center">
          <p>No Gif Available</p>
          <small>Search for your favorite GIF</small>
        </div>
      )}
    </div>
  );
};

export default Index;
