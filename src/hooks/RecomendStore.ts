import { create } from "zustand";
import type { Movie } from "../models/Movie";

type RecommendStore = {
  recommends: Movie[] | null
  hasRecommends: boolean
  setRecommends: (recommends: Movie[]) => void
}

export const useRecommendStore = create<RecommendStore>((set) => (
  {
    recommends: null,
    hasRecommends: false,
    setRecommends: (recommends: Movie[]) => set({ recommends, hasRecommends: true })
  }
))
