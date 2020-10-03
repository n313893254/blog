import 'antd/dist/antd.css'
import '@/pages/styles.scss';

export default function App({Component, pageProps}) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}