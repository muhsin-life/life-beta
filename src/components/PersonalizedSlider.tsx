import { Content } from "@/types/api/page";

export const PersonalizedSlider = ({
  contentData,
}: {
  contentData: Content;
}) => {
  return <div>{contentData.section_title}</div>;
};
