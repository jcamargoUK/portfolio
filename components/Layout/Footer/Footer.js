import styles from '@/styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {
  return (
    <div className={styles.main}>
      <Link className={styles.footerLink} href='https://github.com/jcamargoUK'>
        <Image
          src='/assets/github.png'
          width={30}
          height={30}
          alt='gitHub link logo'
        />
      </Link>
      <Link className={styles.footerLink} href='https://www.linkedin.com/in/julio-camargo-developer/'>
        <Image
          src='/assets/linkedin.png'
          width={30}
          height={30}
          alt='linkedin link logo'
        />
      </Link>

    </div>
  )
}