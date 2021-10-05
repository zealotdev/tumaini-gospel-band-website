import Head from 'next/head';
import { Hero } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tumaini | Gospel Choir</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Hero />
    </div>
  );
}
