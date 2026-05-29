import React from "react";
import Card from "../../components/Card";
import ProjectIntro from "../../components/ProjectIntro";
import Diagram from "@/app/components/Diagram";
import PERNSection from "@/app/components/PERNSection";
import ImprovementSection from "@/app/components/ImprovementSection";
import Video from "../../components/Video";
import ApiEndpointSection from "./components/ApiEndpointSection";
import FileArch from "./components/FileArch";
import CISection from "./components/CI";
import MobileHooksSection from "./components/MobileHooksSection";
import PostgresTables from "./components/PostgresTables";
import WireframeSlide from "@/app/components/WireframeSlide";
import { infoData } from "@/app/components/datai";
import DesignTimeLine from "@/app/components/DesignTimeLine";
import Personas from "@/app/components/Personas";

export const metadata = {
  title: "SonicDNA Project",
};

const SonicDNA = () => {
  const initialWireArray = infoData.initialSoundDNA;
  const middleWireArray = infoData.middleSoundDNA;
  const finalWireArray = infoData.finalSoundDNA;

  return (
    <div className="tw-py-20">
      <ProjectIntro
        projectname="SonicDNA"
        description="SonicDNA is my first React Native project. I built it with Expo to record, import, convert, and share audio using source profile matching. For music producers like myself, we focused on creating a seamless workflow during our creation. Users can record sounds to extract its unique characteristics and apply those characteristics/DNA with another audio file. This can help producers create unique sounds and compositions. Most of the learning came from debugging real mobile issues across iOS and Android and turning those issues into stable hook logic."
        srcname="/sonicdna/soundapi.png"
      />
      <Personas
        persona="/sonicdna/persona1.png"
        personatwo="/sonicdna/persona2.png"
        personathree="/sonicdna/persona3.png"
      />
      <PERNSection>
        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-5xl tw-text-black tw-font-boldonse md:tw-leading-[1.5]">
          PERN Stack Overview
        </h3>
        <div className="tw-w-28">
          <hr className="tw-h-2 tw-bg-black" />
        </div>
        <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black">
          SonicDNA uses a PERN-style backend architecture with React Native on
          mobile, Node.js + Express on the API layer, and PostgreSQL for
          metadata and analysis persistence.
        </p>
      </PERNSection>

      <div className="tw-container tw-mx-auto tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4">
        <Card className="tw-bg-bluegreen tw-text-white tw-text-base tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse md:tw-leading-[1.5]">
            React Native
          </h3>
          <p>
            Expo Router screens and hooks manage source selection, import,
            conversion orchestration, and share workflows.
          </p>
        </Card>

        <Card className="tw-bg-moreblue tw-text-white tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse md:tw-leading-[1.5]">
            Node.js
          </h3>
          <p>
            Runtime for the API server that coordinates uploads, conversion
            execution, streaming, and integration with storage/database layers.
          </p>
        </Card>

        <Card className="tw-bg-yellow tw-text-black tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse md:tw-leading-[1.5]">
            Express
          </h3>
          <p>
            REST endpoints handle ingest, source catalog retrieval,
            convert/reconvert requests, and temporary audio streaming.
          </p>
        </Card>

        <Card className="tw-bg-orange tw-text-white tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse md:tw-leading-[1.5]">
            PostgreSQL
          </h3>
          <p>
            Prisma-backed relational storage for audio metadata, analysis
            outputs, and records used by conversion workflows.
          </p>
        </Card>
      </div>

      <Diagram image="/sonicdna/diagram.png" alt="SonicDNA project icon">
        <p className="md:tw-w-2/3 tw-mt-3 tw-text-black">
          SonicDNA combines mobile UX, audio transformation logic, and
          production-minded workflow safeguards learned during first-time React
          Native development.
        </p>
      </Diagram>

      <PostgresTables />

      <FileArch />

      <div className="tw-bg-orange tw-w-full">
        <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-py-10">
          <div className="lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
            <div className="tw-py-10">
              <h1 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-text-white tw-font-boldonse md:tw-leading-[1.5] lg:tw-leading-[1.5]">
                API Endpoints and Conversion Flow
              </h1>
              <div className="tw-w-28">
                <hr className="tw-h-2 tw-bg-bluegreen" />
              </div>
              <p className="md:tw-text-base tw-text-white">
                The app uploads source audio, imports target audio, then runs
                conversion and re-conversion endpoints with tunable parameters.
                Returned URIs are normalized and cached for playback reliability
                across platforms.
              </p>
            </div>
          </div>
          <ApiEndpointSection />
        </div>
      </div>

      <div className="tw-container tw-py-10 tw-mx-auto tw-p-5">
        <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse">
          Hook and Playback Reliability Snippets
        </h3>
        <div className="tw-w-72">
          <hr className="tw-h-2 tw-bg-bluegreen" />
        </div>
        <p className="md:tw-w-2/3 tw-mt-3 tw-text-black">
          These snippets capture the key reliability improvements: handling both
          remote and file URIs, caching converted audio for iOS playback, and
          fixing share flow behavior for local files.
        </p>
        <div className="tw-flex tw-flex-col tw-gap-8 tw-mt-8">
          <MobileHooksSection />
        </div>
      </div>

      <PERNSection>
        <h3 className="tw-leading-10 tw-text-3xl md:tw-text-5xl tw-text-black tw-font-boldonse md:tw-leading-[1.5]">
          Technical Architecture
        </h3>
        <div className="tw-w-28">
          <hr className="tw-h-2 tw-bg-black" />
        </div>
        <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black">
          The mobile app is built with Expo Router and custom hooks, while the
          backend triggers lightweight Python scripts for audio analysis and
          conversion. Source files are stored in Cloudflare R2, with reliability
          improvements like URI normalization and local caching for iOS
          playback.
        </p>
      </PERNSection>

      <div className="tw-container tw-mx-auto tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3">
        <Card className="tw-bg-bluegreen tw-text-white tw-text-base tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse md:tw-leading-[1.5]">
            Expo
          </h3>
          <p>
            Expo SDK 54 with Expo Go for daily development loops on device and
            rapid UI iteration.
          </p>
        </Card>

        <Card className="tw-bg-moreblue tw-text-white tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse md:tw-leading-[1.5]">
            Python Runner Script
          </h3>
          <p>
            The API triggers Python from npm scripts to run analysis and
            conversion steps without requiring Python code in the app layer.
          </p>
        </Card>

        <Card className="tw-bg-orange tw-text-white tw-p-5">
          <h3 className="tw-leading-10 tw-text-xl md:tw-text-2xl tw-font-boldonse md:tw-leading-[1.5]">
            Cloudflare R2
          </h3>
          <p>
            Source audio objects are stored in Cloudflare R2 so upload,
            retrieval, and conversion workflows can stream media reliably.
          </p>
        </Card>
      </div>

      <CISection />

      {/* Python Analysis Output Section */}
      <div className="tw-container tw-mx-auto tw-my-10 tw-p-5">
        <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse">
          Python Analysis: What Gets Extracted
        </h3>
        <div className="tw-w-72">
          <hr className="tw-h-2 tw-bg-bluegreen" />
        </div>
        <p className="md:tw-w-2/3 tw-mt-3 tw-text-black">
          When an audio file is uploaded, the Node.js server calls
          <code className="tw-bg-gray-100 tw-px-1 tw-rounded tw-mx-1">
            analyze_audio.py
          </code>
          via{" "}
          <code className="tw-bg-gray-100 tw-px-1 tw-rounded">execFile</code>{" "}
          from Node&apos;s child_process module. The script uses librosa to
          extract the audio&apos;s &quot;DNA&quot; — tempo, pitch, spectral
          shape, and timbral fingerprint — then prints the result as JSON to
          stdout. The server captures that output and parses it with
          <code className="tw-bg-gray-100 tw-px-1 tw-rounded tw-mx-1">
            JSON.parse(stdout)
          </code>
          before writing the profile to PostgreSQL via Prisma.
        </p>
        <div className="tw-grid md:tw-grid-cols-2 tw-gap-6 tw-mt-6">
          <div>
            <p className="tw-text-sm tw-font-semibold tw-text-bluegreen tw-mb-2">
              Node.js → Python bridge (pythonScript.ts)
            </p>
            <pre className="tw-bg-[#181f2a] tw-text-[#e0e0e0] tw-rounded tw-p-4 tw-text-xs tw-overflow-x-auto">{`const { stdout } = await execFileAsync(pythonBin, [
  scriptPath,
  filePath   // temp path of uploaded audio
]);

return JSON.parse(stdout); // parsed DNA profile`}</pre>
          </div>
          <div>
            <p className="tw-text-sm tw-font-semibold tw-text-bluegreen tw-mb-2">
              Sample JSON output from analyze_audio.py
            </p>
            <pre className="tw-bg-[#181f2a] tw-text-[#e0e0e0] tw-rounded tw-p-4 tw-text-xs tw-overflow-x-auto">{`{
  "fileName": "kick_808.wav",
  "durationSeconds": 2.14,
  "sampleRate": 44100,
  "tempoBpm": 138.4,
  "estimatedPitchHz": 61.3,
  "dna": {
    "mfccMean": [-312.4, 82.1, -14.6, ...],
    "mfccStd":  [107.2, 32.8,  11.0, ...],
    "chromaMean": [0.41, 0.18, 0.22, ...],
    "spectralCentroidMean": 1842.6,
    "spectralBandwidthMean": 2103.1,
    "spectralRolloffMean": 4218.9,
    "zeroCrossingRateMean": 0.047,
    "rmsMean": 0.183
  }
}`}</pre>
          </div>
        </div>
      </div>

      <div className="tw-container tw-mx-auto tw-my-10 tw-p-5">
        <DesignTimeLine>
          <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse">
            Wireframe Process
          </h3>
        </DesignTimeLine>
        <div className="tw-space-y-8">
          <WireframeSlide processWireframes={initialWireArray}>
            <div className="lg:tw-col-span-4 tw-p-6">
              <span className="tw-inline-block tw-bg-[#0E1424] tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-mb-3">
                Phase 01 - Exploration
              </span>
              <h4 className="tw-text-xl tw-text-bluegreen tw-font-boldonse tw-mb-3">
                Initial Wireframing
              </h4>
              <p>
                I started by sketching the main screens and the basic flow I
                wanted the app to follow. That first pass helped me turn a rough
                idea into something I could actually build.
              </p>
            </div>
          </WireframeSlide>
          <WireframeSlide processWireframes={middleWireArray}>
            <div className="lg:tw-col-span-4 tw-p-6">
              <span className="tw-inline-block tw-bg-[#113058] tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-mb-3">
                Phase 02 - Refinement
              </span>
              <h4 className="tw-text-xl tw-text-bluegreen tw-font-boldonse tw-mb-3">
                Refined Wireframing
              </h4>
              <p>
                After that, I adjusted the layout so the navigation and content
                felt more natural on a phone. This was where the structure
                started to make more sense for real use.
              </p>
            </div>
          </WireframeSlide>
          <WireframeSlide processWireframes={finalWireArray}>
            <div className="lg:tw-col-span-4 tw-p-6">
              <span className="tw-inline-block tw-bg-bluegreen tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-mb-3">
                Phase 03 - Finalization
              </span>
              <h4 className="tw-text-xl tw-text-bluegreen tw-font-boldonse tw-mb-3">
                Final Wireframing
              </h4>
              <p>
                The final version gave me a cleaner blueprint to build from and
                helped me stay consistent as I moved from planning into
                implementation and polish.
              </p>
            </div>
          </WireframeSlide>
        </div>
      </div>
      <ImprovementSection>
        <div className="md:tw-w-2/3">
          <li>
            Updating dependencies can be rough. Moving to Expo SDK 55 broke the
            Expo Go workflow on a physical iPhone, which meant I could not
            really see the app on iOS without pulling in Xcode or other build
            tooling that becomes a lot more annoying once paid account
            requirements start showing up.
          </li>
          <li>
            This was my first React Native project, so there was a real learning
            curve with Expo hooks, mobile-specific methods, file handling in
            Node.js, and even just understanding how mobile builds differ from
            normal web deployment.
          </li>
          <li>
            Tab navigation also took some getting used to. Web frameworks all
            have their own navigation patterns already, but mobile navigation
            felt like a different mindset. React, Next.js, EJS, and Expo all do
            it differently, so the first go-round was definitely a learning
            curve.
          </li>
          <li>
            Expo plugins and configuration were another curve ball. Figuring out
            what needed to live in app config, what affected native behavior,
            and how plugin changes impact the build process is still trying to
            figure out.
          </li>
          <li>
            I also learned Zod can go further than just validating normal JSON
            input. Expanding it into file validation too was useful for checking
            uploads earlier and keeping the API a little safer before the audio
            processing step even starts.
          </li>
          <li>
            My original plan was to handle the audio processing in pure Node.js,
            but a lot of the libraries I found felt outdated or abandoned. I
            looked into the Web Audio API too, but the deeper I researched it,
            the more obvious it became why people usually look for dedicated
            audio libraries instead of building all of that from scratch.
          </li>
          <li>
            Librosa through Python ended up being the more reliable route from
            what I found. I do not know Python well, so I needed help from
            Copilot to get that part moving, but I still read through the
            scripts and worked to understand what the analysis and conversion
            steps were actually doing to the audio.
          </li>
          <li>
            It was also my first time integrating a cloud storage service for
            audio files. Right now the file passes through the server before the
            profile is saved, but a better next step would be uploading directly
            to the cloud and then letting the server write the profile metadata
            to the database after that. That would be faster and more efficient.
          </li>
          <li>
            I could not rely on a presigned URL for client playback because the
            Expo audio instance seemed to expect a cleaner URL with a visible
            file name or extension. Because of that, I had to create streaming
            endpoints so the client could actually listen and download reliably.
          </li>
          <li>
            I am still learning the mobile build side of this. A future
            improvement would be tightening the release workflow even more,
            improving upload/conversion feedback, and reducing the friction of
            testing iOS behavior without jumping through so many environment
            setup steps.
          </li>
        </div>
      </ImprovementSection>
      <div className="tw-container tw-mx-auto tw-px-5 tw-pb-2">
        <p className="tw-text-sm tw-text-gray-500 tw-italic">
          Note: A live build is not currently hosted. Running a public iOS build
          requires an Apple Developer account ($99/year) and EAS infrastructure
          costs. The demo video below shows the app running locally via Expo Go
          on a physical device.
        </p>
      </div>
      <Video
        githubLink="https://github.com/hagoodj98/sonicdna-mobile"
        srclink="/sonicdna/sonicdna-demo-stable.webm"
      />
      <div className="tw-container tw-mx-auto tw-my-10 tw-p-5">
        <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse">
          Addressed Improvements
        </h3>
        <div className="tw-w-64">
          <hr className="tw-h-2 tw-bg-bluegreen" />
        </div>
        <div className="tw-mt-5 tw-rounded-lg tw-border tw-border-bluegreen/30 tw-bg-white tw-p-5 tw-shadow-sm">
          <p className="tw-text-sm tw-text-gray-500">
            No addressed improvements logged yet for this project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SonicDNA;
