'use client'
import { SnackbarMessage, VariantType, enqueueSnackbar } from 'notistack'
import Button from '@mui/material/Button'

interface EnqueueSnackbarButtonProps {
  message: SnackbarMessage
  variant?: VariantType
}

export default function EnqueueSnackbarButton(
  props: EnqueueSnackbarButtonProps,
) {
  const { message, variant } = props

  return (
    <Button
      variant="contained"
      onClick={() =>
        enqueueSnackbar(message, {
          variant,
        })
      }
    >
      Show snackbar
    </Button>
  )
}
