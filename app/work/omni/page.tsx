import React from "react";
import ProjectIntro from "@/app/components/ProjectIntro";
import Mockup from "../../../public/omni-code-shots/Mockup.png";
import VideoSection from "@/app/components/Video";
import PERNSection from "@/app/components/PERNSection";
import Card from "@/app/components/Card";

const page = () => {
  return (
    <div className="tw-py-20">
      <ProjectIntro
        projectname="Omnia Workspace"
        description="This is a full-stack application built with the PERN stack that allows users to discover, review, and take notes on their favorite books. Getting the data from the Open Library API, the application fetches dynamic book information such as cover images, ratings, and more."
        srcname={Mockup}
      />
      <PERNSection>
        <h3 className="tw-text-2xl md:tw-text-4xl tw-text-black tw-font-boldonse">
          Contributions
        </h3>
        <div className="tw-w-28">
          <hr className="tw-h-2 tw-bg-black" />{" "}
        </div>
        <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black ">
          The project is built on the PERN stack, which combines PostgreSQL for
          the database, Express.js for the server, React for the front-end, and
          Node.js as the runtime environment. This stack allows for efficient
          development of full-stack applications with a clear separation of
          concerns between the client and server.
        </p>
        <p className="md:tw-w-2/3 tw-mt-3 tw-text-black">
          <span className="tw-font-bold">Note:</span> Respecting the
          companies&apos; confidentiality, I will not show code, only mention my
          contributions and a quick demo.
        </p>
      </PERNSection>
      <div className="tw-container tw-mx-auto tw-grid  md:tw-grid-cols-2 lg:tw-grid-cols-4 ">
        <Card className="tw-bg-bluegreen tw-text-white tw-text-base tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse  md:tw-leading-[1.5]">
            Electron Views
          </h3>
          <p>
            {/* summary of what this is */}
            Achieved Tab/View management using Electron&apos;s webContents API,
            enabling dynamic creation and control of multiple views within the
            application.
          </p>
        </Card>

        <Card className="tw-bg-moreblue tw-text-white tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse  md:tw-leading-[1.5]">
            Prisma
          </h3>
          <p>
            Integrating Prisma as the ORM for efficient database management,
            allowing for seamless interaction with the PostgreSQL database, and
            enabling robust data modeling and querying capabilities.
          </p>
        </Card>

        <Card className="tw-bg-yellow tw-text-black tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse  md:tw-leading-[1.5]">
            React Flow
          </h3>
          <p>
            Used the react flow library to create Application/Tasks Nodes, to
            represent individual tasks or applications nodes within the
            workspace, allowing users to visualize and manage their workflow
            effectively.
          </p>
        </Card>
        <Card className="tw-bg-yellow tw-text-black tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse  md:tw-leading-[1.5]">
            Fastify Endpoints
          </h3>
          <p>
            Implemented endpoints for workflows/canvas using Fastify, a
            high-performance web framework for Node.js, to handle server-side
            logic and API requests efficiently in constant changing environment
            like an infinite canvas.
          </p>
        </Card>
      </div>
      <div className="tw-container tw-mx-auto tw-mt-10">
        <VideoSection
          muted={false}
          hideGithubLink={true}
          srclink="/omni-code-shots/demo-small.mp4"
        />
      </div>
    </div>
  );
};

export default page;
