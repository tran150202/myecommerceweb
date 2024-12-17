import {
  Check,
  CheckCircle,
  Clock,
  CreditCard,
  DollarSign,
  Gift,
  Globe,
  Headphones,
  Lock,
  Mail,
  RefreshCw,
  Repeat,
  Shield,
  ShieldCheck,
  Shirt,
  ShoppingBag,
  Sparkles,
  Truck,
  Users,
} from "lucide-react";

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

export const reviews = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    role: "Khách hàng thân thiết",
    quote:
      "Chất lượng sản phẩm tuyệt vời, đúng như mô tả. Tôi rất hài lòng với trải nghiệm mua hàng!",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Trần Thị B",
    role: "Khách hàng mới",
    quote:
      "Dịch vụ chăm sóc khách hàng rất chuyên nghiệp. Sẽ quay lại mua hàng!",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Lê Văn C",
    role: "Nhà thiết kế",
    quote: "Thiết kế đa dạng, phù hợp với nhiều phong cách. Rất thích!",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Mai Thị D",
    role: "Khách hàng lâu năm",
    quote: "Sản phẩm chất lượng và giao hàng nhanh chóng, tôi rất tin tưởng!",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Phan Quang E",
    role: "Khách hàng trung thành",
    quote: "Dịch vụ luôn tuyệt vời, luôn cập nhật sản phẩm mới và tốt.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 5,
  },
  {
    id: 6,
    name: "Nguyễn Minh F",
    role: "Chuyên gia công nghệ",
    quote: "Rất hài lòng với sản phẩm, dịch vụ vượt qua kỳ vọng của tôi.",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    rating: 5,
  },
  {
    id: 7,
    name: "Lê Quỳnh G",
    role: "Nhân viên văn phòng",
    quote: "Rất thích dịch vụ hỗ trợ, giao hàng đúng hẹn và sản phẩm tốt.",
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    rating: 5,
  },
  {
    id: 8,
    name: "Hoàng Tuấn H",
    role: "Thực khách",
    quote: "Món ăn tuyệt vời, hương vị rất ngon và phục vụ rất chuyên nghiệp.",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    rating: 5,
  },
  {
    id: 9,
    name: "Vũ Mai I",
    role: "Chuyên gia marketing",
    quote: "Dịch vụ tốt, tôi sẽ quay lại lần nữa và giới thiệu cho bạn bè.",
    avatar: "https://randomuser.me/api/portraits/women/9.jpg",
    rating: 5,
  },
];

export const services = [
  {
    icon: Truck,
    title: "Giao Hàng Nhanh",
    desc: "Miễn phí giao hàng cho đơn hàng trên 500.000 đồng",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    icon: RefreshCw,
    title: "Đổi Trả Dễ Dàng",
    desc: "Đổi trả miễn phí trong vòng 30 ngày",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
  },
  {
    icon: Shield,
    title: "Bảo Mật An Toàn",
    desc: "Cam kết bảo vệ thông tin khách hàng",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
  },
  {
    icon: Shirt,
    title: "Thời Trang Nam",
    desc: "Những thiết kế lịch lãm và phong cách",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
    iconBg: "bg-red-100",
  },
  {
    icon: Sparkles,
    title: "Phụ Kiện",
    desc: "Điểm nhấn sang trọng cho mọi trang phục",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
    iconBg: "bg-yellow-100",
  },
  {
    icon: ShoppingBag,
    title: "Túi Và Ví",
    desc: "Các mẫu túi thời thượng và tiện dụng",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-100",
  },
];

export const missions = [
  {
    icon: Clock,
    title: "Phát Triển Bền Vững",
    description:
      "Chúng tôi hướng đến các giải pháp thân thiện với môi trường và cộng đồng.",
    bgColor: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: CheckCircle,
    title: "Chất Lượng Cao",
    description:
      "Đảm bảo mỗi sản phẩm đều đạt chuẩn cao nhất về chất lượng và hiệu quả.",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Users,
    title: "Khách Hàng Là Trọng Tâm",
    description:
      "Luôn lắng nghe và đáp ứng nhu cầu của khách hàng một cách tốt nhất.",
    bgColor: "bg-purple-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

export const supportServices = [
  {
    icon: Headphones,
    title: "Tư Vấn 24/7",
    description: "Hỗ trợ mọi lúc, mọi nơi",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Mail,
    title: "Email Hỗ Trợ",
    description: "Phản hồi trong vòng 24h",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Globe,
    title: "Hỗ Trợ Đa Ngôn Ngữ",
    description: "Tiếng Việt & Tiếng Anh",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Gift,
    title: "Điểm Thưởng",
    description: "Tích 1 điểm cho mỗi 100.000đ",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    icon: CreditCard,
    title: "Ưu Đãi Độc Quyền",
    description: "Giảm giá riêng cho thành viên",
    bgColor: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    icon: Check,
    title: "Quà Tặng Đặc Biệt",
    description: "Quà sinh nhật và mùa lễ",
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
];

export const paymentSectionContent = {
  title: "Phương Thức Thanh Toán",
  description:
    "Chúng tôi cung cấp nhiều lựa chọn thanh toán an toàn và thuận tiện",
  paymentMethods: [
    {
      title: "Thẻ Tín Dụng",
      description:
        "Thanh toán nhanh chóng với các loại thẻ Visa, Mastercard, JCB",
      icon: CreditCard,
      iconBgColor: "bg-blue-50",
      iconTextColor: "text-blue-600",
    },
    {
      title: "Chuyển Khoản Ngân Hàng",
      description: "Hỗ trợ chuyển khoản từ các ngân hàng lớn trong nước",
      icon: DollarSign,
      iconBgColor: "bg-green-50",
      iconTextColor: "text-green-600",
    },
    {
      title: "Ví Điện Tử",
      description: "Thanh toán tiện lợi qua MoMo, ZaloPay, VNPay",
      icon: Repeat,
      iconBgColor: "bg-purple-50",
      iconTextColor: "text-purple-600",
    },
  ],
  securityFeatures: [
    {
      title: "Bảo Mật Thanh Toán",
      description: "Mã hóa giao dịch với các tiêu chuẩn bảo mật quốc tế",
      icon: Lock,
      iconBgColor: "bg-blue-100",
      iconTextColor: "text-blue-600",
    },
    {
      title: "Đảm Bảo An Toàn",
      description: "Cam kết hoàn trả 100% nếu phát sinh lỗi",
      icon: ShieldCheck,
      iconBgColor: "bg-blue-100",
      iconTextColor: "text-blue-600",
    },
  ],
};
