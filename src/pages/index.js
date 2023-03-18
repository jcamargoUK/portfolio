// import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Getting_In_Touch_Button from '../../components/Layout/Getting_In_Touch_Button/GettingInTouch'
import ArrowDown from '../../components/Layout/Arrow_Container/ArrowDown'


export default function Home() {

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.welcomeMessage}>
          <h1><span>Hi,<br /></span> My name is Julio,
            a Web Developer based in London</h1>
        </div>
        <div className={styles.welcomeAnimation}>
          <p className={styles.p}>Hello Folks, this is page is in development stage and will be up and running by April 2023.</p>
        </div>
      </div>
      <Getting_In_Touch_Button />
      <ArrowDown />
    </div>
  )
}
