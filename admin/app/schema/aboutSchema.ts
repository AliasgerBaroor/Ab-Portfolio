import * as yup from "yup"

const aboutSchema = yup.object({
    mainHeadingName: yup.string().required("Main heading name is required"),
    serviceWordCarousel: yup.array().of(yup.string()).required("Service word carousel is required"),
})


export default aboutSchema
