import { Routes, Route } from "react-router";

import { RootLayout } from "./layouts/RootLayout";

import { ContextScoreboard } from "./pages/ContextScoreboard";
import { ZustandScoreboard } from "./pages/ZustandScoreboard";
import { ReduxScoreboard } from "./pages/ReduxScoreboard";
import { TanstackScoreboard } from "./pages/TanstackScoreboard";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<ContextScoreboard />} />
        <Route path="zustand" element={<ZustandScoreboard />} />
        <Route path="redux" element={<ReduxScoreboard />} />
        <Route path="tanstack" element={<TanstackScoreboard />} />
      </Route>
    </Routes>
  );
}

export default App;
