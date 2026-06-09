import { Code } from "../components/Code";
import { usePageTitle } from "../hooks/usePageTitle";

export default function CodePage() {
  usePageTitle("Code");
  return <Code />;
}
