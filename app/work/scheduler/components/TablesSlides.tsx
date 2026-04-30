import React from "react";
import CarouselControlled from "../../../components/Carousel";
const posPostgresSlides = [
  {
    id: "productionorder",
    title: "ProductionOrder Table",
    summary:
      "The ProductionOrder table is designed to store metadata about production orders. It includes fields for day, start and end times, resource status, and a unique identifier. This structure allows for efficient querying and retrieval of production order information.",
    description: `model ProductionOrder {
  id             Int              @id @default(autoincrement())
  dayMonthYear   DateTime
  startTime      DateTime
  endTime        DateTime
  resourceStatus String
  resourceId     Int
  resource       SelectedResource @relation(fields: [resourceId], references: [id])
}`,
  },
  {
    id: "selectedresource",
    title: "SelectedResource Table",
    summary:
      "The SelectedResource table captures details about resources that can be assigned to production orders. It includes fields for resource name, type, and a unique identifier. This table is linked to the ProductionOrder table via a foreign key relationship, enabling efficient management of resource assignments.",
    description: `model SelectedResource {
  id           Int              @id @default(autoincrement())
  resourceName String
  resourceType String
  orders       ProductionOrder[]
}`,
  },
  {
    id: "resource",
    title: "Resource Table",
    summary:
      "The Resource table serves as a reference for all available resources in the scheduling system. It includes fields for resource name, type, and a unique identifier. This table is essential for managing and assigning resources to production orders effectively.",
    description: `model Resource {
  id           Int              @id @default(autoincrement())
  resourceName String
  resourceType String
}`,
  },
];

const TablesSlides = () => {
  return (
    <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-my-5">
      <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
        <div className="tw-py-10">
          <h3 className="tw-text-xl md:tw-text-2xl tw-text-bluegreen tw-font-boldonse">
            Prisma Schema - PostgreSQL Tables
          </h3>
          <div className="tw-w-28">
            <hr className="tw-h-2 tw-bg-bluegreen" />{" "}
          </div>
          <div>
            <p>
              The project uses Prisma as an ORM to define the database schema
              for PostgreSQL. The schema includes three main tables:
              ProductionOrder, SelectedResource, and Resource. Each table is
              designed to capture specific aspects of the scheduling system,
              with relationships defined to enable efficient data management and
              querying. The ProductionOrder table stores metadata about
              production orders, while the SelectedResource and Resource tables
              manage resource information and assignments.
            </p>
          </div>
        </div>
      </div>
      <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
        <div className="tw-w-full tw-mx-auto">
          <CarouselControlled
            wireframeslides={posPostgresSlides.map((table) => ({
              id: table.id,
              custom: (
                <div className="tw-bg-[#17213a] tw-rounded-2xl tw-border tw-border-[#38bdf8]/30 tw-p-5 tw-shadow-md">
                  <h4 className="tw-text-[#38bdf8] tw-font-semibold tw-mb-2 tw-text-lg">
                    {table.title}
                  </h4>
                  <p className="tw-text-[#e0e7ef] tw-text-sm tw-mb-3">
                    {table.summary}
                  </p>
                  <pre className="tw-bg-[#22315a] tw-rounded-lg tw-p-4 tw-text-xs tw-text-[#7dd3fc] tw-overflow-x-auto tw-font-mono tw-border tw-border-[#334155]/60">
                    <code>{table.description}</code>
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

export default TablesSlides;
