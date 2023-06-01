import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Select from "@/components/Select/Select";
import Menu from "./Menu/Menu";
import EditProfile from "./EditProfile/EditProfile";
import Password from "./Password/Password";
import Appearance from "./Appearance/Appearance";
import DeleteAccount from "./DeleteAccount/DeleteAccount";

type SettingsType = {
  id: string;
  title: string;
  icon: string;
};

type SettingsProps = {
  items: SettingsType[];
  activeItem?: number;
};

const Settings = ({ items, activeItem }: SettingsProps) => {
  const [active, setActive] = useState<any>(items[activeItem || 0]);

  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  return (
    <div className="p-12 lg:px-8 md:pt-16 md:px-5 md:pb-8">
      <div className="flex md:block">
        {isMobile ? (
          <Select
            className="mb-6"
            classButton="dark:bg-transparent"
            classArrow="dark:fill-n-4"
            items={items}
            value={active}
            onChange={setActive}
          />
        ) : (
          <div className="shrink-0 w-[13.25rem]">
            <Menu value={active} setValue={setActive} buttons={items} />
          </div>
        )}
        <div className="grow pl-12 md:pl-0">
          {active.id === "edit-profile" && <EditProfile />}
          {active.id === "password" && <Password />}
          {active.id === "appearance" && <Appearance />}
          {active.id === "delete-account" && <DeleteAccount />}
        </div>
      </div>
    </div>
  );
};

export default Settings;
