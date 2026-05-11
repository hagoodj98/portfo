import React from "react";
import CarouselControlled from "../../../components/Carousel";

const fileArchitectureSlides = [
  {
    id: "mobile-app-structure",
    title: "sonicdna-mobile: Mobile App Repository",
    summary:
      "Expo Router screens plus hook-driven audio workflows keep UI and conversion logic separated.",
    description: `sonicdna-mobile/
 app/
    screens/
       HomeScreen.tsx         # Recording, upload, playback workflow
       LabScreen.tsx          # Source select, import target, convert/re-convert
    components/
       lab/                   # Source/Target panels + adjustments section
       ui/                    # Shared buttons, picker, waveform controls
   hooks/
      useAudios.ts           # Metadata fetch, upload, download, convert APIs
      useLabScreen.ts        # Lab orchestration + playback + share flow
   config/
      api.ts                 # Base URL and endpoint map
   __tests__/                # Jest tests for app and hook behavior
.github/workflows/
   ci.yml                    # Lint, test, type-check, doctor
   eas-build.yml             # Manual-only EAS build workflow
app.json                     # Expo app config (SDK 54)
eas.json                     # EAS profile definitions
`,
    alt: "sonicdna-mobile repo file tree",
  },
  {
    id: "server-repo-structure",
    title: "sonicdna-server: Backend Repository",
    summary:
      "Express + Prisma + Python audio scripts with Dockerized API and Postgres services.",
    description: `sonicdna-server/
 app.ts                        # Express app + route registration
 index.ts                      # Server bootstrap
 lib/
   database.ts                # Prisma/Postgres access
   s3.ts                      # Cloudflare R2 (S3-compatible) client
 python/
   analyze_audio.py           # Source/import analysis
   convert_audio.py           # Tempo/pitch/gain conversion pipeline
   requirements.txt           # Python dependencies
 prisma/                       # Prisma schema/migrations
 tests/
   healthcheck.test.ts        # GET / health endpoint
   audio-upload.test.ts       # POST /api/submit-audio
   convert-audio.test.ts      # POST /api/convert-audio/:audioFileId
   reconvert-audio.test.ts    # POST /api/reconvert-audio/:audioFileId
   stream-temp-audio.test.ts  # GET /api/stream-temp-audio/:filename
 docker-compose.yml            # api + postgres services
 Dockerfile                    # Node + Python + ffmpeg runtime image
 Makefile                      # up/down/logs/migrate/reset-db shortcuts
 package.json                  # Scripts and dependencies
`,
    alt: "sonicdna-server backend repo file tree",
  },
];

const FileArch = () => {
  return (
    <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row-reverse tw-gap-2 tw-my-6">
      <div className="lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
        <div className="tw-py-10">
          <h3 className="tw-text-xl md:tw-text-2xl tw-text-bluegreen tw-font-boldonse">
            File Architecture
          </h3>
          <div className="tw-w-28">
            <hr className="tw-h-2 tw-bg-bluegreen" />
          </div>
          <p className="md:tw-text-base tw-text-black">
            The mobile app uses hook-driven orchestration so screen components
            stay focused on UI while upload, conversion, and sharing logic live
            in dedicated hook modules.
          </p>
        </div>
      </div>
      <div className="tw-relative lg:tw-w-8/12 tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal">
        <div className="tw-w-full tw-flex tw-flex-col tw-gap-3 tw-mx-auto">
          <CarouselControlled
            wireframeslides={fileArchitectureSlides}
            width="100%"
            height={"auto"}
          />
        </div>
      </div>
    </div>
  );
};

export default FileArch;
