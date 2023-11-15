'use client'

// wagmi
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { goerli, mainnet } from 'viem/chains'

import { WagmiConfig } from 'wagmi'

// settings provider
import { SettingsConsumer, SettingsProvider } from '@/context/settings'

// components
import { ThemeComponent } from '@/themes/mui/ThemeComponent'

// notistack
import { SnackbarProvider } from 'notistack'

// config
import config from '@/config'

// 1. Get projectId
const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
}

const chains = [mainnet, goerli]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

export default function ParentProvider(props: React.PropsWithChildren) {
  const { children } = props

  return (
    <SettingsProvider>
      <SettingsConsumer>
        {({ settings }) => (
          <ThemeComponent settings={settings}>
            <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>

            <SnackbarProvider
              anchorOrigin={config.notistack.anchorOrigin}
              Components={config.notistack.Components}
            />
          </ThemeComponent>
        )}
      </SettingsConsumer>
    </SettingsProvider>
  )
}
