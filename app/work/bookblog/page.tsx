import React from "react";

import Card from "../../components/Card";

import VideoSection from "../../components/Video";
import { infoData } from "../../components/datai";
import ProjectIntro from "../../components/ProjectIntro";
import Responsive from "@/app/components/Responsive";
import BookBlogTables from "./components/Tables";
import NotesSection from "./components/Notes";
import RepositorySlides from "./components/RepositorySlides";
import OpenLibrarySection from "./components/OpenLibrarySection";
import EntrySection from "./components/EntrySection";
import ApiEndpointSection from "./components/ApiEndpointSection";
import CISection from "./components/CI";
import ImprovementSection from "@/app/components/ImprovementSection";
import WireframeSlide from "@/app/components/WireframeSlide";
import DesignTimeLine from "@/app/components/DesignTimeLine";
import FileArch from "@/app/work/bookblog/components/FileArch";
import Diagram from "@/app/components/Diagram";
import PERNSection from "@/app/components/PERNSection";
export const metadata = {
  title: "Book Blog Project",
};

const BookBlog = () => {
  const intialwireArray = infoData.bookInitial;
  const middlewireArray = infoData.bookMiddle;
  const finalwireArray = infoData.bookFinal;

  return (
    <div className="tw-py-20">
      <ProjectIntro
        projectname="Book Blog"
        description="This is a full-stack application built with the PERN stack that allows users to discover, review, and take notes on their favorite books. Getting the data from the Open Library API, the application fetches dynamic book information such as cover images, ratings, and more."
        srcname="/booknotesmockup.svg"
      />
      <PERNSection>
        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-5xl  tw-text-black tw-font-boldonse md:tw-leading-[1.5]">
          PERN Stack Overview
        </h3>
        <div className="tw-w-28">
          <hr className="tw-h-2 tw-bg-black" />{" "}
        </div>
        <div>
          <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black ">
            While grasping the power of the PERN stack, this project is a
            testament to it. By using PostgreSQL, Nextjs built-in server
            components, React, and Node.js, the application not only manages
            data interactions but also in a user friendly UI. This section
            highlights the strengths of these technologies in building a dynamic
            book blog.
          </p>
        </div>
      </PERNSection>
      <div className="tw-container tw-mx-auto tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 ">
        <Card className="tw-bg-bluegreen tw-text-white tw-text-base tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse  md:tw-leading-[1.5]">
            P
          </h3>
          <p>
            PostgreSQL: A relational database that stores data securing managed
            by my postgres extension in VSCode.
          </p>
        </Card>

        <Card className="tw-bg-moreblue tw-text-white tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse  md:tw-leading-[1.5]">
            E
          </h3>
          <p>
            Express/Nextjs: framework that simplifies building server-side logic
            and API endpoints, handling requests and responses.
          </p>
        </Card>

        <Card className="tw-bg-yellow tw-text-black tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse  md:tw-leading-[1.5]">
            R
          </h3>
          <p>
            React: The heart interactive user interfaces, React provides dynamic
            rendering and state management. I used Next.js for this!
          </p>
        </Card>

        <Card className="tw-bg-orange tw-text-white tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse  md:tw-leading-[1.5]">
            N
          </h3>
          <p>
            NodeJS: Every developer knows the power of Node. To be able to run
            javascript on your own computer.
          </p>
        </Card>
      </div>
      <Diagram
        image="/bookblog-code-shots/diagram.png"
        alt="Book Blog Architecture Diagram"
      />
      <BookBlogTables />
      <FileArch />
      <div className="tw-bg-orange  tw-w-full ">
        <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-py-10 ">
          <div className="lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
            <div className="tw-py-10">
              <h1 className=" tw-leading-10 tw-text-xl md:tw-text-2xl tw-text-white tw-font-boldonse md:tw-leading-[1.5]  lg:tw-leading-[1.5]">
                Next.js API Routes
              </h1>
              <div className="tw-w-28">
                <hr className="tw-h-2 tw-bg-bluegreen" />{" "}
              </div>
              <div>
                <p className="md:tw-text-base  tw-text-white">
                  Rather than a separate Express server, Next.js API routes
                  handle server-side operations. These endpoints orchestrate
                  service layer logic, which in turn calls repository functions
                  and external APIs. Each route validates input, delegates to
                  the appropriate service, and returns standardized responses
                  with error handling.
                </p>
                <p className="md:tw-text-base tw-text-white tw-mt-3">
                  Next step: protect write endpoints behind basic auth so
                  account sessions control who can create, edit, and delete
                  data.
                </p>
              </div>
            </div>
          </div>
          <ApiEndpointSection />
        </div>
      </div>

      <div className="tw-container tw-py-10 tw-mx-auto tw-p-5">
        <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse">
          Repository and Service Layers
        </h3>
        <div className="tw-w-56">
          <hr className="tw-h-2 tw-bg-bluegreen" />
        </div>
        <p className="md:tw-w-2/3 tw-mt-3 tw-text-black">
          Each layer handles specific concerns: repositories execute SQL
          queries, services orchestrate business logic, and external services
          handle third-party integrations.
        </p>

        <div className="tw-flex tw-flex-col tw-gap-8 tw-mt-8">
          <RepositorySlides />
          <EntrySection />
          <OpenLibrarySection />
          <NotesSection />
        </div>
      </div>
      <CISection />
      <div className="tw-container tw-mx-auto tw-my-10 tw-p-5">
        <DesignTimeLine>
          <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse">
            Wireframing and Design Iteration
          </h3>
        </DesignTimeLine>
        <div className="tw-space-y-8">
          <WireframeSlide processWireframes={intialwireArray}>
            <div className="lg:tw-col-span-4 tw-p-6">
              <span className="tw-inline-block tw-bg-[#0E1424] tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-mb-3">
                Phase 01 - Exploration
              </span>
              <h4 className="tw-text-xl tw-text-bluegreen tw-font-boldonse tw-mb-3">
                Initial Wireframing
              </h4>
              <p>
                This early stage mapped core page structure and user flow,
                turning rough ideas into low-fidelity screens that guided the
                first implementation pass.
              </p>
            </div>
          </WireframeSlide>
          <WireframeSlide processWireframes={middlewireArray}>
            <div className="lg:tw-col-span-4 tw-p-6">
              <span className="tw-inline-block tw-bg-[#113058] tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-mb-3">
                Phase 02 - Refinement
              </span>
              <h4 className="tw-text-xl tw-text-bluegreen tw-font-boldonse tw-mb-3">
                Refined Wireframing
              </h4>
              <p>
                Layout hierarchy was improved and component placement became
                more intentional, helping align navigation and content blocks
                with real user tasks.
              </p>
            </div>
          </WireframeSlide>
          <WireframeSlide processWireframes={finalwireArray}>
            <div className="lg:tw-col-span-4 tw-p-6">
              <span className="tw-inline-block tw-bg-bluegreen tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-mb-3">
                Phase 03 - Finalization
              </span>
              <h4 className="tw-text-xl tw-text-bluegreen tw-font-boldonse tw-mb-3">
                Final Wireframing
              </h4>
              <p>
                Final screens unified visual consistency and behavior
                expectations, creating a production-ready blueprint before
                implementation and polish.
              </p>
            </div>
          </WireframeSlide>
        </div>
      </div>
      <ImprovementSection>
        <div className="md:tw-w-2/3">
          <li>
            I can write each endpoint inside of an api folder instead of
            creating a separate server folder. That way I can write the same
            back-end logic within that endpoint. I thought I needed a separate
            server to run the endpoints, but I learned you can do the same thing
            in Express using Nextjs; thus simplifying the architecture. This was
            my first rodeo, using Nextjs on a project.
          </li>

          <li>
            Introduce session management with secure cookie settings and sign
            out support.
          </li>
          <li>
            Expand the data model with user ownership fields for entries and
            notes to enforce per-user data isolation.
          </li>
          <li>
            Implement basic admin access with read/write-only privileges for
            certain endpoints.
          </li>
          <li>
            Improve API response handling, including adding retry logic for Open
            Library API calls to gracefully handle rate limits and failures.
          </li>
          <li>
            Add Zod validation for all inserts to ensure data integrity and
            prevent invalid submissions.
          </li>
          <li>
            Provide user feedback when an entry is submitted (e.g., success or
            error messages).
          </li>
          <li>
            (Note: Since I am the only user, some of these improvements are for
            completeness and best practices rather than necessity.)
          </li>
        </div>
      </ImprovementSection>
      <Responsive repsonsive="/book notes.png" width={800} height={600} />
      <VideoSection
        srclink="../bookblog-code-shots/bookblogdemo-small.mp4"
        githubLink="https://github.com/hagoodj98/bookblog"
      />
    </div>
  );
};

export default BookBlog;
