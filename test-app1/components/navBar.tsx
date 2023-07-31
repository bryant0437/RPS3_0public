import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
    const [navbar, setNavBar] = useState(false);
    return (
        <div>
            <nav className="w-full bg-lightyellowBG fixed top-0 left-0 right-0 z-10">
                <div className="justify-between px-4 mx-auto lg:max-w-7x1 md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        {/* <div> */}
                            {/* <span style={{textAlign: 'left', float: 'left'}}> */}
                                <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:birder" onClick={() => setNavBar(!navbar)}>
                                    {navbar ? (
                                        <Image src="/close.svg" width={30} height={30} alt="navbar_button"/>
                                    ) : (
                                        <Image src="/icon_navbar.svg" width={65} height={65} alt="navbar_button" className="focus:border-none active:border-none"/>
                                    )}
                                </button>
                            {/* </span> */}
                            <span style={{marginLeft: 'auto', marginRight: 'auto'}}>
                                <Image src="/tony_icon_rock.svg" width={65} height={65} alt="navbar_button" className="focus:border-none active:border-none"/>
                            </span>
                            {/* <span style={{textAlign: 'right', float: 'right'}}> */}
                                <button className='bg-pinkBG' style={{height: '50px', width: '200px', marginTop: '5px', marginRight: '10px', float: 'right', borderRadius: '10px', boxShadow: '1px 1px 1px grey', color: '#931A1A', fontSize: 20, fontWeight: 'bold', textShadow: '1px 1px 1px grey'}}>
                                    Connect Wallet
                                </button>
                            {/* </span> */}
                        </div>
                    </div>
                    <div>
                        <div
                        className={`justify-self-center pb-3 mt-8 
                        ${
                            navbar ? 'p-12 block' : 'hidden'
                        }
                        `}
                        >
                            <div className="h-screen items-center justify-center">
                                <div className="pb-6 text-xl text-black py-2 text-center border-b-2 hover:bg-purple-900  border-purple-900">
                                    Home
                                </div>
                                <div className="pb-6 text-xl text-black py-2 text-center border-b-2 hover:bg-purple-900  border-purple-900">
                                    About
                                </div>
                                <div className="pb-6 text-xl text-black py-2 text-center border-b-2 hover:bg-purple-900  border-purple-900">
                                    Twitter
                                </div>
                            </div>
                            {/* <ul className="h-screen items-center justify-center">
                                <li className="pb-6 text-xl text-white py-2 text-center border-b-2 hover:bg-purple-900  border-purple-900">
                                <Link href="#gameScene" onClick={() => setNavBar(!navbar)}>
                                    gameScene1
                                </Link>
                                </li>
                                <li className="pb-6 text-xl text-white py-2 px-6 text-center border-b-2 hover:bg-purple-600  border-purple-900">
                                <Link href="#leaderBoard" onClick={() => setNavBar(!navbar)}>
                                    leaderBoard2
                                </Link>
                                </li>
                                
                            </ul> */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;