import axios from "axios"

const baseUrl = "http://localhost:5000"

export const getFeed = () => async (dispatch) => {
  try {
    const token = window.localStorage.getItem("token");

    const axiosConfig = {
      headers: {
        auth: token,
      },
    };

    const response = await axios.get(`${baseUrl}/feed`, axiosConfig)

    dispatch(setFeed(response.data.feed))

  } catch {
    window.alert("Erro ao carregar os posts. Tente atualizar a página.")
  }
}

const setFeed = feed => ({
  type: "SET_FEED",
  payload: {
    feed
  }
})