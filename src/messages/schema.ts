export type SiteMessages =
  | typeof import("@/messages/locales/en").en
  | typeof import("@/messages/locales/tr").tr
  | typeof import("@/messages/locales/ar").ar
  | typeof import("@/messages/locales/de").de
  | typeof import("@/messages/locales/fr").fr;
