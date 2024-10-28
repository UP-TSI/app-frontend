import React from "react";
import MainDashboard from "./pages/main-dashboard/MainDashboard";
import { ContextWrapper } from "./Context";

export const App = () => {
  return (
    <ContextWrapper>
      <MainDashboard />
    </ContextWrapper>
  );
};

export default App;