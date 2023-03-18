import styles from '@/styles/About.module.css'
import ArrowDown from '../../components/Layout/Arrow_Container/ArrowDown'
import Getting_In_Touch_Button from '../../components/Layout/Getting_In_Touch_Button/GettingInTouch'

export default function About() {
  return (
    <div className={styles.main}>
      <div className={styles.about}>
        <h1><span>A</span>bout <span>M</span>e</h1>
        <p className={styles.p}><span>I`m</span> a front end engineer passionate about creating visually stunning websites with exceptional user experience.</p>
        <p><span>I</span> value communication and collaboration with my clients to ensure that their website reflects their brand identity and achieves their desired outcomes. </p>
        <p><span>My</span> goal is to produce top-notch code optimised for performance and scalability,
          helping my clients establish a strong online presence.</p>
      </div>
      <div className={styles.animation}>

      </div>
      <Getting_In_Touch_Button/>
      <ArrowDown />
    </div>
  )
}