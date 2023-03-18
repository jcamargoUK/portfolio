import Link from 'next/link'
import styles from '@/styles/ArrowDown.module.css'


export default function ArrowDown() {
  return (
    <div className={styles.container}>
      <Link href='/about'>
        <div className={styles.toggle}>
          <div className={styles.ball} />
        </div>
      </Link>
    </div>
  )
}
