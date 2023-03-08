import Link from "next/link"
import styles from '@/styles/GettingInTouch.module.css'

export default function Getting_In_Touch_Button() {
  return (
    <div className={styles.Getting_In_Touch_Button_Container}>
      <Link className={styles.button} href='/contact'>Get in Touch</Link>
    </div>

  )
}