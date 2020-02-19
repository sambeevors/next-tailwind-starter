import { attributes } from '~/content/home.md'

const { heading } = attributes

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src="https://picsum.photos/600/400" className="max-w-xl w-full" />
      <h2 className="bg-yellow-400 font-bold my-8 p-3 text-lg md:text-2xl">
        {heading}
      </h2>
    </div>
  )
}

export default Home
