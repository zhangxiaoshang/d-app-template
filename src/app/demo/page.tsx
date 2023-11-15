import Link from 'next/link'
// mui
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'

// components
import ERC20Meta from '@/components/demo/ERC20Meta'
import Greet from '@/components/demo/Greet'
import MaterialUISwitch from '@/components/demo/MaterialUISwitch'

import EnqueueSnackbarButton from '@/components/demo/EnqueueSnackbarButton'

import styles from './page.module.scss'

export default function Demo() {
  return (
    <main className={styles.main}>
      <h1>Demo Page</h1>
      <div className={styles.description}>切换系统Dark/Light 查看变化</div>

      <Greet msg="hi server component"></Greet>

      <Button variant="contained">Button</Button>

      {/* theme switch(not system theme) */}
      <ul>
        <li>当前主题分为两块:</li>
        <li>操作系统的 Dark/Light 会影响背景色和字体颜色(global.css)</li>
        <li>页面的切换主题功能, 控制的是Mui的主题 dark/light</li>
        <li>具体还要更具业务需求：页面控制/系统控制主题</li>
      </ul>

      <MaterialUISwitch></MaterialUISwitch>

      <Switch defaultChecked />

      <h2>NProgress</h2>
      <Link href="/demo">demo</Link>
      <Link href="/">home</Link>

      <h2>web3 modal</h2>
      {/* <Web3Button></Web3Button> */}
      <w3m-button />

      <br />
      <EnqueueSnackbarButton
        message="ok"
        variant="success"
      ></EnqueueSnackbarButton>
      <EnqueueSnackbarButton
        message="err"
        variant="error"
      ></EnqueueSnackbarButton>

      <br />
      <h2>dapp</h2>
      <ERC20Meta></ERC20Meta>
    </main>
  )
}
