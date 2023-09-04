import Grid from '@mui/material/Grid'
import ApexChartWrapper from '../@core/styles/libs/react-apexcharts'
import KeenSliderWrapper from '../@core/styles/libs/keen-slider'
import TopBlock from '../views/dashboard/TopBlock'
import APIKeyFix from '../views/dashboard/APIKeyFix'

const Home = () => {
  return (
    <>
      <ApexChartWrapper>
        <KeenSliderWrapper>
          <Grid container spacing={6} className='match-height'>
            <Grid item xs={12} md={12} lg={12}>
              <APIKeyFix />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <TopBlock />
            </Grid>
          </Grid>
        </KeenSliderWrapper>
      </ApexChartWrapper>
    </>
  )
}

export default Home
