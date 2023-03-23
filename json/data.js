// Esto va en rooms
/*        href={{
          pathname: `/rooms/${id}`,
          query: { id: `${id}` },
        }} 
        
         id,
        */

export const services = [
  {
    id: 1,
    name: "bar",
    images: [
      "../../public/assents/images/bar/crew.jpg",
      "../../public/assents/images/bar/patricktomasso.jpg",
      "../../public/assents/images/bar/taylordavidsonbar.jpg",
    ],
    description:
      "Sumérgete en un ambiente relajado y disfruta de tu bebida favorita en nuestro bar frente al mar. Con vistas panorámicas al océano, nuestro bar ofrece una amplia selección de cócteles, vinos y cervezas artesanales. Ya sea que estés buscando un lugar para refrescarte después de un día en la playa o simplemente disfrutar de una noche de diversión con amigos, nuestro bar es el lugar perfecto para relajarte y disfrutar de la brisa marina mientras saboreas nuestras deliciosas opciones de comida y bebida.",
    opening_hours: "08:00",
    closing_hours: "00:00",
  },
  {
    id: 2,
    name: "gym",
    images: [
      "../../public/assents/images/gym/daniellecerullo.jpg",
      "../../public/assents/images/gym/humphreymuleba.jpg",
      "../../public/assents/images/gym/markbertulfo.jpg",
    ],
    description:
      "Disfruta de nuestro moderno y completo gimnasio en el hotel de playa. Con una amplia selección de equipos de alta calidad y vistas espectaculares al mar, nuestro gimnasio es el lugar perfecto para mantenerte en forma durante tus vacaciones. Ya sea que busques levantar pesas o hacer cardio, nuestro gimnasio cuenta con todo lo que necesitas para un entrenamiento completo y efectivo. ¡Ven y tonifica tu cuerpo mientras disfrutas de las impresionantes vistas al mar!",
    opening_hours: "08:00",
    closing_hours: "23:00",
  },
  {
    id: 3,
    name: "restaurant",
    images: [
      "../../public/assents/images/restaurant/jaywennington.jpg",
      "../../public/assents/images/restaurant/manuel.jpg",
      "../../public/assents/images/restaurant/ramonkagie.jpg",
    ],
    description:
      "Disfrute de la deliciosa gastronomía en nuestro restaurante frente al mar. Ofrecemos una amplia variedad de platos locales e internacionales preparados con ingredientes frescos de la zona. Nuestro equipo de chefs expertos se asegurará de que su experiencia culinaria sea inolvidable. Ya sea que desee un almuerzo informal junto a la piscina o una cena elegante bajo las estrellas, nuestro restaurante es el lugar perfecto.",
    opening_hours: "08:00",
    closing_hours: "00:00",
  },
  {
    id: 4,
    name: "swimming pool",
    images: [
      "../../public/assents/images/swimmingpool/marcbabin.jpg",
      "../../public/assents/images/swimmingpool/xaviercoiffic.jpg",
      "../../public/assents/images/swimmingpool/zhekaboychenko.jpg",
    ],
    description:
      "Relájese y disfrute del sol en nuestra impresionante piscina con vistas al mar. Nuestra piscina es el lugar perfecto para disfrutar de un refrescante baño después de un día de playa. También ofrecemos cómodas tumbonas y sombrillas para relajarse bajo el sol. Si desea un poco de privacidad, puede reservar una de nuestras cabañas junto a la piscina y disfrutar de un servicio exclusivo de bar y comida. ¡No se pierda la oportunidad de relajarse en nuestro oasis junto al mar!",
    opening_hours: "08:00",
    closing_hours: "00:00",
  },
];

export const rooms = [
  {
    id: 1,
    title: "Sea view",
    room_image: "../../public/assents/images/roomone.jpg",
    description:
      "Esta habitación cuenta con una vista impresionante del océano. El precio promedio por noche es de $250 dólares. La habitación tiene una cama king size, televisión de pantalla plana, minibar, baño privado con ducha, aire acondicionado y balcón privado.",
    price_for_day: 250,
    bed: "king size",
    jacuzzi: true,
    air_conditioning: true,
    private_bathroom: true,
    television: true,
    living_room: true,
  },
  {
    id: 2,
    title: "Bungalow en la playa",
    room_image: "../../public/assents/images/roomtwo.jpg",
    description:
      "Esta habitación es una cabaña de madera que se encuentra directamente en la playa. La habitación cuenta con una cama king size, aire acondicionado, minibar, baño privado con ducha, terraza privada con hamaca y sillas para relajarse mientras escucha las olas del mar",
    price_for_day: 350,
    bed: "king size",
    jacuzzi: true,
    air_conditioning: true,
    private_bathroom: true,
    television: true,
    living_room: true,
  },
  {
    id: 3,
    title: "Suite de lujo",
    room_image: "../../public/assents/images/roomthree.jpg",
    description:
      "Esta habitación es la más lujosa del hotel y cuenta con un jacuzzi privado en la terraza con hamacas y sillas para relajarse. La habitación tiene una cama king size, aire acondicionado, minibar, baño privado con ducha y una sala de estar con sofá y televisión de pantalla plana.",
    price_for_day: 500,
    bed: "king size",
    jacuzzi: true,
    air_conditioning: true,
    private_bathroom: true,
    television: true,
    living_room: true,
  },
];
