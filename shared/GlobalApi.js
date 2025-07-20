// shared/GlobalApi.js
import axios from "axios";

const getGooglePlace = async (category, radius) => {
  const keywordList = [
    "durga puja pandal",
    "durga pandal",
    "barowari puja",
    "sarbojanin puja",
    "puja ground",
    category,
  ].filter(Boolean);

  const keyword = encodeURIComponent(keywordList.join("|"));

  const params = new URLSearchParams({
    lat: "22.5744",
    lng: "88.3629",
    radius,
    rankby: "prominence",
    keyword,
    category,
  });

  return axios.get(`/api/google-place?${params}`);
};

export default {
  getGooglePlace,
};
