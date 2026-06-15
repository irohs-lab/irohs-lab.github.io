import { News } from "../components/News";
import { usePageTitle } from "../hooks/usePageTitle";

export default function NewsPage() {
  usePageTitle("News");
  return <News />;
}
