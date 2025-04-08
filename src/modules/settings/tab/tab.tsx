import Icon from "@/components/reusables/AppIcon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SettingsTabLinks } from "@/models/types";
import useSettingStore from "@/store/useSettingStore";

const tabLinks: SettingsTabLinks[] = [
  { name: "profile", icon: "profile", activeIcon: "profile-active" },
  { name: "calendar", icon: "calendar", activeIcon: "calendar-active" },
  { name: "payment", icon: "hand-money", activeIcon: "hand-money-active" },
  {
    name: "teaching profile",
    icon: "teaching-profile",
    activeIcon: "teaching-profile-active",
  },
  {
    name: "credentials",
    icon: "credentials",
    activeIcon: "credentials-active",
  },
  { name: "fees", icon: "payment", activeIcon: "payment-active" },
  { name: "location", icon: "location-light", activeIcon: "location-filled" },
];

const SettingsTab = () => {
  const { activeTab, setActiveTab } = useSettingStore();

  return (
    <div>
      <ul className="flex overflow-x-auto">
        {tabLinks.map((tab) => (
          <li key={tab.name} className="flex items-center">
            <Button
              type="button"
              className={cn(
                "px-6 h-14 font-normal text-sm/[19.6px] text-neutral-500 transition-all duration-200",
                activeTab === tab.name
                  ? "capitalize font-medium text-neutral-950 bg-primary-50 rounded"
                  : "hover:bg-neutral-100"
              )}
              onClick={() => setActiveTab(tab.name)}
            >
              <Icon
                icon={activeTab === tab.name ? tab.activeIcon : tab.icon}
                width={20}
                height={20}
              />
              {tab.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingsTab;
