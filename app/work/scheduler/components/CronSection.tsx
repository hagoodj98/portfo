import React from "react";
import CarouselControlled from "../../../components/Carousel";
const cronSlides = [
  {
    id: "cron-job",
    title: "node-cron: Real-Time Status Updates",
    summary:
      "A background cron job runs every 5 seconds to update job statuses based on the current time, keeping the UI in sync with backend changes.",
    description: `// node_cron/cron.mjs\ncron.schedule('*/5 * * * * *', async () => {\n  await fetch('http://localhost:3000/api/check-order-status', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({}),\n  });\n});`,
  },
  {
    id: "cron-job-loop-function file",
    title: "Cron Job Loop Function",
    summary:
      "The loopThroughScheduledJobs function is called by the cron job to iterate through all scheduled jobs and update their statuses based on the current time. It checks if jobs should transition from Scheduled to Busy or from Busy to Completed.",
    description: `// task/schedulerTask.ts\nexport const loopThroughScheduledJobs = (
      ordersArray: RequestScheduledJobs[],
    ): void => {
      try {
        if (!ordersArray) {
          throw new CustomError("Cannot find array or array is empty", 404);
        }
    
        for (let i = 0; i < ordersArray.length; i++) {
          const checkThroughOrders = ordersArray[i]; //this is an object but we want to tap into the keys of slots not id or name or row.
          changeStatuses(checkThroughOrders);
        }
      } catch (error) {
        if (error instanceof CustomError) {
          throw error;
        }
        throw new CustomError("There was a problem looping through the array", 500);
      }
    };
    //This function is called for every job with a Scheduled Status inside the pendingJobs array I created. I want the job object and the slotKey from the loopThroughPendingJobs function. SlotKey is a string that I can parse and use to compare timing. If the current time is before or after the slotKeys, then change the statuses according.
    async function changeStatuses(order: RequestScheduledJobs) {
      try {
        if (!order) {
          throw new CustomError(
            "Missing information to process the times for status changes",
            404,
          );
        }
    
        const startTime = dayjs(order.startTime); //In order to compare start and end times, I used a function that would convert the military time(string) into an actual date object
        const endTime = dayjs(order.endTime);
        const now = dayjs();
    
        const isPending = await prisma.productionOrder.findUniqueOrThrow({
          where: {
            id: order.id,
          },
          select: {
            resourceStatus: true,
          },
        });
    
        if (isPending.resourceStatus === "Pending") {
          return;
        }
    
        if (now.isAfter(startTime) && now.isBefore(endTime)) {
          await prisma.productionOrder.update({
            where: {
              id: order.id,
            },
            data: {
              resourceStatus: "Busy",
            },
          });
        } else if (now.isBefore(startTime)) {
          await prisma.productionOrder.update({
            where: {
              id: order.id,
            },
            data: {
              resourceStatus: "Scheduled",
            },
          });
        } else {
          await prisma.productionOrder.update({
            where: {
              id: order.id,
            },
            data: {
              resourceStatus: "Completed",
            },
          });
        }
      } catch (error) {
        if (error instanceof CustomError) {
          throw error;
        }
        throw new CustomError(
          "There was a problem processing the current time or time slot",
          500,
        );
      }
    }
    export const parseTime = (time: string): Date => {
      const date = dayjs(time, "HH:mm");
      if (!date.isValid()) {
        throw new CustomError("Invalid time format", 400);
      }
      return date.toDate();
    };`,
  },
];

const CronSection = () => {
  return (
    <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-my-5">
      <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
        <div className="tw-py-10">
          <h3 className="tw-text-xl md:tw-text-2xl tw-text-bluegreen tw-font-boldonse">
            Node-Cron
          </h3>
          <div className="tw-w-28">
            <hr className="tw-h-2 tw-bg-bluegreen" />{" "}
          </div>
          <div>
            <p>
              A background cron job runs every 5 seconds to update job statuses
              based on the current time, keeping the UI in sync with backend
              changes. The loopThroughScheduledJobs function is called by the
              cron job to iterate through all scheduled jobs and update their
              statuses based on the current time. It checks if jobs should
              transition from Scheduled to Busy or from Busy to Completed.
            </p>
          </div>
        </div>
      </div>
      <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
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
