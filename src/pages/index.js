import Head from 'next/head'
import RINGS from "vanta/dist/vanta.rings.min";
import * as THREE from 'three'
import styles from '@/styles/Home.module.css'
import Getting_In_Touch_Button from '../../components/Layout/Getting_In_Touch_Button/GettingInTouch'
import { useEffect, useRef, useState } from 'react'


export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(RINGS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 520.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x7f585,
        points: 7.00,
        maxDistance: 24.00,
        spacing: 18.00,
        backgroundColor: 0x0,
        THREE
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div className={styles.container}>
      <Head>
        <title>Julio Cezar</title>
      </Head>
    <div className={styles.main} ref={vantaRef}>
      <div className={styles.container}>
        <div className={styles.welcomeMessage}>
          <h1><span classname={styles.flip}>Hi. </span> Im <span className={styles.nameSpan1}>J</span><span className={styles.nameSpan2}>u</span><span className={styles.nameSpan3}>l</span><span className={styles.nameSpan4}>i</span><span className={styles.nameSpan5}>o</span>, <br className={styles.breakLine} />
           a Web Developer based in <span className={styles.nameSpan6}>L</span><span className={styles.nameSpan5}>o</span><span className={styles.nameSpan4}>n</span><span className={styles.nameSpan3}>d</span><span className={styles.nameSpan2}>o</span><span className={styles.nameSpan1}>n</span></h1>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            {/* <Image
              src='/assets/pc.jpg'
              layout='fill'
              alt="PC"
            /> */}
          </div>
        </div>
      </div>
      <Getting_In_Touch_Button />
      {/* <ArrowDown /> */}
    </div>
    </div>
  )
}
