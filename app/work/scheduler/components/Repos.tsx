import React from "react";
import CarouselControlled from "../../../components/Carousel";

const repositorySlides = [
  {
    id: "production-order-repository",
    title: "Production Order Repository",
    summary:
      "Centralizes production-order queries and updates, including status-check data and soft deletion.",
    description: `const findAllForStatusCheck = () => {
  return prisma.productionOrder.findMany({
    select: {
      id: true,
      dayMonthYear: true,
      startTime: true,
      endTime: true,
      employee: {
        select: {
          employeeId: true,
          name: true,
        },
      },
      resourceStatus: true,
      resourceId: true,
    },
  });
};

const softRemove = (id: number) => {
  return prisma.productionOrder.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};`,
  },
  {
    id: "selected-resource-repository",
    title: "Selected Resource Repository",
    summary:
      "Provides the resource records used by the schedule and their related production orders.",
    description: `const findByNameOrThrow = (resource_name: string) => {
  return prisma.selectedResource.findFirstOrThrow({
    where: { resource_name },
  });
};

const findAll = () => {
  return prisma.selectedResource.findMany();
};`,
  },
  {
    id: "resource-catalog-repository",
    title: "Resource Catalog Repository",
    summary:
      "Searches resource names case-insensitively and creates catalog entries without duplicating existing names.",
    description: `const findByNamePrefix = (name: string) => {
  return prisma.resource.findMany({
    where: {
      resource_name: {
        startsWith: name,
        mode: "insensitive",
      },
    },
    orderBy: { resource_name: "asc" },
    take: 100,
  });
};

const upsert = (resource_name: string) => {
  return prisma.resource.upsert({
    where: { resource_name },
    create: { resource_name },
    update: {},
  });
};`,
  },
  {
    id: "user-repository",
    title: "User Repository",
    summary:
      "Creates seeded employee accounts, looks up sign-in accounts by employee ID, and returns worker records without private fields.",
    description: `const getAll = async () => {
  return prisma.user.findMany({
    where: { role: "worker" },
    omit: {
      password: true,
      email: true,
      admin_key: true,
      id: true,
      role: true,
    },
  });
};`,
  },
  {
    id: "permission-repositories",
    title: "Permission and User-Permission Repositories",
    summary:
      "Stores permission names and retrieves each user's assigned permissions for session authorization.",
    description: `const find = (userId: number) => {
  return prisma.userPermission.findMany({
    where: { userId },
    include: { permission: true },
  });
};

const createPermissions = (data: { name: string }[]) => {
  return prisma.permission.createMany({
    data: data.map(({ name }) => ({ name })),
  });
};`,
  },
  {
    id: "order-log-repository",
    title: "Order Log Repository",
    summary:
      "Creates and updates activity records, and loads log entries joined with employee, order status, and resource information.",
    description: `const getAllOrderLogs = async () => {
  return prisma.orderLog.findMany({
    select: {
      id: true,
      orderId: true,
      employeeId: true,
      employee: {
        select: { name: true, role: true, employeeId: true },
      },
      order: {
        select: {
          resourceStatus: true,
          resource: { select: { resource_name: true } },
        },
      },
      description: true,
      creationDate: true,
    },
  });
};`,
  },
];

const ReposSlides = () => {
  return (
    <div className="tw-flex tw-flex-col tw-gap-8 tw-mt-8">
      <div className="tw-bg-[#17213a] tw-rounded-2xl tw-border tw-border-[#38bdf8]/30 tw-p-5 tw-shadow-md tw-w-full">
        <h4 className="tw-text-[#38bdf8] tw-font-semibold tw-mb-3 tw-text-lg">
          Repository Layer
        </h4>
        <CarouselControlled
          wireframeslides={repositorySlides.map((repository) => ({
            id: repository.id,
            custom: (
              <div>
                <h5 className="tw-text-[#38bdf8] tw-font-semibold tw-mb-2 tw-text-base">
                  {repository.title}
                </h5>
                <p className="tw-text-[#e0e7ef] tw-text-sm tw-mb-3">
                  {repository.summary}
                </p>
                <pre className="tw-bg-[#22315a] tw-rounded-lg tw-p-4 tw-text-xs tw-text-[#7dd3fc] tw-overflow-x-auto tw-font-mono tw-border tw-border-[#334155]/60">
                  <code>{repository.description}</code>
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

export default ReposSlides;
