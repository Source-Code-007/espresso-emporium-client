import { useLoaderData} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateCoffee = () => {
    const loadedCoffee = useLoaderData()
    const handleUpdateCoffeeFunc = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const price = form.price.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const updatedCoffee = { name, chef, supplier, price, category, details, photo }

        fetch(`https://espresso-emporium-server-hazel.vercel.app/update-coffee/${loadedCoffee._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        }).then(res => res.json())
            .then(data =>{
                if(data.modifiedCount){
                    toast.success('Updated a existing coffee!', {
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

                <div className="bg-[#F4F3F0] p-10 my-8">
                    <div className="text-center py-5 px-28 space-y-2">
                        <h2 className="my-title">Update existing coffee details!</h2>
                        <p className="my-subtitle">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <form onSubmit={handleUpdateCoffeeFunc} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="my-label" htmlFor="name">Name</label>
                                <input className="my-inp" defaultValue={loadedCoffee.name} type="text" name="name" id="name" placeholder="Your name here..." required/>
                            </div>
                            <div>
                                <label className="my-label" htmlFor="chef">Chef</label>
                                <input className="my-inp" defaultValue={loadedCoffee.chef} type="text" name="chef" id="chef" placeholder="Your chef's name here..." required/>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="my-label" htmlFor="supplier">Supplier</label>
                                <input className="my-inp" defaultValue={loadedCoffee.supplier} type="text" name="supplier" id="supplier" placeholder="Your supplier name here..." required/>
                            </div>
                            <div>
                                <label className="my-label" htmlFor="taste">taste</label>
                                <input className="my-inp" defaultValue={loadedCoffee.price} type="text" name="price" id="taste" placeholder="Share your own taste..." required/>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="my-label" htmlFor="category">Category</label>
                                <input className="my-inp" defaultValue={loadedCoffee.category} type="text" name="category" id="category" placeholder="category..." required/>
                            </div>
                            <div>
                                <label className="my-label" htmlFor="details">Details</label>
                                <input className="my-inp" defaultValue={loadedCoffee.details} type="text" name="details" id="details" placeholder="Details..." required/>
                            </div>
                        </div>
                        <div className="">
                            <label className="my-label" htmlFor="photo">Photo</label>
                            <input className="my-inp" defaultValue={loadedCoffee.photo} type="text" name="photo" id="photo" placeholder="Photo URL..." required/>
                        </div>
                        <button className="cmn-btn w-full">update Coffee</button>
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

export default UpdateCoffee;