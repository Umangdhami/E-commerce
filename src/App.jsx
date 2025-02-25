import { BrowserRouter, Route, Routes } from "react-router-dom"
import WelcomePage from "./Pages/WelcomePage"
import Header from "../src/Components/Header/Header"
import Sidebar from "../src/Components/Sidebar/Sidebar"
import Dashboard from './Pages/Dashboard'
import Users from "./Pages/Users"
import UserLiderboard from "./Pages/UserLiderboard"
import AddUsers from "./Pages/AddUsers"
import EcommersOverview from "./Pages/EcommersOverview"
import EcommercProduct from "./Pages/EcommercProduct"

function App() {

  return (
    <>
      <Header />
      <Sidebar />
      <div className="area-cut">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-overview" element={<Users />} />
          <Route path="/user-liderboard" element={<UserLiderboard />} />
          <Route path="/add-user" element={<AddUsers />} />
          <Route path="/ecommerce-overview" element={<EcommersOverview />} />
          <Route path="/products" element={<EcommercProduct />} />
        </Routes>
      </div>
    </>
  )
}

export default App
