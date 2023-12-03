import { Link } from "react-router-dom"

export function Articles({anime}){
    return (
        <Link to={"/detalles/" + anime.mal_id}>
        <article key={anime.mal_id} className="hover:scale-110 w-72 h-full p-6 rounded-xl bg-white flex flex-col justify-between items-center gap-6 ease-linear duration-100">
                <picture>
                    <img src={anime.images.jpg.image_url} alt="" />
                </picture>
                <div>
                    <p className="text-center">{anime.title_japanese}</p>
                    <p className="text-center text-xs">{anime.title}</p>
                </div>
                
                    {/* <button className="hover:bg-pink-500 w-full py-5 bg-pink-400 rounded-md font-bold">Ver más</button> */}
        </article>
        </Link>
    )
}