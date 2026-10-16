import Diagram from "@/app/components/Diagram";
import ProjectIntro from "@/app/components/ProjectIntro";
import Video from "@/app/components/Video";
import FileArch from "./components/FileArch";

export const metadata = {
  title: "Houston Carbon Footprint Project",
};

export default function CarbonFootprintPage() {
  return (
    <div className="tw-py-20">
      <ProjectIntro
        projectname="Houston Carbon Footprint"
        description="I built a WordPress experience that helps people explore the sources of Houston's carbon emissions and estimate their own annual footprint. The project combines a custom theme and calculator plugin with a separate Node.js API, connecting an accessible form to a live estimate and visual result."
        srcname="/carbon-footprint/carbon-footprint.jpg"
      />
      <section className="tw-bg-yellow tw-mt-28 tw-py-20">
        <div className="tw-container tw-mx-auto tw-flex tw-flex-col tw-justify-center tw-p-5">
          <div className="md:tw-w-2/3">
            <h2 className="tw-text-2xl md:tw-text-4xl tw-text-black tw-font-boldonse">
              Technical Architecture
            </h2>
            <div className="tw-w-28">
              <hr className="tw-h-2 tw-bg-black" />
            </div>
            <p className="tw-mt-3 tw-text-black md:tw-text-base lg:tw-text-xl">
              The WordPress theme renders the calculator and its interactive
              results. On submission, the calculator plugin handles the
              WordPress AJAX request and sends a server-to-server HTTP POST to
              the separate Express API. The API validates the input with Zod,
              calculates an annual carbon-footprint estimate, and returns it
              through WordPress to the page for display in its chart and grade.
            </p>
          </div>
        </div>
      </section>
      <Diagram
        image="/carbon-footprint/wordpressdia.png"
        alt="Overview diagram of the Houston Carbon Footprint project"
      />
      <FileArch />
      <section className="tw-container tw-mx-auto tw-p-5 tw-my-16">
        <h2 className="tw-text-2xl md:tw-text-4xl tw-text-bluegreen tw-font-boldonse">
          Parent and Child Page Templates
        </h2>
        <div className="tw-w-64">
          <hr className="tw-h-2 tw-bg-bluegreen" />
        </div>
        <p className="md:tw-w-2/3 tw-mt-3 tw-text-black">
          The shared WordPress page template checks whether a page has a parent
          and renders it accordingly. Parent pages use reusable intro and child
          page card template parts. Child pages read their editor blocks, map
          each block&apos;s class to a matching template part, and render those
          sections in the editor&apos;s order, followed by related-page links.
        </p>
        <div className="tw-mt-8 tw-grid tw-gap-6 md:tw-grid-cols-2">
          <div className="tw-rounded-xl tw-bg-[#0E1424] tw-p-5 tw-text-white">
            <h3 className="tw-text-xl tw-font-boldonse">Parent page</h3>
            <pre className="tw-mt-4 tw-overflow-x-auto tw-rounded tw-bg-[#1a2332] tw-p-4 tw-text-sm tw-text-[#e0e0e0]">
              <code>{`page.php
└── parent-page-intro.php
└── card-section.php
    └── links to child pages`}</code>
            </pre>
          </div>
          <div className="tw-rounded-xl tw-bg-[#0E1424] tw-p-5 tw-text-white">
            <h3 className="tw-text-xl tw-font-boldonse">Child page</h3>
            <pre className="tw-mt-4 tw-overflow-x-auto tw-rounded tw-bg-[#1a2332] tw-p-4 tw-text-sm tw-text-[#e0e0e0]">
              <code>{`page.php
└── get_template_order()
    ├── intro-section → intro-section.php
    ├── card-section → card-section.php
    ├── text-image → text-image.php
    ├── connection-section → connection-section.php
    └── video-section → video-section.php
└── related-sources.php`}</code>
            </pre>
          </div>
        </div>
        <div className="tw-mt-8 tw-rounded-xl tw-bg-[#0E1424] tw-p-5 tw-text-white">
          <h3 className="tw-text-xl tw-font-boldonse">
            Rendering child page sections in page.php
          </h3>
          <p className="tw-mt-2 tw-text-sm">
            Each editor block is matched to its template part, then passed in
            as child-page content.
          </p>
          <pre className="tw-mt-4 tw-overflow-x-auto tw-rounded tw-bg-[#1a2332] tw-p-4 tw-text-sm tw-text-[#e0e0e0]">
            <code>{`$templateOrderOutput = get_template_order($postID);
for ($i = 0; $i < count($templateOrderOutput); $i++) {
    get_template_part(
        $templateOrderOutput[$i]['section']['template'],
        null,
        ['childPage' => [
            'content' => $templateOrderOutput[$i]['section']['content'],
        ]]
    );
}`}</code>
          </pre>
        </div>
      </section>
      <section className="tw-container tw-mx-auto tw-p-5 tw-my-16">
        <h2 className="tw-text-2xl md:tw-text-4xl tw-text-bluegreen tw-font-boldonse">
          REST API Integration
        </h2>
        <div className="tw-w-64">
          <hr className="tw-h-2 tw-bg-bluegreen" />
        </div>
        <p className="md:tw-w-2/3 tw-mt-3 tw-text-black">
          WordPress initiates the request: the browser submits to WordPress
          admin-ajax, and the calculator plugin forwards the sanitized form
          fields to the Node.js endpoint. The Node server does not call
          WordPress; WordPress relays the calculation response back to the
          browser.
        </p>
        <div className="tw-mt-8 tw-grid tw-gap-6 lg:tw-grid-cols-2">
          <div className="tw-bg-[#0E1424] tw-rounded-xl tw-p-5 tw-text-white">
            <h3 className="tw-text-xl tw-font-boldonse">
              Request to the calculator API
            </h3>
            <p className="tw-mt-2 tw-text-sm">
              The plugin sends form-encoded values to the configured server
              address.
            </p>
            <pre className="tw-mt-4 tw-overflow-x-auto tw-rounded tw-bg-[#1a2332] tw-p-4 tw-text-sm tw-text-[#e0e0e0]">
              <code>{`POST /handle-calc
Content-Type: application/x-www-form-urlencoded

monthly-electricity=650
heating-source=Natural+Gas
weekly-miles-driven=120
diet-type=Low+meat
household-size=2`}</code>
            </pre>
          </div>
          <div className="tw-bg-[#0E1424] tw-rounded-xl tw-p-5 tw-text-white">
            <h3 className="tw-text-xl tw-font-boldonse">
              Validated response
            </h3>
            <p className="tw-mt-2 tw-text-sm">
              Express parses the request, Zod checks field types and allowed
              values, and the server returns the estimate as JSON.
            </p>
            <pre className="tw-mt-4 tw-overflow-x-auto tw-rounded tw-bg-[#1a2332] tw-p-4 tw-text-sm tw-text-[#e0e0e0]">
              <code>{`HTTP 200 OK
Content-Type: application/json

{
  "footprint": 9536
}`}</code>
            </pre>
          </div>
        </div>
        <p className="tw-mt-4 tw-text-sm tw-text-gray-700">
          Invalid input returns HTTP 400 with field-level validation messages.
          The plugin wraps the successful result in WordPress&apos;s JSON AJAX
          response, which the browser uses to update the chart and grade.
        </p>
        <div className="tw-mt-10 tw-rounded-xl tw-bg-bluegreen tw-p-6 tw-text-white">
          <h3 className="tw-text-xl md:tw-text-2xl tw-font-boldonse">
            From Response to Chart
          </h3>
          <p className="tw-mt-2">
            WordPress wraps the server&apos;s estimate in its AJAX success
            response. The theme JavaScript reads
            <code className="tw-mx-1 tw-rounded tw-bg-black/20 tw-px-1">
              data.data.footprint
            </code>
            and passes the number to the chart renderer.
          </p>
          <pre className="tw-mt-4 tw-overflow-x-auto tw-rounded tw-bg-[#0E1424] tw-p-4 tw-text-sm tw-text-[#e0e0e0]">
            <code>{`Node API → WordPress plugin:
{ "footprint": 9536 }

WordPress AJAX → theme JavaScript:
{ "success": true, "data": { "footprint": 9536, "average": null } }

if (Number.isFinite(Number(data.data.footprint))) {
  drawChart(Number(data.data.footprint));
}`}</code>
          </pre>
        </div>
      </section>
      <div className="tw-container tw-mx-auto tw-my-16">
        <Video
          srclink="/carbon-footprint/carbondemo-small.mp4"
          muted={true}
          hideGithubLink={true}
        />
      </div>
    </div>
  );
}
