import React from "react";

import { infoData } from "../../components/datai";
import responsive from "../../../public/l4d.png";
import Video from "../../components/Video";
import ProjectIntro from "../../components/ProjectIntro";
import Personas from "@/app/components/Personas";
import Responsive from "@/app/components/Responsive";
import ProjectLayers from "./components/L4DTechnicalEvidence";
import TablesSlides from "./components/TablesSlides";
import SecuritySection from "./components/Security";
import Repositories from "./components/Repositories";
import APIEndpoints from "./components/APIEndpoints";
import CISection from "./components/CISection";
import ImprovementSection from "@/app/components/ImprovementSection";
import WireframeSlide from "@/app/components/WireframeSlide";
import DesignTimeLine from "@/app/components/DesignTimeLine";
import Diagram from "@/app/components/Diagram";
import PERNSection from "@/app/components/PERNSection";
import FileArch from "./components/FileArchitecture";
export const metadata = {
  title: "Gaming Site",
};

function Left4Dead() {
  // File architecture as a string for code block

  const intialwireArray = infoData.initialLeft4Dead;
  const middlewireArray = infoData.middleLeft4Dead;
  const finalwireArray = infoData.finalLeft4Dead;

  return (
    <div className="tw-py-20">
      <ProjectIntro
        projectname="GamingSite"
        description="For this project, I chose to redesign a website alot of gamers know, the Left 4 Dead. A game I truly enjoy playing. The objective was to create my own verison of the original site. I figured the original site (https://www.l4d.com/l4d/home.php) had potential but needed a modern update in terms of usability, good visual, and better user experience. My objective was to reimagine the site by integrating contemporary design principles."
        srcname="/l4d/Mockup.png"
      />

      <Personas
        persona="/persona4.svg"
        personatwo="/persona5.svg"
        personathree="/persona6.svg"
      />
      <PERNSection>
        <h2 className="tw-leading-10 tw-text-3xl md:tw-text-4xl tw-text-black tw-font-boldonse md:tw-leading-[1.5]">
          Technical Architecture
        </h2>
        <div className="tw-w-28">
          <hr className="tw-h-2 tw-bg-black" />
        </div>
        <div>
          <p className="tw-text-base md:tw-text-xl tw-text-black ">
            The L4D project is a full-stack web app that reimagines the classic
            Left 4 Dead website with a modern, modular design.
          </p>
          <ul className="tw-list-disc tw-ml-5 tw-mt-2 tw-text-black tw-text-base">
            <li>
              Frontend: Built with Node/Express and EJS for creating dynamic web
              pages, using reusable components for UI and visuals.
            </li>
            <li>
              Backend: Node.js and Express provide REST API endpoints for
              authentication, forum content, and user actions.
            </li>
            <li>
              Database: PostgreSQL stores user data, forum posts, and reactions.
            </li>
            <li>
              Authentication: Secure login and registration using JWT and
              bcrypt.
            </li>
            <li>Forum: CRUD operations for posts and comments.</li>
            <li>Reactions: Users can like or dislike posts and comments.</li>
          </ul>
        </div>
      </PERNSection>

      {/* API Endpoints Overview */}
      <Diagram image="/l4d/l4d diagram.png" alt="diagram of endpoints">
        <p className="md:tw-w-2/3 tw-mt-3">
          The following diagram provides a visual overview of the main REST API
          endpoints for authentication, forum content, and reactions. It
          illustrates the flow of requests between the client, Express routes,
          and the PostgreSQL database.
        </p>
      </Diagram>
      <FileArch />
      <TablesSlides />
      <ProjectLayers />
      <div className="tw-container tw-mx-auto tw-my-8 tw-p-5">
        <div className="tw-space-y-8 tw-mt-6">
          {/* Registration Endpoint */}

          <div className="tw-container tw-py-10 tw-mx-auto tw-p-5">
            <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse">
              Repository and Security Measures Layer
            </h3>
            <div className="tw-w-56">
              <hr className="tw-h-2 tw-bg-bluegreen" />
            </div>
            <p className="md:tw-w-2/3 tw-mt-3 tw-text-black">
              Each layer handles specific concerns: repositories execute SQL
              queries, services orchestrate business logic, and external
              services handle third-party integrations.
            </p>
            <div className="tw-flex tw-flex-col tw-gap-8 tw-mt-8">
              <Repositories />
              <SecuritySection />
              <APIEndpoints />
            </div>
          </div>
        </div>
      </div>
      {/* Edge-to-edge CI/CD and Docker section */}
      <CISection />
      <div className="tw-container tw-mx-auto tw-my-10 tw-p-5">
        <DesignTimeLine>
          <h2 className="tw-text-3xl md:tw-text-4xl tw-text-bluegreen tw-font-boldonse">
            Wireframing and Design Iteration
          </h2>
        </DesignTimeLine>
        <WireframeSlide processWireframes={intialwireArray}>
          <div className="lg:tw-col-span-4 tw-p-6">
            <span className="tw-inline-block tw-bg-[#0E1424] tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-mb-3">
              Phase 01 - Exploration
            </span>
            <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse tw-mb-3">
              Initial Wireframing
            </h3>
            <p>
              The initial wireframing phase focused on exploring different
              layout options and visual styles. I created multiple versions of
              key screens to experiment with various arrangements of content,
              navigation, and interactive elements.
            </p>
            <ul className="tw-list-disc tw-ml-5 tw-mt-2 tw-text-black tw-text-sm">
              <li>
                Layout Exploration: Tested different placements for the
                navigation bar, content sections, and interactive elements.
              </li>
              <li>
                Visual Style: Experimented with color schemes and typography to
                find a modern yet fitting aesthetic for the Left 4 Dead brand.
              </li>
            </ul>
          </div>
        </WireframeSlide>
        <WireframeSlide processWireframes={middlewireArray}>
          <div className="lg:tw-col-span-4 tw-p-6">
            <span className="tw-inline-block tw-bg-[#113058] tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-mb-3">
              Phase 02 - Refinement
            </span>
            <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse tw-mb-3">
              Refined Wireframing
            </h3>
            <p>
              In the refined wireframing stage, I iterated on the initial
              wireframes, improving layout, color, and UI clarity.
            </p>
            <ul className="tw-list-disc tw-ml-5 tw-mt-2 tw-text-black tw-text-sm">
              <li>
                Modern Aesthetics: Incorporated modern design trends while
                retaining the essence of Left 4 Dead’s distinctive look.
              </li>
              <li>
                Functionality & Visuals: Balanced usability with visual appeal.
              </li>
            </ul>
          </div>
        </WireframeSlide>
        <WireframeSlide processWireframes={finalwireArray}>
          <div className="lg:tw-col-span-4 tw-p-6">
            <span className="tw-inline-block tw-bg-bluegreen tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-mb-3">
              Phase 03 - Finalization
            </span>
            <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse tw-mb-3">
              Final Wireframing
            </h3>
            <p>
              The final wireframing phase brought all the ideas and revisions
              together into a polished, high-fidelity blueprint. Final screens
              unified visual consistency and behavior expectations, creating a
              production-ready blueprint before implementation and polish.
            </p>
          </div>
        </WireframeSlide>
      </div>
      <ImprovementSection>
        <div className="md:tw-w-2/3">
          <ul className="tw-list-disc  tw-mt-2 tw-text-black tw-text-sm">
            <li>
              One challenged faced was learning when to call an asynchronous
              function. Its important because it helps clean up redundant code
              on the backend.
            </li>
            <li>
              Another challenge was figuring out how can I make the login
              user&apos;s name dynamic using EJS. This site is from pure
              Express. Passing the local variable from the server to the EJS
              template was a bit tricky at first. Now the user can see their
              name on the top right corner when they log in.
            </li>
            <li>
              During my internship, CI/CD was a new concept to me. I had to
              learn how to set up a pipeline that runs on GitHub Actions, which
              includes steps for setting up a PostgreSQL service, applying the
              database schema, and running various checks like type-checking,
              linting, unit tests, production build, and end-to-end tests with
              Playwright. This was a valuable learning experience that taught me
              how to automate the testing and deployment process to ensure code
              quality and reliability.
            </li>
            <li>
              Docker was also a new tool I came across during internship work. I
              had to learn how to create a Docker Compose configuration that
              sets up a PostgreSQL container for local development. This
              involved mounting the database schema for initialization and
              configuring a persistent volume to ensure that the database state
              is maintained across container restarts. Learning Docker has been
              beneficial for creating consistent development environments and
              simplifying the setup process for other developers who may work on
              the project in the future.
            </li>
            <li>
              Will implement AJAX in the future to make the site more dynamic
              and interactive. This would allow users to like a post without
              refreshing the page.
            </li>
            <li>Will improve readability on the forum </li>
          </ul>
        </div>
      </ImprovementSection>
      <Responsive repsonsive={responsive} />
      <Video
        githubLink="https://github.com/hagoodj98/L4D"
        srclink="../l4d/demo-small.mp4"
      />
    </div>
  );
}

export default Left4Dead;
