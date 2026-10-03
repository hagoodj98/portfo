import React from "react";
import CarouselControlled from "../../../components/Carousel";

const cronSlides = [
  {
    id: "cron-job",
    title: "node-cron: Background Status Processing",
    summary:
      "A standalone cron process reads orders from the repository every five seconds and runs the status-transition task.",
    description: `// node_cron/cron.mjs
cron.schedule(
  "*/5 * * * * *",
  async () => {
    const orders = await productionOrder.findAllForStatusCheck();
    await updateOrderStatuses(orders);
  },
  { noOverlap: true },
);`,
  },
  {
    id: "order-status-transitions",
    title: "Time-Based Order Status Transitions",
    summary:
      "The task skips Pending orders and calculates Scheduled, Busy, or Completed from each order's time window.",
    description: `// task/schedulerTask.ts
if (order.resourceStatus === STATUSES.pending) return;

if (now.isAfter(startTime) && now.isBefore(endTime)) {
  await prisma.productionOrder.update({
    where: { id: order.id },
    data: { resourceStatus: STATUSES.busy },
  });
} else if (now.isBefore(startTime)) {
  await prisma.productionOrder.update({
    where: { id: order.id },
    data: { resourceStatus: STATUSES.scheduled },
  });
} else {
  await prisma.productionOrder.update({
    where: { id: order.id },
    data: { resourceStatus: STATUSES.completed },
  });
}`,
  },
];

const CronSection = () => {
  return (
    <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-my-5">
      <div className="lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
        <div className="tw-py-10">
          <h3 className="tw-text-xl md:tw-text-2xl tw-text-bluegreen tw-font-boldonse">
            Node-Cron
          </h3>
          <div className="tw-w-28">
            <hr className="tw-h-2 tw-bg-bluegreen" />{" "}
          </div>
          <div>
            <p>
              A standalone Node-Cron process runs every five seconds, loads
              orders from the production-order repository, and applies the
              status-transition task. The cron job is configured not to overlap
              its previous run.
            </p>
          </div>
        </div>
      </div>
      <div className="tw-relative lg:tw-w-8/12 tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal">
        <div className="tw-w-full tw-mx-auto">
          <CarouselControlled
            wireframeslides={cronSlides.map((slide) => ({
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

export default CronSection;
