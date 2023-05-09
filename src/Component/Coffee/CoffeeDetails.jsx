import React from 'react';

const CoffeeDetails = () => {
    return (
        <div className="py-14">
        <div className="my-container">

            <div className="bg-[#F4F3F0] p-10 my-8">
              <img src="" alt="" />
              <div>
                <h2>name: {name}</h2>
                <h2>chef: {chef}</h2>
                <h2>supplier: {supplier}</h2>
                <h2>category: {category}</h2>
                <h2>details: {detials}</h2>
              </div>
        
            </div>
        </div>
    </div>
    );
};

export default CoffeeDetails;