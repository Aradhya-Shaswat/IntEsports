import { useRouter } from "next/router"
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  const router = useRouter()
  const {
    query: { method },
  } = router
  return (
    <div>
        <Head>
        <title>IntEsports | Join</title>
        <meta name="description" content="IntEsports is an Indian E-Sports Organization who specializes in Valorant & CS:GO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
            
        <div className={styles.description}>
          <p>
            <b>Joining @ IntEsports</b>
          </p>
        </div>
        <div className={styles.center1}>
        <a
            href="https://forms.gle/dyfRS4rnBv21whHA8"
            className={styles.card1}
            target="_self"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Fill Form <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Redirects to Google Forms.
            </p>
          </a>
          ㅤ
          ㅤ
          ㅤ
          ㅤ
          ㅤ
          ㅤ
          ㅤ
          <a
            href="https://esports.friendbase.tech"
            className={styles.card2}
            target="_self"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
            <span>&lt;-</span> Back
            </h2>
            <p className={inter.className}>
              Redirects to IntEsports.
            </p>
          </a> 
        </div>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        <a href="https://friendbase.tech">IntEsports by Fib Inc. Copyright © 2021-22. All Rights Reserved.</a>
        </main>
    </div>
    )
}
