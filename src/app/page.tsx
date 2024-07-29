import Calculator from '../app/components/calculator.js';
import styles from '../app/styles/Calculator.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Calculator />
    </div>
  );
}