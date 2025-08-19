import Card from "./Card";

const CardList = ({ title, movies }) => {
  return (
    <div>
      <h1 className="text-white font-bold text-md md:text-2xl py-2 md:py-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        {movies && (
          <div className="flex">
            {movies.map((ele) => (
              <Card data={ele} key={ele.id}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default CardList;
