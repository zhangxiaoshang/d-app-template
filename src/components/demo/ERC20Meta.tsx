'use client'
import { useErc20Name } from '@/generated'
import useMounted from '@/hooks/useMounted'

export default function ERC20Meta() {
  const mounted = useMounted()

  const name = useErc20Name({
    chainId: 1,
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  })

  if (!mounted) return null

  return <div>Name: {name.data}</div>
}
