import { Link, Navigate } from "react-router"
import { useTestStore } from "../hooks/TestStore"
import { TestMovieSlider } from "./test-movie-slider"

export const MovieSelector = () => {
  const { genres } = useTestStore()

  if (genres === null) {
    return <Navigate to="/test" />
  }

  return (
    <main className="flex flex-col items-center gap-10 w-full py-20 px-20">
      <h1 className="text-4xl text-center font-semibold text-violet-400">Eliges las películas de tus géneros favoritos</h1>
      {genres.map((g, index) => <TestMovieSlider key={index} reason={g} />)}
      <Link className="bg-violet-400 py-3 px-5 text-xl font-medium rounded-4xl hover:bg-violet-500 active:scale-95 transition-all ease-out" to="/test/generate">Generar recomendaciones</Link>
    </main>
  )
}