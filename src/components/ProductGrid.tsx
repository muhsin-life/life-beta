import { Content } from "@/types/api/page";

export const ProductGrid = ({
  contentData,
}: {
  contentData: Content;
}) => {
  return <div>{contentData.section_title}</div>;
};
