import PokeType from "./PokeType";

const Card = ({ poke }) => {
  return (
    <div className="bg-white px-3 py-6 text-center rounded flex flex-col items-center drop-shadow-md">
      <span className="text-xs bg-slate-200 text-slate-700 py-1 px-2 mb-2">
        No. {poke.id}
      </span>

      <img src={poke.sprite} alt={poke.name} className="h-full" />

      <h2 className="mb-3">
        {poke.name[0].toUpperCase() + poke.name.substring(1)}
      </h2>

      <div className="text-sm flex space-x-2">
        {poke.types.map((type) => (
          <PokeType key={type.slot} type={type.type.name} />
        ))}
      </div>
    </div>
  );
};

export default Card;
