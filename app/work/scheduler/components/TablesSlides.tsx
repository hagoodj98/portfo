import React from "react";
import CarouselControlled from "../../../components/Carousel";

const schemaSlides = [
  {
    id: "production-order-model",
    title: "ProductionOrder",
    summary:
      "Stores the scheduled date and time, status, selected resource, assigned employee, timestamps, soft-delete state, and related order-log entries.",
    description: `model ProductionOrder {
  id                  Int      @id @default(autoincrement())
  dayMonthYear        DateTime
  startTime           DateTime
  endTime             DateTime
  resourceStatus      String
  resourceId          Int
  employeeAssigneeID  String
  creationDate        DateTime @default(now())
  updatedAt           DateTime @updatedAt
  deletedAt           DateTime?
  orderLogs           OrderLog[]
  employee            User @relation(fields: [employeeAssigneeID], references: [employeeId])
  resource            SelectedResource @relation(fields: [resourceId], references: [id])
}`,
  },
  {
    id: "resource-models",
    title: "Resource and SelectedResource",
    summary:
      "The resource catalog is kept separate from the selected resources assigned to production orders.",
    description: `model Resource {
  id            Int    @id @default(autoincrement())
  resource_name String @unique
}

model SelectedResource {
  id               Int               @id @default(autoincrement())
  resource_name    String            @unique
  productionOrders ProductionOrder[]
}`,
  },
  {
    id: "user-permission-models",
    title: "Users and Permissions",
    summary:
      "Users connect to production orders and use join records to receive named permissions.",
        description: `model User {
      id               Int              @id @default(autoincrement())
      email            String           @unique
      name             String
      employeeId       String           @unique
      password         String
      role             String
      admin_key        String?
      userPermissions  UserPermission[]
      orderLogs        OrderLog[]
      productionOrders ProductionOrder[]
}

model Permission {
  id              Int              @id @default(autoincrement())
  name            String           @unique
  userPermissions UserPermission[]
}`,
  },
  {
    id: "user-permission-join-model",
    title: "UserPermission",
    summary:
      "The join model represents each permission granted to a user.",
    description: `model UserPermission {
  id           Int        @id @default(autoincrement())
  userId       Int
  permissionId Int
  user         User       @relation(fields: [userId], references: [id])
  permission   Permission @relation(fields: [permissionId], references: [id])
}`,
  },
  {
    id: "order-log-model",
    title: "OrderLog",
    summary:
      "Stores the employee, optional related order, timestamp, and description for production activity history.",
    description: `model OrderLog {
  id           Int      @id @default(autoincrement())
  orderId      Int?
  employeeId   String
  creationDate DateTime @default(now())
  description  String
  order        ProductionOrder? @relation(fields: [orderId], references: [id])
  employee     User @relation(fields: [employeeId], references: [employeeId])
}`,
  },
];

const TablesSlides = () => {
  return (
    <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-my-5">
      <div className="lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
        <div className="tw-py-10">
          <h3 className="tw-text-xl md:tw-text-2xl tw-text-bluegreen tw-font-boldonse">
            Prisma Schema - PostgreSQL Models
          </h3>
          <div className="tw-w-28">
            <hr className="tw-h-2 tw-bg-bluegreen" />{" "}
          </div>
          <div>
            <p>
              Prisma models the production workflow, resource catalog,
              employee accounts, permission assignments, and order activity.
              Relations connect orders to their selected resources and assigned
              employees, while soft-deletion timestamps and order logs preserve
              historical context.
            </p>
          </div>
        </div>
      </div>
      <div className="tw-relative lg:tw-w-8/12 tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal">
        <div className="tw-w-full tw-mx-auto">
          <CarouselControlled
            wireframeslides={schemaSlides.map((model) => ({
              id: model.id,
              custom: (
                <div className="tw-bg-[#17213a] tw-rounded-2xl tw-border tw-border-[#38bdf8]/30 tw-p-5 tw-shadow-md">
                  <h4 className="tw-text-[#38bdf8] tw-font-semibold tw-mb-2 tw-text-lg">
                    {model.title}
                  </h4>
                  <p className="tw-text-[#e0e7ef] tw-text-sm tw-mb-3">
                    {model.summary}
                  </p>
                  <pre className="tw-bg-[#22315a] tw-rounded-lg tw-p-4 tw-text-xs tw-text-[#7dd3fc] tw-overflow-x-auto tw-font-mono tw-border tw-border-[#334155]/60">
                    <code>{model.description}</code>
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
