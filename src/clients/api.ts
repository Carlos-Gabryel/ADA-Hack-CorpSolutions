import axios from "axios";

export const api = axios.create({
  baseURL: "https://mocki.io/v1/e8078085-0d75-49c8-9eab-4b8c07b0543b",
});

export const getList = () => {
  return api.get("");
};
