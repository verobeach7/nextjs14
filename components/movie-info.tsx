import { API_URL } from "../app/constants";
import potato from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
  // console.log(`Fetching movies: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  // console.log(`Finish getMovie: ${Date.now()}`);
  return (
    <div className={potato.container}>
      <img
        src={movie.poster_path}
        className={potato.poster}
        alt={movie.title}
      />
      <div className={potato.info}>
        <h1 className={potato.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        {/* target={"_blank"}는 새로운 탭에서 열리도록 함 */}
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
