import Page from '~/layouts/default'

const About = () => {
  return (
    <Page>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          {[
            {
              heading: `What is Tailwind?`,
              body: `Tailwind CSS is a highly customizable, low-level CSS framework that gives you all
              of the building blocks you need to build bespoke designs without any
              annoying opinionated styles you have to fight to override.`
            },
            {
              heading: `What is Next.js?`,
              body: `Next.js is a minimalistic framework for creating server-rendered
              React applications.`
            }
          ].map(section => (
            <>
              <h2 className="font-bold mb-3 text-xl">{section.heading}</h2>
              <p className="mb-6">{section.body}</p>
            </>
          ))}
        </div>

        <div className="md:ml-6 md:w-1/2">
          <img src="https://picsum.photos/400/250" className="w-full" />
        </div>
      </div>
    </Page>
  )
}

export default About
