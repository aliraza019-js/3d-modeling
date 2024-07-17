// pages/index.js
import Head from 'next/head';
import ThreeScene from '../components/ThreeScene';

export default function Home() {
  return (
    <div>
      <Head>
        <title>NFT Builder by Ali Raza</title>
        <meta name="description" content="Three.js with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>NFT Builder by Ali Raza</h1>
        <ThreeScene />
      </main>
    </div>
  );
}
