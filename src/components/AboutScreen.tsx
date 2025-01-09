import {Flex, Heading, Image} from "@chakra-ui/react";
import {useColorModeValue} from "@/components/ui/color-mode.tsx";
import {SocialIcons, socialIcons} from "@/components/SocialIcon.tsx";

export const AboutScreen = () => {
    return (
        <Flex direction="column" alignItems="center" justifyContent="center"
              bgImage={useColorModeValue("url('/BlissDay.webp')", "url('/BlissNight.webp')")}
              minH="calc(100vh - 64px)" bgSize="cover">
            <Image src="headshot.jpg" rounded="50%" boxSize="200px"/>
            <Heading size="4xl" fontWeight="bold">Cameron Shaw</Heading>
            <SocialIcons size={10}></SocialIcons>
        </Flex>
    )
}