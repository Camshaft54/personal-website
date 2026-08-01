import { Card, HStack, Link, Box } from "@chakra-ui/react";
import React from "react";
import { useColorModeValue } from "@/components/ui/color-mode.tsx";

interface ProjectCardProps {
    title: string;
    children: React.ReactNode;
    image?: string;
    link?: string;
}

const cardLayoutProps = {
    overflow: "hidden",
    bgSize: "cover",
    bgPos: "center",
    bgRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    borderWidth: "1px",
    transition: "all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)"
};

const cardBodyProps = {
    p: 5,
    minH: "160px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
};

export const ProjectCard = ({ title, children, image, link }: ProjectCardProps) => {
    const borderColor = useColorModeValue("blackAlpha.200", "whiteAlpha.300");
    const bodyBg = useColorModeValue("whiteAlpha.800", "blackAlpha.800");
    const hoverShadow = useColorModeValue("xl", "dark-lg");

    return (
        <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            w="100%"
            _hover={{ textDecoration: "none" }}
            pointerEvents={link ? "auto" : "none"}
        >
            <Card.Root
                {...cardLayoutProps}
                bgImage={`url('${image}')`}
                cursor={link ? "pointer" : "default"}
                borderColor={borderColor}
                _hover={{
                    transform: "translateY(-4px) scale(1.01)",
                    boxShadow: hoverShadow,
                }}
                _active={{
                    transform: "scale(0.97)",
                    opacity: 0.9,
                }}
            >
                <Card.Body {...cardBodyProps} bg={bodyBg}>
                    <Box>
                        <HStack justify="space-between" align="flex-start" mb={2}>
                            <Card.Title fontSize="xl">{title}</Card.Title>
                        </HStack>
                        <Card.Description>{children}</Card.Description>
                    </Box>

                    {link && (
                        <Box
                            as="span"
                            display="block"
                            fontSize="xs"
                            fontWeight="semibold"
                            letterSpacing="wider"
                            mt={4}
                            opacity={0.75}
                        >
                            View Project →
                        </Box>
                    )}
                </Card.Body>
            </Card.Root>
        </Link>
    );
};