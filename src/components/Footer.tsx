import {Flex, Link, Text} from "@chakra-ui/react";
import {SocialIcons} from "@/components/SocialIcon.tsx";

export const Footer = () => {
    return (
        <Flex flexDirection="column" h={24} alignItems="center" justifyContent="center">
            <SocialIcons size={6}></SocialIcons>
            <Link href={"/"}>Source Code</Link>
        </Flex>
    )
}