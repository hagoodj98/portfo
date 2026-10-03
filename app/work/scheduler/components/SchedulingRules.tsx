import React from "react";

const pipeline = [
  "Permission check: the session must allow this action (assign, reschedule, delete, add resource).",
  "Status guard: busy or completed orders cannot be modified, and busy orders cannot be deleted.",
  "Time validation: the start must be in the future and the end after the start.",
  "Conflict check: the same resource and employee cannot be double-booked.",
  "Persist and log: the order is saved and an OrderLog entry records what happened.",
];

const rules = [
  {
    tag: "Time validation",
    title: "Reject past and inverted time ranges",
    problem:
      "Users could submit a schedule in the past or with an end time before the start time.",
    solution:
      "timeScheduleValidator builds real date-times from the form fields and throws a CustomError before anything is saved.",
    code: `// app/validation/timeScheduleValidator.ts
if (startDateTime.isBefore(now)) {
  throw new CustomError('Start time must be in the future', 400);
}
if (endDateTime.isBefore(startDateTime)) {
  throw new CustomError('End time must be after start time', 400);
}`,
    video: true,
  },
  {
    tag: "Bug fix: time conflicts",
    title: "Prevent double-booking an employee",
    problem:
      "The same employee could be scheduled for overlapping time ranges on a resource. My first version also compared against every order, so pending placeholders and soft-deleted orders caused false conflicts.",
    solution:
      "checkTimeConflict only compares against active orders (not deleted, not pending) for the same resource, date, and employee, and throws a 403 on any overlap.",
    code: `// app/validation/timeConflictHelper.ts
const existing = (await productionOrder.findAll()).filter(
  (order) => !order.deletedAt && order.resourceStatus !== STATUSES.pending,
);
const conflict = existing
  .filter((order) => order.resourceId === resourceId)
  .find((order) => {
    const s = dayjs(order.startTime);
    const e = dayjs(order.endTime);
    return (
      dateScheduled.isSame(dayjs(order.dayMonthYear)) &&
      ((startTime.isAfter(s) && startTime.isBefore(e)) ||
        (endTime.isAfter(s) && endTime.isBefore(e)) ||
        (startTime.isSame(s) && endTime.isSame(e))) &&
      order.employeeAssigneeID === assignedEmployeeId
    );
  });
if (conflict) throw new CustomError('Time slot conflicts ...', 403);`,
  },
  {
    tag: "Bug fix: permissions",
    title: "Reassigned orders were not saved",
    problem:
      "A user with only the reschedule permission could open a pending order that someone else had started, but submitting it did nothing. The form hits the assign route, and that user was not allowed to assign.",
    solution:
      "In a real workflow the people who create schedules are also trusted to reschedule. For this project I added a temporary override: a user with reschedule can assign only when the request targets an existing order, so they can finish a pending order but never create a new one. The rest of the demo keeps the roles separate on purpose.",
    code: `// utils/CheckAuthHelper.ts
const hasPermission = payloadSession.permissions.find((p) => {
  if (p === permission || p === PERMISSIONS.all_access.name) return true;
  // Temporary override: reschedule may assign an EXISTING order only
  if (
    p === PERMISSIONS.reschedule.name &&
    permission === PERMISSIONS.assign.name &&
    hasOrderId
  ) {
    return true;
  }
  return false;
});`,
  },
];

const otherBugs = [
  {
    title: "Permission check failed on two-digit order IDs",
    text: "The auth helper split the URL path and took the last piece, which broke for IDs like 12, and a path like add-resource could be read as an order ID. Routes now pass a validated orderId, accepted only as a positive safe integer.",
  },
  {
    title: "Wrong employee saved on reschedule",
    text: "The audit trail recorded the wrong employee after a reschedule. The ID now comes from the verified session, and the log table shows a legend and a delete status.",
  },
  {
    title: "Busy orders could be deleted",
    text: "The delete route ignored order status. Deletes now check status first and are soft (deletedAt), so history stays intact.",
  },
  {
    title: "Pending request fired repeatedly",
    text: "A useEffect called sendPendingStatus on every re-run and created duplicate pending orders. It now runs only when the form has no orderId yet.",
  },
  {
    title: "Login loop and header flicker",
    text: "An effect re-triggered itself and a single boolean flipped mid-render. The effect is guarded, auth is an explicit state in context, and the form renders conditionally in Header.",
  },
];

const SchedulingRules = () => {
  return (
    <div className="tw-container tw-mx-auto tw-my-10 tw-p-5">
      <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse">
        Scheduling Business Rules and Bugs I Fixed
      </h3>
      <div className="tw-w-64">
        <hr className="tw-h-2 tw-bg-bluegreen" />
      </div>
      <p className="md:tw-w-2/3 tw-mt-3 tw-text-black">
        Every schedule, reschedule, and delete passes through the same server
        side checks, in this order. Most of the bugs I hit while the project
        grew were logic errors between these steps.
      </p>
      <ol className="tw-list-decimal tw-ml-6 tw-mt-3 tw-text-black md:tw-w-2/3">
        {pipeline.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>

      {rules.map((rule) => (
        <div
          key={rule.title}
          className="tw-mt-5 tw-rounded-lg tw-border tw-border-bluegreen/30 tw-bg-white tw-p-5 tw-shadow-sm"
        >
          <span className="tw-inline-flex tw-items-center tw-rounded-full tw-bg-bluegreen tw-text-white tw-text-xs tw-px-2 tw-py-1 tw-mb-3">
            {rule.tag}
          </span>
          <h4 className="tw-text-lg tw-font-bold tw-text-black tw-mb-2">
            {rule.title}
          </h4>
          <p className="tw-text-sm tw-text-black tw-mb-2">
            <strong>Problem:</strong> {rule.problem}
          </p>
          <p className="tw-text-sm tw-text-black tw-mb-3">
            <strong>Solution:</strong> {rule.solution}
          </p>
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4 tw-items-start">
            <pre
              className={
                "tw-bg-[#181f2a] tw-text-[#e0e0e0] tw-rounded tw-p-4 tw-text-xs tw-overflow-x-auto" +
                (rule.video ? "" : " md:tw-col-span-2")
              }
            >
              {rule.code}
            </pre>
          </div>
        </div>
      ))}

      <h4 className="tw-text-xl tw-font-bold tw-text-black tw-mt-8">
        More bugs worth mentioning
      </h4>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4 tw-mt-3">
        {otherBugs.map((bug) => (
          <div
            key={bug.title}
            className="tw-rounded-lg tw-border tw-border-bluegreen/30 tw-bg-white tw-p-5 tw-shadow-sm"
          >
            <h5 className="tw-text-base tw-font-bold tw-text-black tw-mb-2">
              {bug.title}
            </h5>
            <p className="tw-text-sm tw-text-black">{bug.text}</p>
          </div>
        ))}
      </div>
      <p className="tw-text-xs tw-text-gray-500 tw-mt-3">
        Sources: production-scheduler/app/validation/timeScheduleValidator.ts,
        app/validation/timeConflictHelper.ts, and utils/CheckAuthHelper.ts
      </p>
    </div>
  );
};

export default SchedulingRules;
