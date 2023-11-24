import { Link } from "react-router-dom"

export function Articles({anime}){
    return (
        <article className="hover:scale-110 w-72 p-6 rounded-xl bg-white flex flex-col justify-between items-center gap-6 mb-10 ease-linear duration-100">
                <picture>
                    <img src={anime.images.jpg.image_url} alt="" />
                </picture>
                <div>
                    <p className="text-center">{anime.title_japanese}</p>
                    <p className="text-center text-xs">{anime.title_english}</p>
                </div>
                <Link to={"/detalles/" + anime.mal_id} className="w-full">
                    <button className="hover:bg-pink-500 w-full py-5 bg-pink-400 rounded-md font-bold">Ver más</button>
                </Link>
        </article>
    )
}