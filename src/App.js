import Logo from './vnchrlogo.png';
import Drip from './drip2.jpg';
import './App.css';
import Header from './Header.js';
import { useForm, Controller } from "react-hook-form";
import { FaTwitter,FaDiscord,FaInstagramSquare,FaMoneyBillWave } from 'react-icons/fa';
import config from './config.js';
import {TwitterTweetEmbed} from 'react-twitter-embed';
import React, { useState } from 'react';
import { Input, FormControl, FormLabel, FormHelperText, Modal, ModalOverlay, ModalContent, Image, Button, SimpleGrid, Text, Heading, ChakraProvider, Box} from "@chakra-ui/react";

function App() {

  const [tweetForm,setTweetForm] = useState(false);
  const { register:registerTweet, handleSubmit:handleSubmitTweet } = useForm();

  const generateTweet = (data) => {
    const rawString = config.formattedStr(data.address);
    const encodedURI = encodeURI(rawString);
    window.location.href=`https://www.twitter.com/intent/tweet?text=${encodedURI}`
  }

  return (
    <ChakraProvider>
      <Box padding="0px" bg="white" w="100%" color="black" p={4}>
        <SimpleGrid columns={[1, null, 2]}>
        <Box padding="50px">
          <Image src={Logo} height='72px'/><br/>
            <Text fontSize="5xl" as="mark">Earn $VNCHR by helping us get clout!!</Text>
            <br></br><br></br>
            {(config.deadline > Date.now())?<div>
            <SimpleGrid columns={2} spacing={10}>
            <Button leftIcon={<FaTwitter/>} colorScheme="blue" onClick={()=>setTweetForm(true)}> Step 1 : Tweet It !</Button>
            <Button leftIcon={<FaMoneyBillWave/>} colorScheme="green" onClick={()=>{window.location.href=config.redeemUrl}}>Redeem $VNCHR !</Button>
            </SimpleGrid>
            <br></br>
            <Heading size="xl">How?? 🤔</Heading><br></br>
            <Text fontSize="xl">Tweet "Today's Tweet" as your own & redeem before the deadline</Text>
            <Text fontSize="2xl" as="strong"> => GET 100 $VNCHR 🤑🤑</Text><br/><br/>
            <Text fontSize="lg">(There's no token sale, this is the only way to get them!)</Text>
            <Text fontSize="md" as="strong"> The deadline for this round is {config.deadline.toString()}</Text></div> : null}
            {(config.deadline < Date.now())?<div>
              <Text fontSize="4xl" as="strong">Follow us on twitter to find out about our next campaign!</Text>
              <br/><br/><Button leftIcon={<FaTwitter/>} colorScheme="blue" onClick={() => {window.location.href='https://www.twitter.com/dripvnchr'}}> Twitter </Button>
            </div>:null}
          </Box> 
          <Box padding="50px">
          <Image src={Drip} height='150px'/>
          <br/>
          <Text fontSize="4xl" as="mark">We're creating a community powered streetwear store!!</Text>
          <Text fontSize="2xl">Use our token $VNCHR, to vote on what we drop, pay for goods, & for a chance to "cut in line" for future drops</Text>
          <Text fontSize="3xl" as="mark">Community Curated Weekly Drops 💯</Text>
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
        <ModalContent padding="50px">
        <Heading>Generate Faucet Tweet</Heading>
          <br/>
          <Text fontSize="md" as="strong" color="red.500">YOU NEED MORE THAN 25 FOLLOWERS TO BE ELIGIBLE</Text>
          <br/>
          <Text >Enter the address you want the $VNCHR to go and we'll generate what you need to tweet</Text>
          <br/>
        <form onSubmit={handleSubmitTweet(generateTweet)}>
        <FormControl id="address">
          <Text fontSize="xl">Your Ethereum / xDai Address</Text>
          <Input name="address" ref={registerTweet({pattern: /^0x[a-fA-F0-9]{40}$/})} placeholder="Enter Your Account Address" size="lg"/>
          <FormHelperText>NOTE : Your address will be on the faucet tweet, please consider operational security!</FormHelperText>
          <FormHelperText>NOTE : This address must be an key based account (EOA) and not a contract wallet</FormHelperText>
        </FormControl>
        <br/>
        <Text fontSize="md" as="strong" color="red.500">YOU CAN ONLY REDEEM ONCE PER CAMPAIGN TWEET</Text><br/>
        <Text fontSize="sm" as="strong">Remember to redeem before {config.deadline.toString()}</Text>
        <br/><br/>
        <Button leftIcon={<FaTwitter/>} colorScheme="blue" type="submit"> TWEET IT !!!</Button>
        </form>
        </ModalContent>
      </Modal>

    </ChakraProvider>
  );
}

export default App;
