import instance from "./instance"

const getMovies = () => {
  return instance.get("/films")
}

export default getMovies; 