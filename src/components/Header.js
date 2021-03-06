import Link from 'next/link'
import { useState } from 'react'
import { Col, Container, Row } from './layout'

const useHeaderState = () => {
  const [isOpen, setIsOpen] = useState(false)

  return {
    isOpen,
    setIsOpen,
    toggleIsOpen: () => setIsOpen(!isOpen)
  }
}

const Header = () => {
  const { isOpen, toggleIsOpen } = useHeaderState()

  return (
    <header className="bg-purple-500">
      <Container>
        <Row>
          <Col className="w-full">
            <div className="flex flex-wrap md:flex-no-wrap items-center justify-between py-4 md:py-8">
              <div className="flex items-center">
                <Link href="/">
                  <a className="font-bold text-white text-xl">
                    Next.js + Tailwind
                  </a>
                </Link>
              </div>

              <button
                className="flex md:hidden border border-white items-center px-3 py-2 rounded text-white"
                onClick={toggleIsOpen}
              >
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>

              <ul
                className={`${
                  isOpen ? `block` : `hidden`
                } md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto`}
              >
                {[
                  { title: 'Home', route: '/' },
                  { title: 'About', route: '/about' }
                ].map((navigationItem) => (
                  <li
                    className="mt-3 md:mt-0 md:ml-6"
                    key={navigationItem.title}
                  >
                    <Link href={navigationItem.route}>
                      <a className="block text-white">{navigationItem.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export { Header as default, useHeaderState }
