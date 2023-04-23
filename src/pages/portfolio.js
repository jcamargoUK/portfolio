import RINGS from "vanta/dist/vanta.rings.min";
import * as THREE from 'three'
import Getting_In_Touch_Button from '../../components/Layout/Getting_In_Touch_Button/GettingInTouch'
import { useEffect, useRef, useState } from 'react'
import styles from '@/styles/Portfolio.module.css'
// import CanvaPresentation from '../../components/Layout/Canva/homegrowPresentation'

export default function Portifolio() {
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
        spacing: 25.00,
        backgroundColor: 0x0,
        color: 0x0,
        THREE
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <div className={styles.main} ref={vantaRef}>
      <h1 className={styles.title}>Some of my recent work</h1>
      <div className={styles.container}>
        <div className={styles.card}>
          <iframe className={styles.iframe} loading="lazy"
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFYySVxGA0&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
          </iframe>
        </div>
        <div className={styles.card}>
          <iframe className={styles.iframe} loading="lazy"
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFYySVxGA0&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
          </iframe>
        </div>
        <div className={styles.card}>
          <iframe className={styles.iframe} loading="lazy"
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFYySVxGA0&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
          </iframe>
        </div>
        <div className={styles.card}><iframe className={styles.iframe} loading="lazy"
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFYySVxGA0&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
        </iframe></div>
      </div>
      <Getting_In_Touch_Button />
    </div>
  )
}

