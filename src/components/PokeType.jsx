const PokeType = ({ type }) => {
  return (
    <span
      className={`py-1 px-2 text-white ${
        type === "normal"
          ? "bg-slate-400"
          : type === "fire"
          ? "bg-red-600"
          : type === "water"
          ? "bg-blue-600"
          : type === "electric"
          ? "bg-yellow-400"
          : type === "grass"
          ? "bg-green-600"
          : type === "ice"
          ? "bg-cyan-400"
          : type === "fighting"
          ? "bg-red-800"
          : type === "poison"
          ? "bg-fuchsia-900"
          : type === "ground"
          ? "bg-yellow-600"
          : type === "flying"
          ? "bg-blue-300"
          : type === "psychic"
          ? "bg-pink-500"
          : type === "bug"
          ? "bg-lime-500"
          : type === "rock"
          ? "bg-stone-400"
          : type === "ghost"
          ? "bg-indigo-900"
          : type === "dragon"
          ? "bg-purple-900"
          : type === "dark"
          ? "bg-neutral-700"
          : type === "steel"
          ? "bg-neutral-400"
          : type === "fairy"
          ? "bg-pink-300"
          : "bg-black"
      }`}
    >
      {type[0].toUpperCase() + type.substring(1)}
    </span>
  );
};

export default PokeType;
