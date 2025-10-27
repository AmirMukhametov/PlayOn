
import { FilmPreview } from "entities/filmCollection/types";
import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./styles.module.css"


export const FilmList = ({list}: {list: FilmPreview[]}) => {
    return (
        <div className={styles.filmList}>
            {list.map(({kinopoiskId:id, posterUrl:src})=>{
                return <MovieCard key={id} id={id} src={src} />
            })}
        </div>
    )
}