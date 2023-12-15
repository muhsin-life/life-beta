import { Content } from "@/types/api/page";

export const Blog = ({
  contentData,
}: {
  contentData: Content;
}) => {
  return <div>{contentData.section_title}</div>;
};
