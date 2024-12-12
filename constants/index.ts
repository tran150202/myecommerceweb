export const manufacturers = [
  "Acura",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Buick",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "GMC",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lexus",
  "Lincoln",
  "Maserati",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "MINI",
  "Mitsubishi",
  "Nissan",
  "Porsche",
  "Ram",
  "Rolls-Royce",
  "Subaru",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];

export const yearsOfProduction = [
  { title: "Year", value: "" },
  { title: "2015", value: "2015" },
  { title: "2016", value: "2016" },
  { title: "2017", value: "2017" },
  { title: "2018", value: "2018" },
  { title: "2019", value: "2019" },
  { title: "2020", value: "2020" },
  { title: "2021", value: "2021" },
  { title: "2022", value: "2022" },
  { title: "2023", value: "2023" },
];

export const fuels = [
  {
    title: "Fuel",
    value: "",
  },
  {
    title: "Gas",
    value: "Gas",
  },
  {
    title: "Electricity",
    value: "Electricity",
  },
];

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];

export const navigation = {
  categories: [
    {
      id: "thoi-trang",
      name: "Thời trang",
      featured: [
        {
          name: "Hàng Mới Về",
          href: "/categories/hang-moi-ve", // Đã sửa
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Người mẫu ngồi tựa lưng vào nhau, mặc áo Basic Tee màu đen và xám nhạt.",
        },
        {
          name: "Áo Thun Cơ Bản",
          href: "/categories/ao-thun-co-ban", // Đã sửa
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Cận cảnh bộ sưu tập áo Basic Tee thu với các màu trắng ngà, vàng đất, xanh olive và đen.",
        },
      ],
      sections: [
        {
          id: "quan-ao",
          name: "Quần Áo",
          items: [
            { name: "Áo", href: "/categories/ao" }, // Đã sửa
            { name: "Đầm", href: "/categories/dam" }, // Đã sửa
            { name: "Quần", href: "/categories/quan" }, // Đã sửa
            { name: "Denim", href: "/categories/denim" }, // Đã sửa
            { name: "Đồ Thể Thao", href: "/categories/do-the-thao" }, // Đã sửa
          ],
        },
        {
          id: "phu-kien",
          name: "Phụ Kiện",
          items: [
            { name: "Đồng Hồ", href: "/categories/dong-ho" }, // Đã sửa
            { name: "Ví", href: "/categories/vi" }, // Đã sửa
            { name: "Túi Xách", href: "/categories/tui-xach" }, // Đã sửa
            { name: "Kính Râm", href: "/categories/kinh-ram" }, // Đã sửa
            { name: "Thắt Lưng", href: "/categories/that-lung" }, // Đã sửa
          ],
        },
        {
          id: "thuong-hieu",
          name: "Thương Hiệu",
          items: [
            { name: "Full Nelson", href: "/categories/full-nelson" }, // Đã sửa
            { name: "My Way", href: "/categories/my-way" }, // Đã sửa
            { name: "Re-Arranged", href: "/categories/re-arranged" }, // Đã sửa
            { name: "Counterfeit", href: "/categories/counterfeit" }, // Đã sửa
            {
              name: "Significant Other",
              href: "/categories/significant-other",
            }, // Đã sửa
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Cửa Hàng", href: "/store" },
    { name: "Công Ty", href: "/company" },
  ],
};
