import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengesBox.module.css';


export function ChallengesBox() {
  const {
    activeChallenges,
    resetChallenge,
    completeChallenge } = useContext(ChallengesContext);

  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }


  return (
    <div className={styles.challengesBoxContainer}>
      { activeChallenges ? (
        <div className={styles.challengesActive}>
          <header>Ganhe {activeChallenges.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenges.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenges.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengesFailButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>

            <button
              type="button"
              className={styles.challengesSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>

        </div>
      ) : (
          <div className={styles.challengesNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="level up" />
      Avance de level completando os desafios.
    </p>
          </div>
        )
      }

    </div>
  )
}