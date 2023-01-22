import axios, { AxiosResponse } from "axios";

import { baseURL } from "../helpers";

export const axiosService = axios.create({ baseURL });

export type AxiosRes<T> = Promise<AxiosResponse<T>>;