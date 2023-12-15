import { Content } from "@/types/api/page";
import { cn } from "@/lib/utils";
import { Gap } from "./Gap";
import { ProductGrid } from "./ProductGrid";
import { PersonalizedSlider } from "./PersonalizedSlider";
import { Blog } from "./Blog";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { DynamicGrid } from "./DynamicGrid";
import { DynamicSliderGrid } from "./DynamicSliderGrid";

export const PageStructure = ({ content }: { content: Content }) => {
  const { hide_in_mobile_web = false, hide_in_desktop_web = false } =
    content.settings;

  const isHideInMobile = hide_in_mobile_web;
  const isHideInDesktop = hide_in_desktop_web;

  const getPageComponent = (
    supportedDeviceType: SupportedDeviceType[] | null
  ) => {
    switch (content.section_type) {
      case "dynamic_grid":
        return <DynamicGrid contentData={content} />;
      case "dynamic_slider_grid":
        return supportedDeviceType?.map((deviceType) => (
          <DynamicSliderGrid
            key={`${content.order_id}-${content.order_id}`}
            contentData={content}
            deviceType={deviceType}
          />
        ));
      case "gap":
        return <Gap contentData={content} />;
      case "product_grid":
        return <ProductGrid contentData={content} />;
      case "personalized_slider":
        return <PersonalizedSlider contentData={content} />;
      case "blog":
        return <Blog contentData={content} />;
      default:
        return <div></div>;
    }
  };

  const getSupportedDevicetypes = (): SupportedDeviceType[] | null => {
    if (isHideInDesktop === true && isHideInMobile === true) {
      return null;
    } else if (isHideInDesktop === true && isHideInMobile === false) {
      return ["mobile"];
    } else if (isHideInDesktop === false && isHideInMobile === true) {
      return ["desktop"];
    } else {
      return ["mobile", "desktop"];
    }
  };

  return getSupportedDevicetypes() !== null ? (
    <MaxWidthWrapper>
      <div
        className={cn({
          "sm:hidden block": isHideInDesktop,
          "sm:block hidden": isHideInMobile,
        })}
      >
        {getPageComponent(getSupportedDevicetypes())}
      </div>
    </MaxWidthWrapper>
  ) : (
    <></>
  );
};
