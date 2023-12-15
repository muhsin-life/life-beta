import { Content } from "@/types/api/page";

export const Gap = ({
  contentData,
}: {
  contentData: Content;
}) => {
  return <div>{contentData.section_title}</div>;
};
