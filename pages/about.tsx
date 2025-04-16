import Image from 'next/image'
import Page from 'components/page'
import Button from 'components/button'
import { NextSeo } from 'next-seo'
import me from 'public/back.jpg'
import styles from './about.module.scss'

const About = (): JSX.Element => {
  const linkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  }
  const seoTitle = 'About 克喵爱吃卤面'
  return (
    <Page>
      <NextSeo
        title={seoTitle}
        openGraph={{
          title: seoTitle,
          url: `https://www.kemiaofx.cn/about/`,
          site_name: 'KeMiao.cn',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Image src={me} alt="Just a background image" placeholder="blur" className={styles.image} priority />
      <div className={styles.text}>
        <p>Hey I’m Ke Miao, a commom student currently living in 🇨🇳 Nanjing, China.</p>

        <p>我是一个双飞普通二本学校的学生，自动化技术与应用专业，喜欢开源项目，平常分享一些开源项目，软件和一些踩坑记录，喜欢开源社区。</p>
        <p>
          对我感兴趣 (可查看{' '}
          <a href="https://github.com/Kemeow815/Kemeow815" {...linkProps}>
            我的Github自述页
          </a>{' '}
          ).
        </p>
        <p>
          <ul>
            <li>
              <a href="https://github.com/Kemeow815/" {...linkProps}>
                Github
              </a>
            </li>
            <li>
              <a href="https://t.me/KemiaoJun" {...linkProps}>
                Telegram
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/kemiaosw/" {...linkProps}>
                Twitter
              </a>
            </li>
          </ul>
        </p>
      </div>
      <Button href="mailto:kemiaofx@163.com">联系我</Button>
    </Page>
  )
}

export default About
