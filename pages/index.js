import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import TimesImg from "../public/images/times.png";
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow white-background">
        <section className="hero px-52 text-white">
          <div className="m-0 absolute top-1/2">
            <h1 className="text-6xl tracking-widest">
              <code className="bg-green-500">Powering</code> the
              <br />
              <br />
              <code className="bg-green-500">Battery Age</code>
            </h1>
            <p className="text-2xl font-light mt-8 lg:w-5/12 w-full tracking-wide">
              We are a cleantech company powering the electric mobility
              revolution. We aim to serve the automotive industry with
              high-quality lithium hydroxide with the goal to zero-out emissions
              — one ounce of lithium at a time.
            </p>
          </div>
        </section>
        <section className="grid-section relative white-background">
          <div className="content-wrapper font-primary pt-9 pb-8 md:pb-20">
            <div className="md:grid-cols-1 mt-5 lg:mt-20 home-grid grid three-grid items-baseline font-primary text-center h-auto grid-flow-row auto-cols-max grid-cols-1 lg:grid-cols-3 place-items-center w-full lg:my-0">
              <div className="mb-10 md:mb-48 arrangement flex flex-col items-center lg:mb-0">
                <div className="md:mb-40 relative flex flex-col items-center lg:mb-3">
                  <p className="md:text-20xl text-12xl null lg:text-9xl xl:text-10xl font-light relative">
                    5
                  </p>
                  <div className="absolute">
                    <Image src={TimesImg} width={500} height={500} alt="" />
                  </div>
                </div>
                <div className="mt-2 relative">
                  <div className="text-wide font-semibold lg:text-base text-xl uppercase pt-8">
                    Times
                  </div>
                  <div>
                    <div className="md:text-7.2xl md:w-full font-light text-2xl w-full tracking-wide lg:text-2xl max-w-xs mx-auto">
                      <p>production capacity</p>
                      <p>by 2030</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col mb-10 md:mb-48 arrangement flex flex-col items-center lg:mb-0">
                <div className="md:mb-40 relative flex flex-col items-center lg:mb-3">
                  <p className="md:text-10xl text-8.5xl null lg:text-9xl xl:text-10xl font-light relative">
                    24000
                  </p>
                  <div className="absolute">
                    <img
                      sizes="100vw"
                      clientHints="true"
                      className="ml-0 w-full"
                      responsivePlaceholder="blank"
                      alt="icons"
                      data-src="https://res.cloudinary.com/rocktech/image/upload/c_scale,dpr_auto,f_png,q_auto,w_auto/24000_Tons12_01x_1_2_3fdaa88205"
                    />
                  </div>
                </div>
                <div className="mt-2 relative break-words">
                  <div className="text-wide font-semibold lg:text-base text-xl uppercase pt-8">
                    Tonnes
                  </div>
                  <div>
                    <div className="md:text-7.2xl md:w-full font-light text-2xl w-full tracking-wide lg:text-2xl max-w-xs mx-auto">
                      <p>of lithium per</p>
                      <p>year from 2025</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mb-10 md:mb-48 arrangement flex flex-col items-center lg:mb-0">
                <div className="md:mb-40 relative flex flex-col items-center lg:mb-3">
                  <p className="md:text-20xl text-12xl null lg:text-9xl xl:text-10xl font-light relative">
                    50
                  </p>
                  <div className="absolute ">
                    <img
                      sizes="100vw"
                      clientHints="true"
                      className="ml-0 w-full"
                      responsivePlaceholder="blank"
                      alt="icons"
                      data-src="https://res.cloudinary.com/rocktech/image/upload/c_scale,dpr_auto,f_png,q_auto,w_auto/Recyling02_01_1_2_b332f016fb"
                    />
                  </div>
                </div>
                <div className="mt-2 relative break-words">
                  <div className="text-wide font-semibold lg:text-base text-xl uppercase pt-8">
                    Percent
                  </div>
                  <div>
                    <div className="md:text-7.2xl md:w-full font-light text-2xl w-full tracking-wide lg:text-2xl max-w-xs mx-auto">
                      <p>of our raw material from</p>
                      <p>recycled sources by 2030</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-green-500 text-white px-32 py-10">
          <p className="pl-20 uppercase">Who we are</p>
          <p className="text-5xl font-thin leading-snug">
            We are working to create an energy-efficient future, today. We are
            investing upstream, in our own mineral project in Canada, as well as
            investing downstream, with our first planned lithium hydroxide
            converter in Germany. By holding ourselves accountable to the
            highest standards, we strive to preserve the world we live in.
            Building our way to becoming a closed-loop lithium company, using
            and reusing lithium for a cleaner future.
          </p>
        </section>
        <section className="content-wrapper lg:py-36 py-18">
          <div className="font-primary uppercase flex items-center justify-between overflow-x-hidden">
            <div className="lg:text-7.5xl text-5.5xl font-light pb-2 font-primary capitalize">
              <h1>News</h1>
            </div>
            <div className="flex">
              <div className="mr-4 lg:mr-10 cursor-pointer max-w-max">
                <svg
                  width="24"
                  height="44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden md:inline-block"
                >
                  <path
                    d="M22.333 2L3 21.737 22.333 42"
                    stroke="currentColor"
                    strokeWidth="3"
                  ></path>
                </svg>
                <svg
                  width="20"
                  height="40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block md:hidden"
                >
                  <path d="M19 1L1 19.75 19 39" stroke="currentColor"></path>
                </svg>
              </div>
              <div className="cursor-pointer max-w-max">
                <svg
                  width="24"
                  height="44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden md:inline-block"
                >
                  <path
                    d="M2 42l19.333-19.737L2 2"
                    stroke="currentColor"
                    strokeWidth="3"
                  ></path>
                </svg>
                <svg
                  width="20"
                  height="40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block md:hidden"
                >
                  <path d="M1 39l18-18.75L1 1" stroke="currentColor"></path>
                </svg>
              </div>
            </div>
          </div>
          <span className="whitespace-nowrap align-top overflow-hidden md:border-b-2 md:border-t-2 border-t border-b border-solid border-secondary" />
        </section>
      </main>
      <Footer />
    </>
  );
}
