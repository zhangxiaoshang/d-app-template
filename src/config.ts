import { mainnet, goerli } from 'wagmi/chains'
import { StyledMaterialDesignContent } from '@/components/core/notistack/StyledMaterialDesignContent'

const config = {
  // wallet connect
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!,

  // wagmi
  wagmi: {
    chains: [mainnet, goerli],
  },

  // web3modal
  web3ModalThemeVariables: {
    '--w3m-background-color': '#6201EB',
    '--w3m-accent-color': '#6201EB',
  },

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
