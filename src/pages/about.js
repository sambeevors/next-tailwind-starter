import { attributes } from '~/content/about.md'

const { sections } = attributes

const About = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        {sections.map((section) => (
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
  )
}

export default About
