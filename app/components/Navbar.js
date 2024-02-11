import Link from "next/link";
export default function Navbar(){
    return(
        <header style={{ backgroundColor: "#1E2E5C" }}>
            <div className="flex justify-end items-center py-2 px-5 ">


                <div className="flex items-center space-x-2">
                    <Link href="/pages/todos">
                        <p  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Todos</p>
                    </Link>
                    <Link href="/pages/about">
                        <p  className="text-gray-300  rounded-md px-3 py-2 text-sm font-medium">About Us</p>
                    </Link>
                    <Link href="/pages/home">
                        <p  className="px-3 py-2  bg-transparent border-2 border-white text-white font-semibold rounded-3xl text-sm">Home</p>
                    </Link>

                    <Link href="/pages/contact">
                        <p  className="px-3 py-2  bg-green-700 border-2 border-green-700  text-white font-semibold rounded-3xl text-sm">Contact Us</p>
                    </Link>
                </div>
            </div>
        </header>
)
}

