import pic from '../Assets/processed.jpeg'
export default function ShowCV() {
    return (
        <>
            <div className="flex flex-col md:flex-row text-white w-3/4 md:w-3/5 lg:w-1/2 xl:w-5/12 md:h-screen justify-center mx-auto">
                <div className=" bg-gray-700 flex flex-col justify-start items-center md:justify-evenly p-8">
                    <div>
                        <img src={pic} alt="Profile" className=" rounded-full w-36 h-36" />
                    </div>
                    <div className="md:hidden">
                        <h1 className="text-3xl sm:text-5xl pt-4">Md. Jahid Hasan</h1>
                        <div className="flex">
                            <h1 className=" font-bold tracking-wider pr-2">Software engineer</h1>
                            <p className="bg-gray-200 flex-1 my-2"></p>
                        </div>
                    </div>
                    <div className="md:flex md:flex-col md:flex-1 md:justify-evenly">
                        <div className="pt-8 md:pt-0">
                            <h2><span className="tracking-widest border-b-2">ABOUT ME</span></h2>
                            <ul className="list-non text-xs pt-2 space-y-2">
                                <li>Date of birth: 11/10/1998</li>
                                <li>Age: 23 years</li>
                                <li>Gender: Male </li>
                                <li>Birth place: Chuadanga, Khulna</li>
                            </ul>
                        </div>
                        <div className="pt-8 md:pt-0">
                            <h2><span className="tracking-widest border-b-2">CONTACT</span></h2>
                            <ul className="list-non text-xs pt-2 space-y-2">
                                <li> <i className="fa fa-map-marker pr-2" />Chuadanga, Khulna</li>
                                <li><i className="fa fa-phone pr-2" />0183791984</li>
                                <li className="flex items-center"><i className="fa fa-envelope pr-2" />jahidruetian044@gmail.com</li>
                            </ul>
                        </div>
                        <div className="pt-8 md:pt-0">
                            <h2><span className="tracking-widest border-b-2">INTERESTS</span></h2>

                            <ul className="list-non text-xs pt-2 space-y-2">
                                <li>Problem solving</li>
                                <li>Sleeping</li>
                                <li>Chatting with friends</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="text-black flex flex-col pl-2">
                    <div className="pb-8 flex flex-col">
                        <h1 className="text-xl lg:text-3xl xl:text-4xl 2xl:text-7xl hidden md:block ">Md. Jahid Hasan</h1>
                        <div className="flex">
                            <h1 className=" font-bold tracking-wider pr-2 hidden md:block">Software engineer</h1>
                            <p className="bg-gray-700 flex-1 my-2 hidden md:block"></p>
                        </div>
                    </div>
                    <div>
                        <h2 className="py-2"><span className="tracking-widest border-b-2 border-gray-700">CAREER OBJECTIVE</span></h2>
                        <p className="text-xs">To be able to work for an encoureging and stable company that will assist me in developing, improving and obtaining
                            necessary skills in order to become best engineer possible.
                        </p>
                    </div>
                    <div className="grid grid-cols-5 gap-1 py-4">

                        <div className="grid grid-cols-3 gap-1 col-span-5 md:col-span-3">
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
                                <h1 className="font-bold pt-4 md:pt-0">2016</h1>
                            </div>
                            <div className="col-span-2">
                                <h1 className="font-bold pt-4 md:pt-0">H.S.C.</h1>
                            </div>
                            <div >
                                <h1 className="font-bold">2014</h1>
                            </div>
                            <div className="col-end-4 col-span-2">
                                <p className="text-xs">Higher Secondary Certificate <br />
                                    Chuadanga Govt. College, Jessore Board</p>
                            </div>

                        </div>
                        <div className="col-span-5 md:col-span-2 pt-8 md:pt-0">
                            <h2><span className="tracking-widest border-b-2 border-gray-700">TECHNICAL PROFICIENCIES</span></h2>
                            <p className="text-xs py-2">Javascript, C/C++, C#, Problem Solving, Data Structure</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="py-2"><span className="tracking-widest border-b-2 border-gray-700">EXPERIENCE</span></h2>
                        <p className="text-xs">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-end pt-8">
                        <div className="w-full grid grid-cols-3 gap-1">
                            <h2 className="col-span-3"><span className="tracking-widest border-b-2 border-gray-700">EXPERTISE</span></h2>
                            <p className="col-span-2 text-xs">CMS customizations and plugin development</p>
                            <div className="flex align-middle py-1">
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700 ml-1"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700 ml-1"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-200 ml-1"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-200 ml-1"></p>
                            </div>
                            <p className="col-span-2 text-xs">Widget development</p>
                            <div className="flex align-middle py-1">
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700 ml-1"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700 ml-1"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700 ml-1"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-200 ml-1"></p>
                            </div>
                            <p className="col-span-2 text-xs">Custom CMS themes</p>
                            <div className="flex align-middle py-1">
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700 ml-1"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-200 ml-1"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-200 ml-1"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-200 ml-1"></p>
                            </div>
                            <p className="col-span-2 text-xs">Framework knowledge</p>
                            <div className="flex align-middle py-1">
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700 ml-1"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700 ml-1"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700 ml-1"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-200 ml-1"></p>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-3 gap-1  pt-2">
                            <h2 className="col-span-3"><span className="tracking-widest border-b-2 border-gray-700">SKILLS</span></h2>
                            <p className="col-span-2 text-xs">Attentive listening and effective oral communication skills </p>
                            <div className="flex align-middle py-1">
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700 ml-1"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700 ml-1"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700 ml-1"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-200 ml-1"></p>
                            </div>
                            <p className="col-span-2 text-xs">Great at problem solving</p>
                            <div className="flex align-middle py-1">
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700 ml-1"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700 ml-1"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700 ml-1"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-200 ml-1"></p>
                            </div>
                            <p className="col-span-2 text-xs">Good leadership skills</p>
                            <div className="flex align-middle py-1">
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700 ml-1"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700 ml-1"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-200 ml-1"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-200 ml-1"></p>
                            </div>
                            <p className="col-span-2 text-xs">Critical thinker</p>
                            <div className="flex align-middle py-1">
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-700 ml-1"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-200 ml-1"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-200 ml-1"></p>
                                <p className="w-1.5 h-1.5 rounded-2xl bg-gray-200 ml-1"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}