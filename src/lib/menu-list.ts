import {
  Users,
  LayoutGrid,
  Group,
  Calendar,
  Flame,
  MessageCircleHeartIcon,
  Settings2,
  Box,
  OctagonAlert,
  Footprints,
  PersonStanding,
  Music2,
  Bird
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/",
          label: "overview",
          active: pathname.includes("/overview"),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "society",
      menus: [
        {
          href: "/excos",
          label: "excos",
          active: pathname.includes("/excos"),
          icon: Bird,
          submenus: []
        },
        {
          href: "/cheers",
          label: "cheers",
          active: pathname.includes("/cheers"),
          icon: Music2,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "contents",
      menus: [
        {
          href: "/rundown",
          label: "rundown",
          active: pathname.includes("/rundown"),
          icon: Calendar,
          submenus: []
        },
        {
          href: "/groups",
          label: "groups",
          active: pathname.split("/").length === 3 && pathname.includes("/groups"),
          icon: Flame,
          submenus: []
        },
        {
          href: "/campfire-steps",
          label: "campfire-steps",
          active: pathname.includes("/campfire-steps"),
          icon: Footprints,
          submenus: []
        },
        {
          href: "/sponsors",
          label: "sponsors",
          active: pathname.includes("/sponsors"),
          icon: MessageCircleHeartIcon,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "reminder",
      menus: [
        {
          href: "/needs",
          label: "needs",
          active: pathname.includes("/needs"),
          icon: Box,
          submenus: []
        },
        {
          href: "/precaution",
          label: "precaution",
          active: pathname.includes("/precaution"),
          icon: OctagonAlert,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "management",
      menus: [
        {
          href: "",
          label: "user-groups",
          active: pathname.includes("/user-groups"),
          icon: Users,
          submenus: [
            {
              href: "/user-groups/users",
              label: "ug-users",
              active: pathname.includes("/user-groups/users")
            },
            {
              href: "/user-groups/roles",
              label: "ug-roles",
              active: pathname.includes("/user-groups/roles")
            },
            {
              href: "/user-groups/groups",
              label: "ug-groups",
              active: pathname.includes("/user-groups/groups")
            }
          ]
        },
        {
          href: "/settings",
          label: "settings",
          active: pathname.includes("/settings"),
          icon: Settings2,
          submenus: []
        }
      ]
    }
  ];
}
