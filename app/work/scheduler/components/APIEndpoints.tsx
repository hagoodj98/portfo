import CarouselControlled from "../../../components/Carousel";

const apiEndpointSlides = [
  {
    id: "scheduler-api-summary",
    title: "Scheduler API Summary",
    summary:
      "Covers resource management, production order lifecycle, status checks, search, and chart-loading endpoints.",
    description: `Endpoint groups:
  POST /api/add-resource
  GET  /api/check-production-order
  POST /api/create-production-order
  DELETE /api/delete-production-order
  POST /api/mark-pending
  GET  /api/search-resources?name=
  GET  /api/load-jobs-to-chart

Design goal:
  Keep workflow state transitions explicit and traceable for scheduler UI flows.`,
  },
  {
    id: "add-endpoint",
    title: "Add Production Order Endpoint",
    summary:
      "This endpoint allows users to create new production orders by submitting relevant data such as day, time, and resource details. It validates the input and adds the order to the database.",
    description: `POST /api/add-resource

Input:
  resource_name

What it does:
  - Validates payload
  - Creates resource record
  - Returns success/failure response`,
  },
  {
    id: "check-endpoint",
    title: "Check Production Order Endpoint",
    summary:
      "This endpoint allows users to check the status of existing production orders. It retrieves order details based on provided criteria such as date or resource.",
    description: `GET /api/check-production-order

What it does:
  - Loads orders pending status verification
  - Runs status update logic against scheduler rules
  - Returns updated order statuses`,
  },
  {
    id: "create-endpoint",
    title: "Create Production Order Endpoint",
    summary:
      "This endpoint allows users to create new production orders by submitting relevant data such as day, time, and resource details. It validates the input and adds the order to the database.",
    description: `POST /api/create-production-order

Input:
  productionOrder payload

What it does:
  - Validates date/time/resource constraints
  - Creates new order or updates pending order
  - Sets order status to Processing`,
  },
  {
    id: "delete-endpoint",
    title: "Delete Production Order Endpoint",
    summary:
      "This endpoint allows users to delete existing production orders by specifying the order ID. It ensures that the order is removed from the database and any associated resources are freed up.",
    description: `DELETE /api/delete-production-order

Input:
  orderId

What it does:
  - Validates target order
  - Removes order from persistence
  - Returns 404 when no matching order exists`,
  },
  {
    id: "mark-pending-endpoint",
    title: "Mark Pending Endpoint",
    summary:
      "This endpoint allows users to mark a production order as pending. It updates the order's status in the database, indicating that it is awaiting scheduling.",
    description: `POST /api/mark-pending

What it does:
  - Creates or updates an order in Pending state
  - Preserves scheduling intent before final processing
  - Returns the pending order id`,
  },
  {
    id: "search-resources-endpoint",
    title: "Search Resources Endpoint",
    summary:
      "This endpoint allows users to search for available resources based on specific criteria. It helps in finding the right resources for scheduling production orders.",
    description: `GET /api/search-resources?name=

What it does:
  - Performs case-insensitive prefix search
  - Returns matching resources for scheduler forms
  - Supports fast typeahead in UI`,
  },
  {
    id: "load-jobs-to-chart-endpoint",
    title: "Load Jobs to Chart Endpoint",
    summary:
      "This endpoint loads the scheduled jobs into the chart for visualization. It helps in tracking the status and timing of each job in the production schedule.",
    description: `GET /api/load-jobs-to-chart

What it does:
  - Loads resources with assigned orders
  - Returns chart-ready scheduling data
  - Powers timeline/board visualizations`,
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
