import ContactForm from "../../components/Layout/Contact/Contact"
import RINGS from "vanta/dist/vanta.rings.min";
import * as THREE from 'three'
import styles from "@/styles/ContactUs.module.css"
import { useEffect, useRef, useState } from 'react'

export default function Contact(){
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
  return(
    <div className={styles.main} ref={vantaRef}>
      <ContactForm />
    </div>
  )
  }