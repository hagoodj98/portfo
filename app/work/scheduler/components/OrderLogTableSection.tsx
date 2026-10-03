import React from "react";
import ImageZoom from "@/app/components/ImageZoom";

const OrderLogTableSection = () => {
  return (
    <section className="tw-container tw-mx-auto tw-my-10 tw-p-5">
      <div className="tw-mb-6">
        <h3 className="tw-text-xl md:tw-text-2xl tw-text-bluegreen tw-font-boldonse">
          Live Order History with TanStack Table
        </h3>
        <div className="tw-w-28">
          <hr className="tw-h-2 tw-bg-bluegreen" />
        </div>
        <p className="tw-mt-4 md:tw-w-2/3">
          The order log is built with TanStack Table and refreshes from the
          order-log API every five seconds using SWR. It joins each activity
          entry with the initiating employee, assigned employee, production
          resource, and current order status. Rows are color-coded by status,
          making pending, scheduled, busy, completed, deleted, and resource
          activity easy to scan.
        </p>
      </div>
      <div className="tw-overflow-hidden tw-rounded-xl tw-border tw-border-bluegreen/20 tw-bg-white tw-p-3 tw-shadow-md">
        <ImageZoom
          src="/pos/tanstacktable.png"
          alt="TanStack Table order activity log with employee, resource, description, status columns, and color-coded rows"
          width={1116}
          height={574}
          className="tw-w-full"
        />
      </div>
      <pre className="tw-mt-5 tw-overflow-x-auto tw-rounded-lg tw-bg-[#17213a] tw-p-4 tw-text-xs tw-text-[#7dd3fc]">
        <code>{`const { data } = useSWR(API_ENDPOINTS.LOAD_ORDER_LOGS, fetcher, {
  refreshInterval: 5000,
});

const table = useTable({
  data: data?.logs ?? [],
  columns,
  features,
});`}</code>
      </pre>
    </section>
  );
};

export default OrderLogTableSection;
