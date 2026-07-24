"use client";

import { useEffect, useState } from "react";

const sectionIds = [
    "about",
    "education",
    "skills",
    "projects",
    "courses",
    "contact",
];

export function useActiveSection() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: "-20% 0px -60% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return activeSection;
}