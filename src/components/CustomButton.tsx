import { ButtonBase, Stack, StackProps, SxProps, useTheme } from '@mui/material'
import React from 'react'
import { PRIMARY_COLOR } from '../utils/colors';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CustomButtonProps {
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  title?: string;
  children?: React.ReactNode;
  stackProps?: StackProps;
  buttonProps?: SxProps;
} 

const CustomButton:React.FC<CustomButtonProps> = ({ endIcon, children, title, startIcon, stackProps, buttonProps }) => {
  const { shadows } = useTheme()
  return (
    <ButtonBase sx={{ 
      opacity: .85, 
      "&:hover": { 
        opacity: 1 
      }, 
      borderRadius: .5, 
      boxShadow: shadows[5],
      bgcolor: PRIMARY_COLOR, 
      color: "white", ...buttonProps 
      }}
    >
      <Stack 
        direction={"row"} 
        alignItems={"center"} 
        gap={1} 
        fontWeight={500} 
        fontSize={".95rem"} 
        px={3} py={1.5} 
        {...stackProps}
      >
        { startIcon || null }
        { title || children }
        { endIcon || null }
      </Stack>
    </ButtonBase>
  )
}

export default CustomButton