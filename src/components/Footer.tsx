import {Flex, Link, Text} from "@chakra-ui/react";
import {SocialIcons} from "@/components/SocialIcon.tsx";
import {useColorModeValue} from "@/components/ui/color-mode.tsx";

export const Footer = () => {
    return (
        <Flex flexDirection="column" h={24} alignItems="center" justifyContent="space-evenly"
              background={useColorModeValue("gray.100", "gray.900")}>
            <SocialIcons size={6}></SocialIcons>
            <Text fontSize={"sm"}><Link variant="underline" href={"https://google.com"}>Open source</Link> and available
                under the <Link variant="underline" href={"https://google.com"}>GPLv3
                    License</Link>.</Text>
        </Flex>
    )
}