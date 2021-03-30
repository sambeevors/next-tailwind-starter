import React from 'react'
import renderer from 'react-test-renderer'
import Footer from '../Footer'

it('<Footer /> renders correctly', () => {
  const footer = renderer.create(<Footer />).toJSON()
  expect(footer).toMatchInlineSnapshot(`
    <footer
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
            <ul
              className="flex items-center justify-between py-4 md:py-8 text-sm text-white"
            >
              <li>
                Created by
                 
                <a
                  className="font-bold"
                  href="https://sambeevors.com"
                  target="_blank"
                >
                  Sam Beevors
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  `)
})
