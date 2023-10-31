import { useLocation } from "react-router-dom"
import Header from "../Home/Header"
import { useEffect, useState } from "react"
import axios from "axios"
import api from "../api"

const SearchPost = () => {
    const [posts, setPosts] = useState()
    const state = useLocation()
    console.log(state)
    const searchQuery = state.state ? state.state.searchQuery : "cricket" 
    useEffect(() => {
        console.log(searchQuery)
        api.get(`/search/${searchQuery}`)
            .then((res) => { console.log(res); setPosts(res.data) })
            .catch((err) => console.log(err))
    }, [])
    return (
        <>
            <Header />
            <div style={{display: "flex", justifyContent: "center", alignContent : "center", alignItems :"center", flexDirection: "column   "}}>
            {
                posts ?
                    posts.map((post, key) => {
                        return (
                            <div key={key} class="flex border border-grey-light-alt hover:border-grey rounded bg-white cursor-pointer mb-4">

                                {/* Voting SEction */}
                                <div class="w-1/12 flex flex-col text-center pt-2">
                                    <button class="text-xs" onClick={() => handleVote(post, 1)}>
                                        <svg class="w-5 fill-current text-grey" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10v8h6v-8h5l-8-8-8 8h5z" /></svg>
                                    </button>
                                    <span class="text-xs font-semibold my-1">{post.voteCount}</span>
                                    <button class="text-xs" onClick={() => handleVote(post, -1)}>
                                        <svg class="w-5 fill-current text-grey" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10V2h6v8h5l-8 8-8-8h5z" /></svg>
                                    </button>
                                </div>

                                {/* Main sEction */}

                                <div class="w-11/12 pt-2">

                                    <div class="flex items-center text-xs mb-2">
                                        <a href="#" class="font-semibold no-underline hover:underline text-black flex items-center">
                                            <img class="rounded-full border h-5 w-5" src="https://avatars0.githubusercontent.com/u/30317862?s=200&v=4" />
                                            <span class="ml-2">r/rhythmvarshney</span>
                                        </a>
                                        <span class="text-grey-light mx-1 text-xxs">•</span>
                                        <span class="text-grey">Posted by</span>
                                        <a href="#" class="text-grey mx-1 no-underline hover:underline">u/rhythm</a>
                                        <span class="text-grey">2 hours ago</span>
                                    </div>
                                    <div>
                                        <h2 class="text-lg font-medium mb-1">{post.postTitle}</h2>
                                        <p class="mb-1" style={{ color: '#1c1c1c' }}>{post.postContent}</p>
                                        <p class="mb-1" style={{ color: '#1c1c1c' }}>{post.id}</p>
                                        <img style={{ width: '100% !important' }} src="https://www.cricbuzz.com/a/img/v1/980x654/i1/c357174/jasprit-bumrah-and-mohammed-sh.jpg"></img>
                                    </div>


                                    <div class="inline-flex items-center my-1">
                                        <div class="flex hover:bg-grey-lighter p-1">
                                            <svg class="w-4 fill-current text-grey" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-4 4v-4H2a2 2 0 0 1-2-2V3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8zM5 7v2h2V7H5zm4 0v2h2V7H9zm4 0v2h2V7h-2z" /></svg>
                                            <span class="ml-2 text-xs font-semibold text-grey">{post.comments.length} Comments</span>
                                        </div>
                                        <div class="flex hover:bg-grey-lighter p-1 ml-2">
                                            <svg class="w-4 fill-current text-grey" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z" /></svg>
                                            <span class="ml-2 text-xs font-semibold text-grey">Share</span>
                                        </div>
                                        <div class="flex hover:bg-grey-lighter p-1 ml-2">
                                            <svg class="w-4 fill-current text-grey" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 2C0 .9.9 0 2 0h14l4 4v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5 0v6h10V2H5zm6 1h3v4h-3V3z" /></svg>
                                            <span class="ml-2 text-xs font-semibold text-grey">Save</span>
                                        </div>
                                        <div class="flex hover:bg-grey-lighter p-1 ml-2 rotate-90">
                                            <svg class="w-4 fill-current text-grey" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" /></svg>
                                        </div>
                                        <div class="flex hover:bg-grey-lighter p-1 ml-2">
                                            <button onClick={() => openModal(post)}>View Post</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    :
                    <h1> Loading..... </h1>
            }
            </div> 

        </>
    )
}

export default SearchPost