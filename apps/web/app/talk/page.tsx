import type { Metadata } from "next";
import { TalkExperience } from "./TalkExperience";

export const metadata: Metadata = {
  title: "Talk to my AI — see the OS run, stage yours | Stuck.builders",
  description:
    "Will's AI operating system, live. Watch it run his business on the left. Chat with it on the right — it stages your version as you go. Then apply for The Build.",
  openGraph: {
    title: "Talk to my AI — see the OS run, stage yours",
    description:
      "Will's AI operating system, live. Chat with it — it stages your version as you go. Then apply for The Build.",
    url: "https://www.stuck.builders/talk",
    siteName: "stuck.builders",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talk to my AI — see the OS run, stage yours",
    description:
      "Will's AI operating system, live. Chat with it — it stages your version as you go. Then apply for The Build.",
  },
};

export default function TalkPage() {
  return <TalkExperience />;
}
