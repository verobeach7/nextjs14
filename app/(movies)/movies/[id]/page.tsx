import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // console.log(props); // url parameters를 받을 수 있음(id, query)
  console.log(`Start Fetching: ${Date.now()}`);
  /* // getMovie Fetching을 끝낸 후 getVideos Fetching을 순차적으로 진행함
  // 응답대기시간이 길어지게 됨
  const movie = await getMovie(id);
  const videos = await getVideos(id); */
  /* Parallel Requests(Fetching) */
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log(`End Fetching: ${Date.now()}`);
  return <h1>{movie.title}</h1>;
}
