/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { FaEye, FaPen, FaRecycle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Triangle } from 'react-loader-spinner'

const Coffees = () => {
    const [coffees, setCoffees] = useState(null)
    useEffect(() => {
        fetch('http://localhost:7000/coffees')
            .then(res => res.json())
            .then(data => setCoffees(data))
            .catch(e => console.log(e.message))
    }, [])
    return (
        <div className="py-20">
            <div className="my-container">
                <div className="my-3  text-center">
                    <p>--- Sip & Savor ---</p>
                    <h2 className="font-bold text-xl my-2">Our popular products</h2>
                    <Link to={'/add-coffee'}><button className="cmn-btn">add coffee</button></Link>
                </div>
                {
                    !coffees ? <div className="min-h-[70vh] flex justify-center items-center">
                        <Triangle
                            height="80"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="triangle-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                    </div> :
                        !coffees.length ? <div className="min-h-[55vh] flex justify-center items-center">
                            <h2 className="font-bold text-2xl bg-green-100 p-4">We don't have any coffee available!</h2>
                        </div> : 
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                            {
                                coffees.map(coffee => {
                                    const { _id, name, chef, price, photo } = coffee
                                    return <div key={_id} className="grid grid-cols-1 sm:grid-cols-3 p-5 gap-5 shadow min-h-[150px]">
                                        <figure className="flex justify-center items-center">
                                            <img className="min-h-[100px] w-full" src={photo} alt="" />
                                        </figure>
                                        <div className="flex flex-col justify-center">
                                            <h2><span className="font-semibold text-lg">Name:</span> {name}</h2>
                                            <h3><span className="font-semibold text-lg">Chef:</span> {chef}</h3>
                                            <p><span className="font-semibold text-lg">Price:</span> {price}</p>
                                        </div>
                                        <div className="flex flex-row sm:flex-col sm:items-end justify-between">
                                            <Link to={`coffee/${_id}`} className="bg-[#D2B48C] p-2 text-slate-50 rounded cursor-pointer"> <FaEye></FaEye></Link>
                                            <Link to={`/update-coffee/${_id}`} className="bg-[#3C393B] p-2 text-slate-50 rounded cursor-pointer"><FaPen></FaPen></Link>
                                            <Link className="bg-[#EA4744] p-2 text-slate-50 rounded cursor-pointer"><FaRecycle></FaRecycle></Link>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                }
            </div>

        </div >
    );
};

export default Coffees;