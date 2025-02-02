import * as yup from "yup"

const aboutSchema = yup.object({
    mainHeadingName: yup.string().required("Main heading name is required"),
})


export default aboutSchema
