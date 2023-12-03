import { Articles } from "./Articles";

export function ArticlesGrid({animesFiltrados}){
    return(
        <>
        <main className="mt-20 flex flex-wrap gap-8 justify-center">
            {
                animesFiltrados.map(anime => <Articles key={anime.mal_id} anime={anime}/>)
            }
        </main>
        </>
    );
}