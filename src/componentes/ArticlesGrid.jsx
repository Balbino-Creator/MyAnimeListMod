import { Articles } from "./Articles";
import animes from "../animes.json"

export function ArticlesGrid(){
    const animesData = animes.data;
    console.log(animesData);
    return(
        <>
        <main className="mt-20 flex flex-wrap gap-6">
            {
                animesData.map(anime => <Articles key={anime.mal_id} anime={anime}/>)
            }
        </main>
        </>
    );
}