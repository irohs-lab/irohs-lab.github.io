import { Team } from "../components/Team";
import { usePageTitle } from "../hooks/usePageTitle";

export default function TeamPage() {
  usePageTitle("Team");
  return <Team />;
}
