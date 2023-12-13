import React, { useRef } from "react";
import PostModal from "../Home/PostModal";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "../api";
const SubredditRightSection = () => {
  const [community, setCommunity] = useState({})
  const state = useLocation()
  
  const communityId = state.state.communityId
  useEffect(() => {
    api.get(`/subreddit/get${communityId}`)
      .then((res) => { console.log("api response ",res); setCommunity(res.data) })
      .catch((err) => console.log(err))
  }, [])


  return (
    <div className="w-1/3 ml-5">

      <div className="py-2">
        <div className="rounded bg-white mb-4">
          <div className="p-3">
            <div
              className="h-8 -m-3 bg-no-repeat bg-100%"
              style={{ backgroundImage: `url('https://www.redditstatic.com/desktop2x/img/id-cards/banner@2x.png')` }}
            ></div>
            <div>
              <div className="inline-flex items-center">
                <img src="https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png" className="h-16" />
                <span className="text-lg ml-4 mt-6">{community.name}</span>
              </div>
              <p className="font-normal mb-3 text-sm leading-normal">The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.</p>
              <button className="bg-blue-500 text-white text-sm font-semibold rounded px-4 py-2 w-full">JOIN</button>
            </div>
            <div className="mt-2">
              <span className="text-xs font-semibold text-gray-500">Members:50</span>
              <span className="text-xs font-semibold ml-4 text-gray-500">Posts:595</span>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded bg-white mb-4">
        <div className="p-3 text-xxs font-semibold w-full">COMMUNITY FLAIRS</div>
        <div>
          {/* Existing tags/flairs */}
          {/* <div>
            {
              community.flairs.split(",").map((flair, key) => {
                <div
                  class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full"
                >
                  {flair}
                </div>
              })
            }

          </div> */}
          {
            console.log(";communtiity ",community)
          }
        </div>
        <div className="rounded bg-white mb-4">
          <div className="p-4">
            <div className="text-xxs font-semibold w-full">RULES AND REGULATIONS</div>
            <ul className="list-disc pl-5 text-xs leading-snug">
              <li className="mb-2">Rule 1: No medical advice questions</li>
              <li className="mb-2">Rule 2: No Vulgarity regarding Race, Caste, Religion</li>
              <li className="mb-2">Rule 3: No Harassment regarding personal issues</li>
              <li className="mb-2">Rule 4: No Pornographic Content</li>
              <li className="mb-2">Rule 5: No Gore, mentally disturbing content</li>
              <li className="mb-2">Rule 6: No spam or self-promotion.</li>
              <li className="mb-2">Rule 7: No hate speech or discrimination.</li>
              <li className="mb-2">Rule 8: No personal attacks or insults.</li>
              <li className="mb-2">Rule 9: No doxxing or revealing personal information.</li>
              <li className="mb-2">Rule 10: No excessive off-topic or unrelated content.</li>
            </ul>
          </div>

        </div>

    </div>
    </div>
  );
};

export default SubredditRightSection;
