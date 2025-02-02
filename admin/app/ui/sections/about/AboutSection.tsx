import { useFormik } from "formik"
import { useState } from "react"
import { aboutSectionSchema } from "~/schema/aboutSchema"
import { aboutItemsSection } from "~/static/aboutItems"

interface AboutItemProps {
    fieldValidationName: string;
    fieldName: string;
    fieldValue: string;
    fieldPlaceholder: string;
    fieldType: string;
    fieldVariant: string;
    fieldOptions?: Array<{ value: string; label: string; active?: boolean }>;
    fieldMultiple?: boolean;
}

const AboutSection = ({ setIsToast }: { setIsToast: (isToast: { message: string, show: boolean }) => void }) => {
    const [isLoading, setIsLoading] = useState(false)

    const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik<Record<string, string>>(
        {
            initialValues: aboutItemsSection.reduce((acc, item: AboutItemProps) => {
                if (item.fieldVariant === "select_field") {
                    const activeOption = item.fieldOptions?.find(option => option.active);
                    acc[item.fieldValidationName] = activeOption ? activeOption.value.toString() : '';
                } else {
                    acc[item.fieldValidationName] = item.fieldValue || '';
                }
                return acc;
            }, {} as Record<string, string>),

            validationSchema: aboutSectionSchema,

            onSubmit: async () => {
                setIsLoading(true)
                console.log(values)
                setIsToast({
                    message: "About us (Section) successfully edited!",
                    show: true,
                })
                setTimeout(() => {
                    setIsLoading(false)
                    setIsToast({
                        message: "",
                        show: false,
                    })
                }, 3000);
            },
        }
    )
    return (
        <div className="row py-3">
            <div className="col-4">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title mb-0">Profile thumbnail</h5>
                    </div>{/* end card header */}
                    <div className="card-body">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="card card-shadow px-4 position-relative">
                                <input className="form-control d-none" type="file" id="formFile" accept="image/png,image/jpeg,image/jpg" />
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger py-1 cursor-pointer" onClick={() => document.getElementById('formFile')?.click()}> <span className={`mdi mdi-pencil-outline small-icon text-gray`} /></span>
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
                        <h5 className="card-title mb-0">About Us (Section)</h5>
                    </div>{/* end card header */}
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            {
                                aboutItemsSection.map((item: AboutItemProps) => (
                                    <div className="mb-3" key={item.fieldName}>
                                        <label htmlFor={item.fieldName} className="form-label">{item.fieldName}</label>
                                        {
                                            item.fieldVariant === "select_field" ? (
                                                <select
                                                    name={item.fieldValidationName}
                                                    className="form-select"
                                                    id={item.fieldName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values[item.fieldValidationName]}
                                                    multiple={item.fieldMultiple}
                                                >
                                                    {
                                                        item.fieldOptions?.map((option) => (
                                                            <option key={option.value} value={option.value}>{option.label}</option>
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
    )
}
export default AboutSection