import type { FormEvent } from "react"
import type { Movie } from "../../../models/Movie"
import { useTestStore } from "../hooks/TestStore"

export const TestMovieCard = ({ movie }: { movie: Movie }) => {
  const { movies, addMovies } = useTestStore()
  const isSelected = movies?.includes(movie.nombre)

  function clicked(e: FormEvent) {
    e.preventDefault()
    if (isSelected) {
      if (!movies) return
      const updatedMovies = movies.filter((m) => m !== movie.nombre)
      addMovies(updatedMovies)
      return
    }
    const updatedMovies = movies ? [...movies, movie.nombre] : [movie.nombre]
    addMovies(updatedMovies)
    return
  }

  return (
    <div
      className={`flex flex-col grow-1 shrink-1 basis-3xs gap-3 hover:p-5 transition-all ease-out hover:bg-violet-300 active:bg-violet-400 
      ${isSelected ? "p-8 bg-violet-400" : ""}            
      `}
      onClick={clicked}>
      <div className="max-w-full">
        <img className="w-full" src={movie.link_portada} alt={`Portada de ${movie.nombre}`} />
      </div>
      <div className="max-w-full">
        <p className="text-center text-l font-semibold">{movie.nombre}</p>
        <p className="text-center">{movie.director}</p>
        <p className="text-center">{movie.puntuacion} ⭐</p>
      </div>
    </div>
  )
}