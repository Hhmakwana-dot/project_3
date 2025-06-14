import { Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage/AuthPage.jsx";
import { PageLayout } from "./Layouts/PageLayout/PageLayout.jsx";
import { Sidebar } from "./components/Sidebar/Sidebar.jsx";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage.jsx";
function App() {
  return (
    <>
      <PageLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/:username' element={<ProfilePage />} />

        </Routes>
      </PageLayout>
    </>
  )
}

export default App
