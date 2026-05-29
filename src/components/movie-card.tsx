import type { Movie } from "../models/Movie";

export const MovieCard = ({movie}: {movie:Movie}) => {
  return (
    <div className="flex flex-col grow-1 shrink-1 basis-3xs gap-3">
      <div className="max-w-full">
        <img className="w-full" src={movie.link_portada} alt={`Portada de ${movie.nombre}`}  />
      </div>
      <div className="max-w-full">
        <p className="text-center text-l font-semibold">{movie.nombre}</p>
        <p className="text-center">{movie.director}</p>
        <p className="text-center">{movie.puntuacion} ⭐</p>
      </div>
    </div>
  )
}