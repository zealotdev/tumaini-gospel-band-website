import tw from 'twin.macro';
import MobileNav from './MobileNav';

// Hero section container
const MainContainer = tw.section`
  h-screen
`;

// Hero style for LargeScreen
const LargeScreenContainer = tw.div`
  hidden
  md:flex
  h-screen
`;

// Hero style for small screen
const SmallScreenContainer = tw.div`
  md:hidden
  bg-yellow-800
  h-screen
`;

export default function Hero() {
  return (
    <MainContainer>
      <LargeScreenContainer>
        <div className="bg-yellow-50 w-3/6">One</div>
        <div className="bg-yellow-800 w-full">Two</div>
      </LargeScreenContainer>
      <SmallScreenContainer>
        <MobileNav />
      </SmallScreenContainer>
    </MainContainer>
  );
}
