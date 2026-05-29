import { type FormEvent } from "react"
import { useTestStore } from "../hooks/TestStore"

export const TestGenreCard = ({ genreName }: { genreName: string }) => {
  const { genres, addGenre } = useTestStore()
  const isSelected = genres?.includes(genreName)

  function clicked(e: FormEvent) {
    e.preventDefault()
    if (isSelected) {
      if (!genres) return
      const updatedGenres = genres.filter((genre) => genre !== genreName)
      addGenre(updatedGenres)
      return
    }
    const updatedGenres = genres ? [...genres, genreName] : [genreName]
    addGenre(updatedGenres)
    return
  }

  return <div className={`grow-1 shrink-1 p-3 rounded-xl font-semibold text-center max-w-40 hover:bg-pink-600 
    ${isSelected ? "bg-pink-700 " : "bg-zinc-800"}
    `} 
  onClick={clicked}>{genreName}</div>
}