import { CompletedChallenges } from '../components/CompletedChallenges';
import { CountDown } from '../components/CountDown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengesBox } from '../components/ChallengesBox';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { GetServerSideProps } from 'next';


import Head from 'next/head';

import styles from '../styles/pages/home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider>

    <div className={styles.container}>
      <Head>
        <title>Inicío | move.it</title>
      </Head>

      <ExperienceBar />
      <CountdownProvider>
        <section >
          <div >
            <Profile />
            <CompletedChallenges />
            <CountDown />
          </div>
          <div>
            <ChallengesBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
    </ChallengesProvider>

  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user = {
    level: 1,
    currentExperience: 50,
  }

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level), 
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted)
    }
  }
}