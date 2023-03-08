import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/ArrowDown.module.css'


export default function ArrowDown() {
  return (
    <div className={styles.arrowContainer}>
      <Link href='/about'>
        <Image className={styles.arrowDown}
          src='/assets/double-down-100.png'
          width={60}
          height={60}
          alt='arrow down link'
        />
      </Link>
    </div>
  )
}
