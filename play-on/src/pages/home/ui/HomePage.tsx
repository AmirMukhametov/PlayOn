import { useFilmsWithFiltersQuery } from "entities/filmCollection/api/filmFilterQueries";
import { FilmCarousel } from "widgets/FilmCarousel";
import { FilmHeroCarousel } from "widgets/FilmHeroCarousel/ui/FilmHeroCarousel";
import { Container } from "shared/ui";
import styles from './styles.module.css'

export const HomePage = () => {
  const { data: films, isLoading, isError } = useFilmsWithFiltersQuery({});

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка загрузки</div>;

  return (
    <>
      <FilmHeroCarousel films={films ?? []}/>
      <Container><FilmCarousel films={films ?? []} title="Movies" /></Container>
      
    </>
  );
};
