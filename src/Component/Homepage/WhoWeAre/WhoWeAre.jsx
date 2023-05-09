const WhoWeAre = () => {
    const whoWeAreObj = [
        {
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr75igGn3dYJt-cKdJKIOAalFQVdB6QWQkFulmbZX_PobP4pwFOyyBKGK9c7TEfwFrj2Q&usqp=CAU',
            title: 'Awesome Aroma',
            subtitle: 'You will definitely be a fan of the design & aroma of your coffee'
        },
        {
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXcX2ZfsEOPwsYqyUtSoyMN4JL9Twt6IzZhQ&usqp=CAU',
            title: 'High Quality',
            subtitle: 'We served the coffee to you maintaining the best quality'
        },
        {
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVx9NahK9FeQ8BGI59NhQ7iglCFb_kVMSbA&usqp=CAU',
            title: 'Pure Grades',
            subtitle: 'The coffee is made of the green coffee beans which you will love'
        },
        {
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfbRxA6vJ22ar7xhGqDVI7jvJX3y4tYuUwdg&usqp=CAU',
            title: 'Proper Roasting',
            subtitle: 'Your coffee is brewed by first roasting the green coffee beans'
        },
    ]
    return (
        <div className="py-8 bg-[#ECEAE3]">
            <div className="max-w-7xl mx-8 xl:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    whoWeAreObj.map((data, ind) => {
                        return < div key={ind} className="p-4 shadow bg-slate-50 space-y-2">
                            <img className="h-10 w-10" src={data.icon} alt="" />
                            <h2 className="font-bold text-lg">{data.title}</h2>
                            <h2 className="text-gray-700">{data.subtitle}</h2>
                        </div>
                    })
                }
            </div>
        </div >
    );
};

export default WhoWeAre;