import { useSelector } from "react-redux";
import CardList from "./CardList";

const GptResults=()=>{
    const {movieNames,movieResults}=useSelector(store=>store.gptSearch);
    if(!movieResults) return;
    console.log(movieNames,movieResults)
    return(
        <div className="m-2 p-5 bg-black bg-opacity-80">
            <div className="">
            {movieNames.map((ele,idx)=>(<CardList key={ele} title={ele.trim()} movies={movieResults[idx].results}/>))}
        </div>
        </div>
        
    )
}
export default GptResults;