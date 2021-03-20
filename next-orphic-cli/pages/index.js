import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://orphic.sh">Orphic, Inc.</a>
        </h1>

        <p className={styles.description}>
          Great minds {' '}
          <code className={styles.code}>never think alike.</code>
        </p>

        <div className={styles.grid}>
          <a href="https://orphic.enterprises/welcome-to-the-internet" className={styles.card}>
            <h3>Welcome to the Internet &rarr;</h3>
            <p>Orphic's flagship podcast.</p>
          </a>

          <a href="https://orphic.enterprises/orphic-cli" className={styles.card}>
            <h3>Orphic CLI &amper; Tudio API &rarr;</h3>
            <p>CLI for devs, API for streams, learn more about our ecosystem!</p>
          </a>

          <a
            href="https://github.com/orphic-inc/"
            className={styles.card}
          >
            <h3>GitHub &rarr;</h3>
            <p>Connect with our team on GitHub</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel + <a href="https://orphic.enterprises/orphic-cli">Orphic CLI.</a>
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> + <img src="/orphic.svg" alt="Orphic Logo" className={styles.logo} /> 
        </a>
      </footer>
    </div>
  )
}
