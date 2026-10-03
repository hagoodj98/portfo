import React from "react";
import CarouselControlled from "../../../components/Carousel";
const calendarSlides = [
  {
    id: "use-swr-for-real-time-updates",
    title: "Refreshing Schedule Data with SWR",
    summary:
      "The calendar fetches persisted orders from the current order-loading route and polls for status changes.",
    description: `const { data: fetchedData } = useSWR(
  API_ENDPOINTS.LOAD_ORDERS, // /api/order/load
  fetcher,
  { refreshInterval: 5000 },
);`,
  },
  {
    id: "calendar-color-codes",
    title: "Calendar: Color-Coded Status",
    summary:
      "The calendar visualizes production orders with consistent lifecycle colors across the calendar, legend, and chart.",
    description: `Order statuses:
  Pending -> awaiting schedule assignment
  Processing -> submitted for scheduling
  Scheduled -> waiting for its start time
  Busy -> currently in progress
  Completed -> finished
  Deleted -> soft-deleted and excluded from active schedule views`,
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
              The calendar visualizes production orders with consistent
              lifecycle colors across the calendar, legend, and chart. It
              refreshes order data every five seconds so users can see changes
              made by the background status processor.
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
