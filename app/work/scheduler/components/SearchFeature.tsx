import React from "react";
import CarouselControlled from "../../../components/Carousel";
const searchSlides = [
  {
    id: "realtime-search",
    title: "Real-Time Resource Search",
    summary:
      "The Add Resource UI provides instant feedback as you type, searching the database in real time for matching resources.",
    description: `// app/components/AddResource.tsx\nuseEffect(() => {\n  if (!resourceName) return;\n  const searchResources = async () => {\n    const response = await fetch(\n      '/api/search-resources?name=' + encodeURIComponent(resourceName)\n    );\n    const data = await response.json();\n    setAllPossibleResources(data.resources);\n  };\n  searchResources();\n}, [resourceName]);`,
  },
];

const SearchFeature = () => {
  return (
    <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-my-5">
      <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
        <div className="tw-py-10">
          <h3 className="tw-text-xl md:tw-text-2xl tw-text-bluegreen tw-font-boldonse">
            Real-Time Resource Search
          </h3>
          <div className="tw-w-28">
            <hr className="tw-h-2 tw-bg-bluegreen" />{" "}
          </div>
          <div>
            <p>
              The Add Resource UI provides instant feedback as you type,
              searching the database in real time for matching resources. This
              feature enhances user experience by allowing users to quickly find
              and select resources without needing to submit a form or refresh
              the page. The implementation uses the useEffect hook to trigger a
              search function whenever the resourceName state changes, making an
              API call to fetch matching resources and updating the UI
              accordingly.
            </p>
          </div>
        </div>
      </div>
      <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
        <div className="tw-w-full tw-mx-auto">
          <CarouselControlled
            wireframeslides={searchSlides.map((slide) => ({
              id: slide.id,
              custom: (
                <div className="tw-bg-[#17213a] tw-rounded-2xl tw-border tw-border-[#38bdf8]/30 tw-p-5 tw-shadow-md">
                  <h4 className="tw-text-[#38bdf8] tw-font-semibold tw-mb-2 tw-text-lg">
                    {slide.title}
                  </h4>
                  <p className="tw-text-[#e0e7ef] tw-text-sm tw-mb-3">
                    {slide.summary}
                  </p>
                  <pre className="tw-bg-[#22315a] tw-rounded-lg tw-p-4 tw-text-xs tw-text-[#7dd3fc] tw-overflow-x-auto tw-font-mono tw-border tw-border-[#334155]/60">
                    <code>{slide.description}</code>
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

export default SearchFeature;
