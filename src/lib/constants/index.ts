import githubIcon from '@/assets/icons/github.svg?raw';

export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Articles",
    href: "/articles",
  },
  {
    label: "Projects",
    href: "/projects",
  },
] as const;

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/raufzer",
    icon: githubIcon,
    type: "svg" as const
  },
  {
    name: "LinkedIn", 
    url: "https://linkedin.com/in/raufzer",
    type: "component" as const
  },
  {
    name: "X",
    url: "https://x.com/raufzer",
    type: "component" as const
  }
];