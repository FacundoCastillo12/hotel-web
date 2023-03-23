import useHandleLoadRooms from "../useHandleLoadRooms";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { renderHook, waitFor } from "@testing-library/react";
import useFetchGetData from "../useSimpleFetchHook";

let roomData = [
  {
    id: 1,
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
  },
  {
    id: 2,
    title: {
      es: "Habitacion Cielo",
      en: "Heaven Room",
    },
    room_image: "Image2",
    description: {
      es: "Habitacion celestial",
      en: "Celestial Room",
    },
    price_for_day: 350,
  },
  {
    id: 3,
    title: {
      es: "Habitacion de prueba",
      en: "Room test",
    },
    room_image: "Image3",
    description: {
      es: "Habitacion de prueba",
      en: "Habitacion de prueba",
    },
    price_for_day: 450,
  },
  {
    id: 4,
    title: {
      es: "Habitacion de prueba 4",
      en: "Room test 4",
    },
    room_image: "Image4",
    description: {
      es: "Habitacion de prueba 4",
      en: "Habitacion de prueba 4",
    },
    price_for_day: 450,
  },
];

jest.mock("../../hooks/useSimpleFetchHook", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("useHandleLoadRooms", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should set roomData to initialRooms when data is fetched", async () => {
    useFetchGetData.mockReturnValue({
      data: { rooms: roomData },
      error: null,
      loading: false,
    });

    const { result } = renderHook(() => useHandleLoadRooms());

    expect(result.current.roomData).toEqual(roomData.slice(0, 3));
  });

  it("should set roomData to nextRooms when handleNextClick is called", async () => {
    useFetchGetData.mockReturnValue({
      data: { rooms: roomData },
      error: null,
      loading: false,
    });

    const { result } = renderHook(() => useHandleLoadRooms());

    act(() => {
      result.current.handleNextClick();
    });

    await waitFor(() => {
      expect(result.current.roomData).toEqual(roomData.slice(1, 4));
    });
  });

  it("should set roomData to prevRooms when handlePrevClick is called", async () => {
    const roomDatas = [
      { id: 1, title: "Habitación 1" },
      { id: 2, title: "Habitación 2" },
      { id: 3, title: "Habitación 3" },
      { id: 4, title: "Habitación 4" },
    ];

    useFetchGetData.mockReturnValue({
      data: { rooms: roomDatas },
      error: null,
      loading: false,
    });

    const { result } = renderHook(() => useHandleLoadRooms());

    act(() => {
      result.current.handlePrevClick();
    });

    await waitFor(() => {
      expect(result.current.roomData).toEqual([
        { id: 2, title: "Habitación 2" },
        { id: 3, title: "Habitación 3" },
        { id: 4, title: "Habitación 4" },
      ]);
    });
  });
});
