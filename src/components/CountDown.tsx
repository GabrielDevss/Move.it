import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/CountDown.module.css';


export function CountDown() {
  const {
    hasFinished,
    isActive,
    minutes,
    resetCountdown,
    seconds,
    startCountdown
  } = useContext(CountdownContext);

  const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');


  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minutesLeft}</span>
          <span>{minutesRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>

      </div>

      {hasFinished ? (
        <button disabled
          className={styles.countdownButton}
        
        >
          Ciclo encerrado
          <img src="/icons/check_circle.svg" alt="clico encerrado" />

        </button>
      ) : (
          <>

            { isActive ? (
              <button type="button"
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCountdown}
                
              >
                Abandonar ciclo
                <img src="/icons/close.svg" alt="abandonar clico" />
              </button>
            ) : (
                <button type="button"
                  className={styles.countdownButton}
                  onClick={startCountdown}
                >
                  Inicíar um ciclo
                </button>
              )

            }
          </>
        )}
    </div>

  );
}
