
const categories = [
    {
      id: 1,
      name: "Clothes",
      icon: "👗", // Placeholder icon
      options: [
        { name: "Shirt", count: 300 },
        { name: "Shorts & Jeans", count: 60 },
        { name: "Jacket", count: 50 },
        { name: "Dress & Frock", count: 87 },
      ],
    },
    {
      id: 2,
      name: "Footwear",
      icon: "👟",
      options: [
        { name: "Running Shoes", count: 100 },
        { name: "Sandals", count: 70 },
      ],
    },
    {
      id: 3,
      name: "Jewellery",
      icon: "💍",
      options: [
        { name: "Earrings", count: 50 },
        { name: "Necklaces", count: 80 },
      ],
    },
    {
        id: 4,
        name: "Perfume",
        icon: "🧴",
        options: [
          { name: "Clothes", count: 150 },
          { name: "Deodrant", count: 40 },
        ],
      },
      {
        id: 5,
        name: "Cosmetics",
        icon: "💅",
        options: [
          { name: "Shampoo", count: 45 },
          { name: "Face Wash", count: 80 },
          {name: "Body Lotion", count:52},
        ],
      },
      {
        id: 6,
        name: "Glasses",
        icon: "👓 ",
        options: [
          { name: "SunGlasses", count: 150 },
          { name: "Style", count: 71 },
          { name: "Frames", count: 88 },
          { name: "LensKart", count: 96 },
        ],
      },
      {
        id: 7,
        name: "bags",
        icon: "👜",
        options: [
          { name: "Purse", count: 60 },
          { name: "School Bag", count: 80 },
          { name: "Pockets", count: 30 },
        ],
      },
  ];
const products = [
    {
        id:1,
        image:"",
        title:"Relaxed Short Full Slee..",
        subtitle: "Clothes",
        price : "$45.00",
        fakeprice : "$12.00"
    },
    {
        id:2,
        image:"",
        title:"Running and Trekking Shoes..",
        subtitle: "Sports",
        price : "$55.00",
        fakeprice : "$32.00"
    },
    {
        id:3,
        image:"",
        title:"Pocket Watch leather...",
        subtitle: "Accesories",
        price : "$50.00",
        fakeprice : "$34.00"
    },
    {
        id:4,
        image:"",
        title:"Girls Pink Embro Design..",
        subtitle: "Clothes",
        price : "$45.00",
        fakeprice : "$12.00"
    },
    {
        id:5,
        image:"",
        title:"Earrings, Necklace and Jewellery...",
        subtitle: "Jewellery",
        price : "$98.00",
        fakeprice : "$82.00"
    },
    {
        id:6,
        image:"",
        title:"Relaxed Short Full Slee..",
        subtitle: "Clothes",
        price : "$45.00",
        fakeprice : "$12.00"
    },
    {
        id:7,
        image:"",
        title:"Women's Partywear ..",
        subtitle: "PartWear",
        price : "$45.00",
        fakeprice : "$12.00"
    },
    {
        id:8,
        image:"",
        title:"Relaxed Short Full Slee..",
        subtitle: "Clothes",
        price : "$45.00",
        fakeprice : "$12.00"
    }
]
const BestSellers = [
    {
            id:1,
            image:"",
            title:"Baby Fabric Shoes..",
            Stars: <FaStar className={style.star_icon} />,
            price : "$45.00",
            fakeprice : "$12.00"
    },
        {
            id:2,
            image:"",
            title:"Men's Hoodies and T-Shirts",
            Stars: <FaStar className={style.star_icon} />,
            price : "$45.00",
            fakeprice : "$18.00"
    },
    {
        id:3,
        image:"",
        title:"Girl's T-shirts",
        Stars: <FaStar className={style.star_icon} />,
        price : "$35.00",
        fakeprice : "$22.00"
    },
    {
        id:4,
        image:"",
        title:"Jewellery",
        Stars: <FaStar className={style.star_icon} />,
        price : "$95.00",
        fakeprice : "$77.00"
    }
]

export default categories;