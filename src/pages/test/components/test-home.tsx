import { Link } from "react-router"

export const TestHome = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-dvh gap-10 px-10">
      <h1 className="text-4xl font-semibold text-center text-violet-400">Queremos conocerte</h1>
      <p className="text-2xl text-center">Haz este test corto para mejorar tu experiencia con recomendaciones personalizadas</p>
      <Link to="/test/genres" className="bg-violet-400 py-3 px-5 text-xl font-medium rounded-4xl hover:bg-violet-500 active:scale-95 transition-all ease-out">Empieza Ahora</Link>
    </main>
  )
}