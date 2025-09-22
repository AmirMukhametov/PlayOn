import { Link } from "react-router-dom"

import styles from './styles.module.css'
import { memo } from "react"

export type Card = {
    id: number,
    src: string,
    isNormal?: boolean
}

export const MovieCard = memo(({ id, src, isNormal = true }: Card) => {
    return (
        <div className={`${styles["movie-card"]} ${isNormal ? "" : styles["movie-card__big"]}`}>
            <Link to={`/filmAbout/${id}`} className={styles.link}>
                <img className={styles["movie-card__img"]} src={src} alt="poster" />
            </Link>
        </div>
    )
})