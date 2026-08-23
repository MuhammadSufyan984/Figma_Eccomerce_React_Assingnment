export const productsData = [
  {
    id: 1,
    category: "new-arrivals",
    type: "T-shirt",
    style: "casual", // ADDED: Assigned dress style property mapping
    name: "T-shirt with Tape Details",
    price: 120,
    originalPrice: 150,
    discount: "-5%",
    rating: 4.5,
    imageSrc: "/images/newArrivals/tShirt1.png",
    gallery: [
      "/images/newArrivals/tShirt1.png",
      "/images/newArrivals/tShirt1.png",
      "/images/newArrivals/tShirt1.png"
    ],
    colors: ["#4F583D", "#112D32", "#3F2B3E"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    description: "This structural regular-fit t-shirt features clean tape detailing along the shoulders, crafted from heavy-grade premium cotton canvas weave for long-lasting durability."
  },
  {
    id: 2,
    category: "new-arrivals",
    type: "Jeans",
    style: "casual", // ADDED: Assigned dress style property mapping
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    discount: "-20%",
    rating: 3.5,
    imageSrc: "/images/newArrivals/jeans.png",
    gallery: [
      "/images/newArrivals/tShirt1.png",
      "/images/newArrivals/checkedShirt.png",
      "/images/newArrivals/jeans.png"
    ],
    colors: ["#4F583D", "#112D32", "#3F2B3E"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    description: "Classic styling tailored modernly with elastic stretching blends. Fits close through the hip and leg frame windows without reducing motion comfort."
  },
  {
    id: 3,
    category: "new-arrivals",
    type: "Shirt",
    style: "formal", // ADDED: Assigned dress style property mapping
    name: "Checkered Shirt",
    price: 180,
    originalPrice: null,
    discount: null,
    rating: 4.5,
    imageSrc: "/images/newArrivals/checkedShirt.png",
    gallery: [
      "/images/newArrivals/checkedShirt.png",
      "/images/newArrivals/checkedShirt-back.png",
      "/images/newArrivals/checkedShirt-side.png"
    ],
    colors: ["#4F583D", "#112D32", "#3F2B3E"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    description: "A lightweight cotton layering piece featuring a crisp checker box design layout. Perfect for smart-casual wear windows or open outerwear formats."
  },
  {
    id: 4,
    category: "new-arrivals",
    type: "T-shirt",
    style: "gym", // ADDED: Assigned dress style property mapping
    name: "Sleeve Striped T-Shirt",
    price: 130,
    originalPrice: null,
    discount: null,
    rating: 5.0,
    imageSrc: "/images/newArrivals/tshirt2.png",
    gallery: [
      "/images/newArrivals/tshirt2.png",
      "/images/newArrivals/tshirt2-back.png",
      "/images/newArrivals/tshirt2-side.png"
    ],
    colors: ["#4F583D", "#112D32", "#3F2B3E"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    description: "A vibrant sportswear-inspired crewneck design accented by bold retro racing sleeve stripes across the sleeve panels."
  },
  {
    id: 5,
    category: "top-selling",
    type: "Shirt",
    style: "formal", // ADDED: Assigned dress style property mapping
    name: "Vertical Striped Shirt",
    price: 212,
    originalPrice: 232,
    discount: "-20%",
    rating: 5.0,
    imageSrc: "/images/topSelling/shirt.png",
    gallery: [
      "/images/topSelling/shirt.png",
      "/images/topSelling/shirt-alt1.png",
      "/images/topSelling/shirt-alt2.png"
    ],
    colors: ["#334E68", "#102A43", "#627D98"],
    sizes: ["Medium", "Large", "X-Large"],
    description: "Elongate your presentation profile with this breezy resort-collar shirt featuring clean vertical parallel stripes, tailored from high-comfort linen-cotton blend fabrics."
  },
  {
    id: 6,
    category: "top-selling",
    type: "T-shirt",
    style: "party", // ADDED: Assigned dress style property mapping
    name: "Courage Graphic T-shirt",
    price: 145,
    originalPrice: null,
    discount: null,
    rating: 4.0,
    imageSrc: "/images/topSelling/tShirt.png",
    gallery: [
      "/images/topSelling/shirt.png",
      "/images/topSelling/shirt-alt1.png",
      "/images/topSelling/shirt-alt2.png"
    ],
    colors: ["#334E68", "#102A43", "#627D98"],
    sizes: ["Medium", "Large", "X-Large"],
    description: "Make an expressive styling point with this screen-printed center chest visual layout design."
  },
  {
    id: 7,
    category: "top-selling",
    type: "Shorts",
    style: "casual", // ADDED: Assigned dress style property mapping
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    originalPrice: null,
    discount: null,
    rating: 3.0,
    imageSrc: "/images/topSelling/short.png",
    gallery: [
      "/images/topSelling/short.png",
      "/images/topSelling/short-alt1.png",
      "/images/topSelling/short-alt2.png"
    ],
    colors: ["#334E68", "#102A43", "#627D98"],
    sizes: ["Medium", "Large", "X-Large"],
    description: "Comfortable and casual loose fit denim shorts optimized for everyday urban functionality."
  },
  {
    id: 8,
    category: "top-selling",
    type: "Jeans",
    style: "casual", // ADDED: Assigned dress style property mapping
    name: "Faded Skinny Jeans",
    price: 210,
    originalPrice: null,
    discount: null,
    rating: 4.5,
    imageSrc: "/images/topSelling/jeans.png",
    gallery: [
      "/images/topSelling/jeans.png",
      "/images/topSelling/jeans-alt1.png",
      "/images/topSelling/jeans-alt2.png"
    ],
    colors: ["#334E68", "#102A43", "#627D98"],
    sizes: ["Medium", "Large", "X-Large"],
    description: "Tailored ankle taper skinny fit jeans with a clean faded charcoal denim hue look finish."
  }
];

export const reviewsData = [
  {
    id: 1,
    rating: 5,
    author: "Sarah M.",
    verified: true,
    text: "\"I'm blown away by the quality and style of the clothes I received from SHOP.CO. Find clothes that fit my personal style used to be a challenge, but this place made it incredibly easy. Highly recommended!\""
  },
  {
    id: 2,
    rating: 5,
    author: "Alex K.",
    verified: true,
    text: "\"Finding clothes that fit my personal style used to be a challenge, but this place has completely changed my wardrobe strategy. The materials are incredibly light, and the cuts are sharp.\""
  },
  {
    id: 3,
    rating: 5,
    author: "James L.",
    verified: true,
    text: "\"As someone who's super picky about fabric comfort, I am absolutely thrilled with my purchase. The Customer support track was fast, and shipping arrived three days early!\""
  },
  {
    id: 4,
    rating: 5,
    author: "Emma R.",
    verified: true,
    text: "\"The fit is absolutely perfect! I've placed three separate orders over the last month, and every single clothing item fits true to size. Truly an elite online storefront experience.\""
  },
  {
    id: 5,
    rating: 4.5,
    author: "Michael T.",
    verified: true,
    text: "\"Excellent design options and great customer service. The vertical stripe shirts are an instant favorite. Lowered a half star only due to minor delays in packaging courier tracks.\""
  }
];
