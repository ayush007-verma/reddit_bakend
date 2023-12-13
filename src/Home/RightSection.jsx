import { useNavigate } from "react-router-dom"

import { useState, useEffect } from 'react'
import api from "../api"
import { SimpleDialogContainer, simpleAlert } from 'react-simple-dialogs'

const RightSection = () => {

    const [subreddit, setSubreddit] = useState([])

    const navigate = useNavigate()
    const [communities, setCommunities] = useState()
    useEffect(() => {
        listCommunities()
    }, [])

    const listCommunities = () => {
        api.get("/subreddit/subreddit")
            .then((res) => { console.log(res); setCommunities(res.data) })
            .catch((err) => { })
    };

    const alert = () => simpleAlert('You need to be looged in to create subreddit')

    return (
        <>
            <div class="w-1/3 ml-5">
                <div class="py-2">
                    <div class="rounded bg-white mb-4">
                        <div class="p-3">
                            <div
                                class="h-8 -m-3 bg-no-repeat bg-100%"
                                style={{ backgroundImage: `url('https://www.redditstatic.com/desktop2x/img/id-cards/banner@2x.png')` }}
                            >
                            </div>
                            <div>
                                <div class="inline-flex items-center">
                                    <img src="https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png" class="h-16" />
                                    <span class="text-lg ml-4 mt-6">r/popular</span>
                                </div>
                                <p class="font-normal mb-3 text-sm leading-normal">The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.</p>
                            </div>
                            <SimpleDialogContainer />
                            <div>
                                {
                                    localStorage.getItem('user') ?
                                        <button style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            border: "solid grey",
                                            borderWidth: "0.2 em",
                                            width: "100%",
                                            padding: "1vh 1vw"
                                        }} onClick={() => { navigate("/create/community") }}>Create Community</button>

                                        :

                                        <button style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            border: "solid grey",
                                            borderWidth: "0.2 em",
                                            width: "100%",
                                            padding: "1vh 1vw"
                                        }} onClick={alert}>Create Community</button>
                                }

                            </div>
                        </div>
                    </div>

                    <div class="rounded bg-white mb-4">
                        <div class="p-3 text-xxs font-semibold w-full">TRENDING COMMUNITIES</div>
                        <div class="pb-4">

                            {
                                communities ?
                                    communities.map((com, key) => {
                                        if (com.name) {
                                            return (
                                                <span key={key}>
                                                    <div class="flex" style={{ padding: "2vh", cursor: "pointer" }} onClick={() => { navigate("/community", { state: { communityId: com.id } }); }}>
                                                        <img class="h-8 w-8 border rounded-full mr-2" src="https://avatars0.githubusercontent.com/u/30317862?s=200&v=4" />
                                                        <div class="flex flex-col font-medium">
                                                            <a href="#" class="text-xs text-black-alt no-underline leading-tight"> {com.name}</a>
                                                            <span class="text-xxs">1.000 subscribers</span>
                                                        </div>
                                                        <div class="flex ml-auto">
                                                            <button class="bg-blue-dark text-xs text-white font-semibold rounded px-4 ml-auto">SUBSCRIBE</button>
                                                        </div>
                                                    </div>
                                                </span>
                                            )
                                        }
                                    }) :
                                    <p>Loading.....</p>



                            }


                            {/* <div class="px-3 py-2">
                                <div class="flex">
                                    <img class="h-8 w-8 border rounded-full mr-2" src="https://avatars0.githubusercontent.com/u/30317862?s=200&v=4" />
                                    <div class="flex flex-col font-medium">
                                        <a href="#" class="text-xs text-black-alt no-underline leading-tight">r/tailwind</a>
                                        <span class="text-xxs">1.000 subscribers</span>
                                    </div>
                                    <div class="flex ml-auto">
                                        <button class="bg-blue-dark text-xs text-white font-semibold rounded px-4 ml-auto">SUBSCRIBE</button>
                                    </div>
                                </div>
                            </div>
                            <div class="px-3 py-2">
                                <div class="flex">
                                    <img class="h-8 w-8 border rounded-full mr-2" src="https://avatars0.githubusercontent.com/u/30317862?s=200&v=4" />
                                    <div class="flex flex-col font-medium">
                                        <a href="#" class="text-xs text-black-alt no-underline leading-tight">r/tailwind</a>
                                        <span class="text-xxs">1.000 subscribers</span>
                                    </div>
                                    <div class="flex ml-auto">
                                        <button class="bg-blue-dark text-xs text-white font-semibold rounded px-4 ml-auto">SUBSCRIBE</button>
                                    </div>
                                </div>
                            </div>
                            <div class="px-3 py-2">
                                <div class="flex">
                                    <img class="h-8 w-8 border rounded-full mr-2" src="https://avatars0.githubusercontent.com/u/30317862?s=200&v=4" />
                                    <div class="flex flex-col font-medium">
                                        <a href="#" class="text-xs text-black-alt no-underline leading-tight">r/tailwind</a>
                                        <span class="text-xxs">1.000 subscribers</span>
                                    </div>
                                    <div class="flex ml-auto">
                                        <button class="bg-blue-dark text-xs text-white font-semibold rounded px-4 ml-auto">SUBSCRIBE</button>
                                    </div>
                                </div>
                            </div>
                            <div class="px-3 py-2">
                                <div class="flex">
                                    <img class="h-8 w-8 border rounded-full mr-2" src="https://avatars0.githubusercontent.com/u/30317862?s=200&v=4" />
                                    <div class="flex flex-col font-medium">
                                        <a href="#" class="text-xs text-black-alt no-underline leading-tight">r/tailwind</a>
                                        <span class="text-xxs">1.000 subscribers</span>
                                    </div>
                                    <div class="flex ml-auto">
                                        <button class="bg-blue-dark text-xs text-white font-semibold rounded px-4 ml-auto">SUBSCRIBE</button>
                                    </div>
                                </div>
                            </div>
                            <div class="px-3 py-2">
                                <div class="flex">
                                    <img class="h-8 w-8 border rounded-full mr-2" src="https://avatars0.githubusercontent.com/u/30317862?s=200&v=4" />
                                    <div class="flex flex-col font-medium">
                                        <a href="#" class="text-xs text-black-alt no-underline leading-tight">r/tailwind</a>
                                        <span class="text-xxs">1.000 subscribers</span>
                                    </div>
                                    <div class="flex ml-auto">
                                        <button class="bg-blue-dark text-xs text-white font-semibold rounded px-4 ml-auto">SUBSCRIBE</button>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div class="rounded bg-white mb-4">
                        <div class="p-3">
                            <div class="flex justify-between">
                                <div>
                                    <a href="#" class="block text-black no-underline text-xs font-medium">About</a>
                                    <a href="#" class="block text-black no-underline text-xs font-medium">Careers</a>
                                    <a href="#" class="block text-black no-underline text-xs font-medium">Press</a>
                                </div>
                                <div>
                                    <a href="#" class="block text-black no-underline text-xs font-medium">Advertise</a>
                                    <a href="#" class="block text-black no-underline text-xs font-medium">Blog</a>
                                    <a href="#" class="block text-black no-underline text-xs font-medium">Help</a>
                                </div>
                                <div>
                                    <a href="#" class="block text-black no-underline text-xs font-medium">The Reddit App</a>
                                    <a href="#" class="block text-black no-underline text-xs font-medium">Reddit Coins</a>
                                    <a href="#" class="block text-black no-underline text-xs font-medium">Reddit Premium</a>
                                    <a href="#" class="block text-black no-underline text-xs font-medium">Reddit Gifts</a>
                                </div>
                            </div>
                            <div class="text-center mt-6">
                                <p class="text-xs text-black leading-tight font-medium">
                                    <a href="#" class="text-black no-underline">Content Policy</a> | <a href="#" class="text-black no-underline">Privacy Policy</a>
                                </p>
                                <p class="text-xs text-black leading-tight font-medium">
                                    <a href="#" class="text-black no-underline">User Agreement</a> | <a href="#" class="text-black no-underline">Mod Policy</a>
                                </p>
                                <p class="text-xs text-black leading-tight font-medium">© 2018 Reddit, Inc. All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default RightSection