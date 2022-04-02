import Page from 'components/page'
import PageHeader from 'components/pageheader'
import Subscribe from 'components/subscribe'
import { NextSeo } from 'next-seo'

import styles from './newsletter.module.scss'

const NewsletterPage = (): JSX.Element => {
  const seoTitle = 'Newsletter | Nickbing Lao'
  const seoDesc =
    'A newsletter in the realm between design & development. Learn animations, CSS, web development tips & tricks and creating delightful and useful interfaces!'

  return (
    <Page>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          url: `https://giscafer.com/newsletter/`,
          description: seoDesc,
          site_name: 'Nickbing Lao',
          images: [
            {
              url: 'https://giscafer.com/newsletter.png',
              alt: 'A newsletter in the realm between design & development',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <PageHeader
        title="Newsletter"
        description={
          <>
            <p>
              A newsletter in the realm between <em className={styles.em}>design &amp; development</em>. Learn animations, CSS, web
              development tips &amp; tricks and creating delightful and useful interfaces!
            </p>
            <p>No spam, unsubcribe at any time!</p>
          </>
        }
        compact
      />
      <Subscribe header={false} />
    </Page>
  )
}

export default NewsletterPage
