import {Box, Flex, HStack, IconButton, Link, Stack, useDisclosure} from "@chakra-ui/react";
import {Avatar} from "@/components/ui/avatar.tsx";
import {ColorModeButton, useColorMode, useColorModeValue} from "@/components/ui/color-mode.tsx";
import React from "react";
import {MdClose, MdMenu} from "react-icons/md";


interface Props {
    children: React.ReactNode,
    href: string
}

export const NavBar = () => {
    const {colorMode} = useColorMode()
    const {open, onToggle} = useDisclosure()
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')}>
            <Flex h={16} align="center" px={4}>
                <Flex display={{base: 'flex', sm: 'none'}}>
                    <IconButton onClick={onToggle} bg="none" color={useColorModeValue('black', 'white')}>
                        {open ? <MdClose/> : <MdMenu/>}
                    </IconButton>
                </Flex>
                <Flex flex={{base: 1}} justify={{base: 'center', sm: 'start'}}>
                    <Avatar src={colorMode === 'light' ? "camshaft_white.jpg" : "camshaft_black.png"} border="2px solid"
                            borderColor={useColorModeValue('gray.500', 'gray.300')}/>
                    <Flex display={{base: 'none', sm: 'flex'}} px={{base: 4}}>
                        <HStack as='nav'>
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/projects">Projects</NavLink>
                            <NavLink href="https://1drv.ms/f/s!AsANUXKFsU65hKs2b4Rt6vBLGRVMDA">Resume</NavLink>
                        </HStack>
                    </Flex>
                </Flex>
                <Flex justify={"end"}>
                    <ColorModeButton/>
                </Flex>
            </Flex>
            {open ?
                <Box display={{sm: "none"}}>
                    <Stack as="nav">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/projects">Projects</NavLink>
                        <NavLink href="https://1drv.ms/f/s!AsANUXKFsU65hKs2b4Rt6vBLGRVMDA">Resume</NavLink>
                    </Stack>
                </Box> : null}
        </Box>
    )
}

const NavLink = (props: Props) => {
    const {href, children} = props

    return (
        <Link
            as="a"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={href}>
            {children}
        </Link>
    )
}