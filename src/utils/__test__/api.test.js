const { default: hotelApi } = require("../api");

const seaViewRoom = {
  title: {
    es: "Vista al mar",
    en: "Sea view",
  },
  room_image: "Image1",
  description: {
    es: "Habitacion prueba en español",
    en: "Room test in english",
  },
  price_for_day: 250,
};
describe("hotelApi", () => {
  global.fetch = jest.fn();
  global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve(seaViewRoom),
  });
  const mockResponse = seaViewRoom;
  beforeEach(() => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });
  });

  test("should get rooms", async () => {
    const room = await hotelApi.getHotelData("rooms");

    expect(room).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith("/api/rooms");
    expect(room.title.es).toBe("Vista al mar");
    expect(room.room_image).toBe("Image1");
  });
});
describe("Hotel api", () => {
  test("should throw API Error when response is not ok", async () => {
    const mockError = new Error("API Error");
    const mockResponse = {
      ok: false,
      status: 404,
      statusText: "Not Found",
    };
    jest
      .spyOn(global, "fetch")
      .mockImplementation(() => Promise.resolve(mockResponse));

    await expect(hotelApi.getHotelData("rooms")).rejects.toThrow(mockError);
  });
});
