import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
    const loadedCoffe = useLoaderData()
    const handleUpdateCoffeFunc = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const newCoffee = { name, chef, supplier, taste, category, details, photo }

        fetch(`http://localhost:7000/user${loadedCoffee.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        }).then(res => res.json())
            .then(data => console.log(data))
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
                    <form onSubmit={handleUpdateCoffeFunc} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="my-label" htmlFor="name">Name</label>
                                <input className="my-inp" type="text" name="name" id="name" placeholder="Your name here..." />
                            </div>
                            <div>
                                <label className="my-label" htmlFor="chef">Chef</label>
                                <input className="my-inp" type="text" name="chef" id="chef" placeholder="Your chef's name here..." />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="my-label" htmlFor="supplier">Supplier</label>
                                <input className="my-inp" type="text" name="supplier" id="supplier" placeholder="Your supplier name here..." />
                            </div>
                            <div>
                                <label className="my-label" htmlFor="taste">taste</label>
                                <input className="my-inp" type="text" name="taste" id="taste" placeholder="Share your own taste..." />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="my-label" htmlFor="category">Category</label>
                                <input className="my-inp" type="text" name="category" id="category" placeholder="category..." />
                            </div>
                            <div>
                                <label className="my-label" htmlFor="details">Details</label>
                                <input className="my-inp" type="text" name="details" id="details" placeholder="Details..." />
                            </div>
                        </div>
                        <div className="">
                            <label className="my-label" htmlFor="photo">Photo</label>
                            <input className="my-inp" type="text" name="photo" id="photo" placeholder="Photo URL..." />
                        </div>
                        <button className="cmn-btn w-full">Add Coffee</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;