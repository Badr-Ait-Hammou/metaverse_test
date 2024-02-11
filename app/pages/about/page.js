import Image from "next/image";
import character from "@/assets/character-1.svg";
import "/style/home.css"
import character3 from "@/assets/Character-3.svg";
import character4 from "@/assets/character-4.svg";

export default function About() {
    return (
        <div>
            <div className="curved-div ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
                    <path fill="#1e2e5c"
                          d="M0,64L48,58.7C96,53,192,43,288,58.7C384,75,480,117,576,138.7C672,160,768,160,864,138.7C960,117,1056,75,1152,64C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
                <div className="p-2 mx-5">
                    <div className="flex items-center">
                        <div className="w-3/12 p-5 text-white">
                            <h1 className="text-8xl font-sans text-gray-50 mb-5 gap-5">Who are we?</h1>
                        </div>

                        <div className="w-7/12 ">
                            <h2 className="text-3xl text-justify font-sans text-gray-50 mb-5 gap-5">At Test, we are a
                                mental health services provider dedicated to supporting individuals during challenging
                                times. Founded in 2021, in the wake of the post-COVID-19 pandemic, we recognized the
                                increasing prevalence of depression and the importance of accessible mental health care.
                                We are committed to offering convenient and personalized services in the comfort of your
                                home.</h2>
                        </div>

                        <div className="w-2/12">
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
                    <path fill="#1e2e5c"
                          d="M0,64L48,58.7C96,53,192,43,288,58.7C384,75,480,117,576,138.7C672,160,768,160,864,138.7C960,117,1056,75,1152,64C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>


            <div className="  -mt-5">
                <div className="p-2 mx-5">
                    <div className="flex items-center">
                        <div className="w-10/12 p-5 text-white -mt-5">
                            <h2 className="text-3xl text-justify font-sans text-gray-50  ">Our mission is to empower
                                individuals to prioritize their mental well-being by providing accessible and
                                high-quality mental health services. We envision a world where everyone has the
                                opportunity to achieve mental wellness and lead fulfilling lives.</h2>
                        </div>
                        <div className="w-2/12 justify-end">
                            <Image
                                src={character}
                                alt="Example Image"
                                className="w-full h-auto  ml-5 -mt-96"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="  -mt-5">
                <div className="p-2 mx-5">
                    <div className="flex items-center">
                        <div className="w-full p-5 text-white -mt-5">
                            <h2 className="text-3xl text-justify font-sans text-gray-50  ">Test offers a comprehensive
                                suite of mental health services tailored to meet your individual needs. Our team of
                                experienced and compassionate mental health professionals provides therapy, counseling,
                                and support for a variety of concerns, including depression, anxiety, and substance
                                abuse.
                                We combine evidence-based practices with a client-centered approach to ensure
                                personalized care that promotes growth, healing, and resilience.</h2>
                        </div>
                    </div>
                </div>
            </div>


            <div className=" p-5 -mt-5">
                <div className="p-2">
                    <div className="flex items-center">
                        <div className="w-1/12 justify-end">
                            <Image
                                src={character3}
                                alt="Example Image"
                                className="w-full h-auto  ml-5 "
                            />
                        </div>
                        <div className="w-11/12 p-5 text-white -mt-5">
                            <h2 className="text-3xl text-justify font-sans text-gray-50  ">
                                Our team consists of licensed therapists and counselors who are passionate about mental
                                health and have extensive experience in their respective fields.
                                They possess diverse backgrounds and specialized training in various therapeutic
                                modalities.
                                Our professionals are committed to providing a safe and supportive environment where you
                                can explore your thoughts and emotions,
                                and work towards positive change.
                            </h2><br/>
                            <h2 className="text-3xl text-justify font-sans text-gray-50  ">
                                We understand the importance of privacy and confidentiality in the therapeutic process.
                                At Bimo Health, we adhere to strict privacy standards and follow legal and ethical
                                guidelines to safeguard
                                your personal information. Your privacy is our utmost priority, ensuring a safe and
                                confidential
                                space for you to share and grow.
                            </h2>
                        </div>

                    </div>
                </div>
            </div>

            <div className="curved-div">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
                    <path fill="#1e2e5c"
                          d="M0,64L48,58.7C96,53,192,43,288,58.7C384,75,480,117,576,138.7C672,160,768,160,864,138.7C960,117,1056,75,1152,64C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
                <div className=" p-5">
                    <div className="flex justify-start mx-5">

                        <div className="w-10/12 ">
                            <h1 className="text-8xl font-sans text-gray-50 text-left mb-5 gap-5">Who are we?</h1>
                            <h2 className="text-3xl text-justify font-sans text-gray-50 mb-5 gap-5">
                                At Bimo Health, our purpose is deeply rooted in our belief that solutions created to
                                serve others, especially those who are underserved,
                                are always the best solutions. We are driven by the commitment to make a positive impact
                                on individuals lives,
                                ensuring that everyone has access to the mental health care they deserve.
                            </h2>
                        </div>

                        <div className="w-2/12">
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
                    <path fill="#1e2e5c"
                          d="M0,64L48,58.7C96,53,192,43,288,58.7C384,75,480,117,576,138.7C672,160,768,160,864,138.7C960,117,1056,75,1152,64C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="  xl:-mt-40  sm:-mt-10 lg:-mt-40">
                <div>
                    <div className="flex items-center">
                        <div className="w-10/12  text-white ">
                        </div>
                        <div className="w-2/12 justify-end">
                            <Image
                                src={character4}
                                alt="Example Image"
                                className="w-full h-auto  mr-5 -mt-96 "
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className=" mt-3 md:mt-20 mx-5">
                <div className="p-2">
                    <div className="flex items-center">
                        <div className="w-full  text-white ">
                            <h2 className="text-3xl text-justify font-sans text-gray-50  ">
                                We understand that seeking care for mental health concerns can be challenging, with
                                various barriers that can prevent individuals from receiving the support they need.
                                That&apos;s why we are dedicated to removing those barriers and making mental health care
                                more accessible to all. Whether it&apos;s geographical limitations, financial constraints, or
                                stigmas surrounding mental health,
                                we strive to bridge the gaps and create a safe and inclusive space where individuals can
                                seek help without hesitation or obstacles.
                                Equally important to us is easing the burdens for those delivering care. We recognize
                                the immense dedication and compassion required from mental health professionals who work
                                tirelessly to support individuals on their journey to recovery.
                                By leveraging technology and innovative solutions, we aim to streamline and enhance the
                                mental health care delivery process,
                                empowering our dedicated professionals to focus on what they do best: helping
                                individuals find their way back to themselves.
                                We firmly believe that the right technology can transform lives. By harnessing the power
                                of digital tools, we can extend our reach and impact,
                                ensuring that individuals can access mental health resources anytime, anywhere. Whether
                                through online counseling, teletherapy options,
                                or user-friendly platforms, we embrace technology as a means to enhance the lives of
                                people who are seeking a way back to themselves.
                                Our purpose is to create a harmonious connection between compassionate care,
                                cutting-edge technology,
                                and the individuals we serve. We are driven by the conviction that everyone deserves the
                                opportunity to prioritize their mental well-being and discover a path to inner peace and
                                fulfillment. At Bimo Health, we are dedicated to making a meaningful difference in the
                                lives of those who need it most, one step at a time.
                            </h2>
                        </div>
                    </div>
                    <div className="flex justify-end m-5">
                        <h2 className="text-3xl text-justify font-sans text-gray-50 underline ">
                            Show Less
                        </h2>
                    </div>
                </div>
            </div>


        </div>
    )
}