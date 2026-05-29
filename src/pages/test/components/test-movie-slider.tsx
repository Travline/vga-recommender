import { useEffect, useState } from "react"
import type { Movie } from "../../../models/Movie"
import { getMoviesByGenre } from "../../../service/MovieRepository"
import { TestMovieCard } from "./test-movie-card"

export const TestMovieSlider = ({ reason }: { reason: string }) => {
  const [loadingMovies, setLoadingMovies] = useState(true)
  const [allMovies, setAllMovies] = useState<Movie[]>([])

  useEffect(() => {
    getMoviesByGenre(reason).then(result => {
      setLoadingMovies(false)
      setAllMovies(result)
    })
  }, [])

  return (
  <div className="flex flex-col gap-4 w-full max-w-7xl">
    <h2 className="text-xl text-pink-400 font-semibold">{reason}</h2>

    <div className="flex flex-row flex-wrap gap-6 w-full justify-center">
      {loadingMovies ? (
        <p>Cargando Películas...</p>
      ) : (
        allMovies.map((m, index) => <TestMovieCard key={index} movie={m} />)
      )}
    </div>
  </div>
)
}