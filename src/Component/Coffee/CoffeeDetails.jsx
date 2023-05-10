import { useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const loadedCoffee = useLoaderData()
  const {name, chef, supplier, category, details, price, photo} = loadedCoffee || {}
    return (
        <div className="py-14">
        <div className="my-container">

            <div className="bg-[#F4F3F0] p-10 my-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
              <img className="min-h-[150px] w-full" src={photo} alt="" />
              <div className="flex flex-col justify-center px-10">
                <h2><span className="font-bold">Name:</span> {name}</h2>
                <h2><span className="font-bold">Chef:</span> {chef}</h2>
                <h2> <span className="font-bold">Price:</span> {price}</h2>
                <h2><span className="font-bold">Supplier:</span> {supplier}</h2>
                <h2><span className="font-bold">Category:</span> {category}</h2>
                <h2><span className="font-bold">Details:</span> {details}</h2>
              </div>
        
            </div>
        </div>
    </div>
    );
};

export default CoffeeDetails;