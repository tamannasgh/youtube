import Footer from "./Footer";
import { useSelector } from "react-redux";
import { SiYoutubeshorts } from "react-icons/si";
import { GoHomeFill  } from "react-icons/go";


const Sidebar = () => {

    const isSidebarOpen = useSelector(store => store.app.isSidebarOpen);

    if(!isSidebarOpen) {
        return null;
    }
    
    return (
        <div className="col-span-2 h-screen hover:overflow-y-scroll p-4 px-6">

            <ul className="border-b">
                <li className="mb-3 px-6 flex items-center"><GoHomeFill   className="mr-3"/> Home</li>
                <li className="mb-3 px-6 flex items-center"><SiYoutubeshorts className="mr-3"/>Shorts</li>
                <li className="mb-5 px-6">Subscriptions</li>
            </ul>

            <p className="font-semibold text-lg my-3 px-6">Explore </p>
            <ul className="border-b">
                <li className="mb-3 px-6">Trending</li>
                <li className="mb-3 px-6">Shopping</li>
                <li className="mb-3 px-6">Music</li>
                <li className="mb-3 px-6">Movies</li>
                <li className="mb-3 px-6">Live</li>
                <li className="mb-3 px-6">Gaming</li>
                <li className="mb-3 px-6">News</li>
                <li className="mb-3 px-6">Sports</li>
                <li className="mb-3 px-6">Learning</li>
                <li className="mb-3=5 px-6">Podcasts</li>
            </ul>

                        
            <Footer />
        </div>
    )
}

export default Sidebar;