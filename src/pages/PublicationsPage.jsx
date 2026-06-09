import { Publications } from "../components/Publications";
import { usePageTitle } from "../hooks/usePageTitle";

export default function PublicationsPage() {
  usePageTitle("Publications");
  return <Publications />;
}
