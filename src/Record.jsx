import React from 'react'
import { FaShippingFast,FaStar  } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineEventAvailable } from "react-icons/md";
import { LuTimerReset } from "react-icons/lu";
import jacket1 from '/images/jacket1.jpg'
import jacket2 from '/images/jacket2.jpg'
import shirt1 from '/images/shirt1.jpg'
import shirt2 from '/images/shirt2.png'
import jacket3 from '/images/jacket3.jpg'
import jacket4 from '/images/jacket4.jpg'
import { FaRegHeart,FaEye ,FaArrowRightArrowLeft,FaBagShopping  } from "react-icons/fa6";
import image1 from '/images/Women/blog-1.jpg'
import image2 from '/images/Women/blog-2.jpg'
import image3 from '/images/Women/blog-3.jpg'
import image4 from '/images/Women/blog-4.jpg'


export const BlogItem = [
  {
    id:1,
    image:image1,
    title: "Fashion",
    Description: "Clothes Retail KPIs 2021 Guide for Clothes Executives",
    comment: "By Mr Admin / Apr 06, 2022",
  },
  {
    id:2,
    image:image2,
    title: "Shoes",
    Description: "EBT vendors : Claim Your Share of SNAP Online Revenue",
    comment: "By Mr Selsa / Dec 06, 2012",
  },
  {
    id:3,
    image:image3,
    title: "Wardrobe",
    Description: "Clothes Retail KPIs 2021 Guide for Clothes Executives",
    comment: "By Mr Robin / Jan 18, 2023",
  },
  {
    id:4,
    image:image4,
    title: "Shopping",
    Description: "Clothes Retail KPIs 2021 Guide for Clothes Executives",
    comment: "By Mr Pawar / May 06, 2020",
  },
]

export const Newproducts = [
    {
        id: 1,
        image : jacket1,
        image2: jacket2,
        buttons: <div className="new_hide_btn">
        <button className="hide_btn"><FaRegHeart /></button>
        <button className="hide_btn"><FaEye /></button>
        <button className="hide_btn"><FaArrowRightArrowLeft /></button>
        <button className="hide_btn"><FaBagShopping /></button>
       
    </div>,
        title:"Jacket",
        subtitle : "mens Winter leathers Jackets",
        stars: "⭐⭐⭐⭐☆",
        description:"Stay warm and stylish with this lightweight puffer jacket. Designed with a water-resistant finish and cozy insulation, it’s perfect for chilly days and outdoor adventures.",
        realprice : "$48.00",
        fakeprice : "75.20"
    },
    {
        id: 2,
        image : shirt1,
        image2: shirt2,
        buttons: <div className="new_hide_btn">
        <button className="hide_btn"><FaRegHeart /></button>
        <button className="hide_btn"><FaEye /></button>
        <button className="hide_btn"><FaArrowRightArrowLeft /></button>
        <button className="hide_btn"><FaBagShopping /></button>
       
    </div>,
        title:"Shirt",
        subtitle : "Cotton Shirt",
        stars: "⭐⭐⭐⭐☆",
        description:"Stay stylish and comfortable with this premium cotton casual shirt. Perfect for both work and weekends, its breathable fabric and modern fit make it a wardrobe essential.",
        realprice : "$45.00",
        fakeprice : "$30.20"
    },
    {
        id: 3,
        image : jacket3,
        image2: jacket4,
        buttons: <div className="new_hide_btn">
        <button className="hide_btn"><FaRegHeart /></button>
        <button className="hide_btn"><FaEye /></button>
        <button className="hide_btn"><FaArrowRightArrowLeft /></button>
        <button className="hide_btn"><FaBagShopping /></button>
       
    </div>,
        title:"jacket",
        subtitle : "Full zip jacket",
        stars: "⭐⭐⭐⭐☆",
        description:"Elevate your style with this premium leather jacket, crafted for a sleek and edgy look. Featuring a durable finish and comfortable lining, it's perfect for casual outings or evening rides.",
        realprice : "$58.00",
        fakeprice : "45.20"
    },
    {
        id: 4,
        image : "/images/skirt2.jpg",
        image2: "/images/skirt1.jpg",
        buttons: <div className="new_hide_btn">
        <button className="hide_btn"><FaRegHeart /></button>
        <button className="hide_btn"><FaEye /></button>
        <button className="hide_btn"><FaArrowRightArrowLeft /></button>
        <button className="hide_btn"><FaBagShopping /></button>
       
    </div>,
        title:"SKIRT",
        subtitle : "Black midi Skirt",
        stars: "⭐⭐⭐⭐☆",
        description:"Embrace timeless charm with this floral midi skirt. Its breezy design and vibrant prints make it perfect for summer days, brunches, or picnics in the park.",
        realprice : "$28.00",
        fakeprice : "$25.20"
    },
    {
        id: 5,
        image : "/images/shoes1.png",
        image2: "/images/shoes2.jpg",
        buttons: <div className="new_hide_btn">
        <button className="hide_btn"><FaRegHeart /></button>
        <button className="hide_btn"><FaEye /></button>
        <button className="hide_btn"><FaArrowRightArrowLeft /></button>
        <button className="hide_btn"><FaBagShopping /></button>
       
    </div>,
        title:"Shoes",
        subtitle : "Casual Men Shoes",
        stars: "⭐⭐⭐⭐☆",
        description:"Upgrade your wardrobe with these sturdy yet stylish leather boots. With a classic design and durable construction, they’re ideal for both work and weekend adventures.",
        realprice : "$88.00",
        fakeprice : "$75.0"
    },
    {
        id: 6,
        image : "/images/watch1.jpg",
        image2: "/images/watch2.png",
        buttons: <div className="new_hide_btn">
        <button className="hide_btn"><FaRegHeart /></button>
        <button className="hide_btn"><FaEye /></button>
        <button className="hide_btn"><FaArrowRightArrowLeft /></button>
        <button className="hide_btn"><FaBagShopping /></button>
       
    </div>,
        title:"WATCHES",
        subtitle : "Hand Watch",
        stars: "⭐⭐⭐⭐☆",
        description:"Elevate your look with this sleek stainless steel watch, featuring a classic design and precise timekeeping. Perfect for both casual and formal occasions, it's a must-have accessory for the modern man",
        realprice : "$98.00",
        fakeprice : "$75.20"
    },
    {
        id: 7,
        image : "/images/party1.jpg",
        image2: "/images/party2.jpg",
        buttons: <div className="new_hide_btn">
        <button className="hide_btn"><FaRegHeart /></button>
        <button className="hide_btn"><FaEye /></button>
        <button className="hide_btn"><FaArrowRightArrowLeft /></button>
        <button className="hide_btn"><FaBagShopping /></button>
       
    </div>,
        title:"PARTY WEAR",
        subtitle : "Women Party Wear Floral Dress",
        stars: "⭐⭐⭐⭐☆",
        description:"Add charm to your look with this elegant floral dress. Featuring a flattering silhouette and lightweight fabric, it's ideal for brunches, dates, or summer outings.",
        realprice : "$48.00",
        fakeprice : "35.20"
    },
    // {
    //     id: 8,
    //     image : "",
    //     image2: "",
    //     product:"Sports",
    //     subtitle : "SweatShorts",
    //     stars: "⭐⭐⭐⭐☆",
    // description:"",
    //     realprice : "$48.00",
    //     fakeprice : "75.20"
    // },
    // {
    //     id: 9,
    //     image1 : "",
    //     image2: "",
    //     product:"Sports",
    //     subtitle : "SweatShorts",
    //     stars: "⭐⭐⭐⭐☆",
    // description:"",
    //     realprice : "$48.00",
    //     fakeprice : "75.20"
    // },
    // {
    //     id: 10,
    //     image1 : "",
    //     image2: "",
    //     product:"Sports",
    //     subtitle : "SweatShorts",
    //     stars: "",
    //     realprice : "$48.00",
    //     fakeprice : "75.20"
    // },

]

export const menslide =[
    { id: 21, icon: <FaShippingFast className='icon'/>,title: "Free Shipping", subtitle: "On All order over $99" },
    { "id": 22, "icon": <FaHandshake className='icon'/>, "title": "Secure Payment", "subtitle": "We Ensure secure payment" },
    { "id": 23, "icon": <GiReceiveMoney className='icon'/>, "title": "100% Money Back", "subtitle": "30 days Return Policy" },
    { "id": 24, "icon": <MdOutlineEventAvailable className='icon'/>, "title": "Available", "subtitle": "Available Everywhere" },
    { "id": 25, "icon": <LuTimerReset className='icon'/>, "title": "Anytime", "subtitle": "No Time Litmits for Order" },
    // { "id": 26, "icon": "FaHandshake", "title": "Jeans", "subtitle": "Show All" },
    // { "id": 27, "icon": "FaShippingFast", "title": " Accessories", "subtitle": "Show All" },
    // { "id": 28, "icon": "FaHandshake", "subtitle": "Show All" }
]

export const ExtraMen = [
    {
        id:30,
        image:"/images/mens/belt.jpg",
        title:"Belts",
        subtitle:"Brown Solid Leather belts",
        stars:"⭐⭐⭐⭐",
        description:"Essential accessory for a polished look, available in leather, canvas, and braided styles to complement casual and formal outfits.",
        realprice:"$100.00",
        fakeprice:"$120.22",
        sale:"50% Off"
    },
    {
        id:31,
        image:"/images/mens/jacket-1.jpg",
        title:"Jackets",
        subtitle:"Solid Biker Jackets",
        stars:"⭐⭐⭐⭐⭐",
        description:"Versatile outerwear for all seasons, available in casual, formal, and sporty styles. Perfect for layering and enhancing any outfit.",
        realprice:"$149.00",
        fakeprice:"$189.00",
        sale:"50% Off"
    },{
        id:32,
        image:"/images/mens/shirt1.jpg",
        title:"Casual Shirts",
        subtitle:"Shirt in and shine",
        stars:"⭐⭐⭐",
        description:"A variety of options, including formal, casual, and printed designs, crafted from premium fabrics for comfort and style.",
        realprice:"$57.00",
        fakeprice:"$98.00",
        sale:"50% Off"
    },{
        id:33,
        image:"/images/mens/4.jpg",
        title:"Summer Season",
        subtitle:"Caps",
        stars:"⭐⭐⭐⭐",
        description:"Stylish and functional headwear, featuring designs like snapbacks, baseball caps, and beanies, perfect for casual outings or sun protection.",
        realprice:"$33.00",
        fakeprice:"$44.00",
        sale:"50% Off"
    },{
        id:34,
        image:"/images/watch1.jpg",
        title:"Smart  Watches",
        subtitle:"Black Digital Watches",
        stars:"⭐⭐",
        description:"Timeless accessories featuring analog and digital designs, blending functionality with modern aesthetics.",
        realprice:"$50.00",
        fakeprice:"$58.30",
        sale:"50% Off"
    },{
        id:35,
        image:"/images/mens/shoes1.png",
        title:"Formals",
        subtitle:"Black Formal Shoes",
        stars:"⭐",
        description:"Ranging from formal dress shoes to casual sneakers, designed for durability and comfort without compromising on style.",
        realprice:"$32.00",
        fakeprice:"$34.00",
        // sale:"50% Off"
    },{
        id:36,
        image:"/images/mens/bag.jpeg",
        title:"BagPacks",
        subtitle:"Laptop Bags",
        stars:"⭐⭐⭐",
        description:"Durable and stylish bags designed to protect your laptop, available in backpacks, messenger bags, and sleeves, combining functionality with modern aesthetics.",
        realprice:"$20.00",
        fakeprice:"$36.00",
        sale:"50% Off"
    },{
        id:37,
        image:"/images/mens/wallet.webp",
        title:"Wallets",
        subtitle:"Black leather Wallets",
        stars:"⭐⭐⭐⭐⭐",
        description:"Compact and stylish wallets crafted from premium materials, offering multiple compartments for cash, cards, and IDs, perfect for everyday use.",
        realprice:"$55.00",
        fakeprice:"$63.00",
        sale:"50% Off"
    },{
        id:38,
        image:"/images/mens/shoes2.jpg",
        title:"Shoes",
        subtitle:"Sports Shoes",
        stars:"⭐⭐",
        description:"Lightweight and durable footwear designed for performance and comfort, ideal for running, training, and other athletic activities.",
        realprice:"$122.00",
        fakeprice:"$130.00",
        sale:"50% Off"
    },{
        id:39,
        image:"/images/mens/bracelet.jpg",
        title:"Bracelet",
        subtitle:"Make your wrist Attractive",
        stars:"⭐⭐⭐⭐",
        description:"Trendy wrist accessories in metal, leather, or beads, adding a touch of style to any outfit. Perfect for casual or formal occasions.",
        realprice:"$122.00",
        fakeprice:"$150.00",
        sale:"50% Off"
    },
    {
        id:40,
        image:"/images/mens/glasses.webp",
        title:"Sunglasses ",
        subtitle:"Sunglasses and lenses",
        stars:"⭐⭐⭐⭐⭐",
        description:"Fashionable eyewear with UV protection, available in various frames and lens styles to suit different face shapes and preferences.",
        realprice:"$16.00",
        fakeprice:"$22.20",
        sale:"50% Off"
    },
    {
        id:41,
        image:"/images/mens/belt2.webp",
        title:"Belts",
        subtitle:"Black Stylish Leather Belt",
        stars:"⭐⭐⭐",
        description:"Versatile belts in leather and fabric designs, perfect for completing both casual and formal looks with a polished finish.",
        realprice:"$122.00",
        fakeprice:"$63.00",
        sale:"50% Off"
    },
    {
        id:42,
        image:"/images/shirt2.png",
        title:"Casual Wear",
        subtitle:"Casual Chex Shirts",
        stars:"⭐⭐",
        description:"Classic and trendy shirts available in formal, casual, and printed styles, tailored for comfort and elegance",
        realprice:"$15.00",
        fakeprice:"$52.00",
        sale:"50% Off"
    },{
        id:43,
        image:"/images/watch2.png",
        title:"Watches",
        subtitle:" Stylish Wrist Watches",
        stars:"⭐⭐⭐⭐",
        description:"Timeless wristwatches featuring analog, digital, and smart designs, perfect for style and functionality.",
        realprice:"$82.00",
        fakeprice:"$95.00",
        sale:"50% Off"
    },{
        id:44,
        image:"/images/mens/kurti.jpg",
        title:"kurti",
        subtitle:"Festive kurtis and all",
        stars:"⭐⭐⭐⭐⭐",
        description:"Elegant and versatile kurtis in various patterns, fabrics, and lengths, ideal for casual wear, office, or festive occasions.",
        realprice:"$91.00",
        fakeprice:"$96.00",
        sale:"50% Off"
    },{
        id:45,
        image:"/images/mens/chain.jpg",
        title:"Chain",
        subtitle:"Stylish Gold Chain",
        stars:"⭐⭐⭐",
        description:"Sophisticated and timeless, men's gold chains offer a touch of luxury and style, perfect for adding a refined look to any outfit.",
        realprice:"$196.00",
        fakeprice:"$221.00",
        sale:"50% Off"
    },
    {
        id:46,
        image:"/images/mens/sneaker.jpeg",
        title:"Sneakers",
        subtitle:"Go with fashionS",
        stars:"⭐⭐",
        description:"Comfortable and stylish footwear, designed for everyday wear, with a range of designs from classic to modern, perfect for both casual and active lifestyles.",
        realprice:"$16.00",
        fakeprice:"$21.00",
        sale:"50% Off"
    },
    {
        id:47,
        image:"/images/mens/tshirt.jpg",
        title:"T-shirts",
        subtitle:"Daily wear T-Shirts",
        stars:"⭐⭐⭐⭐⭐",
        description:"Casual and versatile tees in various colors and prints, crafted for comfort and style, perfect for everyday wear.",
        realprice:"$35.00",
        fakeprice:"$39.00",
        sale:"50% Off"
    },{
        id:48,
        image:"/images/mens/jeans.jpeg",
        title:"Jeans",
        subtitle:"Stylish Trending jeans",
        stars:"⭐⭐",
        description:"Durable and stylish denim jeans, available in various fits and washes, ideal for creating both casual and semi-formal looks.",
        realprice:"$36.00",
        fakeprice:"$40.00",
        sale:"50% Off"
    },
]

export const shortitem = [
    { id: 51, image: " /images/shortslider/first.jpg", title:"Dress & Frocks",
        stars: "⭐⭐⭐⭐☆",
        realprice:"$36.00",
        fakeprice:"$40.00",
        description:"A wide collection of elegant dresses and frocks designed for every occasion. From casual outings to formal events, these dresses offer both comfort and style.", 
        subtitle : "Show All" ,stock:"12"},

    { id: 52,image: " /images/shortslider/2.jpg", title:"Winter Wear", subtitle : "Show All",
        stars: "⭐⭐⭐⭐☆",
        realprice:"$36.00",
        fakeprice:"$40.00",
        description:"Stay cozy and stylish with our winter wear collection. Featuring warm jackets, coats, and sweaters, perfect for cold weather without compromising on style.", 
        stock:"96" },
    { id: 53,image: " /images/shortslider/3.jpg", title:"Sunglasses", subtitle : "Show All" ,
        stars: "⭐⭐⭐⭐☆",
        realprice:"$36.00",
        fakeprice:"$40.00",
        description:"A variety of stylish sunglasses to protect your eyes from the sun while looking fashionable. Choose from classic to trendy designs that complement your style.", 
        stock:"56"},

    { id: 54,image: " /images/shortslider/4.jpg", title:"Clothes ", subtitle : "Show All" ,
        stars: "⭐⭐⭐⭐☆",
        realprice:"$36.00",
        fakeprice:"$40.00",
        description:"Traditional yet trendy, our saree collection offers rich fabrics and exquisite designs for any occasion. Perfect for cultural events, weddings, or special gatherings.", 
        stock:"21"},
    { id: 55,image: " /images/shortslider/tshirt.avif", title:"T-Shirts", subtitle : "Show All",
        stars: "⭐⭐⭐⭐☆",
        realprice:"$36.00",
        fakeprice:"$40.00",
        description:"Comfortable and stylish T-shirts for everyday wear. Available in a range of colors and designs, these tees provide the perfect balance of casual comfort and fashion.", 
        stock:"121" },
    { id: 56,image: "/images/shortslider/4.jpg", title:"Jeans", subtitle : "Show All" ,
        stars: "⭐⭐⭐⭐☆",
        realprice:"$36.00",
        fakeprice:"$40.00",
        description:"Explore our collection of jeans, designed for both comfort and durability. Whether you're looking for a classic or modern fit, we have something to match your style.", 
        stock:"78"},
    { id: 57,image: " /images/products/jewellery-1.jpg", title:"Jewellery", subtitle : "Show All" ,
        stars: "⭐⭐⭐⭐☆",
        realprice:"$36.00",
        fakeprice:"$40.00",
        description:"Add a touch of elegance with our jewellery collection. Featuring necklaces, earrings, and rings, each piece is designed to complement your personal style.", 
        stock:"9"},
    { id: 58, image: "/images/shoes1.png",title:"Shoes", subtitle : "Show All",
        stars: "⭐⭐⭐⭐☆",
        realprice:"$36.00",
        fakeprice:"$40.00",
        description:"A diverse range of shoes that combine style with comfort. From casual sneakers to formal footwear, our collection has something for every occasion.", 
        stock:"10" },
    { id: 59, image: " /images/shortslider/jacket.jpg",title:"Jackets", subtitle : "Show All",stars: "⭐⭐⭐⭐☆",
        realprice:"$36.00",
        fakeprice:"$40.00",
        description:"Stay warm and stylish with this lightweight puffer jacket. Designed with a water-resistant finish and cozy insulation, it’s perfect for chilly days and outdoor adventures.",
        stock:"4" },
    // { id: 10,image: " image", title:"Shampoo", subtitle : "Show All",stock:"89" },
  ];
export const MenBlog = [
    {
        id:1,
        image:"/images/mens-banner.jpg",

    },
    {
        id:2,
        image:"/images/mens/woemn.jpg",

    }
]

export const ADmen = [
    {
        id:1,
        image:"/images/mens/mainAdjpg",

    },
    {
        id:2,
        image:"/images/mens/mens1.jpg",

    },
    {
        id:3,
        image:"/images/mens/electronmics.jpg",

    },
    {
        id:4,
        image:"/images/mens/jewellery.jpg",

    },
]

export const WomenBlog = [
    {
        id:1,
        image:"/images/Women/blog2.jpg",
        heading:" Chronicles of Her",
        subtitle:"an Australian style expert",
        para : "The platform is designed to be a daily pit stop for everything related to real lifestyle choices...",
    },{
        id:2,
        image:"/images/Women/women3.avif",
        heading:"MoodyMo",
        subtitle:"1 Dec 2024 at 01:15",
        para : "Check one more beautiful blog on Jaisalmer India with the name The-universe-dares-you-to-walk-the-unknown...",
    },{
        id:3,
        image:"/images/Women/blog1.avif",
        heading:"Louis Vuitton Speedy 30",
        subtitle:"18 Mar 2024 at 03:20",
        para : " I picked this bag last year as my first luxury purchase and it has been my BFF ever since...",
    },{
        id:4,
        image:"/images/Women/Blogs.jpg",
        heading:"Makeup Pouch ",
        subtitle:" 27 May 2022 at 23:44",
        para : "This glitter makeup pouch was actually a part of a holiday collection set that I bought...",
    },{
        id:5,
        image:"/images/Women/mainBlog4.jpg",
        heading:" The Budget Fashionista",
        subtitle:"18 Mar 2024 at 03:20",
        para : "Kathryn Finney curates tips for savvy shopping, including sales, discounts, and budget-friendly fashion finds.",
    },{
        id:6,
        image:"/images/Women/blog1.avif",
        heading:"The Chriselle Factor",
        subtitle:"18 Mar 2024 at 03:20",
        para : "Chriselle Lim offers tips on  styling, and luxury fashion. Her blog is a great resource for  budget-friendly shopping ideas.",
    },{
        id:7,
        image:"/images/Women/blog-1.jpg",
        heading:"Style Me Pretty",
        subtitle:"28 Mar 2024 at 03:20",
        para : "A shopping and lifestyle blog with a focus on style, beauty, and gift guides for women. Great for finding curated items.",
    },{
        id:8,
        image:"/images/Women/blog-2.jpg",
        heading:"Who What Wear",
        subtitle:"18 Aug 2017 at 08:10",
        para : "Offers shopping guides, trend analysis, and fashion inspiration. It's a comprehensive resource for all things stylish.",
    },{
        id:9,
        image:"/images/Women/women2.jpg",
        heading:"The Anna Edit",
        subtitle:"02 Jun 2016 at 16:00",
        para : "Anna Newton provides shopping advice for minimalists. Her blog emphasizes thoughtful purchases.",
    },
    {
        id:10,
        image:"/images/Women/women2.jpg",
        heading:"The Blonde Salad",
        subtitle:"30 Feb 2016 at 03:20",
        para : "Chiara Ferragni's blog is a global fashion platform that provides shopping tips, luxury finds.",
    }
]
export const WomenProd = [
    {
        id:61,
        image:"/images/Women/saree5.jpeg",
        title:"Kota Sarees",
        subtitle:"Brocade Silk saree",
        star:"⭐⭐⭐⭐",
        description:"Graceful and elegant saree crafted from premium fabric, perfect for traditional and festive occasions.",
        realprice:"$25.00",
        fakeprice:"$30.20",
        sale:"50% Off"
    },
    {
        id:62,
        image:"/images/Women/earrings1.jpg",
        title:"Earrings",
        subtitle:"Trendy, Attracted Stud Earrings ",
        star:"⭐⭐⭐⭐⭐",
        description:" Elegant  earrings with delicate embellishments, perfect for adding a pop of color to any ensemble.",
        realprice:"$15.00",
        fakeprice:"$17.00",
        sale:"20% Off"
    },{
        id:63,
        image:"/images/Women/lehanga1.avif",
        title:"Pink Lehanga",
        subtitle:"Pink Embroided Bridal Lehanga",
        star:"⭐⭐⭐⭐⭐",
        description:"Beautifully designed pink lehenga with intricate embroidery, ideal for weddings and festive celebrations.",
        realprice:"$62.00",
        fakeprice:"$65.00",
        sale:"10% Off"
    },{
        id:64,
        image:"/images/Women/makeup1.jpeg",
        title:"Just Glow Up",
        subtitle:"look Smart and Elegant",
        star:"⭐⭐⭐⭐⭐",
        description:"High-quality makeup essentials for a flawless, radiant look, perfect for any occasion.",
        realprice:"$30.00",
        fakeprice:"$35.00",
        sale:"20% Off"
    },{
        id:65,
        image:"/images/Women/purse1.webp",
        title:"Shoulder Purse",
        subtitle:"Dasien Women Satchel Bag",
        star:"⭐⭐⭐⭐⭐",
        description:"Stylish and functional purse with ample space, perfect for carrying your essentials with elegance.",
        realprice:"$30.00",
        fakeprice:"$25.30",
        sale:"50% Off"
    },{
        id:66,
        image:"/images/Women/outfitq.jpg",
        title:"Office Wear",
        subtitle:"Mode Outfit, Casual Outfit",
        star:"⭐⭐⭐⭐⭐",
        description:" Chic and versatile white outfit with a modern design, ideal for casual outings or office wear.",
        realprice:"$50.00",
        fakeprice:"$55.30",
        sale:"50% Off"
    },{
        id:67,
        image:"/images/Women/saree6.png",
        title:"Passionate saree",
        subtitle:"Perfect for Evening Wear",
        star:"⭐⭐⭐⭐⭐",
        description:"A timeless and elegant saree, crafted with intricate patterns and luxurious fabric, perfect for weddings, festivals, and special occasions. ",
        realprice:"$35.75",
        fakeprice:"$40.55",
        sale:"15% Off"
    },{
        id:68,
        image:"/images/Women/top1.jpg",
        title:"White Top",
        subtitle:"Stylish and Comfortable",
        star:"⭐⭐⭐⭐⭐",
        description:" Chic and versatile white top with a modern design, ideal for casual outings or office wear.",
        realprice:"$63.00",
        fakeprice:"$65.00",
        sale:"5% Off"
    },{
        id:69,
        image:"/images/Women/womenjacket1.webp",
        title:"Brown Jacket",
        subtitle:"Lightweight and Breezy",
        star:"⭐⭐⭐⭐⭐",
        description:"Fashion-forward and versatile jacket, designed to keep you warm while adding a stylish touch to any outfit. Perfect for both casual and semi-formal occasions.",
        realprice:"$40.00",
        fakeprice:"$50.30",
        sale:"10% Off"
    },{
        id:70,
        image:"/images/Women/necklace1.jpg",
        title:"Trending Jewellery",
        subtitle:"Elegant and Versatile",
        star:"⭐⭐⭐⭐⭐",
        description:" Exquisite necklace with intricate detailing, adding a touch of sophistication to any outfit.",
        realprice:"$99.99",
        fakeprice:"$199.99",
        sale:"50% Off"
    },{
        id:71,
        image:"/images/Women/sandal1.jpg",
        title:"Comfy Sandals",
        subtitle:"Soft and Cozy",
        description:"Comfortable and stylish sandals with a sleek finish, perfect for everyday wear or special events.",
        star:"⭐⭐⭐⭐⭐",
        realprice:"$12.00",
        fakeprice:"$15.30",
        sale:"5% Off"
    },{
        id:72,
        image:"/images/Women/lehanga2.webp",
        title:"Beautiful Lehanga",
        subtitle:"Vintage Floral Maxi Dress",
        star:"⭐⭐⭐⭐⭐",
        description:" A stunning lehenga with intricate designs and rich fabric, offering a perfect blend of tradition and modern elegance for weddings and festive events.",
        realprice:"$65.00",
        fakeprice:"$70.20",
        sale:"8% Off"
    },
    {
        id:73,
        image:"/images/Women/perfume1.png",
        title:"Flower Perfumes",
        subtitle:"Smell Elegant and attractive",
        star:"⭐⭐⭐⭐",
        description:"A luxurious fragrance that captivates with its fresh and floral notes, leaving a lasting impression wherever you go.",
        realprice:"$65.00",
        fakeprice:"$70.20",
        sale:"8% Off"
    },
    {
        id:74,
        image:"/images/Women/saree3.jpg",
        title:"Beautiful Sarees",
        subtitle:"Vintage Yellow Stylish Saree",
        star:"⭐⭐⭐⭐⭐",
        description:"A vibrant and graceful yellow saree, featuring delicate embroidery and a rich fabric that exudes warmth and charm. Perfect for festive occasions and celebratory events.",
        realprice:"$65.00",
        fakeprice:"$70.20",
        sale:"8% Off"
    },
    {
        id:75,
        image:"/images/Women/top3.webp",
        title:"Beautiful Lehanga",
        subtitle:"Vintage Floral Maxi Dress",
        star:"⭐⭐⭐⭐⭐",
        description:"A flowing and comfortable maxi dress, designed with a flattering silhouette and vibrant prints, perfect for casual outings or evening events. ",
        realprice:"$65.00",
        fakeprice:"$70.20",
        sale:"8% Off"
    },
]

export const Newarrival = [
    {
        id:101,
        image:"/images/products/clothes-1.jpg",
        title:"Relaxed Short Full Slee..",
        subtitle: "Clothes",
        star:"⭐⭐⭐⭐⭐",
        description:"A comfortable and breathable short-sleeve shirt, perfect for casual outings or relaxed days. Crafted with soft fabric for all-day comfort.",
        realprice: "$45.00",
        fakeprice : "$12.00"
    },
    {
        id:102,
        image:"/images/shoes2.jpg",
        title:"Running and Trekking Shoes..",
        subtitle: "Sports",
        star:"⭐⭐⭐⭐⭐",
        description:"Durable and supportive shoes designed for both running and trekking. With enhanced grip and cushioning, perfect for outdoor adventures.",
        realprice : "$55.00",
        fakeprice : "$32.00"
    },
    {
        id:103,
        image:"/images/products/jacket-4.jpg",
        title:"Pocket Watch leather...",
        subtitle: "Accesories",
        star:"⭐⭐⭐⭐⭐",
        description:"A stylish leather pocket watch that exudes vintage charm and sophistication. Ideal for those who appreciate timeless elegance.",
        realprice: "$50.00",
        fakeprice : "$34.00"
    },
    {
        id:104,
        image:"/images/Women/hero.jpg",
        title:"Girls Blue Embro Design..",
        subtitle: "Gown",
        star:"⭐⭐⭐⭐⭐",
        description:"A beautifully embroidered blue gown, perfect for special occasions and celebrations. Delicate stitching adds a touch of elegance.",
        realprice : "$45.00",
        fakeprice : "$12.00"
    },
    {
        id:105,
        image:"/images/products/jewellery-1.jpg",
        title:"Earrings, Necklace and Jewellery...",
        subtitle: "Jewellery",
        star:"⭐⭐⭐⭐",
        description:"A stunning jewellery set that includes earrings and a necklace, perfect for enhancing any outfit. Crafted to add sparkle to your look.",
        realprice: "$98.00",
        fakeprice : "$82.00"
    },
    {
        id:106,
        image:"/images/products/jacket-1.jpg",
        title:"Durable and stylish Jackets..",
        subtitle: "Clothes",
        star:"⭐⭐⭐⭐⭐",
        description:"A chic and sturdy jacket designed for both style and function. Perfect for cooler days, with a modern and sleek design.",
        realprice: "$45.00",
        fakeprice : "$12.00"
    },
    {
        id:107,
        image:"/images/products/clothes-4.jpg",
        title:"Women's Partywear Black Skirts..",
        subtitle: "PartWear",
        star:"⭐⭐⭐⭐",
        description:"A fashionable black skirt, ideal for parties and evening events. Designed to flatter and elevate your look for any special occasion.",
        realprice : "$45.00",
        fakeprice : "$12.00"
    },
    {
        id:108,
        image:"/images/products/jacket-2.jpg",
        title:"Relaxed Short Full Sleeve",
        subtitle: "Clothes",
        star:"⭐⭐⭐⭐⭐",
        description:"A casual jacket with a relaxed fit and full sleeves, designed for comfort and easy layering. Perfect for both casual and semi-formal looks.",
        realprice : "$45.00",
        fakeprice : "$12.00"
    },
    {
      id:109,
      image:"/images/products/jewellery-2.jpg",
      title:"Wedding Season and Jewellery...",
      subtitle: "Ring",
      star:"⭐⭐⭐⭐⭐",
        description:"A dazzling ring, perfect for wedding season or special occasions. Its timeless design makes it an ideal gift for loved ones.",
      realprice : "$88.00",
      fakeprice : "$92.00"
  },
]
export const BestSellers = [
    {
            id:110,
            image:"/images/products/2.jpg",
            title:"Baby Fabric Shoes..",
            stars: "⭐⭐⭐⭐",
            description:" Lightweight and comfortable fabric shoes designed for infants. Perfect for everyday use, ensuring your baby's feet are cozy and stylish.",
            realprice : "$45.00",
            fakeprice : "$12.00"
    },
        {
            id:111,
            image:"/images/products/3.jpg",
            title:"Men's Hoodies and T-Shirts",
            stars: "⭐⭐⭐⭐",
            description:" Trendy hoodies and t-shirts made from soft, breathable fabric. Ideal for casual outings and adding a fashionable touch to your wardrobe.",
            realprice : "$45.00",
            fakeprice : "$18.00"
    },
    {
        id:112,
        image:"/images/Women/top3.webp",
        title:"Girl's T-shirts",
        stars:"⭐⭐⭐⭐",
        description:"Vibrant and chic t-shirts crafted for girls with playful designs. Made from high-quality fabric for all-day comfort and style. ",
            realprice: "$35.00",
        fakeprice : "$22.00"
    },
    {
        id:113,
        image:"/images/products/4.jpg",
        title:"Jewellery",
        stars: "⭐⭐⭐",
        description:"Elegant and timeless jewellery pieces to elevate your look. Perfect for special occasions or adding sparkle to everyday outfits. ",
        realprice : "$95.00",
        fakeprice : "$77.00"
    }
]

export const allProducts = [
    ...Newproducts, // Import from Newproducts
    // ...menslide,
    ...ExtraMen,
    ...Newarrival,
    ...WomenBlog,
    ...WomenProd,
    ...shortitem,
    ...BestSellers,
  ];
  
const Record = () => {
  return (
    <div>
      <h1>Record</h1>
    </div>
  )
}

export default Record
