import { Content } from "@/types/api/page";

export const DynamicGrid = ({
  contentData,
}: {
  contentData: Content;
}) => {
  return <div>{contentData.section_title}</div>;
};
