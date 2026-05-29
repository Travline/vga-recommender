import { useEffect, useState } from "react"
import { getAllGenres } from "../../../service/MovieRepository"
import { TestGenreCard } from "./test-genre-card"
import { Link } from "react-router"

export const GenresSelector = () => {
  const [allGenres, setAllGenres] = useState([""])
  const [loadingGenres, setLoadingGenres] = useState(true)

  useEffect(() => {
    getAllGenres().then(result => {
      setLoadingGenres(false)
      setAllGenres(result)
    })
  }, [])

  return (
    <main className="flex flex-col items-center justify-center min-h-dvh gap-10 px-10">
      <h1 className="text-4xl text-center font-semibold text-violet-400">Elige tus generos favoritos</h1>
      <div className="flex flex-wrap gap-3 justify-between max-w-xl">
      {
        loadingGenres
          ? <p>Cargando...</p>
          : allGenres.map((genre, index) => (<TestGenreCard key={index} genreName={genre} />))
      }
      </div>
      <Link className="bg-violet-400 py-3 px-5 text-xl font-medium rounded-4xl hover:bg-violet-500 active:scale-95 transition-all ease-out" to="/test/movies">{`Siguiente >`}</Link>
    </main>
  )
}