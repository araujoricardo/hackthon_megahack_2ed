import axios from "axios"
import { push } from "connected-react-router"
import { routes } from "../../containers/Router"

const baseUrl = "https://9xtejx17u0.execute-api.us-east-1.amazonaws.com/v1"

export const login = (email, password) => async (dispatch) => {
  try {

    const response = await axios.post(`${baseUrl}/login/investor`, { email, password })

    window.localStorage.setItem("token", response.data.token)

    dispatch(push(routes.feedpage))

  } catch (error) {
    window.alert("Usuário ou senha incorretos")
  }
}