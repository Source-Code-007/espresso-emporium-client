import { useState } from "react";
import { FaEye, FaPen, FaRecycle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Coffees = () => {
    const [coffees, setCoffees] = useState([])
    return (
        <div className="py-20">
            <div className="my-container text-center">
                <div className="my-3">
                    <p>--- Sip & Savor ---</p>
                    <h2 className="font-bold text-xl my-2">Our popular products</h2>
                    <Link to={'/add-coffee'}><button className="cmn-btn">add coffee</button></Link>
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
                                <FaEye></FaEye>
                                <FaPen></FaPen>
                                <FaRecycle></FaRecycle>
                            </div>
                        </div>
                    })
                }
            </div>

        </div >
    );
};

export default Coffees;