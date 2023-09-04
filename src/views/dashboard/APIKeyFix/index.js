import Icon from 'src/@core/components/icon'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const APIKeyFix = () => {
  return (
    <>
      <Card sx={{ position: 'relative' }}>
        <CardContent sx={{ p: theme => `${theme.spacing(2, 7.5)} !important` }}>
          <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <Typography sx={{ fontWeight: 600 }} variant='subtitle1'>
              Please assign API key.
            </Typography>
            <Stack direction='row' alignItems='center' gap={2}>
              <Button variant='contained'>FIX</Button>
              <Button variant='text'>
                <Icon icon='line-md:close-small' />
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}
export default APIKeyFix
