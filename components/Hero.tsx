"use client";

import React, { useEffect, useState } from "react";
import {
  ShoppingBag,
  Truck,
  Star,
  Globe,
  MapPin,
  Box,
  Lock,
  Quote,
} from "lucide-react";
import {
  missions,
  paymentSectionContent,
  reviews,
  services,
  supportServices,
} from "@/constants";
import FadeInContent from "./FadeInContent";

const Hero = () => {
  const [currentReview, setCurrentReview] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000); // Change review every 5 seconds
    return () => clearInterval(interval);
  }, [reviews.length]);
  return (
    <div>
      <section className="relative pt-12 bg-gray-50 sm:pt-16 lg:py-36 xl:py-48">
        <div className="absolute inset-0 hidden lg:block">
          <img
            className="object-cover object-right w-full h-full"
            src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/4/background.png"
            alt="Background"
          />
        </div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-lg mx-auto text-center lg:mx-0 lg:max-w-md lg:text-left">
            <p className="text-base font-bold text-gray-600">
              Sử dụng "GIAMGIA" để giảm giá 50%
            </p>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 mb-4">
              Khám Phá Phong Cách Của Bạn!
            </h1>

            <div className="mt-8 sm:mt-12">
              <a
                href="/store"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-8
                  py-3
                  text-base
                  font-bold
                  leading-7
                  text-white
                  transition-all
                  duration-200
                  bg-gray-900
                  border border-transparent
                  rounded-md
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                  hover:bg-gray-600
                  focus:ring-offset-[#FFE942]
                "
                role="button"
              >
                <ShoppingBag className="mr-2 w-5 h-5" />
                Cửa hàng
              </a>
            </div>
          </div>

          <div className="mt-8 lg:hidden">
            <img
              className="w-full mx-auto"
              src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/4/bg.png"
              alt="Mobile Background"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 mb-4">
              Dịch Vụ Của Chúng Tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cam kết mang đến trải nghiệm mua sắm tốt nhất với chất lượng dịch
              vụ vượt trội
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group transform transition-all duration-300 hover:-translate-y-3 perspective-1000"
              >
                <FadeInContent>
                  <div
                    className={`
              ${service.bgColor} 
              p-6 
              rounded-2xl 
              shadow-lg 
              text-center 
              h-full 
              flex 
              flex-col 
              items-center 
              border 
              border-transparent 
              hover:border-opacity-50 
              hover:border-blue-300 
              transition-all 
              duration-300
              hover:shadow-2xl
            `}
                  >
                    <div
                      className={`
                ${service.iconBg} 
                rounded-full 
                p-5 
                mb-4 
                transition-all 
                duration-300 
                group-hover:scale-110 
                group-hover:rotate-6
              `}
                    >
                      <service.icon
                        className={`w-12 h-12 ${service.iconColor}`}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-center flex-grow">
                      {service.desc}
                    </p>
                    <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                </FadeInContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="text-center mb-16">
            <p className="text-lg text-gray-500 mb-4 tracking-wide uppercase">
              Sứ Mệnh Của Chúng Tôi
            </p>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">
              Cam Kết Mang Đến Giá Trị Cho Cộng Đồng
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <div
                key={index}
                className="group relative transform transition-all duration-300 hover:-translate-y-3"
              >
                <FadeInContent>
                  <div
                    className={`
              ${mission.bgColor} 
              p-8 
              rounded-2xl 
              shadow-lg 
              flex 
              flex-col 
              items-center 
              text-center 
              relative 
              overflow-hidden 
              hover:shadow-2xl 
              transition-all 
              duration-300
            `}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-blue-200 to-purple-200 transition-opacity duration-300"></div>

                    <div
                      className={`
                ${mission.iconBg} 
                ${mission.iconColor}
                w-20 
                h-20 
                mb-6 
                rounded-full 
                flex 
                items-center 
                justify-center 
                transform 
                transition-transform 
                group-hover:scale-110
              `}
                    >
                      <mission.icon className="w-10 h-10" />
                    </div>

                    <h4 className="text-2xl font-bold text-gray-900 mb-4">
                      {mission.title}
                    </h4>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {mission.description}
                    </p>

                    <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                </FadeInContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="overflow-hidden">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 mb-4 transform transition-all duration-500 hover:scale-105 inline-block">
                  Giao Hàng Toàn Cầu
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Kết nối thời trang từ Việt Nam đến mọi ngõ ngách trên thế giới
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="p-3 rounded-full text-blue-600 bg-opacity-10 bg-current">
                    <Truck className="w-6 h-6" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Giao hàng quốc tế trong 5-7 ngày
                  </span>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="p-3 rounded-full text-green-600 bg-opacity-10 bg-current">
                    <Box className="w-6 h-6" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Miễn phí vận chuyển cho đơn hàng trên 1.000.000 đồng
                  </span>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="p-3 rounded-full text-purple-600 bg-opacity-10 bg-current">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Theo dõi đơn hàng dễ dàng
                  </span>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <FadeInContent>
              <div className="relative group">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-105">
                  <div className="relative w-full h-96 bg-blue-50 flex items-center justify-center">
                    {/* Simulated Map Background */}
                    <div className="absolute inset-0 bg-gray-200 bg-opacity-20"></div>

                    <div className="z-10 text-center flex flex-col items-center">
                      <MapPin className="w-24 h-24 text-red-500 animate-bounce mb-4" />
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        Bản Đồ Giao Hàng
                      </h3>
                      <p className="text-gray-600 max-w-xs text-center">
                        Chúng tôi kết nối các điểm đến trên toàn cầu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInContent>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 mb-4">
              Hỗ Trợ Khách Hàng
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn với dịch vụ chuyên
              nghiệp và tận tâm
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {supportServices.map((service, index) => (
              <div
                key={index}
                className="group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <FadeInContent>
                  <div className="bg-white p-6 rounded-2xl shadow-lg text-center h-full flex flex-col items-center">
                    <div
                      className={`${service.bgColor} rounded-full p-5 mb-4 transition-all duration-300 group-hover:rotate-6`}
                    >
                      <service.icon
                        className={`w-10 h-10 ${service.iconColor}`}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-center flex-grow">
                      {service.description}
                    </p>
                    <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                </FadeInContent>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 mb-4">
              {paymentSectionContent.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {paymentSectionContent.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Payment Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Các Hình Thức Thanh Toán
              </h3>

              {paymentSectionContent.paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-6 transform hover:-translate-y-2"
                >
                  <div
                    className={`${method.iconBgColor} ${method.iconTextColor} p-4 rounded-full`}
                  >
                    <method.icon className="w-8 h-8" /> {/* Render icon */}
                  </div>
                  <FadeInContent>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {method.title}
                      </h4>
                      <p className="text-gray-600">{method.description}</p>
                    </div>
                  </FadeInContent>
                </div>
              ))}
            </div>

            {/* Security Features */}
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Bảo Mật & An Toàn
              </h3>

              {paymentSectionContent.securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 mb-6 bg-white p-4 rounded-xl shadow-md"
                >
                  <div
                    className={`${feature.iconBgColor} ${feature.iconTextColor} p-3 rounded-full`}
                  >
                    <feature.icon className="w-6 h-6" /> {/* Render icon */}
                  </div>
                  <FadeInContent>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </FadeInContent>
                </div>
              ))}

              <div className="mt-6 text-center">
                <FadeInContent>
                  <div className="inline-flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105">
                    <Lock className="w-5 h-5" />
                    <span>Thanh Toán An Toàn</span>
                  </div>
                </FadeInContent>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900  mb-4">
              Đánh Giá Từ Khách Hàng
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Những trải nghiệm thực tế từ những người đã mua hàng
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative">
            <div
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden transition-all duration-500 ease-in-out"
              key={currentReview} // Force re-render on review change
            >
              <Quote className="absolute top-4 left-4 text-blue-100 w-12 h-12" />
              <Quote className="absolute bottom-4 right-4 text-blue-100 w-12 h-12 rotate-180" />
              <FadeInContent>
                <div className=" flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 animate-fade-in">
                  <div className="shrink-0">
                    <img
                      src={reviews[currentReview].avatar}
                      alt={reviews[currentReview].name}
                      className="w-24 h-24 rounded-full border-4 border-blue-100 shadow-lg animate-scale-in"
                    />
                  </div>

                  <div className="text-center md:text-left flex-grow">
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(reviews[currentReview].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>

                    <p className="text-gray-700 text-xl italic mb-4">
                      "{reviews[currentReview].quote}"
                    </p>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        {reviews[currentReview].name}
                      </h4>
                      <p className="text-gray-600">
                        {reviews[currentReview].role}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInContent>
            </div>

            {/* Review Indicators */}
            <div className="flex justify-center mt-6 space-x-2 ">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`
                  w-3 h-3 rounded-full 
                  ${currentReview === index ? "bg-blue-600 w-6" : "bg-blue-200"}
                  transition-all duration-300
                `}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
