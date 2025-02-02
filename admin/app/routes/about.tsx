import { useState } from "react"
import Footer from "~/ui/shared/Footer"
import Header from "~/ui/shared/Header"
import Sidebar from "~/ui/shared/Sidebar"
import InfoToast from "~/ui/shared/toasts/InfoToast"
import FirstFold from "~/ui/sections/about/FirstFold"
import AboutSection from "~/ui/sections/about/AboutSection"

const About = () => {
  const [isToast, setIsToast] = useState({
    message: "About successfully edited!",
    show: false,

  })


  return (
    <div>
      {/* Begin page */}
      <div id="app-layout">
        {/* Topbar Start */}
        <Header />
        {/* end Topbar */}
        {/* Left Sidebar Start */}
        <Sidebar />
        {/* Left Sidebar End */}
        {/* ============================================================== */}
        {/* Start Page Content here */}
        {/* ============================================================== */}
        <div className="content-page">
          {/* About Page Start */}
          <div className="container-fluid">

          <FirstFold setIsToast={setIsToast} />
          <AboutSection setIsToast={setIsToast} />

          </div>
          {/* About Page End */}
          {/* Footer Start */}
          <Footer />
          {/* end Footer */}
        </div>
        {/* ============================================================== */}
        {/* End Page content */}
        {/* ============================================================== */}
      </div>
      {/* END wrapper */}
      {/* Vendor */}
      {/* App js*/}
      {
        isToast.show && (
          <InfoToast message={isToast.message} />
        )
      }



    </div>

  )
}

export default About