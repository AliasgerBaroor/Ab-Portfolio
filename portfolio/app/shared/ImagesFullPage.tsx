import { Box, Image } from "@chakra-ui/react"
import work_full_1 from "~/assets/images/work-full-1.png"
import work_full_2 from "~/assets/images/work-full-2.png"
import work_full_2_in1 from "~/assets/images/work-full-2-in1.png"
const ImagesFullPage = ({ ImagePath }: { ImagePath: string }) => {

    const imageMapping: Record<string, string> = {
        "work-full-1.png": work_full_1,
        "work-full-2.png": work_full_2,
        "work-full-2-in1.png": work_full_2_in1,
        "work-full-3.png": work_full_1,
      };

    const srcImage = imageMapping[ImagePath]
  return (
    <Box>
      <Image rounded="md" src={srcImage} alt={ImagePath} />
    </Box>
  )
}

export default ImagesFullPage