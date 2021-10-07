
export default function ShowCV() {
    return (
        <>
            <div className="flex text-white max-w-3xl h-screen mx-auto py-8">
                <div className=" bg-gray-700 flex flex-col justify-evenly max-w-xs p-8">
                    <div className="">
                        <h2><span className="tracking-widest border-b-2">ABOUT ME</span></h2>
                        <ul className="list-non text-xs pt-2 space-y-2">
                            <li>Date of birth: 11/10/1998</li>
                            <li>Age: 23 years</li>
                            <li>Gender: Male </li>
                            <li>Birth place: Chuadanga,Khulna</li>
                        </ul>
                    </div>
                    <div>
                        <h2><span className="tracking-widest border-b-2">CONTACT</span></h2>
                        <ul className="list-non text-xs pt-2 space-y-2">
                            <li> <i className="fa fa-map-marker pr-2" />Chuadanga, Khulna</li>
                            <li><i className="fa fa-phone pr-2" />0183791984</li>
                            <li><i className="fa fa-envelope pr-2" />jahidruetian044@gmail.com </li>
                        </ul>
                    </div>
                    <div >
                        <h2><span className="tracking-widest border-b-2">INTERESTS</span></h2>

                        <ul className="list-non text-xs pt-2 space-y-2">
                            <li>Problem solving</li>
                            <li>Sleeping</li>
                            <li>Chatting with friends</li>
                        </ul>
                    </div>

                </div>
                <div className="text-black flex flex-col pl-2">
                    <div className="pb-8">
                        <h1 className="text-7xl text-center">Md. Jahid Hasan</h1>
                        <div className="flex">
                            <h1 className=" font-bold tracking-wider pr-2">Software engineer</h1>
                            <p className="bg-gray-700 flex-1 my-2"></p>
                        </div>
                    </div>
                    <div >
                        <h2 className="my-2"><span className="tracking-widest border-b-2 border-gray-700">CAREER OBJECTIVE</span></h2>
                        <p className="text-xs">To be able to work for an encoureging and stable company that will assist me in developing, improving and obtaining
                            necessary skills in order to become best engineer possible.
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}