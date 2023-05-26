import { Box, BoxProps } from '@mui/material'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SlideBoxProps extends BoxProps {} 


const SlideBox:React.FC<SlideBoxProps> = (prop) => {
  return (
    <Box className={"slide-box"} style={{ overflowY: "hidden" }} {...prop} />
  )
}

export default SlideBox