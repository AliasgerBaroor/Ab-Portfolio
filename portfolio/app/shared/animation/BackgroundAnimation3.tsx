import { Box } from '@chakra-ui/react'
import "~/styles/background.css"
const BackgroundAnimation = ({children}) => {
    return (
        <Box minH="100vh"  position="relative" overflow="hidden">
            <div className='wrapper' style={{height: "100%"}}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            { children }
        </Box>
    )
}

export default BackgroundAnimation