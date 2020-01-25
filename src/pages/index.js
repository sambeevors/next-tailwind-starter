import Page from '~/layouts/default'

const Home = () => {
  return (
    <Page>
      <div className="flex flex-col items-center justify-center">
        <img src="https://picsum.photos/600/400" className="max-w-xl w-full" />

        <h2 className="bg-yellow-400 font-bold my-8 p-3 text-lg md:text-2xl">
          Hi! Welcome to your first Next.js site.
        </h2>
      </div>
    </Page>
  )
}

export default Home
