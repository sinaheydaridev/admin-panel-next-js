export enum AppThemeMode {
  dark = "dark",
  light = "light",
  system = "system",
}

export enum ProfileThemeMode {
  pink = "pink",
  warning = "warning",
  gold = "gold",
  success = "success",
  info = "info",
  secondary = "secondary",
  grey = "grey",
}

export enum AppRoute {
  home = "/home",
  events = "/home/events",
  communities = "/manage/communities",
  audience = "/home/audience",
  newsletters = "/home/newsletters",
  createNewsletters = "/home/newsletters/create",
  insights = "/home/insights",
  settings = "/home/settings",
  logout = "/logout",
  profile = "/profile",
  eventDetail = "/manage/:id",
  createEvent = "/manage/create-event",
}
