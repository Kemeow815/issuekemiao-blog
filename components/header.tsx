import Link from 'next/link'
import ThemeChanger from 'components/themechanger'
import { useRouter } from 'next/router'
import Image from 'next/image'
import avatar from 'public/avatar.png'
import styles from './header.module.scss'

const links = [
  { name: '首页', path: '/' },
  { name: '关于', path: '/about' },
  { name: '博客', path: '/blog' },
  { name: '音乐', path: 'https://music.kemiao.online', target: '_blank' },
  { name: '说说', path: 'https://shuoshuo.kemiao.online', target: '_blank' },
]

const Header = (): JSX.Element => {
  const router = useRouter()
  const pathname = router.pathname.split('/[')[0] // active paths on dynamic subpages
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/">
            <a className={styles.logo}>
              <Image src={avatar} alt="克喵爱吃卤面" layout="fixed" width="45" height="45" priority placeholder="blur" />
            </a>
          </Link>
          <nav className={styles.nav}>
            <ol className={styles.links}>
              {links.map(({ name, path, target }) => {
                if (target === '_blank') {
                  return (
                    <li key={path} className={pathname === path ? styles.linkActive : styles.link}>
                      <a href={path} target="_blank" rel="noopener noreferrer">
                        {name}
                      </a>
                    </li>
                  )
                }
                return (
                  <li key={path} className={pathname === path ? styles.linkActive : styles.link}>
                    <Link href={path}>
                      <a>{name}</a>
                    </Link>
                  </li>
                )
              })}
            </ol>
          </nav>
          <ThemeChanger />
        </div>
      </header>
      <div className={styles.spacer} />
    </>
  )
}

export default Header
