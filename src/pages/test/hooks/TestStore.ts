import { create } from "zustand";

type TestStore = {
  genres: string[] | null,
  movies: string[] | null,
  addGenre: (genres: string[]) => void,
  addMovies: (movies: string[]) => void
}

export const useTestStore = create<TestStore>((set) => (
  {
    genres: null,
    movies: null,
    addGenre: (genres: string[]) => set({ genres }),
    addMovies: (movies: string[]) => set({ movies })
  }
))
