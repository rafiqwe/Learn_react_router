import { useLoaderData, useNavigate } from "react-router-dom";

export const MovieDetails = () => {
  const movieDetails = useLoaderData();
  const navigate = useNavigate();
  const handleGoBack = () =>{
    navigate(-1);
  }  
  const {Poster, Title, Plot} = movieDetails;
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
            {Plot}
          </p>
          <div className="flex items-center justify-between mt-4">
            <span className="bg-yellow-400 text-black px-2 py-1 rounded text-sm font-bold">
              ⭐ 8.5/10
            </span>
            <div>
            <button onClick={handleGoBack} className="cursor-pointer p-5">
              Go Back
            </button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
