export const getMovieDetails = async ({ params }) => {
  const ID = params.movieID;
  const url = `https://www.omdbapi.com/?i=${ID}&apikey=${
    import.meta.env.VITE_API_KEY
  }`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
