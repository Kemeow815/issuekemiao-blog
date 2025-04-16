import { DefaultSeo } from 'next-seo'

const config = {
  title: '克喵爱吃卤面 - a common college student',
  description: '总有些事情高于其他！',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.kemiaofx.cn',
    site_name: '喵落阁 | 克喵爱吃卤面',
    images: [
      {
        url: 'https://weavatar.com/avatar/7614B285E795F21E780247019C4E15C4',
        alt: '克喵爱吃卤面',
      },
    ],
  },
  twitter: {
    handle: '@kemiaosw',
    site: '@kemiaosw',
    cardType: 'summary_large_image',
  },
}

const SEO = (): JSX.Element => {
  return <DefaultSeo {...config} />
}

export default SEO
