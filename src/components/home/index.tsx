import useMediaQ from "@/hooks/useMediaQ";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/alhambra.png";
import HomePageGraphic from "@/assets/car.png";
import Nissan from "@/assets/nissan.png";
import Kia from "@/assets/kia.png";
import Mercedes from "@/assets/mercedes.png";
import Chevrolet from "@/assets/chevrolet.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQ("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-black-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div               >
                <img alt="home-page-text" src={HomePageText} className="w-50 h-50"  />
              </div>
            </div>

            <p className="mt-8 text-sm text-primary-100">
            We have a large fleet of standard and executive cars to meet your travel requirements. Our cars range from standard family sized Saloons (Sedans) to People Carriers (MPVs) and Minivans for larger groups. 
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage} >
              <span className="text-secondary-400"> Join Now</span>
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>  <span className="text-secondary-400"> Learn More </span></p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">   
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="redbull-sponsor" src={Nissan} className="w-16 h-16" />
              <img alt="forbes-sponsor" src={Mercedes} className="w-16 h-16" />
              <img alt="forbes-sponsor" src={Chevrolet} className="w-16 h-16" />
              <img alt="forbes-sponsor" src={Kia} className="w-16 h-14" />    
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;