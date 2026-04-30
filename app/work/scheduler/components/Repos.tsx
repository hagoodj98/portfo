import React from "react";
import CarouselControlled from "../../../components/Carousel";
const repositorySlides = [
  {
    id: "production-order-repositoryfindalls",
    title: "ProductionOrder Repository: findAllForStatusCheck, findAll",
    summary:
      "This repository method retrieves all production orders with the specific fields needed for status checking. It is optimized to return only the necessary data for the cron job that updates order statuses in real time.",
    description: `const findAll = () => {
      return prisma.productionOrder.findMany({
        include: {
          resource: true,
        },
      });
    };
    
    const findAllForStatusCheck = () => {
      return prisma.productionOrder.findMany({
        select: {
          id: true,
          dayMonthYear: true,
          startTime: true,
          endTime: true,
          resourceStatus: true,
          resourceId: false,
        },
      });
    };
    
    const findByIdOrThrow = (id: number) => {
      return prisma.productionOrder.findUniqueOrThrow({
        where: { id },
      });
    };
    
    const create = (data: ProductionOrderWriteInput) => {
      return prisma.productionOrder.create({ data });
    };
    
    const update = (id: number, data: ProductionOrderWriteInput) => {
      return prisma.productionOrder.update({
        where: { id },
        data,
      });
    };
    
    const remove = (id: number) => {
      return prisma.productionOrder.delete({
        where: { id },
      });
    };
    `,
  },
  {
    id: "resource-repositoryfindbynameprefix",
    title: "Resource Repository: findByNamePrefix",
    summary:
      "This repository method allows for searching resources by a name prefix. It performs a case-insensitive search and returns a list of matching resources, which is useful for the resource search functionality in the scheduling system.",
    description: `const findAll = () => {
  return prisma.resource.findMany();
};

const findByNamePrefix = (name: string) => {
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
  `,
  },
  {
    id: "selected-resource-repositoryfindallwithorders",
    title: "SelectedResource Repository: findAllWithOrders",
    summary:
      "This repository method retrieves all selected resources along with their associated production orders. It is designed to provide a comprehensive view of resource assignments and their scheduled jobs, which is essential for managing and optimizing the production schedule.",
    description: `const findAllWithOrders = () => {
  return prisma.selectedResource.findMany({
    select: {
      id: true,
      resource_name: true,
      productionOrders: {
        select: {
          id: true,
          dayMonthYear: true,
          startTime: true,
          endTime: true,
          resourceStatus: true,
          resourceId: true,
        },
      },
    },
  });
};
const findByNameOrThrow = (resource_name: string) => {
  return prisma.selectedResource.findFirstOrThrow({
    where: { resource_name },
  });
};

const findByIdOrThrow = (id: number) => {
  return prisma.selectedResource.findFirstOrThrow({
    where: { id },
  });
};

const create = (resource_name: string) => {
  return prisma.selectedResource.create({
    data: { resource_name },
  });
};
`,
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
          wireframeslides={repositorySlides}
          width="100%"
          height="auto"
        />
      </div>
    </div>
  );
};

export default ReposSlides;
