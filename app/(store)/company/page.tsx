import FadeInContent from "@/components/FadeInContent";
import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <div>
      <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                    Về Chúng Tôi
                  </h6>
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-blue-500 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      Câu Chuyện Thành Tích Của Chúng Tôi
                    </h2>
                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      Câu chuyện thành tích của chúng tôi là minh chứng cho sự
                      hợp tác và kiên trì. Cùng nhau, chúng tôi đã vượt qua thử
                      thách, ăn mừng chiến thắng và tạo nên một câu chuyện tiến
                      bộ và thành công.
                    </p>
                  </div>
                </div>
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                  <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 hover:bg-gray-100 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        33+ Năm
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Ảnh Hướng Đến Cảnh Quan Kỹ Thuật Số
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 hover:bg-gray-100 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        125+ Sản phẩm
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Chất Lượng Đạt Được Qua Thành Công
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 hover:bg-gray-100 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        26+ Giải Thưởng
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Sự Cống Hiến Của Chúng Tôi Được Công Nhận
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 hover:bg-gray-100 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        99% Khách Hàng Hài Lòng
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Phản Ánh Sự Tập Trung Vào Sự Hài Lòng Của Khách Hàng
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FadeInContent>
              <div className="w-full lg:justify-start justify-center items-start flex">
                <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                  <img
                    className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                    src="https://pagedone.io/asset/uploads/1717742431.png"
                    alt="Về Chúng Tôi"
                  />
                </div>
              </div>
            </FadeInContent>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">
            <div className="w-full flex justify-center">
              <FadeInContent>
                <div className="sm:w-[564px] w-full sm:h-[500px] h-full bg-gray-100 rounded-3xl border border-gray-200 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
                    src="https://images.pexels.com/photos/3182828/pexels-photo-3182828.jpeg"
                    alt="Tầm Nhìn & Sứ Mệnh"
                  />
                </div>
              </FadeInContent>
            </div>

            <div className="w-full flex-col justify-center items-start gap-10 inline-flex">
              <div className="w-full flex-col justify-start items-start gap-8 flex ">
                <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                  Tầm Nhìn & Sứ Mệnh
                </h6>
                <h2 className="text-green-500 text-4xl font-bold font-manrope leading-normal">
                  Hướng Tới Tương Lai Bền Vững
                </h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  Chúng tôi cam kết phát triển bền vững, luôn đổi mới và mang
                  đến những giá trị tốt nhất cho khách hàng và cộng đồng.
                </p>
              </div>

              <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-6">
                <div className="p-4 rounded-xl border border-gray-200 hover:border-green-400 hover:bg-green-50 transition-all duration-700 ease-in-out transform hover:-translate-y-2">
                  <h4 className="text-gray-900 text-2xl font-bold">
                    Đổi Mới Liên Tục
                  </h4>
                  <p className="text-gray-500 text-base">
                    Chúng tôi luôn tìm kiếm giải pháp sáng tạo cho mọi thách
                    thức.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-gray-200 hover:border-green-400 hover:bg-green-50 transition-all duration-700 ease-in-out transform hover:-translate-y-2">
                  <h4 className="text-gray-900 text-2xl font-bold">
                    Phát Triển Toàn Diện
                  </h4>
                  <p className="text-gray-500 text-base">
                    Đảm bảo sự phát triển song hành với trách nhiệm xã hội.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-gray-50">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full flex flex-col lg:flex-row items-center gap-12">
            <FadeInContent>
              <div className="">
                <div className="w-full h-[400px] rounded-3xl overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
                    src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
                    alt="Giới Thiệu"
                  />
                </div>
              </div>
            </FadeInContent>

            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                Sứ Mệnh Của Chúng Tôi
              </h6>
              <h2 className="text-indigo-600 text-4xl font-bold font-manrope leading-normal">
                Chúng Tôi Cam Kết Vì Tương Lai Bền Vững
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Chúng tôi không ngừng nỗ lực để mang đến các giải pháp công nghệ
                đột phá, đồng thời giữ gìn và phát triển giá trị bền vững cho
                cộng đồng và môi trường.
              </p>

              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-gray-600">Tạo ra giá trị cho cộng đồng.</p>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-gray-600">Đổi mới công nghệ liên tục.</p>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-gray-600">
                    Phát triển bền vững và thân thiện với môi trường.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <FadeInContent>
              <div className="">
                <div className="w-full h-[400px] rounded-3xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
                    src="https://images.pexels.com/photos/3182762/pexels-photo-3182762.jpeg"
                    alt="Câu Chuyện Thành Công"
                  />
                </div>
              </div>
            </FadeInContent>

            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                Hành Trình Của Chúng Tôi
              </h6>
              <h2 className="text-blue-500 text-4xl font-bold font-manrope leading-normal">
                Từng Bước Vững Chắc Trên Con Đường Phát Triển
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Chúng tôi luôn nỗ lực từng ngày để phát triển và cải tiến không
                ngừng. Mỗi thành công đều được xây dựng từ sự cống hiến và tinh
                thần đồng đội mạnh mẽ.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-900 text-xl font-bold">
                      50+ Dự Án Hoàn Thành
                    </h4>
                    <p className="text-gray-500">
                      Các dự án chất lượng cao đã được thực hiện thành công.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-900 text-xl font-bold">
                      10,000+ Khách Hàng
                    </h4>
                    <p className="text-gray-500">
                      Được tin tưởng và phục vụ hàng ngàn khách hàng trên toàn
                      cầu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full flex flex-col items-center gap-12">
            <div className="text-center">
              <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                Đội Ngũ Của Chúng Tôi
              </h6>
              <h2 className="text-purple-500 text-4xl font-bold font-manrope leading-normal">
                Chúng Tôi Là Ai?
              </h2>
            </div>
            <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-8">
              <FadeInContent>
                <div className="p-5 rounded-2xl border border-gray-200 hover:bg-purple-50 hover:shadow-lg transition-all duration-700 ease-in-out flex flex-col items-center text-center">
                  <img
                    className="w-32 h-32 rounded-full object-cover mb-4"
                    src="https://images.pexels.com/photos/3807746/pexels-photo-3807746.jpeg"
                    alt="Thành Viên 1"
                  />
                  <h4 className="text-gray-900 text-2xl font-bold mb-2">
                    Phạm Hoàng
                  </h4>
                  <p className="text-gray-500 text-base">
                    Chuyên gia phát triển phần mềm với 10 năm kinh nghiệm.
                  </p>
                </div>
              </FadeInContent>
              <FadeInContent>
                <div className="p-8 rounded-2xl border border-gray-200 hover:bg-purple-50 hover:shadow-lg transition-all duration-700 ease-in-out flex flex-col items-center text-center">
                  <img
                    className="w-32 h-32 rounded-full object-cover mb-4"
                    src="https://images.pexels.com/photos/4144185/pexels-photo-4144185.jpeg"
                    alt="Thành Viên 2"
                  />
                  <h4 className="text-gray-900 text-2xl font-bold mb-2">
                    Nguyễn An
                  </h4>
                  <p className="text-gray-500 text-base">
                    Nhà thiết kế UI/UX đầy sáng tạo và đam mê.
                  </p>
                </div>
              </FadeInContent>
              <FadeInContent>
                <div className="p-5 rounded-2xl border border-gray-200 hover:bg-purple-50 hover:shadow-lg transition-all duration-700 ease-in-out flex flex-col items-center text-center">
                  <img
                    className="w-32 h-32 rounded-full object-cover mb-4"
                    src="https://images.pexels.com/photos/3202226/pexels-photo-3202226.jpeg"
                    alt="Thành Viên 3"
                  />
                  <h4 className="text-gray-900 text-2xl font-bold mb-2">
                    Lê Minh
                  </h4>
                  <p className="text-gray-500 text-base">
                    Kỹ sư dữ liệu chuyên xử lý thông tin lớn và phức tạp.
                  </p>
                </div>
              </FadeInContent>
            </div>
            <button className="sm:w-fit w-full group px-5 py-2 bg-purple-50 hover:bg-purple-100 rounded-lg shadow transition-all duration-700 ease-in-out flex items-center justify-center">
              <span className="text-purple-600 text-sm font-medium group-hover:-translate-x-0.5 transition-transform duration-700 ease-in-out">
                <Link href="/store">Cửa Hàng</Link>
              </span>
              <svg
                className="ml-2 group-hover:translate-x-0.5 transition-transform duration-700 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                  stroke="#9333EA"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
