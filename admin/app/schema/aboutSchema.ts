import * as yup from "yup"

export const aboutSchema = yup.object({
    mainHeadingName: yup.string().required("Main heading name is required"),
})
export const aboutSectionSchema = yup.object({
    title: yup.string().required("Title is required"),
    mainHeading: yup.string().required("Main heading is required"),
})


