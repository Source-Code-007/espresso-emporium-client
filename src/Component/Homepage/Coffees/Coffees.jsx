import { useState } from "react";

const Coffees = () => {
    const [coffees, setCoffees] = useState([])
    return (
        <div className="py-20">
            <div className="max-w-7xl mx-6 xl:mx-auto text-center">
                <div className="my-3">
                    <p>--- Sip & Savor ---</p>
                    <h2 className="font-bold text-xl my-2">Our popular products</h2>
                    <button className="cmn-btn">add coffee</button>
                </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                {
                    coffees.map(coffee => {
                        const { _id, name, chef, price } = coffee
                        return <div key={_id} className="grid grid-cols-3">
                            <img src="" alt="" />
                            <div>
                                <h2>{name}</h2>
                                <h3>{chef}</h3>
                                <p>{price}</p>
                            </div>
                            <div>
                                <
                            </div>
                        </div>
                    })
                }
            </div>

        </div >
    );
};

export default Coffees;