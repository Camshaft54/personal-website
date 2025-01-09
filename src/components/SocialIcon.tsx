import React from "react";
import {Flex, Icon, Link} from "@chakra-ui/react";
import {useColorModeValue} from "@/components/ui/color-mode.tsx";
import {FaGithub, FaLinkedinIn, FaWikipediaW} from "react-icons/fa";

interface SocialIconProps {
    icon: React.ReactNode
    href: string
    size: number
}

export const SocialIcon = (props: SocialIconProps) => {
    const {icon, href, size} = props
    return (
        <Link href={href} mx={2}>
            <Icon boxSize={size} bg={useColorModeValue("black", "white")} color={useColorModeValue("white", "black")}
                  p={1} rounded="10%" overflow="hidden">
                {icon}
            </Icon>
        </Link>
    )
}

export const SocialIcons = ({size = 10}) => (
    <Flex alignItems="center">
        <SocialIcon icon={<FaWikipediaW/>} href="/" size={size}/>
        <SocialIcon icon={<FaLinkedinIn/>} href="/" size={size}/>
        <SocialIcon icon={<FaGithub/>} href="/" size={size}/>
    </Flex>
)