import {SimpleGrid} from "@chakra-ui/react";
import {ProjectCard} from "@/components/ProjectCard.tsx";

export const Projects = () => {
    return (
        <SimpleGrid m={3} columns={{base: 1, sm: 2, md: 3}} justifyItems="center">
            <ProjectCard title="Cryptography Research Project">
                Working with Professor Pratyush Mishra on a decentralized auction protocol using timed commitments.
            </ProjectCard>
            <ProjectCard title="REV10 Battery Management System">
                Developed a system monitors temperature and voltage of each pack cell on REV10, Penn Electric Racing's
                fully-electric racecar.
            </ProjectCard>
            <ProjectCard title="Voxtera" link={"https://github.com/Camshaft54/voxtera.git"}>
                A containerized audio transcription web application deployed to a local machine and proxied through
                Cloudflare.
            </ProjectCard>
            <ProjectCard title="EcoTips">
                Created an Android app that tracks a user's carbon footprint and encourages them to adopt more
                sustainable habits.
            </ProjectCard>
            <ProjectCard title="Academic Scheduler">
                A Monte-Carlo solver for scheduling classes based on student requests while accounting for factors such
                as class size and time conflicts.
            </ProjectCard>
            <ProjectCard title="Kaggle NYC Taxi Data Analysis">
                Data analysis and development of an ML-based taxi trip duration predictor for New York City.
            </ProjectCard>
            <ProjectCard title="Robot Arm Motion Planner">
                Worked with Professor Claire Tomlin on a motion planning and collision avoidance system for robot arms.
            </ProjectCard>
        </SimpleGrid>
    )
}