import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Link from '../components/Link';
import { useRouter } from 'next/router'
import Image from 'next/image';

const Navbar = () => {
  const [active, setACtive] = useState(false)
  return (
    <div className='bg-green-600'>
    <Image src="/YUNOLOGO.png" width={200} height={200} alt='LOGO' className='md:hidden'/>

    <div className={active ? 'z-50 hidden bg-green-600 text-black fixed items-center h-screen flex-col w-screen md:w-screen md:h-28 md:flex md:justify-center lg:justify-center md:flex-row lg:w-full lg:h-28 lg:flex lg:flex-row' : 'z-50 hidden bg-green-600 text-black items-center justify-center fixed h-28 flex-col w-screen md:w-screen md:h-28 md:flex md:flex-row md:justify-center lg:justify-center lg:w-screen lg:h-28 lg:flex lg:flex-row'}>
        <div className={active ? ' w-full flex flex-col h-fit justify-center items-center bg-green-600 md:flex lg:flex md:flex-row md:items-center lg:items-center md:h-28 md:text-black md:justify-center lg:flex-row lg:text-black lg:justify-center' : 'md:flex lg:flex md:flex-row md:h-28 md:text-black md:justify-center md:items-center lg:items-center lg:flex-row lg:h-28 lg:text-black lg:justify-center '}>          

        <div className='w-full px-2 flex-col md:flex-row h-16 justify-between items-center flex cursor-pointer transition ease-in-out delay-150 rounded-full transform hover:text-white hover:-translate-y-1 hover:scale-110'>
        <Image src="/YUNOLOGO.png" width={200} height={200} alt='LOGO'/>
            <div className='ml-10 flex flex-row'>
            <Link href="home">
              <div className="text-gray-200 hover:text-white text-lg px-3 py-2 rounded-md font-medium">
                Home
              </div>
            </Link>
            <Link href="about">
              <div className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                About
              </div>
            </Link>
            <Link href="how-to-buy">
              <div className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                How to Buy
              </div>
            </Link>
            <Link href="tokenomics">
              <div className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                Tokenomics
              </div>
            </Link>
            <Link href="roadmap">
              <div className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                Roadmap
              </div>
            </Link>
          </div>
          </div>
          <div className="flex">
            <Link href="https://app.uniswap.org/#/swap?outputCurrency=0x547224f501a40ccf98c81d98f8dd19cb95f83e2e">
              <div className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded-md ml-4">
                Buy
              </div>
            </Link>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Navbar;
