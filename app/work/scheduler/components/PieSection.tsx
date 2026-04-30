import React from "react";
import CarouselControlled from "../../../components/Carousel";
const pieChartSlides = [
  {
    id: "pie-chart",
    title: "Live Status Pie Chart",
    summary:
      "The dashboard pie chart shows a live breakdown of all jobs by status. Clicking a segment filters the calendar and legend.",
    description: `// app/components/Recharts.tsx\n<Pie\n  data={chartData}\n  ...\n  onClick={(e) => onSliceClick(e as { name?: string } | undefined)}\n>\n  {chartData.map((entry) => (\n    <Cell\n      key={entry.name}\n      fill={STATUS_COLORS[entry.name] ?? '#cccccc'}\n      stroke={selectedStatus === entry.name ? '#000' : 'none'}\n      strokeWidth={selectedStatus === entry.name ? 2 : 0}\n    />\n  ))}\n</Pie>`,
  },
];

const PieSection = () => {
  return (
    <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row-reverse tw-gap-2 tw-my-5">
      <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
        <div className="tw-py-10">
          <h3 className="tw-text-xl md:tw-text-2xl tw-text-bluegreen tw-font-boldonse">
            Live Status Pie Chart
          </h3>
          <div className="tw-w-28">
            <hr className="tw-h-2 tw-bg-bluegreen" />{" "}
          </div>
          <div>
            <p>
              The dashboard pie chart shows a live breakdown of all jobs by
              status. Clicking a segment filters the calendar and legend. This
              feature provides users with an at-a-glance overview of the current
              state of all jobs, allowing them to quickly identify how many
              tasks are pending, scheduled, completed, or if any resources are
              currently busy. The interactivity of the pie chart enhances user
              experience by enabling quick filtering of the calendar and legend
              based on job status, making it easier for users to focus on
              specific subsets of data relevant to their needs.
            </p>
          </div>
        </div>
      </div>
      <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
        <div className="tw-w-full tw-mx-auto">
          <CarouselControlled
            wireframeslides={pieChartSlides.map((slide) => ({
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

export default PieSection;
