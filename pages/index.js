import Head from 'next/head';
import WelcomeStep from '../components/steps/WelcomeStep';

export default function Home() {
  return (
    <div className="content">
    <Head>
    <title>Clubhouse: Drop-in audio chat</title>
    </Head>
    <WelcomeStep />
    </div>
  )
}
