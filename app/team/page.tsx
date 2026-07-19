import type { Metadata } from "next";
import { TeamPage } from "@/components/TeamPage";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the team building ZAPP, Pakistan’s AI-powered electricity planning assistant.",
};

export default function Team() {
  return <TeamPage />;
}
