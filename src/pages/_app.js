import '~/css/style.css'
import Layout from '~/layouts/default'

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}

export default MyApp
