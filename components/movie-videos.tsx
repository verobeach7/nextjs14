import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  throw new Error("Something is broken...");
  //   const response = await fetch(`${API_URL}/${id}/videos`);
  //   return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  console.log(`Finish getVideos: ${Date.now()}`);
  return <h6>{JSON.stringify(videos)}</h6>;
}