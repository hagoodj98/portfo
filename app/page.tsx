import React from "react";
import Image from "next/image";
import anotherme from "../public/Mask group.png";
import yellowlines from "../public/Group 33.svg";
import ImageZoom from "@/app/components/ImageZoom";
import ProjectThumbnail from "@/app/components/ProjectThumbnail";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main>
      <div className="tw-mb-30">
        <div className="tw--z-40 tw-relative tw-w-full  tw-bg-gradient-to-b tw-h-80 tw-from-moreblue tw-to-bluegreen"></div>
        <div className="tw-container tw-mx-auto tw--mt-52">
          <div className="tw-w-80 tw-mx-auto">
            <ImageZoom
              src="/IMG_1958.JPG"
              width={400}
              height={200}
              alt="this is me"
            />
          </div>
          <div className="tw-p-6 ">
            <div className="tw-mx-auto md:tw-w-2/3 tw-flex tw-flex-col tw-items-center">
              <h1 className=" tw-text-4xl lg:tw-text-6xl tw-text-center tw-text-bluegreen tw-mb-5">
                {" "}
                <span className="tw-font-boldonse">My Portfolio</span>
              </h1>
              <p className=" tw-text-center md:tw-text-base md:tw-w-2/3">
                Hello! My name is Jaiquez Hagood and I am a web developer. I
                hope you enjoy exploring my recent work!😁
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="tw-relative tw-bg-gradient-to-t tw-from-moreblue tw-to-bluegreen  ">
        <div className="tw-container tw-mx-auto tw-relative tw-flex tw-flex-col-reverse lg:tw-flex-row  tw-p-10 md:tw-mt-[10px] md:tw-h-auto ">
          <div className=" tw-flex tw-flex-col tw-py-8 tw-justify-center md:tw-col-span-2 tw-w-full md:tw-w-3/4 md:tw-ml-20">
            <h2 className="tw-text-center lg:tw-text-left tw-text-xl md:tw-text-2xl tw-text-white tw-font-boldonse tw-mb-5">
              About Me
            </h2>
            <p className="tw-text-center lg:tw-text-left tw-text-white ">
              I am from Greenville, South Carolina and I graduated from Carolina
              High School in 2016 and have an associate&apos;s degree from
              Greenville Technical College from 2018. I am a digital information
              design graduate from Winthrop University in 2021. I enjoy coding,
              producing music, and fishing. I also work with Adobe tools; see my{" "}
              <a href="/work/flippo" className="tw-text-orange tw-underline">
                short animated film
              </a>
              .
            </p>
          </div>
          <div className=" tw-relative tw-w-64  lg:tw-w-fit tw-mx-auto">
            <Image src={anotherme} alt="another photo of me" />
          </div>
          <Image
            className="tw-absolute -tw-bottom-40 tw-left-9 md:tw-left-36 tw-w-14 lg:tw-w-16"
            src={yellowlines}
            alt="yellows lines"
          />
        </div>
      </div>
      <div className="tw-container tw-mx-auto tw-mt-32">
        <div className="tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-3 tw-w-full ">
          <div className="tw-order-first md:tw-order-none tw-flex tw-justify-center tw-items-center tw-my-auto">
            <h2 className="tw-text-xl md:tw-text-3xl tw-mx-auto tw-py-10 tw-text-bluegreen tw-font-boldonse">
              Works
            </h2>
          </div>
          <ProjectThumbnail
            projectUrl="/funnel/VinylRecordMockup.jpg"
            projectName="Fan Funnel"
            link="/work/fanfunnel"
          />
          <ProjectThumbnail
            projectUrl="/l4d/Mockup.png"
            projectName="GameSite Forum "
            link="/work/l4d"
          />
          <ProjectThumbnail
            projectUrl="/pos/productiondisplay.png"
            projectName="Production Scheduler "
            link="/work/scheduler"
          />
          <ProjectThumbnail
            projectUrl="/sonicdna/soundapi.png"
            projectName="SonicDNA "
            link="/work/sonicdna"
          />

          <div></div>
        </div>
      </div>
      <div className="tw-container tw-mx-auto tw-my-20 tw-p-5">
        <h2 className="tw-text-xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse">
          Experience
        </h2>
        <div className="tw-w-28">
          <hr className="tw-h-2 tw-bg-bluegreen" />
        </div>
        <div className="tw-mt-5 tw-rounded-lg tw-border tw-border-bluegreen/30 tw-bg-white tw-p-5 tw-shadow-sm md:tw-w-2/3">
          <h3 className="tw-text-lg tw-font-bold tw-text-black">
            Software Engineer Intern, Omnia WorkSpace
          </h3>
          <p className="tw-text-sm tw-text-gray-500">11/2025 – 02/2026</p>
          <ul className="tw-list-disc tw-ml-6 tw-text-black tw-mt-2">
            <li>
              Built an interactive workflow canvas for a desktop app using
              Electron, React, TypeScript, and React Flow.
            </li>
            <li>
              Implemented workspace persistence with Prisma and PostgreSQL,
              restoring nodes, edges, and viewport state across sessions.
            </li>
            <li>
              Shipped a Tasks module end-to-end across Fastify routes, Prisma
              models, and React UI.
            </li>
            <li>
              Integrated Electron IPC/WebContentsView for navigation, reload,
              zoom, and visibility controls on embedded apps.
            </li>
            <li>
              Fixed React Flow and Electron state and coordinate bugs, and
              maintained Vitest and Playwright tests in Azure DevOps.
            </li>
          </ul>
          <a
            href="/work/omni"
            className="tw-text-bluegreen tw-underline tw-mt-3 tw-inline-block"
          >
            Read more
          </a>
        </div>
      </div>
      <div className="tw-w-1/2  tw-ml-auto tw--mt-96 tw-h-96 tw-bg-gradient-to-b tw-from-moreblue tw-to-bluegreen"></div>
      <div className="  tw-overflow-hidden">
        <div className="  tw-whitespace-nowrap tw-p-3">
          <p className="tw-animate-leftright tw-text-bluegreen tw-text-2xl md:tw-text-3xl lg:tw-text-9xl tw-opacity-25">
            I Love Design I Love Code I Love Food I Love Video Games I Love
            Music I Love Design I Love Fishing I Love Food I Love Family I Love
            It All I Love Design I Love Fishing I Love Food I Love Music I Love
            Design I Love Fishing I Love Food I Love Family I Love It All
          </p>
          <p className="tw-text-bluegreen tw-text-2xl md:tw-text-3xl lg:tw-text-9xl tw-animate-rightleft tw-opacity-25">
            I Love Design I Love Fishing I Love Food I Love Video Games I Love
            Music I Love Design I Love Fishing I Love Food I Love Family I Love
            It All I Love Design I Love Fishing I Love Food I Love Music I Love
            Design I Love Family I Love It All I Love Food{" "}
          </p>
        </div>
      </div>
    </main>
  );
}
