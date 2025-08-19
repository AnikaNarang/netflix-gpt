import { POSTER_URL } from "../utils/constants";

const Card=({data})=>{
    if(!data.poster_path) return;
    return(
        <div className="w-36 md:w-40 px-1">
            <img className="w-full" src={POSTER_URL+data.poster_path}/>
        </div>
    )
}
export default Card;