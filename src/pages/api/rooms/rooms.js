import { rooms } from "../../../../json/roomsdata.json";

export default function roomHandler({ query: { id } }, res) {
  const filtered = rooms.filter((p) => p.id === id);

  // Roomms with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Rooms with id: ${id} not found.` });
  }
}
