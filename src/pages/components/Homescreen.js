import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '../components/AnimatedSection'
import Head from 'next/head'
// import { SwapWidget } from '@uniswap/widgets'
// import '@uniswap/widgets/fonts.css'




function HomeScreen() {

  const Exchanges = [
    {

      title:'Uniswap',
      icon:'/uniswapIcon.webp',
      path:'https://app.uniswap.org/#/swap',
    }
  ]

  return (
    <div className='flex flex-col w-full lg:pt-0 bg-green-600 overflow-hidden'>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="YUNO is a meme coin powered by the community." />
          <meta name="keywords" content="YUNO, meme coin, cryptocurrency, community-powered" />
          <meta name="author" content="YUNO" />
          <link rel="icon" href="/YUNOLOGO.png" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,900,500,700&display=swap" />
          <title>$YUNO💲😜💰</title>
        </Head>
      <main className='bg-green-600 md:pt-28 relative overflow-hidden'>
      <section className="bg-green-600 relative md:pb-16 flex flex-col justify-center items-center" id="home">
      <AnimatedSection>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 max-w-screen-lg">
          <div className="w-full md:w-1/2 md:min-h-screen min-h-screen flex justify-center items-center flex-col mb-10 md:mb-0">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">$YUNO💲😜💰</h2>
            <p className="text-gray-200 leading-relaxed text-xl">Brace yourself as YUNO emerges victorious, claiming the throne in the memetic realm and leaving its competitors in awe. The stage is set, the battle is fierce, and YUNO is here to dominate like never before. Get ready for a memetic revolution like no other!</p>
                    
            <div className="mt-8">
              <div className="flex flex-wrap items-center justify-center md:justify-start">
                <Link href="https://twitter.com/yuno_token?s=21&t=eBNaq5NkYzzDhHb7vfYgzw" className='ml-2'>
                  <Image src='/twitterIcon.webp' width={60} height={60} alt='twitter'/>
                </Link>
                <Link href="https://t.me/yuno_token" className='ml-2'>
                  <Image src='/telegramIcon.webp' width={60} height={60} alt='telegram'/>
                </Link>

                <Link href="https://www.dextools.io/app/en/ether/pair-explorer/0x44c5d3b8b28af6929447a01260df89028f79ff21" className='ml-2'>
                  <Image src='/dexTool.webp' width={60} height={60} alt='dexTool'/>
                </Link>
                <Link href="https://etherscan.io/dex/uniswapv2/0x547224f501a40ccf98c81d98f8dd19cb95f83e2e" className='ml-2'>
                  <Image src='/etherscanIcon.webp' width={60} height={60} alt='etherscan'/>
                </Link>
                <Link href="https://app.uniswap.org/#/swap?outputCurrency=0x547224f501a40ccf98c81d98f8dd19cb95f83e2e" className='ml-2'>
                  <Image src='/uniswapIcon.webp' width={60} height={60} alt='uniswap'/>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[url('/GreenYuno.png')] hidden md:flex bg-no-repeat bg-contain absolute md:left-2/4 top-0 w-3/4 h-screen"/>
        </div>
        </AnimatedSection>
        <div className='flex flex-wrap justify-center w-full px-6 md:px-24'>
          {Exchanges.map((item, index) => {
            return (
              <div className='w-full sm:w-1/3 p-2' key={index}>
                <Link href='https://app.uniswap.org/#/swap?outputCurrency=0x547224f501a40ccf98c81d98f8dd19cb95f83e2e'>
                  <div className='border border-white rounded-full p-4'>
                    <h2 className='text-gray-100 text-center'>{item.title}</h2>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-green-600 px-6 py-16 min-h-screen relative" id="about">
        <AnimatedSection>
          <div className="hidden md:flex absolute left-0 top-0 w-3/4 h-screen bg-no-repeat bg-contain bg-[url('/YellowYuno.png')]" />
          <div className="container mx-auto flex justify-end items-end">
            <div className="w-full md:w-1/2 md:pl-24">
              <h2 className="text-4xl font-bold mb-8 text-gray-100 text-center">About $YUNO💲💰</h2>
              <p className="text-gray-200 leading-relaxed text-xl mb-8">It's high time for $YUNO to rise up and take throne as the ultimate ruler of memes. YUNO fearlessly sets out on a mission to obliterate the competition. Get ready Shit coins.... It's on. <br /><br />
                Brace yourselves, Shit coins! Your days of false glory are numbered. The reign of $YUNO is upon us, it's time for you to bow down and witness the true might of $YUNO.
                <br /><br />
                $YUNO stands tall, while you sink into the depths of irrelevance. Your memes are nothing but feeble attempts to imitate greatness, but $YUNO is the one true king, the embodiment of memetic excellence.
                <br /><br />
                So cling to your fleeting moments of fame, Shit coins!!! they shall soon be extinguished by $YUNO's supremacy. Brace yourselves for a meme revolution like no other. The era of mediocrity ends here, and the era of $YUNO begins.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

  <section className="bg-green-600 relative justify-center flex flex-col items-center min-h-screen py-16 mt-8" id="how-to-buy">
  <AnimatedSection>
    <div className="bg-[url('/GreenYuno.png')] opacity-[0.1] bg-no-repeat bg-contain left-1/3 absolute top-24 w-full h-screen"></div>

    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-8 text-gray-100 text-center">How to Buy $YUNO</h2>
      <div className="flex flex-wrap justify-center items-center">
        <div className="p-4 flex border border-white bg-green-800 rounded-top justify-start items-start flex-row how-bottom">
          <Image src="/wallet.webp" width={200} height={200}/>
          <div className="p-4 flex justify-start items-start flex-col">
            <h3 className="text-xl font-bold text-gray-100 mb-4">Step 1: Get a Wallet</h3>
            <p className="text-gray-200 leading-relaxed text-xl">Before you can buy $YUNO, you will need to have a cryptocurrency wallet that supports Ethereum. There are many different wallets available, so do your research and choose one that is right for you.</p>
          </div>
        </div>
        <div className="p-4 flex border border-white mt-10 bg-green-800 rounded-top justify-start items-start flex-row how-bottom">
          <Image src="/eth.webp" width={200} height={200}/>
          <div className="p-4 flex justify-start items-start flex-col">
            <h3 className="text-xl font-bold text-gray-100 mb-4">Step 2: Buy Ethereum</h3>
            <p className="text-gray-200 leading-relaxed text-xl">In order to buy $YUNO, you will need to first buy Ethereum (ETH) from a cryptocurrency exchange. There are many exchanges to choose from, including Coinbase, Binance, and Kraken.</p>
          </div>
        </div>
        <div className="p-4 flex border border-white mt-10 bg-green-800 rounded-top justify-start items-start flex-row how-bottom">
          <Image src="/uniswapBuy.webp" width={200} height={200}/>
          <div className="p-4 flex justify-start items-start flex-col">
            <h3 className="text-xl font-bold text-gray-100 mb-4">Step 3: Exchange Ethereum for $YUNO</h3>
            <p className="text-gray-200 leading-relaxed text-xl">Once you have Ethereum in your wallet, you can exchange it for $YUNO on a decentralized exchange (DEX) such as Uniswap. Simply connect your wallet to the DEX and place a buy order for $YUNO.</p>
          </div>
        </div>
        <div className="p-4 flex border border-white mt-10 bg-green-800 rounded-top justify-start items-start flex-row how-bottom">
        <div className="p-4 flex justify-start items-start flex-col">
          <h3 className="text-xl font-bold text-gray-100 mb-4">Step 4: Hold or Trade $YUNO</h3>
          <p className="text-gray-200 leading-relaxed text-xl">Once you have $YUNO in your wallet, you can choose to hold it for the long-term or trade it for other cryptocurrencies or fiat currencies. Remember that cryptocurrency prices can be volatile, so always do your own research and invest responsibly.</p>
        </div>
        </div>
          {/* <div className="Uniswap">
          <SwapWidget
              onConnectWallet={focusConnectors}
              defaultInputTokenAddress="NATIVE"
              defaultInputAmount="1"
            />
          </div> */}
          </div>
        </div>

        </AnimatedSection>
    </section>

    <section className="bg-green-600 py-16 min-h-screen relative text-white" id="tokenomics">
    <AnimatedSection>
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold mb-8 text-gray-100 text-center">Tokenomics</h2>
    <p className="text-gray-200 leading-relaxed text-center w-1/2 font-extrabold text-4xl mb-8">Total Supply: <br/><br/>420,000,000,000,000 tokens</p>
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 p-4">
        <ul className="w-full p-4 flex flex-col list-disc">
          <li className='text-gray-100 leading-relaxed text-xl'>All liquidity is securely locked</li>
          <li className='text-gray-100 leading-relaxed text-xl'>Ownership has been renounced.</li>
        </ul>
        <p className="text-gray-200 leading-relaxed text-xl">A total of 7% of the tokens have been placed in a multisig wallet, while the remaining 93% has been provided to the UNISWAP LP. The taxes collected are directed to a specific address and will be burned to decrease the supply of $YUNO. <br/>No unnecessary taxes or complications.
        <br/><br/>
        93% of the tokens were allocated to the liquidity pool, and the contract was renounced. The remaining 7% of the token supply is securely held in a multi-sig wallet. These tokens will be reserved for future centralized exchange listings, bridges, and liquidity pools..</p>
      </div>
      <div className="bg-[url('/HODLMF.png')] flex bg-no-repeat bg-contain md:absolute md:left-2/4 top-1/4 w-3/4 h-3/4"/>
    </div>
  </div>
  </AnimatedSection>
</section>
<section className="container mx-auto min-h-screen mb-32 flex flex-col relative z-10 md:flex-col items-stretch justify-between px-6 max-w-screen-lg" id="roadmap">
<AnimatedSection>
  <div className="container flex-wrap justify-center mx-auto px-6">
    <h2 className="text-4xl font-bold mb-8 text-gray-100 text-center">Road Map</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className='p-4 flex border border-white bg-green-800 rounded-top justify-center items-center flex-col sharp-bottom'>
        <h1 className='text-4xl md:text-6xl text-gray-100 text-center font-extrabold'>🐾🌍</h1>
        <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-100 text-center">Phase 1:</h3>
        <ul className="w-full p-4 flex flex-col list-disc">
          <li className="text-gray-100 leading-relaxed text-xl">$YUNO Launch: Prepare for an epic journey into the world of YUNO.</li>
          <li className="text-gray-100 leading-relaxed text-xl">Listings on UNISWAP: Get ready to witness the rise of $YUNO in the cryptocurrency market.</li>
          <li className="text-gray-100 leading-relaxed text-xl">1,000+ YUNO Holders: Join a growing community of $YUNO enthusiasts who believe in the power of this extraordinary token.</li>
          <li className="text-gray-100 leading-relaxed text-xl">Memetic Mastery: We'll use our memetic power to make $YUNO trend on Twitter and create a viral sensation.</li>            
        </ul>
      </div>
      <div className='p-4 flex bg-green-800 border border-white rounded-top justify-center items-center flex-col sharp-bottom'>
        <h1 className='text-4xl md:text-6xl text-gray-100 text-center font-extrabold'>🐾🌍</h1>
        <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-100 text-center">Phase 2:</h3>
        <ul className="w-full p-4 flex list-disc flex-col">
          <li className="text-gray-100 leading-relaxed text-xl">Community Partnerships: Collaborate with renowned brands and influencers to amplify the YUNO experience. Stay tuned for exciting announcements!</li>
          <li className="text-gray-100 leading-relaxed text-xl">$YUNO Report: Dive into the exclusive world of our digital newsletter, where we'll keep you updated on all things YUNO.</li>
          <li className="text-gray-100 leading-relaxed text-xl">$YUNOverse: Unlock the doors to the exclusive YUNO community by becoming a holder. Prepare for unique privileges and surprises, to be revealed soon!</li>
          <li className="text-gray-100 leading-relaxed text-xl">Explore other ways to expand the $YUNO community</li>            
        </ul>
      </div>
      <div className='p-4 flex bg-green-800 border border-white rounded-top justify-center items-center flex-col sharp-bottom'>
        <h1 className='text-4xl md:text-6xl text-gray-100 text-center font-extrabold'>🐾🌍</h1>
        <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-100 text-center">Phase 3:</h3>
        <ul className="w-full p-4 list-disc flex flex-col">
          <li className="text-gray-100 leading-relaxed text-xl">$YUNO Merchandise: Express your love for YUNO with our exclusive merch collection. Stand out from the crowd and let the world know you're part of something extraordinary.</li>
          <li className="text-gray-100 leading-relaxed text-xl">$YUNO Academy: Immerse yourself in the YUNO Academy and unlock a treasure trove of knowledge and insights about the cryptocurrency world.</li>
          <li className="text-gray-100 leading-relaxed text-xl">$YUNO Tools: Equip yourself with powerful tools designed to enhance your YUNO experience. Discover new strategies, track trends, and unleash your full potential.</li>
          <li className="text-gray-100 leading-relaxed text-xl">Memetic Takeover: Brace yourself for an unforgettable moment in history as YUNO unleashes a memetic revolution like never before seen. Get ready to make waves across social media and beyond.</li>
        </ul>
        </div>
        </div>
      </div>
{      /**<div className="bg-[url('/question$YUNO.png')] bg-no-repeat hidden md:flex bg-contain absolute md:-right-10 top-24 -right-28 w-1/2 h-screen"></div>
**/}      
      </AnimatedSection>
    </section>
    <section className="bg-green-600 mb-56 py-16 px-6 min-h-screen relative" id="contact">
        <AnimatedSection>
        <h2 className="text-4xl font-bold mb-8 text-gray-100 text-center">Contact $YUNO💲</h2>
          <div className="hidden md:flex absolute left-0 top-24 w-3/4 h-screen bg-no-repeat bg-contain bg-[url('/BrownYuno.png')]" />
          <div className="container mx-auto flex justify-end items-end">
            <div className="w-full md:w-1/2 md:pl-24">
              <div className="flex flex-wrap items-center my-10 justify-center md:justify-start lg:justify-center">
                  <Link href="https://twitter.com/yuno_token?s=21&t=eBNaq5NkYzzDhHb7vfYgzw" className='ml-2'>
                    <Image src='/twitterIcon.webp' width={100} height={100} alt='twitter'/>
                  </Link>
                  <Link href="https://t.me/yuno_token" className='ml-2'>
                    <Image src='/telegramIcon.webp' width={100} height={100} alt='telegram'/>
                  </Link>
                  <Link href="https://www.dextools.io/app/en/ether/pair-explorer/0x44c5d3b8b28af6929447a01260df89028f79ff21" className='ml-2'>
                    <Image src='/dexTool.webp' width={100} height={100} alt='dexTool'/>
                  </Link>
              </div>
              <p className="text-gray-200 leading-relaxed text-xl mb-8">$YUNO has no assosiation with Seth Greening or his creation, The Loltaku Comics. <br/><br/> $YUNO, a memetic cryptocurrency, holds no inherent value or anticipation of financial gain. It doesn't have a formal team or a predefined roadmap. This token serves no practical purpose and exists solely for entertainment and amusement. </p>
            </div>
          </div>
        </AnimatedSection>
      </section>
  </main>
  </div>
  )
}

export default HomeScreen