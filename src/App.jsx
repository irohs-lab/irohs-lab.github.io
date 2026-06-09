import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Loader from "./Loader";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import PublicationsPage from "./pages/PublicationsPage";
import TeamPage from "./pages/TeamPage";
import CollaboratorsPage from "./pages/CollaboratorsPage";
import CodePage from "./pages/CodePage";
import ContactPage from "./pages/ContactPage";

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
          <Route path="/collaborators"element={<CollaboratorsPage />} />
          <Route path="/code"         element={<CodePage />} />
          <Route path="/contact"      element={<ContactPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
