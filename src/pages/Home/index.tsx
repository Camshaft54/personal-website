import {Flex} from "@chakra-ui/react";
import {AboutScreen} from "@/components/AboutScreen.tsx";

export const Home = () => {

    return (
        <Flex flexDirection="column">
            <AboutScreen/>
        </Flex>
    )
}
