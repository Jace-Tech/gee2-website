import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { SECONDARY_COLOR } from '../../../utils/colors'
import CustomButton from '../../../components/CustomButton'
import { AiOutlineArrowRight } from "react-icons/ai"


import keke from "../../../assets/vehicle/keke.png"
import car from "../../../assets/vehicle/car.png"
import SlideBox from '../../../components/SlideBox'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
  return (
    <Box component={"section"} py={[5, 8, 10]}>
      <Container maxWidth={"lg"}>
        <Grid container spacing={[5, 5, 2]}>
          <Grid item xs={12} md={6}>
            <Stack gap={4} textAlign={{ xs: "center", md: "left" }}>
              <Stack gap={1.5}>
                <SlideBox height={55}>
                  <Typography fontWeight={600} lineHeight={1.3} variant='h3'>Instantly travel from</Typography>
                </SlideBox>

                <SlideBox height={55}>
                  <Typography fontWeight={600} lineHeight={1.3} variant='h3'> your comfort zone <span style={{ color: SECONDARY_COLOR }}>to</span></Typography>
                </SlideBox>

                <SlideBox height={55}>
                  <Typography fontWeight={600} lineHeight={1.3} variant='h3'><span style={{ color: SECONDARY_COLOR }}> any part of town.</span></Typography>
                </SlideBox>
              </Stack>

              <Typography className="animate__animated animate__fadeInUp" color="#555" lineHeight={1.6}>Experience seamless transportation, connecting you to any destination in town with speed and ease. Enjoy comfortable rides driven by professionals, prioritizing your safety and satisfaction.</Typography>

              <Box className="animate__animated animate__fadeInUp">
                <CustomButton
                  endIcon={<AiOutlineArrowRight />}
                  buttonProps={{ width: "fit-content", bgcolor: SECONDARY_COLOR }}
                >Book a ride</CustomButton>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box position={"relative"}>
              <img src={car} className='slider-image animate__animated animate__fadeInRight' />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Hero