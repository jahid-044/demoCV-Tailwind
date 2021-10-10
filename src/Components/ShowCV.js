import pic from '../Assets/processed.jpeg'
export default function ShowCV() {
    return (
        <>
            <div className="flex text-white w-5/12 h-screen justify-center mx-auto py-8">
                <div className=" bg-gray-700 flex flex-col justify-evenly p-8">
                    <div>
                        <img src={pic} alt="Profile" className=" rounded-3xl" />
                    </div>
                    <div>
                        <h2><span className="tracking-widest border-b-2">ABOUT ME</span></h2>
                        <ul className="list-non text-xs pt-2 space-y-2">
                            <li>Date of birth: 11/10/1998</li>
                            <li>Age: 23 years</li>
                            <li>Gender: Male </li>
                            <li>Birth place: Chuadanga, Khulna</li>
                        </ul>
                    </div>
                    <div>
                        <h2><span className="tracking-widest border-b-2">CONTACT</span></h2>
                        <ul className="list-non text-xs pt-2 space-y-2">
                            <li> <i className="fa fa-map-marker pr-2" />Chuadanga, Khulna</li>
                            <li><i className="fa fa-phone pr-2" />0183791984</li>
                            <li className="flex items-center"><i className="fa fa-envelope pr-2" />jahidruetian044@gmail.com</li>
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
                        <h1 className="text-7xl">Md. Jahid Hasan</h1>
                        <div className="flex">
                            <h1 className=" font-bold tracking-wider pr-2">Software engineer</h1>
                            <p className="bg-gray-700 flex-1 my-2"></p>
                        </div>
                    </div>
                    <div>
                        <h2 className="py-2"><span className="tracking-widest border-b-2 border-gray-700">CAREER OBJECTIVE</span></h2>
                        <p className="text-xs">To be able to work for an encoureging and stable company that will assist me in developing, improving and obtaining
                            necessary skills in order to become best engineer possible.
                        </p>
                    </div>
                    <div className="grid grid-cols-5 gap-1 py-4">

                        <div className="grid grid-cols-3 gap-1 col-span-3">
                            <div className="col-span-3">
                                <h2><span className="tracking-widest border-b-2 border-gray-700">EDUCATION</span></h2>
                            </div>

                            <div>
                                <h1 className="font-bold">2021</h1>
                            </div>

                            <div className="col-span-2">
                                <h1 className="font-bold">Bachelor Degree</h1>
                            </div>

                            <div >
                                <h1 className="font-bold">2016</h1>
                            </div>
                            <div className="col-end-4 col-span-2">
                                <p className="text-xs">Bachelor of Science in Computer Science and Engineering <br />
                                    Rajshahi University of Engineering & Technology</p>
                            </div>
                            <div>
                                <h1 className="font-bold">2016</h1>
                            </div>
                            <div className="col-span-2">
                                <h1 className="font-bold">H.S.C.</h1>
                            </div>
                            <div >
                                <h1 className="font-bold">2014</h1>
                            </div>
                            <div className="col-end-4 col-span-2">
                                <p className="text-xs">Higher Secondary Certificate <br />
                                    Chuadanga Govt. College, Jessore Board</p>
                            </div>

                        </div>
                        <div className="col-span-2">
                            <h2><span className="tracking-widest border-b-2 border-gray-700">TECHNICAL PROFICIENCIES</span></h2>
                            <p className="text-xs py-2">Javascript, C/C++, C#, Problem Solving, Data Structure</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="py-2"><span className="tracking-widest border-b-2 border-gray-700">EXPERIENCE</span></h2>
                        <p className="text-xs">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                            amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                            aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <div>
                            <h2 className="py-2"><span className="tracking-widest border-b-2 border-gray-700">EXPERTISE</span></h2>
                            <p className="text-xs">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit

                            </p>
                        </div>
                        <div>
                            <h2 className="py-2"><span className="tracking-widest border-b-2 border-gray-700">SKILLS</span></h2>
                            <p className="text-xs">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}