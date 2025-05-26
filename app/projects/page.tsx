"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import Pager from "@/components/pager";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const ProjectsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 1,
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 2.4,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1.4, spacing: 20 },
      },
      "(max-width: 480px)": {
        slides: { perView: 1.1, spacing: 20 },
      },
    },
  });

  const projects = Object.entries(siteConfig.projects);

  const getProjectLink = (project: any) => {
    if ("link" in project) return project.link;
    if ("github" in project) return project.github;
    return null;
  };

  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Projetos</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Ideias transformadas em soluções digitais inovadoras!
        </PageHeaderHeading>
      </PageHeader>

      {/* Carrossel Principal */}
      <div className="mb-8">
        <div ref={sliderRef} className="keen-slider">
          {projects.map(([key, project]) => (
            <div key={key} className="keen-slider__slide">
              <Link href={getProjectLink(project) || "#"}>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src={`/portfolio/assets/projects/${key}.png`} // Adicione /portfolio no início
                    alt={project.slug}
                    fill
                    className="object-cover transition-all hover:scale-105"
                    priority
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Carrossel de Cards */}
      <div ref={thumbnailRef} className="keen-slider">
        {projects.map(([key, project], idx) => (
          <div
            key={key}
            className="keen-slider__slide"
            onClick={() => instanceRef.current?.moveToIdx(idx)}
          >
            <Card
              className={`h-[280px] cursor-pointer transition-all hover:shadow-lg mx-2 ${
                currentSlide === idx ? "border-2 border-primary" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="line-clamp-2">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <CardDescription className="line-clamp-4 mb-4">
                  {project.description}
                </CardDescription>
                <div className="mt-auto">
                  <Link href={getProjectLink(project) || "#"}>
                    <Badge variant="default">Ver mais</Badge>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <Pager
        prevHref="/about"
        nextHref="/skills-tools"
        prevTitle="Sobre mim"
        nextTitle="Conhecimentos"
      />
    </>
  );
};

export default ProjectsPage;
