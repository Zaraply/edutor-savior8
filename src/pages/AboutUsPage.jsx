import React from "react";
import bgAbout from "../../public/image/bg-about-header.png";

import about2a from "../../public/image/about2a.png";
import about3a from "../../public/image/about3.png";
import about4 from "../../public/image/about4.png";

const AboutUsPage = () => {
  return (
    <>
      <div className="greyscale-Grey">
        <section className="container header px-4 mt-12 flex items-center justify-center">
          <img
            style={{ width: "100%", height: "40%" }}
            src={bgAbout}
            alt="header"
          />
        </section>

        <br />
        <br />
        <br />

        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 m-5 mb-6 flex items-center">
            {/* Kolom 1 */}
            <div className=" px-24 pt-12 flex justify-center">
              {/* Konten kolom 1 */}
              <img 
                style={{ width: "100%", height: "auto" }}
                src={about2a}
                alt="about 2a"
              />
            </div>

            {/* Kolom 2 */}
            <div className="p-3 mt-12">
              {/* Konten kolom 2 */}
              <h3 className="font-bold pt-2 text-left sm:text-3xl md:text-4xl lg:text-5xl text-lightText">
                Providing what you need
              </h3>
              <p className=" pt-12 text-left sm:text-lg md:text-xl lg:text-xl text-lightText">
                Edutor is a platform where you can have everything you need to
                prepare for working in the IT career.
                <br />
                <br />
                <p className="my-2">
                  Inspired by the growth of technology and the big potential in
                  IT career, Edutor seeks the chance to develop an advanced
                  preparation skills for the ones who need it for their IT
                  career. Right here, we will guide you from those baby steps
                  until something big.
                </p>
                <br />
                <ol class="my-2 text-lightText list-disc list-inside">
                  <li>Mastering core fundamentals</li>
                  <li>Developing the right mindset</li>
                  <li>Provide advices for general growth</li>
                  <li>Aided by professional educators</li>
                  <li>More personalized mentoring</li>
                </ol>
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div className="container mx-auto pt-2 mb-12">
          <section className="bg-black p-6 mt-14 shadow-md rounded-md">
            <h1 className="text-center font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-lightText">
              A life long learner
            </h1>
            <h3 className="pt-12 pb-4 text-center sm:text-xl md:text-2xl lg:text-2xl text-lightText">
              Helping you develop the skills and mindset of a true life long
              learner with us
            </h3>
          </section>
        </div>
        <br />
        <br />
        <br />

        {/* <section className="header p-12 mt-12 flex items-center justify-center">
          <img
            style={{ width: "80%", height: "40%" }}
            src={about3a}
            alt="header"
          />
        </section> */}

        <div className="container flex flex-col items-center justify-center gap-12">
          {/* Baris 1 */}
          <div className="flex mb-8 gap-12">
            {/* Kolom 1 */}
            <button
              type="button"
              class=" focus:outline-none text-darkText bg-grey-bgButton hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-3xl px-14 py-4 me-2 mb-2"
            >
              Passionate Leaner
            </button>

            {/* Kolom 2 */}
            <button
              type="button"
              class=" focus:outline-none text-darkText bg-grey-bgButton hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-3xl px-14 py-4 me-2 mb-2"
            >
              Professionalism
            </button>

            {/* Kolom 3 */}
            <button
              type="button"
              class=" focus:outline-none text-darkText bg-grey-bgButton hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-3xl px-14 py-4 me-2 mb-2"
            >
              Core Fundamentals
            </button>
          </div>

          {/* Baris 2 */}
          <div className="flex mb-8 gap-12">
            {/* Kolom 1 */}
            <button
              type="button"
              class=" focus:outline-none text-darkText bg-grey-bgButton hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-3xl px-14 py-4 me-2 mb-2"
            >
              Advanced Skillset
            </button>

            {/* Kolom 2 */}
            <button
              type="button"
              class=" focus:outline-none text-darkText bg-grey-bgButton hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-3xl px-14 py-4 me-2 mb-2"
            >
              A Life Long Laerner
            </button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="container mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-14">
            {/* Kolom 1 */}
            <div className="p-24 ">
              {/* Konten kolom 1 */}
              <h3 className="font-bold pb-4 text-left sm:text-2xl md:text-3xl lg:text-4xl text-lightText">
                See the IT career through our lenses,
                <br />
                <br /><br />
                ..and grab its potential with us.
              </h3><br /><br />
              <button
                  type="button"
                  class="focus:outline-none text-darkText bg-grey-bgButton hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-3xl px-14 py-4 me-2 mb-2 dark:focus:ring-yellow-900"
                >
                  Sign Up
                </button>

            </div>
            {/* Kolom 2 */}
            <div className="mr-24 pt-12 flex justify-center">
              {/* Konten kolom 2 */}
              <img
                style={{ width: "auto", height: "70%" }}
                src={about4}
                alt="about 4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
