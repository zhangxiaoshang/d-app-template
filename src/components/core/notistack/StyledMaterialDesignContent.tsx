import { styled } from '@mui/material'
import { MaterialDesignContent } from 'notistack'

export const StyledMaterialDesignContent = styled(MaterialDesignContent)(
  () => ({
    '&.notistack-MuiContent-success': {
      backgroundColor: '#6201EB',
    },
    '&.notistack-MuiContent-error': {
      backgroundColor: '#ff9800',
    },
  }),
)
