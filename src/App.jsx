import { createResource, createSignal, onMount } from 'solid-js';
import getMovies from './shared/services/api/starwarsService';

function App() {
  const [movies, setMovies] = createSignal();

  onMount(async () => {
    const res = await getMovies();
    setMovies(res.data.results);
  })

  return (
    <>
      <div class="movies">
        <For each={movies()} fallback={<p>Loading...</p>}>{movie =>
          <div>
            <h6>{movie.title}</h6>
            <h6>{movie.release_date}</h6>
          </div>
        }</For>

      </div>
    </>
  )
}

export default App;
