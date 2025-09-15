import {Flex, Text, Container, Heading} from "@chakra-ui/react";
import {AboutScreen} from "@/components/AboutScreen.tsx";

export const Home = () => {

    return (
        <Flex flexDirection="column">
            <AboutScreen/>
            <Container px={{ base: 12, md: 60}} justifyItems="center" centerContent={true} alignItems="center" py={4}>
                <Text>
                    <Heading fontSize={"3xl"}>Hi!</Heading>
                    I'm a junior pursuing a B.S.E. in Computer Science at the University of Pennsylvania.
                    I'm passionate about AI/ML, cybersecurity, and systems.
                </Text>
            </Container>
        </Flex>
    )
}
