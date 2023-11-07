import { Swiper, SwiperSlide } from "swiper/react";
// import project1 from "../assets/images/project1.png";
// import project2 from "../assets/images/project2.jpg";
// import project3 from "../assets/images/project3.jpg";
// import project4 from "../assets/images/project4.jpg";
import jsA_page from "../assets/images/jsA_page.jpg";
import cppA_page  from "../assets/images/cppA_page.jpg";
import cssA_page from "../assets/images/cssA_page.jpg";
import htmlA_page from "../assets/images/htmlA_page.jpg";

import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";

const Certificate = () => {
  const cerificates = [
    {
      img: jsA_page,
      name: "JavaScript Certificate",
      Certificate_Link: "https://files.codingninjas.in/certificate-477124-68ac4cbffe24e729a5dc16375409595d.pdf",
      live_link: "https://www.codingninjas.com/studio/profile/99947e52-3787-4456-ba55-77b6fdf314c7",
    },
    {
      img: cppA_page,
      name: "Css Certificate",
      Certificate_Link: "https://files.codingninjas.in/certificate-476945-2599c7ffb0e319f255029672eed42f37.pdf",
      live_link: "https://www.codingninjas.com/studio/profile/99947e52-3787-4456-ba55-77b6fdf314c7",
    },
    {
      img: htmlA_page,
      name: "Html Certificate",
      Certificate_Link: "https://files.codingninjas.in/certificate-476934-0f5aa0f0d1ca764e4d381c97c19fecd5.pdf",
      live_link: "https://www.codingninjas.com/studio/profile/99947e52-3787-4456-ba55-77b6fdf314c7",
    },
    {
      img: cppA_page,
      name: "C++ Certificate",
      Certificate_Link: "https://files.codingninjas.in/certificate-382563-c8bd58af97078cc6f8f8b49fedeb1edc.pdf",
      live_link: "https://www.codingninjas.com/studio/profile/99947e52-3787-4456-ba55-77b6fdf314c7",
    },
  ];
  return (
    <section id="certificates">
      <div className="flex justify-center text-4xl font-semibold gap-2">
        <h3>My</h3>
        <h3 className="text-cyan-600">Certificates</h3>
      </div>
      <p className="text-gray-400 mt-3 text-lg flex justify-center">
       My Certificates
      </p>
      <br />

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{ 768: { slidesPerView: 2 } }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Autoplay]}
        className="flex max-w-3xl gap-6 px-5 mx-auto items-center justify-center lg:w-2/3 w-full"
      >
        {cerificates?.map((cerificates, i) => (
          <SwiperSlide
            key={i}
            className="h-fit w-full p-4 bg-slate-700 rounded-xl"
          >
            <Image src={cerificates.img} alt="" className="rounded-lg" />
            <h3 className="text-xl my-4">{cerificates.name}</h3>
            <div className="flex md:flex-row flex-col items-center justify-center gap-3">
              <a
                href={cerificates.Certificate_Link}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-600 bg-gray-800 rounded-full px-2 py-1 flex w-32 justify-center"
              >
                Certificate
              </a>
              <a
                href={cerificates.live_link}
                rel="noreferrer"
                target="_blank"
                className="text-cyan-600 flex rounded-full bg-gray-800 px-2 py-1 w-32 justify-center"
              >
                Live Demo
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Certificate;
