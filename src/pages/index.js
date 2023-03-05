// import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Getting_In_Touch_Button from '../../components/Layout/Getting_In_Touch_Button/GettingInTouch'
export default function Home() {

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.welcomeMessage}>
          <h1><span>Hi,<br /></span> My name is Julio,
            a Web Developer based in London</h1>
          <Getting_In_Touch_Button />
        </div>

        <div className={styles.welcomeAnimation}>
          <h1>The anime goes here!</h1>
        </div>
      </div>
      <div className='arrowContainer'>
        <Link href='/about'>
          <Image className={styles.arrowDown}
            src='/assets/double-down-100.png'
            width={50}
            height={50}
            alt='arrow down link'
          />
        </Link>
      </div>



    </div>
  )
}
