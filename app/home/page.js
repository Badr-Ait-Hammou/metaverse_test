"use client";
import Image from 'next/image';

import img1 from "/assets/firstimg.svg";
import "/style/home.css"
import seconImage from "@/assets/secondimg.svg"
import thirdImage from "@/assets/thirdimg.svg"
import { isMobile, isBrowser, isTablet } from 'react-device-detect';
import {useEffect, useState} from "react";


export default function HomePage() {

    const [ipInfo, setIpInfo] = useState(null);


    useEffect(() => {
        const fetchIpInfo = async () => {
            try {
                const response = await fetch('https://ipinfo.io/json');
                const data = await response.json();
                setIpInfo(data);
                console.log("hehe",data)
            } catch (error) {
                console.error('Error fetching IP information:', error);
            }
        };
        fetchIpInfo();
        }, []);


    const InfoItem = ({ label, value }) => (
        <div>
            <strong className="font-semibold">{label}:</strong> {value}
        </div>
    );

    const DeviceInfo = ({ label, value }) => (
        <div className="mt-2">
            <strong className="font-semibold">{label}:</strong> {value}
        </div>
    );

    return (
        <div style={{backgroundColor: "#1E2E5C"}}>
            <div>
                <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
                    <div className="max-w-lg bg-white rounded-lg p-8 shadow-md">
                        <h1 className="text-2xl font-bold mb-4">IP Address Information</h1>
                        {ipInfo && (
                            <div>
                                <InfoItem label="IP Address" value={ipInfo.ip} />
                                <InfoItem label="City" value={ipInfo.city} />
                                <InfoItem label="Region" value={ipInfo.region} />
                                <InfoItem label="Country" value={ipInfo.country} />
                                <InfoItem label="Location" value={ipInfo.loc} />
                                <InfoItem label="Organization" value={ipInfo.org} />
                                <InfoItem label="Postal Code" value={ipInfo.postal} />
                                <InfoItem label="Timezone" value={ipInfo.timezone} />

                            </div>
                        )}
                        <DeviceInfo label="Mobile" value={isMobile ? 'Yes' : 'No'} />
                        <DeviceInfo label="Tablet" value={isTablet ? 'Yes' : 'No'} />
                        <DeviceInfo label="Browser" value={isBrowser ? 'Yes' : 'No'} />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row py-3 px-5 items-center">
                    <div className="w-full md:w-1/2 mx-1 mb-5 md:mb-0">
                        <h5 className="text-7xl font-bold text-white ">What is Mental Health?</h5>
                        <h3 className="text-2xl font-sans text-gray-50 mt-5 text-justify">Mental health encompasses the overall
                            well-being of an individual&apos;s emotional and psychological state. In South Africa, mental
                            health disorders are prevalent, with the South African Stress and Health (SASH) study
                            reporting that around 30% of the population will experience a mental disorder in their
                            lifetime.</h3>
                    </div>
                    <div className="w-full md:w-1/2">
                        <Image
                            src={img1}
                            alt="Example Image"
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                <div className="items-center px-5">
                    <h3 className="text-2xl font-sans text-gray-50 text-justify">Additionally, the South African Depression and
                        Anxiety Group (SADAG) estimates that approximately 1 in 6 South Africans suffer from anxiety,
                        depression, or substance abuse disorders. The suicide rate in South Africa, according to the
                        World Health Organization (WHO) data for 2016, was approximately 13.8 per 100,000 population.
                        Unfortunately, mental health stigma persists, as highlighted by a study conducted by the Human
                        Sciences Research Council (HSRC) in 2008, revealing that 78% of South Africans believe
                        individuals with mental health problems are unfit for work. Access to mental health services
                        remains a challenge, with the SASH study indicating that only 15% of South Africans with a
                        mental health disorder received treatment in the year preceding the study. Socioeconomic factors
                        such as financial stress and unemployment significantly contribute to mental health problems in
                        the country, according to the South African Depression and Anxiety Group (SADAG).</h3>
                </div>
            </div>


            <div className="curved-div">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
                    <path fill="#1e2e5c"
                          d="M0,64L48,58.7C96,53,192,43,288,58.7C384,75,480,117,576,138.7C672,160,768,160,864,138.7C960,117,1056,75,1152,64C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 mx-20 mb-5 md:mb-0">
                        <h5 className="text-2xl font-bold text-white ">Handling Mental Health</h5>
                        <Image
                            src={seconImage}
                            alt="Example Image"
                            className="w-full h-auto mt-5"
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-start p-5">
                        <h2 className="text-5xl font-sans text-gray-50 mb-5 gap-5">How can I help myself?</h2>
                        <p className="mb-3 text-xl">i. Try to be active and exercise.</p>
                        <p className="mb-3 text-xl">ii. Break large tasks into small ones.</p>
                        <p className="mb-3 text-xl">iv. Spend time with friends and family.</p>
                        <p className="mb-3 text-xl">iii. Set priorities.</p>
                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
                    <path fill="#1e2e5c"
                          d="M0,64L48,58.7C96,53,192,43,288,58.7C384,75,480,117,576,138.7C672,160,768,160,864,138.7C960,117,1056,75,1152,64C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className=" p-10">
                <div className="flex flex-col md:flex-row items-center text-end px-5">
                    <div className="w-full md:w-1/2 text-start p-5 text-white mb-5 md:mb-0">
                        <h2 className="text-5xl font-sans text-gray-50 mb-5 gap-5">How can I help others?</h2>
                        <p className="mb-3 text-xl">i. Offer support and patience.</p>
                        <p className="mb-3 text-xl">ii. Invite him/her to outdoor activities e.g. walks.</p>
                        <p className="mb-3 text-xl">iii. Remind him about his medication frequently.</p>
                        <p className="mb-3 text-xl">iv. Encourage them that with time and treatment, depression will lift.</p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <Image
                            src={thirdImage}
                            alt="Example Image"
                            className="w-full h-auto"
                        />
                    </div>


                </div>

            </div>

        </div>
    )
    // return (
    //     <div style={{backgroundColor: "#1E2E5C"}}>
    //         <div>
    //             <div className="flex flex-col md:flex-row py-3 px-5 items-center">
    //                 <div className="w-full md:w-1/2 mx-1 mb-5 md:mb-0">
    //                     <h5 className="text-7xl font-bold text-white ">What is Mental Health?</h5>
    //                     <h3 className="text-2xl font-sans text-gray-50 mt-5 text-justify">Mental health encompasses the overall
    //                         well-being of an individual&apos;s emotional and psychological state. In South Africa, mental
    //                         health disorders are prevalent, with the South African Stress and Health (SASH) study
    //                         reporting that around 30% of the population will experience a mental disorder in their
    //                         lifetime.</h3>
    //                 </div>
    //                 <div className="w-full md:w-1/2">
    //                     <Image
    //                         src={img1}
    //                         alt="Example Image"
    //                         className="w-full h-auto"
    //                     />
    //                 </div>
    //             </div>
    //
    //             <div className="items-center px-5">
    //                 <h3 className="text-2xl font-sans text-gray-50 text-justify">Additionally, the South African Depression and
    //                     Anxiety Group (SADAG) estimates that approximately 1 in 6 South Africans suffer from anxiety,
    //                     depression, or substance abuse disorders. The suicide rate in South Africa, according to the
    //                     World Health Organization (WHO) data for 2016, was approximately 13.8 per 100,000 population.
    //                     Unfortunately, mental health stigma persists, as highlighted by a study conducted by the Human
    //                     Sciences Research Council (HSRC) in 2008, revealing that 78% of South Africans believe
    //                     individuals with mental health problems are unfit for work. Access to mental health services
    //                     remains a challenge, with the SASH study indicating that only 15% of South Africans with a
    //                     mental health disorder received treatment in the year preceding the study. Socioeconomic factors
    //                     such as financial stress and unemployment significantly contribute to mental health problems in
    //                     the country, according to the South African Depression and Anxiety Group (SADAG).</h3>
    //             </div>
    //         </div>
    //
    //
    //         <div className="curved-div">
    //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
    //                 <path fill="#1e2e5c"
    //                       d="M0,64L48,58.7C96,53,192,43,288,58.7C384,75,480,117,576,138.7C672,160,768,160,864,138.7C960,117,1056,75,1152,64C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    //             </svg>
    //             <div className="flex flex-col md:flex-row items-center">
    //                 <div className="w-full md:w-1/2 mx-20 mb-5 md:mb-0">
    //                     <h5 className="text-2xl font-bold text-white ">Handling Mental Health</h5>
    //                     <Image
    //                         src={seconImage}
    //                         alt="Example Image"
    //                         className="w-full h-auto mt-5"
    //                     />
    //                 </div>
    //                 <div className="w-full md:w-1/2 text-start p-5">
    //                     <h2 className="text-5xl font-sans text-gray-50 mb-5 gap-5">How can I help myself?</h2>
    //                     <p className="mb-3 text-xl">i. Try to be active and exercise.</p>
    //                     <p className="mb-3 text-xl">ii. Break large tasks into small ones.</p>
    //                     <p className="mb-3 text-xl">iv. Spend time with friends and family.</p>
    //                     <p className="mb-3 text-xl">iii. Set priorities.</p>
    //                 </div>
    //             </div>
    //
    //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
    //                 <path fill="#1e2e5c"
    //                       d="M0,64L48,58.7C96,53,192,43,288,58.7C384,75,480,117,576,138.7C672,160,768,160,864,138.7C960,117,1056,75,1152,64C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    //             </svg>
    //         </div>
    //
    //         <div className=" p-10">
    //             <div className="flex flex-col md:flex-row items-center text-end px-5">
    //                 <div className="w-full md:w-1/2 text-start p-5 text-white mb-5 md:mb-0">
    //                     <h2 className="text-5xl font-sans text-gray-50 mb-5 gap-5">How can I help others?</h2>
    //                     <p className="mb-3 text-xl">i. Offer support and patience.</p>
    //                     <p className="mb-3 text-xl">ii. Invite him/her to outdoor activities e.g. walks.</p>
    //                     <p className="mb-3 text-xl">iii. Remind him about his medication frequently.</p>
    //                     <p className="mb-3 text-xl">iv. Encourage them that with time and treatment, depression will lift.</p>
    //                 </div>
    //                 <div className="w-full md:w-1/2">
    //                     <Image
    //                         src={thirdImage}
    //                         alt="Example Image"
    //                         className="w-full h-auto"
    //                     />
    //                 </div>
    //                 <div>
    //                     <h1>IP Address Information</h1>
    //                     {ipInfo && (
    //                         <div>
    //                             <p><strong>IP Address:</strong> {ipInfo.ip}</p>
    //                             <p><strong>Hostname:</strong> {ipInfo.hostname}</p>
    //                             <p><strong>City:</strong> {ipInfo.city}</p>
    //                             <p><strong>Region:</strong> {ipInfo.region}</p>
    //                             <p><strong>Country:</strong> {ipInfo.country}</p>
    //                             <p><strong>Location:</strong> {ipInfo.loc}</p>
    //                             <p><strong>Organization:</strong> {ipInfo.org}</p>
    //                         </div>
    //                     )}
    //                     <p><strong>Mobile:</strong> {isMobile ? 'Yes' : 'No'}</p>
    //                     <p><strong>Tablet:</strong> {isTablet ? 'Yes' : 'No'}</p>
    //                     <p><strong>Browser:</strong> {isBrowser ? 'Yes' : 'No'}</p>
    //                 </div>
    //
    //
    //             </div>
    //
    //         </div>
    //
    //     </div>
    // )
}