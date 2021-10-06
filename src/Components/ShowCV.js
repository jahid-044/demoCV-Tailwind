

export default function ShowCV() {
    return (
        <>
            <div className="flex text-white w-3/5 m-auto">
                <div className=" bg-gray-700 flex flex-col justify-evenly h-screen p-8">
                    <div className="">
                        <h1>ABOUT ME</h1>
                        <p>
                            Date of birth: 11/10/1998 <br />
                            Age: 23 years <br />
                            Gender: Male <br />
                            Birth place: Chuadanga,Khulna
                        </p>
                    </div>
                    <div>
                        <h1>CONTACT</h1>
                        <p>
                            Damurhuda, Chuadanga <br />
                            0183791984 <br />
                            jahidruetian044@gmail.com
                        </p>
                    </div>
                    <div >
                        <h1>INTERESTS</h1>
                        <p>
                            <ul className="list-none">
                                <li>Problem solving</li>
                                <li>Sleeping</li>
                                <li>Chatting with friendsy</li>
                            </ul>
                        </p>
                    </div>

                </div>
                <div className="text-black">

                </div>
            </div>
        </>
    )
}