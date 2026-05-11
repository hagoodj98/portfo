import CarouselControlled from "@/app/components/Carousel";
import React from "react";

const sonicPostgresSlides = [
  {
    id: "table-audiofile",
    title: "AudioFile Table",
    summary:
      "Stores uploaded source audio metadata, storage keys, file sizing, MIME details, and creation timestamps.",
    description: `AudioFile:
  id INT (PRIMARY KEY, AUTO INCREMENT)
  fileName VARCHAR(255)
  storageKey VARCHAR(255) UNIQUE
  size INT
  mimeType VARCHAR(255)
  createdAt TIMESTAMP DEFAULT now()

Purpose:
  - Catalog uploaded source files
  - Connect object storage keys to relational metadata
  - Provide lookup source for conversion workflows`,
  },
  {
    id: "table-soundprofile",
    title: "SoundProfile Table",
    summary:
      "Persists analyzed audio characteristics such as tempo, pitch, RMS, spectral metrics, and MFCC/chroma vectors.",
    description: `SoundProfile:
  id INT (PRIMARY KEY, AUTO INCREMENT)
  audioFileId INT UNIQUE (FOREIGN KEY -> AudioFile.id)
  durationSeconds FLOAT
  tempoBpm FLOAT
  estimatedPitchHz FLOAT
  rmsMean FLOAT
  spectralCentroidMean FLOAT
  spectralRolloffMean FLOAT
  spectralBandwidthMean FLOAT
  zeroCrossingRateMean FLOAT
  mfccMean JSON
  mfccStd JSON
  chromaMean JSON
  rawAnalysis JSON

Purpose:
  - Store computed analysis features per source file
  - Reuse profile data in conversion + re-conversion logic`,
  },
  {
    id: "table-relationship",
    title: "Schema Relationship",
    summary:
      "A one-to-one relation ensures each uploaded audio file maps to at most one persisted sound profile.",
    description: `Relationship:
  AudioFile (1) <-> (1) SoundProfile

Constraint details:
  SoundProfile.audioFileId UNIQUE
  SoundProfile.audioFileId REFERENCES AudioFile.id

Benefits:
  - Prevents duplicate analysis records for one source
  - Keeps metadata and profile tightly coupled
  - Simplifies conversion lookups by audioFileId`,
  },
];

const PostgresTables = () => {
  return (
    <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-my-5">
      <div className="lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
        <div className="tw-py-10">
          <h3 className="tw-text-xl md:tw-text-2xl tw-text-bluegreen tw-font-boldonse">
            PostgreSQL
          </h3>
          <div className="tw-w-28">
            <hr className="tw-h-2 tw-bg-bluegreen" />
          </div>
          <p>
            SonicDNA uses PostgreSQL with Prisma to persist uploaded audio
            metadata and computed analysis features. The schema centers on
            `AudioFile` and `SoundProfile`, connected by a one-to-one
            relationship to keep analysis data consistent per source file.
          </p>
        </div>
      </div>
      <div className="tw-relative lg:tw-w-8/12 tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal">
        <div className="tw-w-full tw-mx-auto">
          <CarouselControlled
            wireframeslides={sonicPostgresSlides.map((table) => ({
              id: table.id,
              custom: (
                <div className="tw-bg-[#17213a] tw-rounded-2xl tw-border tw-border-[#38bdf8]/30 tw-p-5 tw-shadow-md">
                  <h4 className="tw-text-[#38bdf8] tw-font-semibold tw-mb-2 tw-text-lg">
                    {table.title}
                  </h4>
                  <p className="tw-text-[#e0e7ef] tw-text-sm tw-mb-3">
                    {table.summary}
                  </p>
                  <pre className="tw-bg-[#22315a] tw-rounded-lg tw-p-4 tw-text-xs tw-text-[#7dd3fc] tw-overflow-x-auto tw-font-mono tw-border tw-border-[#334155]/60">
                    <code>{table.description}</code>
                  </pre>
                </div>
              ),
            }))}
            width="100%"
            height="auto"
          />
        </div>
      </div>
    </div>
  );
};

export default PostgresTables;
