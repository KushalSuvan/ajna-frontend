import styles from './hero.module.css'

const GodParticle = ({ className }: {className?: string}) => {
    return(
        <div aria-hidden className={`${className}`}>
            <div className={`${styles.god}`}></div>
            <div className={`${styles.godAura1}`}></div>
            <div className={`${styles.godAura2}`}></div>
            <div className={`${styles.godAura2}`}></div>
            <div className={`${styles.godAura3}`}></div>
            <div className={`${styles.godAura3}`}></div>
            <div className={`${styles.godAura3}`}></div>
            <div className={`${styles.hex1}`}></div>
            <div className={`${styles.hex2}`}></div>
            <div className={`${styles.hex3}`}></div>
            <div className={`${styles.backgroundColorRecovery}`}></div>
        </div>
    )
}

export default GodParticle;