import Card from "./Card";

const CardList = ({ title, movies }) => {
  return (
    <div>
      <h1 className="text-white font-bold text-2xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll scroll-smooth">
        {movies && (
          <div className="flex">
            {movies.map((ele) => (
              <Card data={ele} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default CardList;
