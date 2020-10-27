import React from 'react'
import renderer from 'react-test-renderer'
import About from '../about'

it('<About /> renders correctly', () => {
  const about = renderer.create(<About />).toJSON()
  expect(about).toMatchInlineSnapshot(`
    <div
      className="flex flex-col md:flex-row"
    >
      <div
        className="md:w-1/2"
      >
        <div>
          <h2
            className="font-bold mb-3 text-xl"
          >
            What is Tailwind?
          </h2>
          <p
            className="mb-6"
          >
            Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.
          </p>
        </div>
        <div>
          <h2
            className="font-bold mb-3 text-xl"
          >
            What is Next.js?
          </h2>
          <p
            className="mb-6"
          >
            Next.js is a minimalistic framework for creating server-rendered React applications.
          </p>
        </div>
      </div>
      <div
        className="md:ml-6 md:w-1/2"
      >
        <img
          className="w-full"
          src="https://picsum.photos/400/250"
        />
      </div>
    </div>
  `)
})
