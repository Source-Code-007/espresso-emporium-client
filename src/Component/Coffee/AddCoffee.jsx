import { FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCoffee = () => {
    const navigate = useNavigate()
    const handleAddCoffeeFunc = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const price = form.price.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const newCoffee = { name, chef, supplier, price, category, details, photo }

        fetch('http://localhost:7000/addCoffee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Added a new coffee!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                }
            })
            .catch(e => console.log(e.message))
    }
    return (
        <div className="py-14">
            <div className="my-container">
                <span onClick={() => navigate(-1)} className="inline-flex items-center gap-2 cursor-pointer"> <FaArrowCircleLeft></FaArrowCircleLeft> Back to home</span>

                <div className="bg-[#F4F3F0] p-10 my-8">
                    <div className="text-center py-5 px-28 space-y-2">
                        <h2 className="my-title">Add new coffee</h2>
                        <p className="my-subtitle">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <form onSubmit={handleAddCoffeeFunc} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="my-label" htmlFor="name">Name</label>
                                <input className="my-inp" type="text" name="name" id="name" placeholder="Your name here..." required />
                            </div>
                            <div>
                                <label className="my-label" htmlFor="chef">Chef</label>
                                <input className="my-inp" type="text" name="chef" id="chef" placeholder="Your chef's name here..." required />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="my-label" htmlFor="supplier">Supplier</label>
                                <input className="my-inp" type="text" name="supplier" id="supplier" placeholder="Your supplier name here..." required />
                            </div>
                            <div>
                                <label className="my-label" htmlFor="price">price</label>
                                <input className="my-inp" type="text" name="price" id="price" placeholder="price..." required />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="my-label" htmlFor="category">Category</label>
                                <input className="my-inp" type="text" name="category" id="category" placeholder="category..." required />
                            </div>
                            <div>
                                <label className="my-label" htmlFor="details">Details</label>
                                <input className="my-inp" type="text" name="details" id="details" placeholder="Details..." required />
                            </div>
                        </div>
                        <div className="">
                            <label className="my-label" htmlFor="photo">Photo</label>
                            <input className="my-inp" type="text" name="photo" id="photo" placeholder="Photo URL..." required />
                        </div>
                        <button className="cmn-btn w-full">Add Coffee</button>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default AddCoffee;