import { useFormik } from "formik"
import { useState } from "react"
import aboutSchema from "~/schema/aboutSchema"
import Footer from "~/shared/Footer"
import Header from "~/shared/Header"
import Sidebar from "~/shared/Sidebar"
import { aboutItems } from "~/static/aboutItems"

const About = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik<Record<string, string>>(
    {
      initialValues: aboutItems.reduce((acc, item) => ({
        ...acc,
        [item.fieldValidationName]: item.fieldValue || ''
      }), {} as Record<string, string>),

      validationSchema: aboutSchema,
      
      onSubmit: async () => {
        console.log(values)
        setIsLoading(true)
      },
    }
  )
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
            <div className="row py-3">
              <div className="col-4">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Profile thumbnail</h5>
                  </div>{/* end card header */}
                  <div className="card-body">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="card card-shadow px-4 position-relative cursor-pointer" onClick={() => document.getElementById('formFile')?.click()}>
                        <input className="form-control d-none" type="file" id="formFile" accept="image/png,image/jpeg,image/jpg" />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger py-1 cursor-pointer"> <span className={`mdi mdi-pencil-outline medium-icon text-gray`} /></span>
                        <span className={`mdi mdi-image-multiple-outline text-gray extreme-large-icon`} />
                      </div>
                    </div>

                    <p className="text-muted text-center">Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted</p>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">About Us</h5>
                  </div>{/* end card header */}
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      {
                        aboutItems.map((item) => (
                          <div className="mb-3">
                            <label htmlFor={item.fieldName} className="form-label">{item.fieldName}</label>
                            {
                              item.fieldVariant === "select_field" ? (
                                <select name={item.fieldValidationName} className="form-select" id={item.fieldName} onChange={handleChange} onBlur={handleBlur} value={values[item.fieldValidationName]}>
                                  {
                                    item.fieldOptions?.map((option) => (
                                      <option value={option.value}>{option.label}</option>


                                    ))
                                  }
                                </select>
                              ) : (
                                item.fieldVariant === "textarea" ? (
                                  <textarea name={item.fieldValidationName} placeholder={item.fieldPlaceholder} id={item.fieldName} className="form-control" defaultValue={item.fieldValue} rows={5} spellCheck="false" onChange={handleChange} onBlur={handleBlur} value={values[item.fieldValidationName]} />

                                ) : (
                                  <input name={item.fieldValidationName} type={item.fieldType} placeholder={item.fieldPlaceholder} id={item.fieldName} className={`form-control ${errors[item.fieldValidationName] && touched[item.fieldValidationName] && "is-invalid"}`} defaultValue={item.fieldValue} onChange={handleChange} onBlur={handleBlur} value={values[item.fieldValidationName]} />
                                )
                              )
                            }
                          </div>
                        ))

                      }

                      <button type="submit" className="btn btn-primary" disabled={isLoading}>
                        {isLoading ? <><span className="spinner-border spinner-border-sm" aria-hidden="true"></span><span role="status"> Updating...</span></> : "Update"}
                      </button>


                    </form>
                  </div>

                </div>
              </div>
            </div>

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

    </div>
  )
}

export default About