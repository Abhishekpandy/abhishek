import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'



export default function Home({posts}) {
  return (
    <div className=' my-20'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto">
        <h1 className=' text-9xl'>Hello from the home page</h1>
      </div>
      <Hero />
      
    </div>
  )
}

