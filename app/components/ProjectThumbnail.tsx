const ProjectThumbnail = ({
  projectUrl,
  projectName,
  link,
}: {
  projectUrl: string;
  projectName: string;
  link: string;
}) => {
  return (
    <div
      className={`tw-h-[290px] tw-group tw-relative tw-overflow-hidden tw-group  tw-bg-no-repeat tw-bg-center tw-bg-cover`}
      style={{ backgroundImage: `url(${projectUrl ? projectUrl : ""})` }}
    >
      <a href={link}>
        <div className="tw-absolute tw-flex tw-justify-center tw-items-center tw-bg-yellow tw-w-full tw-h-full tw-opacity-0 group-hover:tw-opacity-100">
          <h5 className="tw-text-white tw-font-bold">{projectName}</h5>
        </div>
      </a>
    </div>
  );
};
export default ProjectThumbnail;
