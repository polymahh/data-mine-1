import {
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { useEffect } from "react";
import TagContainner from "./TagContainner";
import { MdContentCopy } from "react-icons/md";
import { StatusBadge } from "./StatusBadge";

interface Props {
  connector?: any;
  // any props that come into the component
}

const DataCard = ({ connector }: Props) => {
  useEffect(() => {});
  return (
    <VStack
      spacing={4}
      p={8}
      pt={14}
      bgGradient="linear(to-t, bgItem, bgItem 34%)"
      borderRadius={"10px"}
      alignItems={"start"}
      width={{ base: "full", xl: "318px" }}
      position={"relative"}
      overflow={"hidden"}
    >
      <Wrap spacing={4}>
        <Image src={"./connector-icon.png"} />
        <Image src={"./connector-icon.png"} />
        <Image src={"./connector-icon.png"} />
        <Image src={"./connector-icon.png"} />
        <Image src={"./connector-icon.png"} />
        <Image src={"./connector-icon.png"} />
        <Image src={"./connector-icon.png"} />
        <Image src={"./connector-icon.png"} />
      </Wrap>

      <Flex gap={1}>
        <Text color={"#FFFFFF60"} fontSize={"18px"} fontWeight={600}>
          Prifina/
        </Text>
        <Text color={"whiteText"} fontSize={"18px"} fontWeight={600}>
          {connector.name}
        </Text>
        <Icon ml={4} as={MdContentCopy} color={"#FFFFFF60"} />
      </Flex>

      <Text color={"whiteText"} fontSize={"md"} textAlign={"left"}>
        {connector.text}
      </Text>
      <TagContainner tags={connector.tags} />
      <StatusBadge status={connector.status} />
    </VStack>
  );
};
export default DataCard;
