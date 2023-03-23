import { useEffect, useState } from "react";
import hotelApi from "@/utils/api";
import useFetchGetData from "./useSimpleFetchHook";

export default function useHandleLoadRooms() {
  const { data, error, loading } = useFetchGetData(
    hotelApi.getHotelData,
    "rooms"
  );
  const [startIndex, setStartIndex] = useState(0);
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    if (data) {
      const initialRooms = data.rooms.slice(0, 3);
      setRoomData(initialRooms);
    }
  }, [data]);

  const handlePrevClick = () => {
    const prevIndex = startIndex === 0 ? data.rooms.length - 3 : startIndex - 1;
    setStartIndex(prevIndex);
    const prevRooms = data.rooms.slice(prevIndex, prevIndex + 3);
    setRoomData(prevRooms);
  };

  const handleNextClick = () => {
    const nextIndex = startIndex === data.rooms.length - 3 ? 0 : startIndex + 1;
    setStartIndex(nextIndex);
    const nextRooms = data.rooms.slice(nextIndex, nextIndex + 3);
    setRoomData(nextRooms);
  };
  return {
    roomData,
    error,
    loading,
    handlePrevClick,
    handleNextClick,
  };
}
