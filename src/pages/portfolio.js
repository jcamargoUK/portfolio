import Getting_In_Touch_Button from '../../components/Layout/Getting_In_Touch_Button/GettingInTouch'
import styles from '@/styles/Portfolio.module.css'
import singlePage from '../../public/assets/Single-Page-Website.png'
import HomeGrow from '../../public/assets/Home-Grow.png'
import Image from 'next/image'

export default function Portifolio() {

  return (
    <div className={styles.container}>
      <div className={styles.project}>
        <Image 
        src={singlePage} 
        alt="Single Page Website" 
        width={300}
        height={400}
        />
      </div>
      <div className={styles.project}>
        <Image
        src={HomeGrow}
        alt="Home Grow"
        width={600}
        height={400}
        />
      </div>
        
        
      {/* <Getting_In_Touch_Button /> */}
    </div>
  )
}

