// import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export default function Home() {

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.welcomeMessage}>
          <h1><span>Hi,<br /></span> My name is Julio,
            a Web Developer based in London</h1>
        </div>

        <div className={styles.welcomeAnimation}>
          <h1>The anime goes here!</h1>
        </div>
      </div>
      {/* <Image
        src={ }
        width={40}
        height={40}
        alt='arrow down link'
      /> */}


    </div>
  )
}
