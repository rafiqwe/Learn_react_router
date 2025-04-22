import { NavLink } from "react-router-dom";

export const Card = ({ movies , id}) => {
  const { Poster, Title, Year } = movies;
  return (
    <>
      <div className="max-w-xs bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden flex flex-wrap items-center ">
        <img
          className="w-full h-48 object-cover"
          src={Poster}
          alt="Movie Poster"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{Title}</h3>
          <p className="text-sm text-gray-300 mt-2">
            A short description of the movie goes here. It could be an exciting
            summary that captures the essence of the story.
          </p>
          <div className="flex items-center justify-between mt-4">
            <span className="bg-yellow-400 text-black px-2 py-1 rounded text-sm font-bold">
              ⭐ 8.5/10
            </span>
            <NavLink to={`/movie/${id}`}>
              <button className="bg-indigo-600 px-3 py-1 rounded text-sm hover:bg-indigo-700 transition">
                Watch Trailer
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
