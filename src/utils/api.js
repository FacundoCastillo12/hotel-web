const BASE_URL = "/api";

const getResource = async (resourceUrl) => {
  const response = await fetch(resourceUrl);
  if (!response.ok) {
    throw new Error("API Error");
  }
  return response.json();
};

const hotelApi = {
  getHotelData: (data) => getResource(`${BASE_URL}/${data}`),
};

export default hotelApi;
