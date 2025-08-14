const VideoTitle=({title,overview})=>{
    return(
        <div className="absolute py-[15%] px-10 text-white bg-gradient-to-r from-black w-full aspect-video">
            <h1 className="text-4xl font-bold p-2">{title}</h1>
            <p className="p-2 w-1/4">{overview}</p>
            <div className="p-2">
                <button className="bg-white rounded-lg px-7 py-3 m-2 text-black ">▶ Play</button>
                <button className="bg-gray-700 rounded-lg px-7 py-3 m-2 bg-opacity-50 text-white ">ⓘ More info</button>
            </div>
        </div>
    )
}
export default VideoTitle;