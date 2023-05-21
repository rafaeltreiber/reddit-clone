import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import RightContent from './RightContent/RightContent';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/src/firebase/clientApp';
import Directory from './Directory/Directory';
import SearchInput from './SearchInput';


const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Flex bg='white' height='44px' padding='6px 12px' justify={{ md: 'space-between' }} mr={{ base: 0, md: 2 }}>
      <Flex align='center' width={{ base: '40px', md: 'auto' }}>
        <Image src='/images/redditFace.svg' height='30px' alt='reddit face image' />
        <Image src='/images/redditText.svg' height='46px' display={{ base: 'none', md: 'unset' }} alt='reddit text svg' />
      </Flex>
      {user && <Directory />}
      <SearchInput user={user} />
      <RightContent user={user} />
    </Flex>
  )
}
export default Navbar;