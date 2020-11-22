import React from "react";
import Logo from './vnchrlogo.png';
import { Box, Heading, Flex, Text, Button, Image } from "@chakra-ui/react";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header = () => {

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="black"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Image src={Logo} height='72px'/>
      </Flex>
    </Flex>
  );
};

export default Header;