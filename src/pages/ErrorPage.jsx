import { NavLink, useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigete = useNavigate();
  const handleGoBack = () => {
    navigete(-1);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
      <img
        src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif"
        className="w-full relative"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-4"> 
        <button className="bg-blue-500 text-white rounded w-40 cursor-pointer" onClick={handleGoBack}>
          Go back
        </button>
        <NavLink
          to="/"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded w-40 text-center hover:bg-blue-600"
        >
          Go to Homepage
        </NavLink>
      </div>
    </div>
  );
};
