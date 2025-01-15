import {Card, Icon, Link} from "@chakra-ui/react"

import React from "react";
import {useColorModeValue} from "@/components/ui/color-mode.tsx";
import {MdLink} from "react-icons/md";

interface ProjectCardProps {
    title: string,
    children: React.ReactNode,
    image?: string,
    link?: string
}

export const ProjectCard = (props: ProjectCardProps) => {
    const {title, children, image, link} = props;
    return (
        <Card.Root backgroundImage={`url('${image}')`} overflow="hidden" backgroundSize="cover"
                   backgroundPosition="center" backgroundRepeat="no-repeat" m={3}>
            <Card.Body bg={useColorModeValue("whiteAlpha.700", "blackAlpha.700")} pb={2}>
                <Card.Title>{title}</Card.Title>
                <Card.Description>{children}</Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end" bg={useColorModeValue("whiteAlpha.700", "blackAlpha.700")}>
                <Link href={link} visibility={link == undefined ? "hidden" : "visible"}>
                    <Icon boxSize={10} bg={useColorModeValue("black", "white")}
                          color={useColorModeValue("white", "black")}
                          rounded="30%" overflow="hidden">
                        <MdLink/>
                    </Icon>
                </Link>
            </Card.Footer>
        </Card.Root>
    )
}