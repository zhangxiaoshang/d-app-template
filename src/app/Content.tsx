'use client'

// web3modal
import { WagmiConfig } from 'wagmi'
import { Web3Modal } from '@web3modal/react'
// wagmi
import { wagmiConfig, ethereumClient } from '@/wagmi'

// settings provider
import { SettingsProvider, SettingsConsumer } from '@/context/settings'

// components
import { ThemeComponent } from '@/themes/mui/ThemeComponent'

// notistack
import { SnackbarProvider } from 'notistack'

// config
import config from '@/config'

export default function ParentProvider(props: React.PropsWithChildren) {
  const { children } = props

  return (
    <SettingsProvider>
      <SettingsConsumer>
        {({ settings }) => (
          <ThemeComponent settings={settings}>
            <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>

            <Web3Modal
              projectId={config.projectId}
              ethereumClient={ethereumClient}
              themeMode={settings.mode}
              themeVariables={config.web3ModalThemeVariables}
            />

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
