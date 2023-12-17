import { Content } from "@/types/api/page";
import Link from "next/link";
import { useProducts } from "./hooks/useProducts";

export const ProductGrid = ({ contentData }: { contentData: Content }) => {
  const sectionTitle = contentData.section_data_object?.title;
  const slug = contentData.section_data_object?.slug;
  const type_key = contentData.section_data_object?.type_key;
  const type_value = contentData.section_data_object?.type_value;

  const generatePath = () => {
    switch (type_key) {
      case "page":
        return `/${slug}`;
      case "category":
        return `/products?categories=${slug}`;
      case "collection":
        return `/products?collections=${slug}`;
      case "brand":
        return `/products?brands=${slug}`;
      case "link":
        return type_value ?? "#";
      case "product":
        return `/product/${slug}`;
      case "clinic-appointment-screen":
        return "/medical-centre";
      default:
        return "#";
    }
  };

  const { data } = useProducts(type_key as string, slug as string);

  console.log();
  

  return (
    <section className="py-12">
      <div className="md:flex md:items-center md:justify-between mb-4">
        <div className="max-w-2xl px-4 lg:max-w-4xl lg:px-0">
          {sectionTitle ? (
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {sectionTitle}
            </h1>
          ) : null}

          {/* {subtitle ? (
            <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          ) : null} */}
        </div>

        {slug ? (
          <Link
            href={generatePath()}
            className="hidden text-sm font-medium text-blue-600 hover:text-blue-500 md:block"
          >
            Shop the collection <span aria-hidden="true">&rarr;</span>
          </Link>
        ) : null}
      </div>

      <div className="relative">
        <div className="mt-6 flex items-center w-full">
          <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
            {/* {map.map((product, i) => (
              <ProductListing
                key={`product-${i}`}
                product={product}
                index={i}
              />
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};
