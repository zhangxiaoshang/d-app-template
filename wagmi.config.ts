import { defineConfig } from '@wagmi/cli'
import { erc20ABI } from 'wagmi'
import { react } from '@wagmi/cli/plugins'

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [
    {
      name: 'erc20',
      abi: erc20ABI,
    },
  ],
  plugins: [react()],
})
