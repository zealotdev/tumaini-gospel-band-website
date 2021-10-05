import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

// Navbar Container
const NavbarContainer = styled.section`
  ${tw`py-4 px-24 absolute flex justify-between items-center w-full`}
`;

const Logo = tw.a`p-1`;

// Navbar Links
const NavLinkContainer = styled.ul`
  ${tw`flex text-yellow-50 space-x-10 font-light`}
`;
export default function NavBar() {
  return (
    <NavbarContainer>
      <Logo>
        <Image src="/logo.png" width={80} height={50} />
      </Logo>
      <NavLinkContainer>
        <li>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>MUSICS</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>EVENTS</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>PRODUCTS</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>ABOUT US</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>CONTACTS</a>
          </Link>
        </li>
      </NavLinkContainer>
    </NavbarContainer>
  );
}
