import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const Sustainability = () => {
  return (
    <>
      <Header />
      <main>
        <section className="heroSust px-52 text-white"></section>
        <section className="px-32 mt-10">
          <h2 className="pl-20 uppercase">Sustainability</h2>
          <p className="text-8xl font-thin">
            No lithium. No batteries. No electric cars. No clean future.
          </p>
        </section>
        <section className="px-32 my-32">
          <p className="text-5xl font-thin leading-snug">
            We will produce battery-grade lithium with the lowest possible
            environmental impact, using materials obtained in full respect of
            human rights as well as social and ecological standards. We believe
            batteries have to be long-lasting and safe, and at the end of their
            life, they should be repurposed, remanufactured or recycled, feeding
            valuable materials back into the economy. Because transparency and
            accountability are key, we want to make our sustainability targets
            as concrete as possible.
          </p>
        </section>
        <section className="px-32 my-32 bg-green-500 text-white py-10">
          <h2 className="pl-20 uppercase">mining</h2>
          <p className="text-5xl font-thin leading-snug">
            By 2025, our Georgia Lake Project will be considered best-in-class
            for sustainable mining in Canada.
          </p>
          <p className="text-3xl font-thin leading-snug">
            Battery sustainability starts with base raw materials. We will be
            sourcing our raw material in accordance with international standards
            and practices and in close corporation with the local community. We
            will secure a supply chain free from corruption of people or our
            planet. And we’re not limiting our care to today’s extraction
            process. In the future, we aim to source a significant amount of our
            raw material from recycled batteries - reducing our consumption of
            virgin raw material.
          </p>
        </section>
        <section className="px-32 my-32 ">
          <h2 className="pl-20 uppercase">Logistics</h2>
          <p className="text-5xl font-thin leading-snug">
            By 2030, 100% of logistics in our supply chain will be
            carbon-neutral.
          </p>
          <p className="text-3xl font-thin leading-snug">
            We are in the mineral business. Our battery material production will
            come with a substantial need for logistics. We continuously work
            towards shorter supply routes and less resourceful ways of
            transportation. We start with battery-powered vehicles and machinery
            on our own properties, and aim for carbon-neutrality in the choice
            of our shipping carriers. Wherever possible, we choose
            carbon-neutral logistics, and work with certified offset programs
            where this is not yet possible.
          </p>
        </section>
        <section className="px-32 my-32 bg-green-500 text-white py-10">
          <h2 className="pl-20 uppercase">converter</h2>
          <p className="text-5xl font-thin leading-snug">
            By 2025, 100% of our converter sites will be powered by locally
            sourced renewable energy.
          </p>
          <p className="text-3xl font-thin leading-snug">
            Processing raw material requires a lot of energy. Wherever we
            operate and manufacture, we commit to using clean, locally sourced
            renewable energy. We continuously strive for ways to minimize our
            plant’s footprint regarding land use, water and waste management and
            effectively reduce the carbon footprint that comes with our product.
          </p>
        </section>
        <section className="px-32 my-32 ">
          <h2 className="pl-20 uppercase">Tracking</h2>
          <p className="text-5xl font-thin leading-snug">
            By 2025, every Rock Tech product comes with a material passport from
            cradle-to-gate.
          </p>
          <p className="text-3xl font-thin leading-snug">
            We can only manage what we quantify. Without evidence from data,
            sustainability targets are meaningless. That’s why we strive for a
            full understanding of our product performance and impact by
            collecting large amounts of data over the entire lifecycle. We will
            help track our products from the first step of the lifecycle all the
            way to recycling. We share our insights with stakeholders to
            accelerate the transition to more sustainable battery production.
          </p>
        </section>
        <section className="px-32 mt-32 bg-green-500 text-white py-10">
          <h2 className="pl-20 uppercase">recycling</h2>
          <p className="text-5xl font-thin leading-snug">
            By 2030, 50% of raw materials for our converters will come from
            recycling.
          </p>
          <p className="text-3xl font-thin leading-snug">
            Most batteries go to waste with no recovery of its valuable parts.
            For bulk metals, recycling practices are well established, but this
            is not yet the case for many energy transition metals such as
            lithium. Today, less than 1% of lithium is being recycled. We are
            here to change that. For every kilogram of lithium we sell, we want
            to reclaim a kilogram of end-of-life batteries.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Sustainability;
