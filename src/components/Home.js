import Genres from "./Genres"
import VideosContainer from "./VideosContainer"

const Home = () => {
  return (
    <div className="col-span-10">
      <Genres />
      <VideosContainer />
    </div>
  )
}

export default Home