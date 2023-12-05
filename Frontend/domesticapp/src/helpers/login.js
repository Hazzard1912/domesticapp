import axios from "axios";
import qs from "qs";

const login_endpoint = `${import.meta.env.VITE_APP_SERVER_URL}/auth`;


export const login = async (phone, password) => {

  const data = {
    username: phone,
    password,
  }

  const options = {
    method: "POST",
    headers: {"content-type": "application/x-www-form-urlencoded"},
    data: qs.stringify(data),
    url: login_endpoint,
  }

  try {

    const response = await axios(options);

    const { access_token, token_type } = response.data;

    console.log(access_token, token_type);
    
  } catch (error) {
    console.error("Error al loguearse:", error);
  }
};
