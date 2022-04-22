import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import GifList from "../Components/View/GifList";
import Input from "../Components/Search/input";
import { fetchGiphy } from "../Redux/Actions/ActionCreators";
import Control from "../Components/Controls/control";

const Index = () => {
  const dispatch = useDispatch();
  const { gifs, loading } = useSelector((state) => state.giphy);
  const [searchQuery, setSearchQuery] = useState("");
  const [list, setList] = useState(5);

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

  const handleIncreaseList = () => {
    setList(list + 5);
  };
  const handleDecreaseList = () => {
    setList(list - 5);
  };

  return (
    <div className="">
      <div className=" mx-auto  flex md:flex-row md:justify-between flex-col justify-center items-center">
        <div className="text-white text-3xl font-bold sm:mb-0 mb-2">
          .GIF SEARCH APP
        </div>
        <Input
          searchQuery={searchQuery}
          handleSearchQuery={handleSearchQuery}
          handleSearch={handleSearch}
        />
      </div>
      {loading ? (
        <div className="mt-20 text-white flex flex-col space-y-4 text-center justify-center items-center">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : gifs.length > 0 ? (
        <>
          <div className=" mx-auto mt-4 text-white grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
            {gifs.slice(0, list).map((gif, i) => (
              <GifList gif={gif} id={i} key={i} />
            ))}
          </div>
          <Control
            list={list}
            handleDecreaseList={handleDecreaseList}
            handleIncreaseList={handleIncreaseList}
          />
        </>
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
