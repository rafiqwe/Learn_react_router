export const getApiData = async () => {
  console.log( import.meta.env.VITE_API_KEY);
  
  const url = `https://www.omdbapi.com/?apikey=${
    import.meta.env.VITE_API_KEY
  }&s=titanic&page`;
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
