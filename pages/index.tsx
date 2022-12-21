import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from "next/link"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <>
      <Head>
        <title>IntEsports | Home</title>
        <meta name="description" content="IntEsports is an Indian E-Sports Organization who specializes in Valorant & CS:GO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            <b>Overview @ IntEsports</b>
          </p>
          <div>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.thirteen}>
            <Image
              src="/5.svg"
              alt="13"
              width={50}
              height={50}
              priority
            />
          </div>
          <div className={styles.intesports}>
            Players
          </div>
          <div className={styles.thirteen}>
            <Image
              src="/2.svg"
              alt="13"
              width={50}
              height={50}
              priority
            />
          </div>
          <div className={styles.intesports}>
            Teams
          </div>  
          <div className={styles.thirteen}>
            <Image
              src="/6+.svg"
              alt="13"
              width={50}
              height={50}
              priority
            />
          </div>
          <div className={styles.intesports}>
            Matches
          </div>
        </div>
        <div className={styles.grid}>
        <Link
              href={{
              pathname: "/join",
              query: { method: "" },
              }}
              legacyBehavior
        >
          <a
            href="/join"
            className={styles.card}
            target="_self"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Join <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Apply to be a Part of IntEsports.
            </p>
          </a>
        </Link>
          <a
            href="https://friendbase.tech"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Legal <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Legal Mumbo-Jumbo and Privacy Policy.
            </p>
          </a>

          <a
            href="https://valorantesports.com/vct-overview"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              VCT <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover News About Valorant Champions Tour.
            </p>
          </a>

          <a
            href="https://friendbase.tech"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              FAQ <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Any Doubt? Seek help and Contact us.
            </p>
          </a>
        </div>
        <a href="https://friendbase.tech">IntEsports by Fib Inc. Copyright © 2021-22. All Rights Reserved.</a>
      </main>
    </>
  )
}
