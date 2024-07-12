import axios from "axios";

const myKey = "7a32979c76ecb01d1a3dbe7bbc60e027";

export async function getData(page) {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
      params: {
        api_key: myKey,
        include_adult: false,
        include_video: true,
        language: 'en-Us',
        page: page,
        sort_by: 'popularity.desc'
      }
    });
    return response
  } catch (error) {
    console.log(error);
  }
}

export async function getMovie(id){
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
      params: {
        api_key: myKey
      }
    });
    return response
  } catch (error) {
    console.log(error);
  }
}


export async function getVedio(id) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${myKey}&language=en-US`, {
    });
    return response
  } catch (error) {
    console.log(error);
  }
}
export async function serch(value) {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: myKey,
        query: value
      }
    });
    return response.data; 
  } catch (err) {
    console.log(err);
  }
}