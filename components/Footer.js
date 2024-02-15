import SocialButtons from "@/components/SocialButtons";
import "/style/home.css"

export default function Footer() {
    return (
        <div className="curved-div">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
                <path fill="#1e2e5c"
                      d="M0,64L48,58.7C96,53,192,43,288,58.7C384,75,480,117,576,138.7C672,160,768,160,864,138.7C960,117,1056,75,1152,64C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            <div className="flex flex-col md:flex-row items-center mt-2 mx-5">
                <div className="w-full md:w-6/12 text-start  mb-5 md:mb-0 md:order-2">
                    <h5 className="text-3xl font-sans text-white">Contact us</h5>

                    <div className="grid grid-rows-3 grid-flow-col gap-5">
                        <div className="col-span-2">
                            <input
                                type="text"
                                id="name"
                                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="row-span-2 col-span-2 ">
                            <input
                                type="text"
                                id="email"
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="row-span-3 col-span-4">
        <textarea
            id="description"
            rows="3"
            className="mt-1 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
            placeholder="Your Message"
        ></textarea>
                            <div className="flex flex-wrap justify-between   ">
                                <div></div>
                                <div>
                                    <button className="mt-4 bg-blue-950 text-white rounded-lg px-4 py-2">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-6/12 text-end md:text-center md:order-1">
                </div>
            </div>



            <div className="flex flex-wrap md:justify-start justify-center md:-mt-24 mx-5">
                <SocialButtons/>

            </div>
        </div>
    );
}