// import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Getting_In_Touch_Button from '../../components/Layout/Getting_In_Touch_Button/GettingInTouch'
import ArrowDown from '../../components/Layout/Arrow_Container/ArrowDown'
import Image from 'next/legacy/image'

export default function Home() {

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.welcomeMessage}>
          <h1><span classname={styles.flip}>Hi. </span> Im <span className={styles.nameSpan1}>J</span><span className={styles.nameSpan2}>u</span><span className={styles.nameSpan3}>l</span><span className={styles.nameSpan4}>i</span><span className={styles.nameSpan5}>o</span>, <br className={styles.breakLine} />
           a Web Developer based in <span className={styles.nameSpan6}>L</span><span className={styles.nameSpan5}>o</span><span className={styles.nameSpan4}>n</span><span className={styles.nameSpan3}>d</span><span className={styles.nameSpan2}>o</span><span className={styles.nameSpan1}>n</span></h1>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <Image
              src='/assets/pc.jpg'
              layout='fill'
              alt="PC"
            />
          </div>
        </div>
      </div>
      <Getting_In_Touch_Button />
      <ArrowDown />
    </div>
  )
}
