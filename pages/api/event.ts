import { NextApiRequest, NextApiResponse } from "next"

const mockData = [
  {
    img: "/images/s-1450016.png",
    name: "Tomoko",
    place: "Tomato Improvement Center",
    time: "5AM - 4PM",
    price: 690,
  },
  {
    img: "/images/36044.png",
    name: "Mindful Spark ",
    place: "Parkchong-Nakhonratchasima",
    time: "7 - 9 December 2019",
    price: 4900,
  },
  {
    img: "/images/s-1450014.png",
    name: "ฟาร์มนี้มีฝัน ฉันคือ School life",
    place: "Parkchong-Nakhonratchasima",
    time: "7 - 9 December 2019",
    price: 690,
  },
  {
    img: "/images/s-1450016.png",
    name: "Tomoko",
    place: "Tomato Improvement Center",
    time: "5AM - 4PM",
    price: 690,
  },
]

export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    data: mockData,
  })
}
