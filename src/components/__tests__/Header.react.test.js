import React from 'react'
import renderer from 'react-test-renderer'
import Header from '../Header'

it('<Header /> renders correctly', () => {
  const header = renderer.create(<Header />).toJSON()
  expect(header).toMatchInlineSnapshot(`
    <header
      className="bg-purple-500"
    >
      <div
        className="container "
      >
        <div
          className="flex flex-wrap -mx-2 lg:-mx-4 "
        >
          <div
            className="flex-none px-2 lg:px-4 w-full"
          >
            <div
              className="flex flex-wrap md:flex-no-wrap items-center justify-between py-4 md:py-8"
            >
              <div
                className="flex items-center"
              >
                <a
                  className="font-bold text-white text-xl"
                  href="/"
                  onClick={[Function]}
                  onMouseEnter={[Function]}
                >
                  Next.js + Tailwind
                </a>
              </div>
              <button
                className="flex md:hidden border border-white items-center px-3 py-2 rounded text-white"
                onClick={[Function]}
              >
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>
                    Menu
                  </title>
                  <path
                    d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                  />
                </svg>
              </button>
              <ul
                className="hidden md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto"
              >
                <li
                  className="mt-3 md:mt-0 md:ml-6"
                >
                  <a
                    className="block text-white"
                    href="/"
                    onClick={[Function]}
                    onMouseEnter={[Function]}
                  >
                    Home
                  </a>
                </li>
                <li
                  className="mt-3 md:mt-0 md:ml-6"
                >
                  <a
                    className="block text-white"
                    href="/about"
                    onClick={[Function]}
                    onMouseEnter={[Function]}
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  `)
})
