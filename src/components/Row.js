import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md"

const Row = ({ title, fetchURL,ID }) => {
    
    const [movies, setMovies] = useState([]);
    
    const [like,setLike] = useState(false);

    // Call API 
    useEffect( () => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results); 
        });
    }, [fetchURL]);
    
    // thay đổi scroll movies
    const slideLeft = () => {
        var slide = document.getElementById("slider" + ID);
        slide.scrollLeft = slide.scrollLeft - 500;
    };
    const slideRight = () => {
        var slide = document.getElementById("slider" + ID);
        slide.scrollLeft = slide.scrollLeft + 500;
    }

    return (
        <>
            <h2 className="text-white font-bold md:text-xl p-4"> {title }</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                    onClick={slideLeft}
                    size={40}
                    className='left-0 bg-white rounded-full opacity-50 
                               hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
                <div id={'slider' + ID } className='w-full h-full overflow-x-scroll whitespace-nowrap 
                                                scroll-smooth scrollbar-hide relative'>
                    {
                        movies.map((item, id) => (
                            <Movie key={id} item={ item }  />
                        ))
                    }
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    size={40}
                    className='right-0 bg-white rounded-full opacity-50 
                               hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
            </div>
        </>
    )

}

export default Row;