import { useEffect, useState } from "react"
import { useRecommendStore } from "../../hooks/RecomendStore"
import { MovieSlider } from "../../components/movie-slider"
import { getAllGenres } from "../../service/MovieRepository"
import { Link } from "react-router"

export const Home = () => {
  const { hasRecommends } = useRecommendStore()
  const [allGenres, setAllGenres] = useState([""])
  const [loadingGenres, setLoadingGenres] = useState(true)

  useEffect(() => {
    getAllGenres().then(result => {
      setLoadingGenres(false)
      setAllGenres(result)
    })
  }, [])

  return (
    <main className="flex flex-col items-center gap-20">
      <div className="flex flex-col justify-center items-center gap-3 max-w-full pt-20">
        <h1 className="text-4xl text-center font-semibold text-violet-400">Bienvenido a VGA</h1>
      </div>
      {
        hasRecommends
          ? <MovieSlider reason={'recommends'} />
          : <div className="flex flex-col gap-5 justify-center items-center pb-10">
            <h2 className="text-2xl text-center font-medium">¿Quieres una recomendación personalizada?</h2>
            <p className="text-center text-xl">Responde un test corto</p>
            <Link to="/test" className="bg-violet-400 py-3 px-5 text-xl font-medium rounded-4xl hover:bg-violet-500 active:scale-95 transition-all ease-out">Quiero hacerlo</Link>
          </div>
      }
      {
        loadingGenres
          ? <p>Cargando Películas</p>
          : allGenres.map((genre, index) => <MovieSlider key={index} reason={genre} />)
      }
    </main>
  )
}