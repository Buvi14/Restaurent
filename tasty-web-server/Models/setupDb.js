const collection = require("../Utilities/connection");

const userdb = [
  {
    username: "buvi",
    password: "buvi123",
    phone: "7897897890",
    email: "sample@gmail.com",
  },
  {
    username: "Raj",
    password: "raja",
    phone: "4589658782",
    email: "rahja@gmail.com",
  },
  {
    username: "deva",
    password: "deva123",
    phone: "8523697410",
    email: "devaba@gmail.com",
  },
  {
    username: "bala",
    password: "bala978",
    phone: "9874102365",
    email: "balan98@gmail.com",
  },
];

const foodDb = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREMoLOyF_SkDi7XOM7Kht6DzZ7y8ucagP_Vg&usqp=CAU",
    price: 75,
    title: "biscuit",
    feedback: ["Nice to take"],
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTr2h33AUQxtDgS6r4RCQJ9sEwaoIrTP0Z-g&usqp=CAU",
    price: 175,
    title: "Ice Cream",
    feedback: ["Nice to take"],
  },
  {
    img: "https://i.pinimg.com/474x/ae/0c/97/ae0c978cbb0eb5641e8071f38e36182a.jpg",
    price: 55,
    title: "Juice",
    feedback: ["Nice to take"],
  },
  {
    img: "https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    price: 275,
    title: "Chocolate Shake",
    feedback: ["Nice to take"],
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-oreo-truffles-094-1544222424.jpg?crop=1.00xw:0.752xh;0,0.0313xh&resize=480:*",
    price: 475,
    title: "Truffles",
    feedback: ["Nice to take"],
  },
  {
    img: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_380,c_fill,g_auto,h_214,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F181127105254-08-50-sweets-travel-donuts.jpg",
    price: 125,
    title: "Donut",
    feedback: ["Nice to take"],
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREMoLOyF_SkDi7XOM7Kht6DzZ7y8ucagP_Vg&usqp=CAU",
    price: 75,
    title: "biscuit",
    feedback: ["Nice to take"],
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREMoLOyF_SkDi7XOM7Kht6DzZ7y8ucagP_Vg&usqp=CAU",
    price: 75,
    title: "biscuit",
    feedback: ["Nice to take"],
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREMoLOyF_SkDi7XOM7Kht6DzZ7y8ucagP_Vg&usqp=CAU",
    price: 75,
    title: "biscuit",
    feedback: ["Nice to take"],
  },
];

exports.setupDb = async () => {
  let user = await collection.getuserCollection();
  await user.deleteMany();
  let userdata = await user.insertMany(userdb);
  let food = await collection.getFoodCollection();
  await food.deleteMany();
  let foodData = await food.insertMany(foodDb);
  if (userdata && foodData) {
    return "Insertion Successful";
  } else {
    let err = new Error("Insertion failed");
    err.status = 400;
    throw err;
  }
};
