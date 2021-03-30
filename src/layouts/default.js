import Header from '~/components/Header'
import Footer from '~/components/Footer'
import { Container } from '~/components/layout'

const Layout = (props) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <Container as="main" className="flex-1 py-4 md:py-8 lg:py-16">
      {props.children}
    </Container>
    <Footer />
  </div>
)

export default Layout
