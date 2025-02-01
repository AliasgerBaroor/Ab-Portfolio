import Footer from "~/shared/Footer"
import Header from "~/shared/Header"
import Sidebar from "~/shared/Sidebar"
const About = () => {
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

    </div>
  )
}

export default About