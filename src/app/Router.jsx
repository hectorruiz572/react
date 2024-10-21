import { HashRouter, Route, Routes } from "react-router-dom";
import Alta from "../pages/Alta";
import Baja from "../pages/Baja";
import Consulta from "../pages/Consulta";
import Layout from "../Layout/Layout";

const Router = () => (
  <HashRouter basename="/react">
    <Layout>
      <Routes>
        <Route index element={<Consulta />} />
        <Route path="/Alta" element={<Alta />} />
        <Route path="/Baja" element={<Baja />} />
      </Routes>
    </Layout>
  </HashRouter>
);

export default Router;
