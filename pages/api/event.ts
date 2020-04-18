import { NextApiRequest, NextApiResponse } from "next"

const ACTIVITY = "activity"
const LEARNING = "learning"
const MENTAL = "mental"

const BKK = "bangkok"
const NAKHONRAT = "nakhonratchasima"
const SINGHABURI = "singhaburi"

const DEC = "december"

const mockData = [
  {
    id: "1",
    img: "/images/s-1450016.png",
    name: "Tomoko",
    place: "Tomato Improvement Center",
    description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam`,
    time: "5AM - 4PM",
    price: 690,
    info: {
      addressCode: BKK,
      type: [ACTIVITY, LEARNING],
      month: DEC,
    },
  },
  {
    id: "2",
    img: "/images/36044.png",
    name: "Mindful Spark ",
    place: "Parkchong-Nakhonratchasima",
    description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam`,
    time: "7 - 9 December 2019",
    price: 4900,
    info: {
      addressCode: NAKHONRAT,
      type: [MENTAL],
      month: DEC,
    },
  },
  {
    id: "3",
    img: "/images/s-1450014.png",
    name: "ฟาร์มนี้มีฝัน",
    place: "Parkchong-Nakhonratchasima",
    description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam`,
    time: "7 - 9 December 2019",
    price: 4900,
    info: {
      addressCode: NAKHONRAT,
      type: [LEARNING],
      month: DEC,
    },
  },
  {
    id: "4",
    img: "/images/s-1450016.png",
    name: "Tomoko 2",
    place: "Tomato Improvement Center",
    description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam`,
    time: "5AM - 4PM",
    price: 690,
    info: {
      addressCode: SINGHABURI,
      type: [ACTIVITY],
      month: DEC,
    },
  },
]

export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    data: mockData,
  })
}
