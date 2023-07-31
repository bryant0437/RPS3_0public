import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/navBar'
// import Footer from '@/components/footer';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [gameScene, setGameScene] = useState(true);
  const [leaderBoard, setLeaderBoard] = useState(false);
  const [myRecord, setMyRecord] = useState(false);
  return (
    <>
      <main>
        <div>
          <NavBar/>
          <div className='bg-blueBG'>
            {gameScene ? (
            <section id='gameScene' className='text-white justify-between h-screen mb-auto text-center flex'>
              <div className='bg-lightblueBG m-auto' style={{height: '500px', width: '500px', border: '200px', borderRadius: '10px'}}>
                <div className='bg-pinkBG m-auto' style={{height: '70px', width: '250px', borderRadius: '10px', marginTop: '10px', marginRight: '10px', float: 'right', boxShadow: '1px 1px 1px grey'}}>
                  <div>
                    <p style={{marginTop: '10px', marginLeft: '10px', left: 'auto', position: 'absolute', color: '#931A1A', fontWeight: 'bold'}}>
                      balance: 1.000001
                    </p>
                  </div>
                  <div>
                    <p style={{marginTop: '35px', marginLeft: '10px', float: 'left', position: 'absolute', color: '#931A1A', fontWeight: 'bold'}}>
                      vault: 0.00001
                    </p>
                    <button className='bg-blueBG' style={{width: '80px', marginTop: '35px', marginRight: '10px', float: 'right', borderRadius: '10px', boxShadow: '1px 1px 1px grey', fontWeight: 'bold'}}>
                      claim
                    </button>
                  </div>
                </div>
                <div style={{clear: 'both'}}>
                  <p className='m-auto font-waterfall text-7x1 font-bold' style={{borderTop: '4px solid black', borderBottom: '4px solid black', width: '60%', marginTop: '100px', fontSize: 40, color: 'black'}}>
                    Select Room
                  </p>
                </div>
                <div>
                  <button style={{color: 'black', marginTop: '30px', fontSize: 30}}>
                    <Image src="/bt_room_0.05.svg" width={250} height={150} alt="0.05room"/>
                  </button>
                </div>
                <div>
                  <button style={{color: 'black', marginTop: '20px', fontSize: 30}}>
                    <Image src="/bt_room_0.3.svg" width={250} height={150} alt="0.05room"/>
                  </button>
                </div>
                <div>
                  <button style={{color: 'black', marginTop: '20px', fontSize: 30}}>
                    <Image src="/bt_room_1.svg" width={250} height={150} alt="0.05room"/>
                  </button>
                </div>
              </div>
              {/* <h1 className='bg-lightblueBG m-auto font-waterfall text-7x1 text-purple-600 font-bold'>
                gameScene
              </h1> */}
            </section>
            ) : <div></div>}
            {leaderBoard ? (
              <section id='leaderBoard' className='text-black h-screen text-center flex'>
                <div className='bg-lightblueBG m-auto' style={{height: '500px', width: '500px', border: '200px', borderRadius: '10px'}}>
                  <div>
                    <p className='m-auto font-waterfall text-7x1 font-bold' style={{borderTop: '4px solid black', borderBottom: '4px solid black', width: '60%', marginTop: '30px', fontSize: 40, color: 'black'}}>
                      Leaderboard
                    </p>
                  </div>
                  <div>
                    <p className='font-bold' style={{marginTop: '20px', marginLeft: '15px', color: '#AD6868', fontSize: 20, textAlign: 'left'}}>
                      Top 10
                    </p>
                  </div>
                  <table style={{marginLeft: '15px', width: '450px'}}>
                    <tr>
                      <th className='font-bold' style={{color: '#AD6868', fontSize: 20, textAlign: 'left'}}>
                        Address
                      </th>
                      <th className='font-bold' style={{color: '#AD6868', fontSize: 20, textAlign: 'left'}}>
                        Wins
                      </th>
                      <th className='font-bold' style={{color: '#AD6868', fontSize: 20, textAlign: 'left'}}>
                        ETH
                      </th>
                    </tr>
                    <tr>
                      <td style={{textAlign: 'left'}}>0x12345678901234567890</td>
                      <td style={{textAlign: 'left'}}>100</td>
                      <td style={{textAlign: 'left'}}>1000</td>
                    </tr>
                  </table>
                </div>
                {/* <h1 className='m-auto font-waterfall text-7x1 text-purple-600 font-bold'>
                  leaderBoard
                </h1> */}
              </section>
            ) : <div></div>}
            {myRecord ? (
              <section id='myRecord' className='text-black h-screen text-center flex'>
                <div className='bg-lightblueBG m-auto' style={{height: '500px', width: '500px', border: '200px', borderRadius: '10px'}}>
                  <div>
                    <p className='m-auto font-waterfall text-7x1 font-bold' style={{borderTop: '4px solid black', borderBottom: '4px solid black', width: '60%', marginTop: '30px', fontSize: 40, color: 'black'}}>
                      My Record
                    </p>
                  </div>
                  <div className='bg-pinkBG m-auto' style={{height: '200px', width: '400px', borderRadius: '10px', marginTop: '20px', boxShadow: '1px 1px 1px grey'}}>
                    <p className='font-bold' style={{color: '#931A1A', textDecoration: 'underline', fontSize: 30}}>
                      RPS 3.0 Card
                    </p>
                    <table>
                      <tr>
                        <td style={{width: '150px'}}></td>
                        <td>
                          <p className='font-bold' style={{marginTop: '30px', fontSize: 20, color: '#FAF9C8', width: '100px'}}>
                            Wins:
                          </p>
                        </td>
                        <td>
                          <p className='font-bold' style={{marginTop: '30px', fontSize: 20, color: '#FAF9C8'}}>
                            10000
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <p className='font-bold' style={{fontSize: 20, color: '#FAF9C8', width: '100px'}}>
                            Earned:
                          </p>
                        </td>
                        <td>
                          <p className='font-bold' style={{fontSize: 20, color: '#FAF9C8', width: '100px'}}>
                            0.00001
                          </p>
                        </td>
                      </tr>
                    </table>
                    {/* <p className='font-bold' style={{marginTop: '30px', fontSize: 20, color: '#FAF9C8'}}>
                      Wins:
                    </p> */}
                    <p style={{fontSize: 12, marginTop: '30px'}}>
                      0x12345678901234567890
                    </p>
                  </div>
                  <button className='bg-lightyellowBG m-auto' style={{height: '50px', width: '180px', borderRadius: '10px', marginTop: '20px', boxShadow: '1px 1px 1px grey'}}>
                    <p className='font-bold' style={{fontSize:30, color: '#7196AD'}}>
                      Save
                    </p>
                  </button>
                </div>
              </section>
            ) : <div></div>}

            {/* footer */}
            <div className='bg-lightyellowBG' style={{height: '80px', width: '100%'}}>
                <div className='text-center'>
                    <button style={{marginRight: '100px', marginTop: '8px'}} onClick={() => {setGameScene(false); setLeaderBoard(true); setMyRecord(false);}}>
                        <Image src="/icon_leaderboard.svg" width={65} height={65} alt="leaderboard"/>
                    </button>
                    <button style={{marginRight: '100px'}} onClick={() => {setGameScene(true); setLeaderBoard(false); setMyRecord(false);}}>
                        <Image src="/icon_fight.svg" width={65} height={65} alt="gameScene"/>
                    </button>
                    <button onClick={() => {setGameScene(false); setLeaderBoard(false); setMyRecord(true);}}>
                        <Image src="/icon_stat.svg" width={65} height={65} alt="gameStat"/>
                    </button>
                </div>
                
            </div>
          </div>
            
            
          
          {/* <Footer/> */}
        </div>
      </main>
    </>
    // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    // >
    //   <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       hello world Get started by editing&nbsp;
    //       <code className="font-mono font-bold">pages/index.tsx</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Discover and deploy boilerplate example Next.js&nbsp;projects.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  )
}
