import { POSTER_URL } from "../utils/constants";

const Card=({data})=>{
    return(
        <div className="w-40 px-1">
            <img className="w-full" src={POSTER_URL+data.poster_path}/>
        </div>
    )
}
export default Card;