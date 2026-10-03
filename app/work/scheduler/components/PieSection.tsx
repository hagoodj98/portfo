import React from "react";
import ImageZoom from "@/app/components/ImageZoom";

const PieSection = () => {
  return (
    <section className="tw-container tw-mx-auto tw-my-10 tw-p-5">
      <div className="tw-grid tw-items-center tw-gap-8 lg:tw-grid-cols-2">
        <div>
          <h3 className="tw-text-xl md:tw-text-2xl tw-text-bluegreen tw-font-boldonse">
            Live Production Status with Recharts
          </h3>
          <div className="tw-w-28">
            <hr className="tw-h-2 tw-bg-bluegreen" />
          </div>
          <p className="tw-mt-4">
            The dashboard uses SWR to refresh production-order data every five
            seconds, then Recharts groups active orders into a status donut
            chart. The legend and chart use the same status color map as the
            rest of the scheduler. Selecting a chart segment or legend item
            highlights that status in the chart.
          </p>
          <pre className="tw-mt-5 tw-overflow-x-auto tw-rounded-lg tw-bg-[#17213a] tw-p-4 tw-text-xs tw-text-[#7dd3fc]">
            <code>{`const { data } = useSWR(API_ENDPOINTS.LOAD_ORDERS, fetcher, {
  refreshInterval: 5000,
});

<Cell
  fill={STATUS_COLORS[entry.name] ?? "#cccccc"}
  stroke={selectedStatus === entry.name ? "#000" : "none"}
/>`}</code>
          </pre>
        </div>
        <div className="tw-overflow-hidden tw-rounded-xl tw-border tw-border-bluegreen/20 tw-bg-white tw-p-3 tw-shadow-md">
          <ImageZoom
            src="/pos/recharts.png"
            alt="Production dashboard Recharts donut chart with counts and colors for each order status"
            width={982}
            height={486}
            className="tw-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default PieSection;
