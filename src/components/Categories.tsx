import { ChevronDown } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { CATGEORY_ITEMS } from "@/config";

export const Categories = () => {
  return (
    <div className="flex flex-1 flex-grow w-full bg-white h-12 border-b items-center ">
      <MaxWidthWrapper className="h-full">
        <div className="w-full flex  h-full py-1 gap-1.5">
          <button className="w-64 flex  hover:bg-blue-50 rounded-lg  items-center justify-between border-r border-slate-100 h-full px-3 group ">
            <h5 className="font-medium text-blue-500 ">SHOP BY CATEGORY</h5>
            <ChevronDown className="w-4 h-4" />
          </button>
          {CATGEORY_ITEMS.map((item) => (
            <button className="px-3 flex items-center gap-1 hover:bg-accent rounded-lg text-slate-700 ">
              <h5 className="font-medium">{item}</h5>
              <ChevronDown className="w-4 h-4" />
            </button>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
