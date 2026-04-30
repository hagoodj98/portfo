import React from "react";
import CarouselControlled from "../../../components/Carousel";
const calendarSlides = [
  {
    id: "use-swr-for-real-time-updates",
    title: "useSWR for Real-Time Updates",
    summary:
      "The useSWR hook is utilized to fetch and cache data from the API endpoint that loads jobs into the chart. It is configured with a refresh interval to enable real-time updates of job statuses and scheduling information on the front-end.",
    description: `  const fetcher = async (url: string) => {
        const res = await fetch(url);
        if (!res.ok) throw new Error(API ${"${url} failed: ${res.status}"});)
        return await res.json();
      };
       const { data: fetchedData } = useSWR<{
        ResourceProductionOrders: OrderProps[];
      }>("/api/load-jobs-to-chart", fetcher, {
        refreshInterval: 5000, // poll every 5 seconds
      });`,
  },
  {
    id: "calendar-color-codes",
    title: "Calendar: Color-Coded Status",
    summary:
      "The calendar visualizes all jobs, color-coded by status. Status colors are consistent across the calendar, legend, and pie chart.",
    description: `// app/components/Calendar.tsx\nconst handleBackgroundColor = useCallback(() => {\n  return (event) => {\n    if (event.resourceStatus === 'Busy') return { style: { backgroundColor: '#ff4d4d' } };\n    if (event.resourceStatus === 'Scheduled') return { style: { backgroundColor: '#007bff' } };\n    if (event.resourceStatus === 'Completed') return { style: { backgroundColor: '#2ecc71' } };\n    if (event.resourceStatus === 'Pending') return { style: { backgroundColor: '#f39c12' } };\n    return { style: { backgroundColor: '#cccccc' } };\n  };\n}, [selectedStatus]);`,
  },
];

const CalendarSection = () => {
  return (
    <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row-reverse tw-gap-2 tw-my-5">
      <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
        <div className="tw-py-10">
          <h3 className="tw-text-xl md:tw-text-2xl tw-text-bluegreen tw-font-boldonse">
            Calendar: Color-Coded Status
          </h3>
          <div className="tw-w-28">
            <hr className="tw-h-2 tw-bg-bluegreen" />{" "}
          </div>
          <div>
            <p>
              The calendar visualizes all jobs, color-coded by status. Status
              colors are consistent across the calendar, legend, and pie chart.
              This design choice allows users to quickly identify the status of
              each job at a glance, improving usability and efficiency when
              managing production schedules. By maintaining consistent color
              coding across different components of the application, users can
              easily correlate information between the calendar, legend, and pie
              chart, enhancing their overall experience and understanding of the
              scheduling data.
            </p>
          </div>
        </div>
      </div>
      <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
        <div className="tw-w-full tw-mx-auto">
          <CarouselControlled
            wireframeslides={calendarSlides.map((slide) => ({
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

export default CalendarSection;
