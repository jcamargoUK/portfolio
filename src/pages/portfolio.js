// import styles from '@/styles/Portfolio.module.css'
import Getting_In_Touch_Button from '../../components/Layout/Getting_In_Touch_Button/GettingInTouch'
import ArrowDown from '../../components/Layout/Arrow_Container/ArrowDown'
import styles from '@/styles/Portfolio.module.css'
// import CanvaPresentation from '../../components/Layout/Canva/homegrowPresentation'

export default function Portifolio() {
  return (
    <div className={styles.main}>
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
      <ArrowDown />
    </div>
  )
}

