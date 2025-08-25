import{create} from 'zustand'
interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}
interface gameQuerystore {
    gamequery : GameQuery
    setSearchText : (searchText : string) => void
     setGenreId : (genreId : number) => void
      setPlatformId  : (platformId : number) => void
       setsortOrder  : (sortOrder : string) => void

}
const useGameQueryStore =  create<gameQuerystore>(set => ({
    gamequery : {},
    setSearchText : (searchText) => set(() => ({gamequery : {searchText}})),  // if user selected wrong genre or platform his game will still be found
    setGenreId : (genreId) => set((store) => ({gamequery : {...store.gamequery,genreId}})),  // copy other prop then change the genre id
     setPlatformId : (platformId) => set((store) => ({gamequery : {...store.gamequery,platformId}})),
     setsortOrder : (sortOrder) => set((store) => ({gamequery : {...store.gamequery , sortOrder}}))
 }))
 export default useGameQueryStore