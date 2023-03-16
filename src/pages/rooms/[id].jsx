import React from "react";
import { useRouter } from "next/router";

function RoomDetail({ room }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="h-screen w-full bg-[#042459] bg-cover bg-center bg-no-repeat text-center">
      <div className="mx-auto flex h-full w-full max-w-[1240px] flex-wrap items-center justify-center p-2">
        <div>Habitacion con id {id}</div>
        <div>{room.details}</div>
      </div>
    </div>
  );
}

export default RoomDetail;
const rooms = [
  { id: "1", details: "detalles", otro: "otro" },
  { id: "2", details: "detalles 2", otro: "otro" },
  { id: "3", details: "detalles 3", otro: "otro" },
];

export async function getStaticPaths() {
  const paths = rooms.map((room) => ({ params: { id: room.id } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const room = rooms.find((roomSelect) => roomSelect.id === id);
  return {
    props: {
      room,
    },
  };
}
