import { StyledMaterialDesignContent } from '@/components/core/notistack/StyledMaterialDesignContent'

const config = {
  // notistack
  notistack: {
    anchorOrigin: {
      horizontal: 'center' as const,
      vertical: 'top' as const,
    },
    Components: {
      success: StyledMaterialDesignContent,
      error: StyledMaterialDesignContent,
    },
  },
}

export default config
