import { useEffect } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Genres = () => {

    // const scrollLeft = document.getElementById("genres").scrollLeft;
    // console.log(scrollLeft);
    useEffect(() => {
        // console.log("hey");
    },[]);

    const genreList = ["All", "JavaScript", "Computer Programming", "Music", "Study Skills", "Thoughts", "Movies", "Live", "Gadgets", "Recently uploaded", "Tamanna", "React", "React Native", "News", "Sports"];

    return (
        <ul id="genres" className="flex m-3 mb-6 overflow-x-scroll w-11/12">
        {
            genreList.map((genre, index) => <li key={index} className="bg-gray-100 p-1 px-3 mr-3 rounded-md cursor-pointer min-w-fit">{genre}</li>)
        }
            
        </ul>
    )
}

export default Genres;