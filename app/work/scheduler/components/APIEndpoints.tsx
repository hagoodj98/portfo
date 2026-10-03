import CarouselControlled from "../../../components/Carousel";

const apiEndpointSlides = [
  {
    id: "authentication-endpoints",
    title: "Session and Permission Checks",
    summary:
      "Session status and permission-check routes support the application's protected workflows.",
    description: `GET /api/auth/status
GET /api/auth/permission-check?path=...

The permission check validates the current session and requested action before
allowing protected order or resource operations.`,
  },
  {
    id: "resource-endpoints",
    title: "Resource Management",
    summary:
      "Resource routes load existing resources, search matching names, and add validated resources.",
    description: `GET  /api/resource/load
GET  /api/resource/search?name=
POST /api/resource/add

The resource form searches existing names and submits new resources through a
validated, permission-protected route.`,
  },
  {
    id: "pending-order-endpoint",
    title: "Create a Pending Order",
    summary:
      "The order workflow can save an in-progress request as Pending before it is assigned to a production slot.",
    description: `POST /api/order/mark-pending

Validates the pending-order payload and records a pending production order for
the scheduling workflow.`,
  },
  {
    id: "schedule-order-endpoint",
    title: "Schedule an Order",
    summary:
      "Scheduling validates dates, time ranges, resource assignment, and employee assignment before saving the order.",
    description: `POST /api/order/schedule

Input validation: Zod production-order schema
Schedule validation: future start time and valid end time
Conflict validation: existing orders for the same resource and employee
Result: update the order and record the scheduling action`,
  },
  {
    id: "reschedule-delete-endpoints",
    title: "Reschedule and Delete Orders",
    summary:
      "Permission checks protect order changes; deletion is soft so order history remains available.",
    description: `PATCH  /api/order/reschedule
DELETE /api/order/delete?orderId=

Reschedule checks the new schedule before updating it. Delete sets deletedAt
and records the action in the order log rather than removing the row.`,
  },
  {
    id: "order-data-endpoints",
    title: "Calendar, Employees, and Activity",
    summary:
      "Read routes supply calendar and chart data, employee choices, and the production activity log.",
    description: `GET /api/order/load
GET /api/order/load-employee
GET /api/order-log/load

These endpoints provide current order/resource data, employee assignment
options, and an activity history for the scheduler UI.`,
  },
];

const APIEndpoints = () => {
  return (
    <div className="tw-relative lg:tw-w-8/12 tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal">
      <div className="tw-w-full tw-mx-auto">
        <CarouselControlled
          wireframeslides={apiEndpointSlides.map((endpoint) => ({
            id: endpoint.id,
            custom: (
              <div className="tw-bg-[#17213a] tw-rounded-2xl tw-border tw-border-[#38bdf8]/30 tw-p-5 tw-shadow-md">
                <h4 className="tw-text-[#38bdf8] tw-font-semibold tw-mb-2 tw-text-lg">
                  {endpoint.title}
                </h4>
                <p className="tw-text-[#e0e7ef] tw-text-sm tw-mb-3">
                  {endpoint.summary}
                </p>
                <pre className="tw-bg-[#22315a] tw-rounded-lg tw-p-4 tw-text-xs tw-text-[#7dd3fc] tw-overflow-x-auto tw-font-mono tw-border tw-border-[#334155]/60">
                  <code>{endpoint.description}</code>
                </pre>
              </div>
            ),
          }))}
          width="100%"
          height="auto"
        />
      </div>
    </div>
  );
};

export default APIEndpoints;
