export interface ISidebarRoute {
  name: string;
  href: string;
}

export interface ISidebar extends ISidebarRoute {
  subRoutes?: ISidebarRoute[];
}