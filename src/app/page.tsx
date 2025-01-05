"use client";
import About from "@/components/About";
import Projects from "@/components/Projects";
import WorkExperiences from "@/components/WorkExperiences";
import { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";

export default function Home() {
    const [threshold, setThreshold] = useState(0.5);

    useEffect(() => {
        const updateThreshold = () => {
            if (window.innerWidth < 640) {
                // Mobile view
                setThreshold(0.3);
            } else if (window.innerWidth < 1024) {
                // Tablet view
                setThreshold(0.5);
            } else if (window.innerWidth < 1280) {
                // Laptop view
                setThreshold(0.58);
            } else {
                // Desktop view
                setThreshold(0.62);
            }
        };

        // Set the initial threshold
        updateThreshold();

        // Update the threshold on window resize
        window.addEventListener("resize", updateThreshold);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", updateThreshold);
        };
    }, []);
    return (
        <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
            {/* <section
				id="about"
				ref={about.ref}
				className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16"

			>
				<About />
			</section> */}
            <InView
                threshold={threshold}
                as={"section"}
                id="about"
                className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16"
                onChange={(inView) => {
                    if (inView) {
                        console.log("About in view:", "About");
                    }
                }}
            >
                <About />
            </InView>

            <InView
                threshold={threshold}
                as={"section"}
                id="work_experience"
                className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16"
                onChange={(inView) => {
                    if (inView) {
                        console.log("About in view:", "Work Experience");
                    }
                }}
            >
                <WorkExperiences />
            </InView>

            <InView
                threshold={threshold}
                as={"section"}
                id="projects"
                className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16"
                onChange={(inView) => {
                    if (inView) {
                        console.log("About in view:", "Projects");
                    }
                }}
            >
                <Projects />
            </InView>
        </div>
    );
}
