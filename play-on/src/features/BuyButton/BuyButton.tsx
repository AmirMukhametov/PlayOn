import { memo } from 'react';
import styles from './styles.module.css'

export const BuyButton = memo(() => {
  return (
    <button className={styles.button}>
      Buy for 50$
    </button>
  );
});

