import axios from "axios";
import type { Method, AxiosResponse } from "axios";

const BASE_URL = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1";

axios.defaults.baseURL = BASE_URL;

axios.defaults.headers.post["Content-Type"] = "application/json";

const apiCall = async (
  method: Method,
  url: string,
  data?: {}
): Promise<AxiosResponse> => axios({ method, url, data });

export default apiCall;
