import { API, baseURL } from "./api";

export const getLeaderboard = async () => {
  let res = await API.get(`/score`);
  return res.data;
};
