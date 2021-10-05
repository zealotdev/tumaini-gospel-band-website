import Image from 'next/image';

import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import tw, { styled } from 'twin.macro';

const Container = tw.div`
  relative
  w-full
  bg-yellow-50
  px-4 py-4
  flex
  justify-between
  items-center
`;

const Logo = styled.a`
  ${tw`relative top-2`}
`;

const MenuIcon = styled.a`
  ${tw`
    text-yellow-800 p-2 rounded-full
  `}
  box-shadow: 1px 1px 9px rgba(146, 65, 13, 0.3);
`;

export default function MobileNav() {
  return (
    <Container>
      <Logo>
        <Image src="/logo.png" width={50} height={35} />
      </Logo>
      <MenuIcon>
        <HiOutlineMenuAlt3 size="30" />
      </MenuIcon>
    </Container>
  );
}
