import {Box, Flex, Heading, Image} from "@chakra-ui/react";
import {SocialIcons} from "@/components/SocialIcon.tsx";

export const AboutScreen = () => {
    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            minH="calc(100vh - 64px)"
            pos="relative"
            overflow="hidden"
        >
            <Box
                pos="absolute"
                inset="0"
                bgImage="url('/BlissDay.webp')"
                bgSize="cover"
                bgPos="center"
                zIndex={0}
                transition="opacity 0.2s ease-in-out"
                _dark={{ opacity: 0 }}
            />

            <Box
                pos="absolute"
                inset="0"
                bgImage="url('/BlissNight.webp')"
                bgSize="cover"
                bgPos="center"
                zIndex={0}
                opacity={0}
                transition="opacity 0.2s ease-in-out"
                _dark={{ opacity: 1 }}
            />

            <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                zIndex={1}
            >
                <Image src="/headshot.webp" rounded="50%" boxSize="200px" alt="Cameron Shaw" />
                <Heading size="4xl" fontWeight="bold">Cameron Shaw</Heading>
                <SocialIcons size={10} />
            </Flex>
        </Flex>
    )
}