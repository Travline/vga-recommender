import { useEffect, useState } from "react"
import { useRecommendStore } from "../hooks/RecomendStore"
import { getMoviesByGenre } from "../service/MovieRepository"
import { MovieCard } from "./movie-card"
import type { Movie } from "../models/Movie"

export const MovieSlider = ({ reason }: { reason: string }) => {
  const { recommends } = useRecommendStore()
  const [loadingMovies, setLoadingMovies] = useState(true)
  const [allMovies, setAllMovies] = useState<Movie[]>([])

  useEffect(() => {
    getMoviesByGenre(reason).then(result => {
      setLoadingMovies(false)
      setAllMovies(result)
    })
  }, [])

  if (reason === 'recommends') {
    if (!recommends) return
    return (
      <div className="flex flex-col gap-5 px-10 max-w-7xl">
        <h2 className="text-xl text-pink-400 font-semibold">Para ti</h2>
        {
          loadingMovies
            ? <p>Cargando Películas...</p>
            : <div className="flex flex-row flex-wrap gap-6 w-full justify-center">
              {recommends.map((recommend, index) => <MovieCard key={index} movie={recommend} />)}
            </div>
        }
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-5 px-10 max-w-7xl">
      <h2 className="text-xl text-pink-400 font-semibold">{reason}</h2>
      {
        loadingMovies
          ? <p>Cargando Películas...</p>
          : <div className="flex flex-wrap justify-between gap-5">
            {allMovies.map((m, index) => <MovieCard key={index} movie={m} />)}
          </div>
      }
    </div>
  )
}