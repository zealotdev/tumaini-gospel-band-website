import tw, { styled, css } from 'twin.macro';
import { motion } from 'framer-motion';

import NavBar from './NavBar';
import MobileNav from './MobileNav';

// Hero section container
const MainContainer = tw.section`
  h-screen
`;

// Hero Container for LargeScreen
const LargeScreenContainer = tw.div`
  hidden
  md:block
  relative
`;

// Hero Content Container
const HeroContentContainer = styled.div`
  ${tw`flex h-screen`}
`;

const LargeScreenHeroCTAContainer = styled.div`
  ${tw`bg-yellow-50 w-4/6 pt-64 text-yellow-800 px-24`}
`;

// Hero Container for small screen
const SmallScreenContainer = tw.div`
md:hidden
bg-yellow-800
h-screen
`;

const SmallScreenHeroCTAContainer = styled.dev`
  ${tw`w-full h-screen w-full text-yellow-50 flex flex-col pt-32 px-4`}
`;

export default function Hero() {
  return (
    <MainContainer>
      <LargeScreenContainer>
        <NavBar />
        <HeroContentContainer>
          <LargeScreenHeroCTAContainer>
            <div
              className="space-y-2"
              css={css`
                font-family: 'Lobster', cursive;
              `}
            >
              <motion.h1
                animate={{ fontSize: `80px` }}
                className="text-5xl tracking-widest"
              >
                Gospel
              </motion.h1>
              <motion.h2
                animate={{ fontSize: `30px` }}
                className="text-2xl tracking-widest"
              >
                The Breath of Christians
              </motion.h2>
            </div>
            <p className="mt-8">
              Watch and Listen to our beautiful collection of concert snippets
              and gospel videos in YouTube now.
            </p>
            <motion.button
              className="bg-yellow-800 text-yellow-50 py-2 px-5 uppercase rounded-full mt-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              youtube
            </motion.button>
          </LargeScreenHeroCTAContainer>
          <div className="bg-yellow-800 w-full pt-32">Two</div>
        </HeroContentContainer>
      </LargeScreenContainer>
      <SmallScreenContainer>
        <MobileNav />
        <SmallScreenHeroCTAContainer>
          <div
            className="space-y-8"
            css={css`
              font-family: 'Lobster', cursive;
            `}
          >
            <motion.h1
              animate={{ fontSize: `70px` }}
              className="text-4xl tracking-widest"
            >
              Gospel
            </motion.h1>
            <motion.h2
              animate={{ fontSize: `26px` }}
              className="text-xl tracking-widest"
            >
              The Breath of Christians
            </motion.h2>
          </div>
          <p className="mt-8">
            Watch and Listen to our beautiful collection of concert snippets and
            gospel videos in YouTube now.
          </p>
          <motion.button
            className="bg-yellow-50 text-yellow-800 py-2 px-5 uppercase rounded-full mt-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            youtube
          </motion.button>
        </SmallScreenHeroCTAContainer>
      </SmallScreenContainer>
    </MainContainer>
  );
}
