import img from "../images/david-rodrigo-470187-unsplash.jpg";
export const hotels = [
  {
    id: 1,
    hotelName: "Dubai",
    location: "Dubai",
    rating: 4,
    img: img,
    description:
      "Rendezvous Hotel Singapore is located in the Arts and Heritage District, within 3 Km (0.2 mi) of the singapore National Museum, Singapore Art Museum,...",
  },
  {
    id: 2,
    hotelName: "Egypt",
    location: "Cairo",
    rating: 5,
    img: img,
    description:
      "Rendezvous Hotel Singapore is located in the Arts and Heritage District, within 3 Km (0.2 mi) of the singapore National Museum, Singapore Art Museum,...",
  },
  {
    id: 3,
    hotelName: "Egypt",
    location: "Cairo",
    rating: 5,
    img: img,
    description: "text text text text",
  },
  {
    id: 4,
    hotelName: "Dubai",
    location: "Dubai",
    rating: 3,
    img: img,
    description:
      "Rendezvous Hotel Singapore is located in the Arts and Heritage District, within 3 Km (0.2 mi) of the singapore National Museum, Singapore Art Museum,...",
  },
  {
    id: 5,
    hotelName: "Makadi",
    location: "Hurgada",
    rating: 1,
    img: img,
    description:
      "Rendezvous Hotel Singapore is located in the Arts and Heritage District, within 3 Km (0.2 mi) of the singapore National Museum, Singapore Art Museum,...",
  },
];

export async function _getHotels() {
  return await new Promise((res, rej) => {
    setTimeout(res(hotels), 1000);
  });
}
