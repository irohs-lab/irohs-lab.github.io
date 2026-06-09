import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Loader from "./Loader";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import PublicationsPage from "./pages/PublicationsPage";
import TeamPage from "./pages/TeamPage";
import CodePage from "./pages/CodePage";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-[5%]">
      <div className="font-serif text-[4rem] text-lab-blue mb-3">404</div>
      <h1 className="font-serif text-2xl text-gray-900 mb-2">Page not found</h1>
      <p className="text-sm text-lab-muted mb-6">The page you're looking for doesn't exist.</p>
      <a href="/" className="text-sm font-semibold text-lab-blue hover:underline">← Back to home</a>
    </div>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) return <Loader onComplete={() => setLoaded(true)} />;

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/team"         element={<TeamPage />} />
          <Route path="/code"         element={<CodePage />} />
          <Route path="*"             element={<NotFound />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
