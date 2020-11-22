import Logo from './vnchrlogo.png';
import Drip from './drip2.jpg';
import './App.css';
import Header from './Header.js';
import { FaTwitter,FaDiscord,FaInstagramSquare,FaMoneyBillWave } from 'react-icons/fa';
import config from './config.js';
import {TwitterTweetEmbed} from 'react-twitter-embed';
import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, Image, Button, SimpleGrid, Text, Heading, ChakraProvider, Box} from "@chakra-ui/react";

function App() {

  const [tweetForm,setTweetForm] = useState(false);
  const [redeemForm,setRedeemForm] = useState(false);

  return (
    <ChakraProvider>
      <Box padding="10px" bg="white" w="100%" color="black" p={4}>
        <SimpleGrid columns={[1, null, 2]}>
        <Box padding="50px">
          <Image src={Logo} height='72px'/><br/>
            <Text fontSize="5xl" as="mark">Earn $VNCHR_BETA by helping us get clout!!</Text>
            <br></br><br></br>
            <SimpleGrid columns={2} spacing={10}>
            <Button leftIcon={<FaTwitter/>} colorScheme="blue" onClick={()=>setTweetForm(true)}> Step 1 : Tweet It !</Button>
            <Button leftIcon={<FaMoneyBillWave/>} colorScheme="green" onClick={()=>setRedeemForm(true)}>Redeem $VNCHR_BETA !</Button>
            </SimpleGrid>
            <br></br>
            <Heading size="xl">How?? </Heading><br></br>
            <Text fontSize="xl">Tweet "Today's Tweet" as your own, get 3 likes & redeem before {config.deadline}</Text>
            <Text fontSize="2xl" as="strong"> => GET 100 $VNCHR_BETA</Text>
            <Text fontSize="lg">(There's no token sale, this is the only way to get them!)</Text><br></br>
          </Box>
          <Box padding="50px">
          <Image src={Drip} height='150px'/>
          <br/>
          <Text fontSize="4xl" as="mark">We're creating a community powered streetwear store!!</Text>
          <Text fontSize="2xl">Use our token $VNCHR_BETA, to vote on what we drop, pay for goods, & for a chance to "cut in line" for future drops</Text>
          <Text fontSize="3xl" as="mark">Community Curated Weekly Drops</Text>
          <br></br><br></br>
          <SimpleGrid columns={3} spacing={10}>
          <Button leftIcon={<FaDiscord/>} colorScheme="purple" onClick={() => {window.location.href='https://discord.gg/HrUb92pf'}}> Discord </Button>
          <Button leftIcon={<FaTwitter/>} colorScheme="blue" onClick={() => {window.location.href='https://www.twitter.com/dripvnchr'}}> Twitter </Button>
          <Button leftIcon={<FaInstagramSquare/>} colorScheme="red" onClick={() => {window.location.href='https://www.instagram.com/dripvnchr'}}> Instagram </Button>
          </SimpleGrid> 
          </Box>
        </SimpleGrid>
      </Box>

      <Modal isOpen={tweetForm} onClose={()=>setTweetForm(false)}>
        <ModalOverlay />
        <ModalContent>Tweet Form</ModalContent>
      </Modal>

      <Modal isOpen={redeemForm} onClose={()=>setRedeemForm(false)}>
        <ModalOverlay />
        <ModalContent>Redeem Form</ModalContent>
      </Modal>

    </ChakraProvider>
  );
}

export default App;
