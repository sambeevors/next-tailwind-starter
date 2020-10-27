import content from '~/content/about.yaml'
const { sections } = content

const About = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        {sections.map(({ heading, body }, i) => (
          <div key={i}>
            <h2 className="font-bold mb-3 text-xl">{heading}</h2>
            <p className="mb-6">{body}</p>
          </div>
        ))}
      </div>

      <div className="md:ml-6 md:w-1/2">
        <img src="https://picsum.photos/400/250" className="w-full" />
      </div>
    </div>
  )
}

export default About
