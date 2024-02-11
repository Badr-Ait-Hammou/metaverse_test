import "/style/home.css"

export default function Contact(){
    return(
        <div >
        <div className="flex flex-col min-h-screen mx-5 md:mx-40 ">
            <div className="flex flex-wrap mt-10">
                <div className="w-full md:w-7/12 p-2">
                    <label htmlFor="full name" className="block mb-2 text-xl font-bold text-white ">Full name</label>

                    <input type="text"
                           placeholder="Full Name"
                           className="w-full border p-2 rounded-2xl bg-transparent border border-white"/>
                </div>
                <div className="w-full md:w-7/12 p-2">
                    <label htmlFor="full name" className="block mb-2 text-xl font-bold text-white ">Full name</label>

                    <input type="email"
                           placeholder="Johnmayer@gmail.com"
                           className="w-full border p-2 rounded-2xl bg-transparent border border-white"/>
                </div>


                <div className="w-full p-2">
                    <label htmlFor="full name" className="block mb-2 text-xl font-bold text-white ">Message</label>
                    <textarea  placeholder="....." className="w-full rounded-2xl border p-10 bg-transparent border border-white"/>
                </div>

            </div>
            <div className="flex justify-end text-right">
                <button className="mt-4 bg-green-600 text-white rounded-lg px-6 py-2">Save</button>
            </div>
        </div>
        </div>
    )
}