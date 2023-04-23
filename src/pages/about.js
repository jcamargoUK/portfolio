import RINGS from "vanta/dist/vanta.rings.min";
import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import styles from '@/styles/About.module.css'
import Image from 'next/legacy/image'
import ArrowDown from '../../components/Layout/Arrow_Container/ArrowDown'
import Getting_In_Touch_Button from '../../components/Layout/Getting_In_Touch_Button/GettingInTouch'

export default function About() {
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
    <div className={styles.main} >
      <div className={styles.container} ref={vantaRef}>
        <div className={styles.about}>
          <h1><span>A</span>bout <span>M</span>e</h1>
          <p className={styles.p}><span>I`m</span> a front end engineer passionate about creating visually stunning websites with exceptional user experience.</p>
          <p><span>I</span> value communication and collaboration with my clients to ensure that their website reflects their brand identity and achieves their desired outcomes. </p>
          <p><span>My</span> goal is to produce top-notch code optimised for performance and scalability,
            helping my clients establish a strong online presence.</p>
        </div>
      </div>
    </div>

  )
}