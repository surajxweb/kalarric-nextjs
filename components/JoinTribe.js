import styles from "./JoinTribe.module.css";

const JoinTribe = () => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>
        Ready to elevate your style game? Join the Kalarric Tribe today and
        unlock a world of exclusive updates, trendsetting drops, and sizzling
        hot offers delivered right to your inbox.
      </p>
      <form className={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          className={styles.emailInput}
        />
        <button type="submit" className={styles.submitButton}>
          Join Tribe
        </button>
      </form>
    </div>
  );
};

export default JoinTribe;
