import { getOptionalMessages } from "@/lib/messages";

import { NotFoundPanel } from "@/components/site/not-found-panel";

export default function RootNotFound() {
  return <NotFoundPanel locale="en" messages={getOptionalMessages("en")} />;
}
