import React from "react";

import repsonsive from "../../public/funnel/Untitleddesign.png";
import Personas from "../components/Personas";
import Responsive from "@/app/components/Responsive";
import { infoData } from "../components/datai";
import ProjectIntro from "../components/ProjectIntro";
import Card from "../components/Card";
import ProjectLink from "../components/ProjectLink";
import APIEndpoints from "./components/APIEndpoints";
import SecurityMeasure from "./components/SecurityMeasure";
import PERNSection from "../components/PERNSection";
import CI from "./components/CI";
import DesignTimeLine from "../components/DesignTimeLine";
import Video from "../components/Video";
import ImprovementSection from "../components/ImprovementSection";
import WireframeSlide from "../components/WireframeSlide";
import Diagram from "../components/Diagram";
import FileArch from "./components/FileArch";
export const metadata = {
  title: "Music Funnel",
};

function Music() {
  const intialwireArray = infoData.initialFunnel;
  const middlewireArray = infoData.refinedFunnel;
  const finalwireArray = infoData.finalFunnel;

  return (
    <div className="tw-py-20">
      <ProjectIntro
        projectname="Fan Funnel"
        description="This is a full-funnel web application designed for people who like my music. The goal is to capture subscribers for my running campaigns, buying a fan pack, and joining my patreon."
        srcname="/GOOD.jpg"
      />

      <Personas
        persona="/Yellow-And-Light-Yellow-Modern-User-Persona-Graph-1.png"
        personatwo="/Yellow-And-Light-Yellow-Modern-User-Persona-Graph.png"
        personathree="/Yellow-And-Light-Yellow-Modern-User-Persona-Graph-2.png"
      />

      <div className="tw-bg-yellow tw-mt-28 tw-py-20">
        <div className="tw-container tw-mx-auto tw-flex tw-flex-col tw-justify-center tw-p-5">
          <div className="md:tw-w-1/2">
            <h1 className="tw-leading-10 tw-text-3xl md:tw-text-5xl tw-text-black tw-font-boldonse md:tw-leading-[1.5]">
              Technical Architecture
            </h1>
            <div className="tw-w-28">
              <hr className="tw-h-2 tw-bg-black" />{" "}
            </div>
            <div>
              <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black ">
                The Music Funnel application is built with a modern full-stack
                approach using Next.js 15 and React for the frontend and
                backend. It leverages Next.js API routes for all server-side
                logic, eliminating the need for a separate backend server.
                Subscriber quality is protected with layered email legitimacy
                checks (Zod validation, disposable/junk filtering, Abstract API
                deliverability checks, and DNS MX fallback). Key integrations
                include
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="tw-container tw-mx-auto tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 ">
        <Card className="tw-bg-bluegreen tw-text-white tw-text-base tw-p-5">
          <h3>Redis</h3>
          <p>for secure session management and rate limiting.</p>
        </Card>
        <Card className="tw-bg-moreblue tw-text-white tw-text-base tw-p-5">
          <h3>Mailchimp</h3>
          <p>for automated email subscription and confirmation flows.</p>
        </Card>
        <Card className="tw-bg-yellow tw-text-base tw-p-5">
          <h3>Stripe</h3>
          <p>for creating and managing Stripe checkout sessions.</p>
        </Card>
        <Card className="tw-bg-orange tw-text-white tw-text-base tw-p-5">
          <h3>SmartyStreets</h3>
          <p>for address validation and verification.</p>
        </Card>
      </div>
      <Diagram image="/funnel/diagram.png" alt="diagram of endpoints">
        <p className="md:tw-w-2/3 tw-mt-3">
          The following diagram provides a visual overview of the main REST API
          endpoints for authentication, forum content, and reactions. It
          illustrates the flow of requests between the client, Express routes,
          and the PostgreSQL database.
        </p>
      </Diagram>
      <FileArch />

      <div className="tw-bg-orange  tw-w-full ">
        <div className="tw-container tw-mx-auto tw-flex tw-flex-col  tw-gap-2 tw-py-10 ">
          <div className="lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
            <div className="tw-py-10">
              <h1 className=" tw-leading-10 tw-text-xl md:tw-text-2xl tw-text-white tw-font-boldonse md:tw-leading-[1.5]  lg:tw-leading-[1.5]">
                Next.js API Routes
              </h1>
              <div className="tw-w-28">
                <hr className="tw-h-2 tw-bg-bluegreen" />{" "}
              </div>
              <div>
                <p className="md:tw-text-base tw-text-white">
                  The application utilizes Next.js API routes to handle all
                  backend logic, including session management, email
                  subscription, payment processing, and address validation. This
                  approach allows for a seamless integration of frontend and
                  backend code within the same framework, simplifying
                  development and deployment while ensuring efficient
                  server-side processing.
                </p>
              </div>
            </div>
          </div>
          <APIEndpoints />
        </div>
      </div>
      <SecurityMeasure />
      <PERNSection>
        <h1 className="tw-leading-10 tw-text-3xl md:tw-text-5xl tw-text-black tw-font-boldonse  md:tw-leading-[1.5]">
          Features
        </h1>
        <div className="tw-w-28">
          <hr className="tw-h-2 tw-bg-black" />{" "}
        </div>
        <div>
          <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black ">
            The Fan Funnel application has a refresh session feature that allows
            users to refresh their session if they are in the middle of the
            subscription process and need to reload the page. This is
            particularly useful during the email confirmation step, where users
            may be waiting for the Mailchimp webhook to confirm their
            subscription. By refreshing the session, users can check for updates
            on their subscription status without having to restart the entire
            process, providing a smoother and more user-friendly experience. You
            can also check to see if you are subscribed if user decides to
            return to site if they never make a purchase.
          </p>
        </div>
      </PERNSection>
      <div className="tw-container tw-mx-auto tw-grid md:tw-grid-cols-2  ">
        <Card className="tw-bg-bluegreen tw-text-white tw-text-base tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse  md:tw-leading-[1.5]">
            Refresh Session
          </h3>
          <p>
            Users can refresh their session during the subscription process to
            check for updates on their subscription status without restarting
            the entire process.
          </p>
        </Card>
        <Card className="tw-bg-moreblue tw-text-white tw-text-base tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse  md:tw-leading-[1.5]">
            Find My Subscription
          </h3>
          <p>
            Cookies and sessions both share the same TTL when issued. Meaning
            they both expire concurrently. One does not outlive the other.
          </p>
        </Card>
      </div>
      {/* Edge-to-edge CI/CD */}
      <CI />
      <div className="tw-container tw-mx-auto tw-my-10 tw-p-5">
        <div className=" tw-container tw-mx-auto tw-mb-8 tw-my-10 tw-p-5">
          <DesignTimeLine>
            <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse">
              Wireframing and Design Iteration
            </h3>
          </DesignTimeLine>
        </div>
        <WireframeSlide processWireframes={intialwireArray}>
          <div className="lg:tw-col-span-4 tw-p-6">
            <span className="tw-inline-block tw-bg-[#0E1424] tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-mb-3">
              Phase 01 - Exploration
            </span>
            <h4 className="tw-text-xl tw-text-bluegreen tw-font-boldonse tw-mb-3">
              Initial Wireframing
            </h4>
            <p>
              This early stage mapped core page structure and user flow, turning
              rough ideas into low-fidelity screens that guided the first
              implementation pass.
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
              Layout hierarchy was improved and component placement became more
              intentional, helping align navigation and content blocks with real
              user tasks.
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
        <ImprovementSection>
          <div className="md:tw-w-2/3">
            <li>
              I will improve the quality of the landing and thank you page
              videos.
            </li>
            <li>
              I am currently working to get all of the legal documents together
              such as privacy policies and terms of use.
            </li>

            <li>
              Definitely learned about the power of redis and its intuitiveness
              when handling sessions.
            </li>
            <li>
              Learned about webhooks. It is important to always check and
              validate the webhook to ensure it is coming from a place I expect.
            </li>
            <li>
              Should prompt user to check their email for confirmation after
              they subscribe to their email. Currently, the user has no
              indication that they need to check their email to confirm their
              subscription, which could lead to confusion and a poor user
              experience. By adding a prompt after the subscription step, users
              will be informed about the next steps they need to take to
              complete their subscription, improving overall engagement and
              satisfaction with the application.
            </li>
            <li>
              Need to update the confirmation email such as the email its coming
              from. It should be my domain email associated with the site
            </li>
            <li>
              Will tighten up file structre and clean up code to make it more
              readable and maintainable.
            </li>
            <li>
              I still need to call the Mailchimp API to delete a subscriber when
              the application detects abuse, since it already deletes the
              session. That would also remove the contact from the audience and
              save money.
            </li>
            <li>
              I still need to fully test the cross-device confirmation case:
              user submits an email on one device, then opens the confirmation
              email and confirms on a different device/browser.
            </li>
          </div>
        </ImprovementSection>
        <Responsive repsonsive={repsonsive} />
      </div>
      <div className="tw-container tw-mx-auto tw-px-5 tw-pb-2">
        <p className="tw-text-sm tw-text-gray-500 tw-italic">
          Note: This repository is private because this is an active commercial
          product. I share architecture, implementation details, and demo flows
          publicly while keeping source code and business logic private.
        </p>
      </div>
      <Video srclink="/funnel/revisedmusicfunnel-small.mp4" muted={false}>
        <h3 className=" tw-leading-10 tw-text-bluegreen tw-p-10 tw-font-boldonse md:tw-leading-[1.5]">
          Like my music? You can 
          <span className="tw-inline-block">
            <ProjectLink
              link="https://www.jaiquezmusic.com"
              linktext="Join the Family"
            />
          </span>{" "}
        </h3>
      </Video>
    </div>
  );
}

export default Music;
