import Image from "next/image";
import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Career1 from "../public/images/career-1.png";
import Career2 from "../public/images/career-2.png";

const Career = () => {
  return (
    <>
      <Header />
      <main>
        <section className="heroCareer px-52 text-white"></section>
        <section className="px-3 lg:px-32 mt-10 mb-96">
          <h2 className="pl-20 uppercase">Career</h2>
          <p className="text-8xl font-thin">
            Work with us to zero out emissions
          </p>
        </section>
        <section className="px-3 lg:px-32 my-32 bg-green-500 text-white py-52 relative">
          <div className="absolute lg:w-96 h-96 -top-40 left-1/2  w-44">
            <Image src={Career2} width={800} height={700} alt="" />
          </div>
          <div className="absolute lg:w-80 h-96 -top-80 lg:left-1/3 w-56">
            <Image src={Career1} width={500} height={700} alt="" />
          </div>
          <p className="text-3xl font-thin leading-snug">
            You care about cutting down carbon emissions? You like the thought
            of being part of the green energy revolution? You can see yourself
            as part of a seasoned team of engineers, scientists and other
            visionaries, all working from multiple countries towards the same
            goal? Then come work with us to rewrite the rules of this economy.
          </p>
        </section>
        <section className="px-3 lg:px-32 my-32 ">
          <h2 className="text-6xl font-thin leading-snug mb-8">
            Open positions
          </h2>
          <details className="border-t-2 border-black">
            <summary>
              <p className="text-xl font-medium leading-snug mt-5">
                Baden-würtemberg / Germany
              </p>
              <p className="text-6xl font-thin leading-snug tracking-wider">
                Directing Manager for legal affairs for north-america region and
                europe
              </p>
            </summary>
            <p className="text-xl leading-snug tracking-wide mt-5">
              We are in it for the long run. Today, we source our raw material
              in Canada and convert it into battery-grade lithium hydroxide in
              Germany. Holding ourselves accountable to the highest standards to
              preserve the world we live in. Tomorrow, we will be the first
              closed-loop lithium company: We are in it for the long run. Today,
              we source our raw material in Canada and convert it into
              battery-grade lithium hydroxide in Germany. Holding ourselves
              accountable to the highest standards to preserve the world we live
              in. Tomorrow, we will be the first closed-loop lithium company:
              using and re-using our lithium for a cleaner future. and re-using
              our lithium for a cleaner future.
            </p>
            <button className="bg-white border border-black text-black py-2 px-20 rounded-full mt-5">
              Apply Now
            </button>
          </details>
          <details className="border-t-2 border-black mt-10">
            <summary>
              <p className="text-xl font-medium leading-snug mt-5">
                Baden-würtemberg / Germany
              </p>
              <p className="text-6xl font-thin leading-snug tracking-wider">
                Technical Lead Engineer
              </p>
            </summary>
            <p className="text-xl leading-snug tracking-wide mt-5">
              We are in it for the long run. Today, we source our raw material
              in Canada and convert it into battery-grade lithium hydroxide in
              Germany. Holding ourselves accountable to the highest standards to
              preserve the world we live in. Tomorrow, we will be the first
              closed-loop lithium company: We are in it for the long run. Today,
              we source our raw material in Canada and convert it into
              battery-grade lithium hydroxide in Germany. Holding ourselves
              accountable to the highest standards to preserve the world we live
              in. Tomorrow, we will be the first closed-loop lithium company:
              using and re-using our lithium for a cleaner future. and re-using
              our lithium for a cleaner future.
            </p>
            <button className="bg-white border border-black text-black py-2 px-20 rounded-full mt-5">
              Apply Now
            </button>
          </details>
          <details className="border-t-2 border-black mt-10">
            <summary>
              <p className="text-xl font-medium leading-snug mt-5">
                Baden-würtemberg / Germany
              </p>
              <p className="text-6xl font-thin leading-snug tracking-wider">
                Technical Lead Engineer
              </p>
            </summary>
            <p className="text-xl leading-snug tracking-wide mt-5">
              We are in it for the long run. Today, we source our raw material
              in Canada and convert it into battery-grade lithium hydroxide in
              Germany. Holding ourselves accountable to the highest standards to
              preserve the world we live in. Tomorrow, we will be the first
              closed-loop lithium company: We are in it for the long run. Today,
              we source our raw material in Canada and convert it into
              battery-grade lithium hydroxide in Germany. Holding ourselves
              accountable to the highest standards to preserve the world we live
              in. Tomorrow, we will be the first closed-loop lithium company:
              using and re-using our lithium for a cleaner future. and re-using
              our lithium for a cleaner future.
            </p>
            <button className="bg-white border border-black text-black py-2 px-20 rounded-full mt-5">
              Apply Now
            </button>
          </details>
          <details className="border-t-2 border-black mt-10">
            <summary>
              <p className="text-xl font-medium leading-snug mt-5">
                Baden-würtemberg / Germany
              </p>
              <p className="text-6xl font-thin leading-snug tracking-wider">
                Technical Lead Engineer specialized in mining
              </p>
            </summary>
            <p className="text-xl leading-snug tracking-wide mt-5">
              We are in it for the long run. Today, we source our raw material
              in Canada and convert it into battery-grade lithium hydroxide in
              Germany. Holding ourselves accountable to the highest standards to
              preserve the world we live in. Tomorrow, we will be the first
              closed-loop lithium company: We are in it for the long run. Today,
              we source our raw material in Canada and convert it into
              battery-grade lithium hydroxide in Germany. Holding ourselves
              accountable to the highest standards to preserve the world we live
              in. Tomorrow, we will be the first closed-loop lithium company:
              using and re-using our lithium for a cleaner future. and re-using
              our lithium for a cleaner future.
            </p>
            <button className="bg-white border border-black text-black py-2 px-20 rounded-full mt-5">
              Apply Now
            </button>
          </details>
          <details className="border-t-2 border-black mt-10">
            <summary>
              <p className="text-xl font-medium leading-snug mt-5">
                Baden-würtemberg / Germany
              </p>
              <p className="text-6xl font-thin leading-snug tracking-wider">
                Technical Lead Engineer
              </p>
            </summary>
            <p className="text-xl leading-snug tracking-wide mt-5">
              We are in it for the long run. Today, we source our raw material
              in Canada and convert it into battery-grade lithium hydroxide in
              Germany. Holding ourselves accountable to the highest standards to
              preserve the world we live in. Tomorrow, we will be the first
              closed-loop lithium company: We are in it for the long run. Today,
              we source our raw material in Canada and convert it into
              battery-grade lithium hydroxide in Germany. Holding ourselves
              accountable to the highest standards to preserve the world we live
              in. Tomorrow, we will be the first closed-loop lithium company:
              using and re-using our lithium for a cleaner future. and re-using
              our lithium for a cleaner future.
            </p>
            <button className="bg-white border border-black text-black py-2 px-20 rounded-full mt-5">
              Apply Now
            </button>
          </details>
          <details className="border-t-2 border-black mt-10">
            <summary>
              <p className="text-xl font-medium leading-snug mt-5">
                Baden-würtemberg / Germany
              </p>
              <p className="text-6xl font-thin leading-snug tracking-wider">
                Technical Lead Engineer
              </p>
            </summary>
            <p className="text-xl leading-snug tracking-wide mt-5">
              We are in it for the long run. Today, we source our raw material
              in Canada and convert it into battery-grade lithium hydroxide in
              Germany. Holding ourselves accountable to the highest standards to
              preserve the world we live in. Tomorrow, we will be the first
              closed-loop lithium company: We are in it for the long run. Today,
              we source our raw material in Canada and convert it into
              battery-grade lithium hydroxide in Germany. Holding ourselves
              accountable to the highest standards to preserve the world we live
              in. Tomorrow, we will be the first closed-loop lithium company:
              using and re-using our lithium for a cleaner future. and re-using
              our lithium for a cleaner future.
            </p>
            <button className="bg-white border border-black text-black py-2 px-20 rounded-full mt-5">
              Apply Now
            </button>
          </details>
          <details className="border-y-2 border-black mt-10">
            <summary>
              <p className="text-xl font-medium leading-snug mt-5">
                Baden-würtemberg / Germany
              </p>
              <p className="text-6xl font-thin leading-snug tracking-wider mb-10">
                Technical Lead Engineer
              </p>
            </summary>
            <p className="text-xl leading-snug tracking-wide mt-5">
              We are in it for the long run. Today, we source our raw material
              in Canada and convert it into battery-grade lithium hydroxide in
              Germany. Holding ourselves accountable to the highest standards to
              preserve the world we live in. Tomorrow, we will be the first
              closed-loop lithium company: We are in it for the long run. Today,
              we source our raw material in Canada and convert it into
              battery-grade lithium hydroxide in Germany. Holding ourselves
              accountable to the highest standards to preserve the world we live
              in. Tomorrow, we will be the first closed-loop lithium company:
              using and re-using our lithium for a cleaner future. and re-using
              our lithium for a cleaner future.
            </p>
            <button className="bg-white border border-black text-black py-2 px-20 rounded-full mt-5 mb-10">
              Apply Now
            </button>
          </details>
        </section>
        <section className="bottomCareer px-52 text-white relative">
          <div className="flex flex-col justify-center items-center absolute top-1/3">
            <p className="text-7xl font-light mt-8 lg:w-8/12 text-center w-full tracking-wide mx-auto mb-10">
              Become part of the lithium revolution.
            </p>
            <button className=" mx-auto text-center border border-white text-white py-2 px-20 rounded-full mt-5 uppercase">
              Join the team{" "}
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Career;
