import { useState } from "react";
import Menu from "@/components/Menu/Menu";
import Link from "next/link";

import { navigation } from "@/constants/navigation";

type MainProps = {};

const Main = ({}: MainProps) => {
  return (
    <>
      <div className="grow px-10 py-20 overflow-y-auto scroll-smooth scrollbar-none 2xl:py-12 md:px-4 md:pt-0 md:pb-6">
        <div className="mb-10 text-center">
          <div className="h3 leading-[4rem] 2xl:mb-2 2xl:h4">
            AI Gaming Companion
          </div>
          <div className="body1 text-n-4 2xl:body1S">
            Chat with the first AI trained on game info!
          </div>
        </div>
        <Menu className="max-w-[30.75rem] mx-auto" items={navigation} />
        <div className="mt-4 text-center">
          <Link className="text-primary-1 font-medium text-base" href={"/"}>
            Vote on the next game!
          </Link>
        </div>
      </div>
    </>
  );
};

export default Main;
