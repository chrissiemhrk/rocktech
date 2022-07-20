import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <section className="heroAbout px-52 text-white"></section>
        <section className="px-32 mt-10">
          <h2 className="pl-20 uppercase">Why RockTech</h2>
          <p className="text-8xl font-thin">
            We put green power into your batteries
          </p>
        </section>
        <section className="px-32 my-32">
          <h2 className="pl-20 uppercase">Speed & Reliability</h2>
          <p className="text-5xl font-thin leading-snug">
            Our team of seasoned experts are building on tried and tested
            methods to ensure fast time-to-market. Located right at the heart of
            the European automotive industry we ensure just-in-time delivery and
            solutions that are customized to what our partners need.
          </p>
        </section>
        <section className="px-32 my-32">
          <h2 className="pl-20 uppercase">Innovation</h2>
          <p className="text-5xl font-thin leading-snug">
            The reliable causticization process is what we continuously optimize
            towards a lower carbon footprint. In parallel we’re driving
            innovation with an entirely new nitrate-gypsum route and a strong
            recycling approach that will transform us into a zero-waste company.
          </p>
        </section>
        <section className=" my-32 bg-green-500 text-white px-72 py-10">
          <p className="text-7xl font-thin text-center">
            “Whoever secures the technology leadership in the processing of
            lithium and understands its reuse via recycling will determine the
            market.”
          </p>
          <p className="text-center font-light mt-10">
            Dirk Habecke <br /> Chairman of the Board
          </p>
        </section>
        <section className="px-32 my-32">
          <h2 className="pl-20 uppercase">Sustainability & Transparency</h2>
          <p className="text-5xl font-thin leading-snug">
            We put green power into your batteries: based in Germany, our
            lithium converter will meet highest EU-standards when it comes to
            environmental footprint, energy efficiency and supply chain
            transparency. Our raw material is sourced out of our own mines in
            Canada where we can guarantee that we meet the same standards right
            from the beginning.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
