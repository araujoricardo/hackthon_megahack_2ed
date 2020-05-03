import axios from "axios"
import { push } from "connected-react-router"
import { routes } from "../../containers/Router"

const baseUrl = "http://localhost:5000"

export const login = (email, password) => async (dispatch) => {
  try {

    const response = await axios.post(`${baseUrl}/login/investor`, { email, password })

    window.localStorage.setItem("token", response.data.token)

    dispatch(push(routes.feedpage))

  } catch (error) {
    console.log(error)
    window.alert("Erro no Login!")
  }
}