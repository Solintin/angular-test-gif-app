import React from 'react';

const control = ( {list, handleDecreaseList, handleIncreaseList }) => {
    return (
        <div>
        <div className="flex items-center justify-center space-x-6 text-white ">
        {list > 5 && list <= 25 ? (
          <button
            onClick={handleDecreaseList}
            className="p-3 font-medium bg-red-500 flex space-x-2 rounded-md outline-none border-none"
          >
            Show Less
          </button>
        ) : null}
        {list < 25 && list >= 5 ? (
          <button
            onClick={handleIncreaseList}
            className="p-3 font-medium bg-green-500 flex space-x-2 rounded-md outline-none border-none"
          >
            Show More
          </button>
        ) : null}
      </div>
        </div>
    );
};

export default control;