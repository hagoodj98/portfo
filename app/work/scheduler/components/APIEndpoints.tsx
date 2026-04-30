import CarouselControlled from "../../../components/Carousel";

const apiEndpointSlides = [
  {
    id: "add-endpoint",
    title: "Add Production Order Endpoint",
    summary:
      "This endpoint allows users to create new production orders by submitting relevant data such as day, time, and resource details. It validates the input and adds the order to the database.",
    description: `POST /api/add-resource\n\n{\n  export async function POST(req: NextRequest) {
  try {
    const rawData = await req.json();

    const addResource = resourceSchema.parse(rawData).resource_name;

    await selectedResourceRepository.create(addResource);

    return NextResponse.json({ message:  received endpoint }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to add resource" },
      { status: 500 },
    );
  }
}`,
  },
  {
    id: "check-endpoint",
    title: "Check Production Order Endpoint",
    summary:
      "This endpoint allows users to check the status of existing production orders. It retrieves order details based on provided criteria such as date or resource.",
    description: `GET /api/check-production-order\nexport async function POST() {
  try {
    const getAllRequestedJobs =
      await productionOrderRepository.findAllForStatusCheck();
    try {
      loopThroughScheduledJobs(getAllRequestedJobs);
    } catch (error) {
      if (error instanceof CustomError) {
        return NextResponse.json(
          { message: error.message },
          { status: error.statusCode },
        );
      }
      return NextResponse.json(
        { message: "Unknown error in task processing" },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to check order status" },
      { status: 500 },
    );
  }

  return NextResponse.json({ message: "updated orders" });
}`,
  },
  {
    id: "create-endpoint",
    title: "Create Production Order Endpoint",
    summary:
      "This endpoint allows users to create new production orders by submitting relevant data such as day, time, and resource details. It validates the input and adds the order to the database.",
    description: `POST /api/create-production-order\n\n{\n  export async function POST(req: NextRequest) {
  const rawData = await req.json();
  const order = productionOrderSchema.parse(
    rawData.productionOrder ?? rawData.order,
  );
  try {
    // If orderId exists, update the pending order to Processing. Otherwise create a new one.
    if (orderId) {
      // Update the pending order that was created by mark-pending
      await productionOrderRepository.update(orderId, {
        dayMonthYear: date.toDate(),
        startTime: startTime.toDate(),
        endTime: endTime.toDate(),
        resourceId: retrievedId,
        resourceStatus: "Processing",
      });
      return NextResponse.json(
        {
          message: Updated order ${"${orderId}"} to Processing status,
          orderId: orderId,
        },
        { status: 200 },
      );
    } else {
      // Fallback: create new order if no pending order exists
      const createdOrder = await productionOrderRepository.create({
        dayMonthYear: date.toDate(),
        startTime: startTime.toDate(),
        endTime: endTime.toDate(),
        resourceId: retrievedId,
        resourceStatus: "Processing",
      });
      return NextResponse.json(
        {
          message: Created new order ${"${createdOrder.id}}"},
          orderId: createdOrder.id,
        },
        { status: 200 },
      );
    }
  } 
}) `,
  },
  {
    id: "delete-endpoint",
    title: "Delete Production Order Endpoint",
    summary:
      "This endpoint allows users to delete existing production orders by specifying the order ID. It ensures that the order is removed from the database and any associated resources are freed up.",
    description: `DELETE /api/delete-production-order\n\nRequest Body:\nexport async function POST(req: NextRequest) {
      try {
        const body = await req.json();
        const { orderId } = body as { orderId?: number };
    
        if (!orderId) {
          return NextResponse.json(
            { error: "orderId is required" },
            { status: 400 },
          );
        }
    
        const result = await productionOrderRepository.remove(orderId);
    
        if (!result) {
          return NextResponse.json(
            { message: "No matching order found" },
            { status: 404 },
          );
        }
    
        return NextResponse.json(
          { message: "Order deleted successfully" },
          { status: 200 },
        );
      } catch (error) {
        console.error("Delete order failed", error);
        return NextResponse.json(
          { error: "Internal server error" },
          { status: 500 },
        );
      }
    }
    `,
  },
  {
    id: "mark-pending-endpoint",
    title: "Mark Pending Endpoint",
    summary:
      "This endpoint allows users to mark a production order as pending. It updates the order's status in the database, indicating that it is awaiting scheduling.",
    description: `POST /api/mark-pending\n\nRequest Body:\n
    export async function POST(req: NextRequest) {
        const rawData = await req.json();
        const { order, existingOrder } =
          await markPendingRequestSchema.parseAsync(rawData);
        if (!existingOrder) {
          // Best practice: convert to JS Date when saving with Prisma
          const createdOrder = await productionOrderRepository.create({
            dayMonthYear: date.toDate(), // Prisma DateTime
            startTime: startTime.toDate(),
            endTime: endTime.toDate(),
            resourceId: retrievedId,
            resourceStatus: "Pending",
          });
    
          return NextResponse.json(
            {
              message: "succeed",
              orderId: createdOrder.id,
            },
            { status: 200 },
          );
        } else {
          const updatedOrder = await productionOrderRepository.update(
            order.orderId!,
            {
              dayMonthYear: date.toDate(), // Prisma DateTime
              startTime: startTime.toDate(),
              endTime: endTime.toDate(),
              resourceId: retrievedId,
              resourceStatus: "Pending",
            },
          );
          return NextResponse.json(
            {
              message: "succeed",
              orderId: updatedOrder.id,
            },
            { status: 200 },
          );
        }
      } 
    }
    `,
  },
  {
    id: "search-resources-endpoint",
    title: "Search Resources Endpoint",
    summary:
      "This endpoint allows users to search for available resources based on specific criteria. It helps in finding the right resources for scheduling production orders.",
    description: `POST /api/search-resources\n\nRequest Body:\nexport async function GET(request: NextRequest) {
      const { searchParams } = new URL(request.url);
      const name = searchParams.get("name") || "";
    
      // Use a case-insensitive "startsWith" search so queries like "Pr" match "Press #1"
      const dbResources = await resourceRepository.findByNamePrefix(name);
    
      return NextResponse.json({
        resources: dbResources,
      });
    }
    `,
  },
  {
    id: "load-jobs-to-chart-endpoint",
    title: "Load Jobs to Chart Endpoint",
    summary:
      "This endpoint loads the scheduled jobs into the chart for visualization. It helps in tracking the status and timing of each job in the production schedule.",
    description: `GET /api/load-jobs-to-chart\n\nexport async function GET() {
  const ResourceProductionOrders =
    await selectedResourceRepository.findAllWithOrders();

  return NextResponse.json({ ResourceProductionOrders }, { status: 200 });
}
    `,
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
