<<<<<<< HEAD
import useCourseDetails from "@/hooks/useCourseDetails"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
=======
import useCourseDetails from "@/hooks/useCourseDetails";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
>>>>>>> 1115a5812ebd38394ba956ad827ab420437c430e
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
<<<<<<< HEAD
} from "@/components/ui/accordion"
import { Helmet } from "react-helmet-async"
=======
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";
>>>>>>> 1115a5812ebd38394ba956ad827ab420437c430e

// Extract YouTube video ID from URL
function getYouTubeVideoId(url) {
  try {
<<<<<<< HEAD
    const parsedUrl = new URL(url)
    if (parsedUrl.hostname.includes("youtube.com"))
      return parsedUrl.searchParams.get("v")
    if (parsedUrl.hostname === "youtu.be") return parsedUrl.pathname.slice(1)
=======
    const parsedUrl = new URL(url);
    if (parsedUrl.hostname.includes("youtube.com"))
      return parsedUrl.searchParams.get("v");
    if (parsedUrl.hostname === "youtu.be") return parsedUrl.pathname.slice(1);
>>>>>>> 1115a5812ebd38394ba956ad827ab420437c430e
    if (
      parsedUrl.hostname === "www.youtube.com" &&
      parsedUrl.pathname.startsWith("/embed/")
    )
<<<<<<< HEAD
      return parsedUrl.pathname.split("/embed/")[1]
    return null
=======
      return parsedUrl.pathname.split("/embed/")[1];
    return null;
>>>>>>> 1115a5812ebd38394ba956ad827ab420437c430e
  } catch {
    return null
  }
}

const Modules = () => {
  const { route } = useParams()
  const { course, loading, error } = useCourseDetails(route)

<<<<<<< HEAD
  const [vidUrl, setVidUrl] = useState("")
  const [resources, setResources] = useState([])
  const [activeModuleIndex, setActiveModuleIndex] = useState(null)

  const containerRef = useRef(null) // For fullscreen container (outer div)
  const playerContainerRef = useRef(null) // For YouTube player div (inner div)

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
=======
  const containerRef = useRef(null); // For fullscreen container (outer div)
  const playerContainerRef = useRef(null); // For YouTube player div (inner div)
>>>>>>> 1115a5812ebd38394ba956ad827ab420437c430e

  const videoId = getYouTubeVideoId(vidUrl)
  const playerRef = useRef(null)
  const [playerReady, setPlayerReady] = useState(false)

  const modules = course?.modules

  // Set initial video & resources
  useEffect(() => {
    if (course?.modules?.length) {
      setVidUrl(course.modules[0].videoLink)
      setResources(course.modules[0].resources || [])
      setActiveModuleIndex(0)
    }
<<<<<<< HEAD
  }, [course])

  useEffect(() => {
    const existingScript = document.getElementById("youtube-api-script")
    if (!existingScript) {
      const tag = document.createElement("script")
      tag.id = "youtube-api-script"
      tag.src = "https://www.youtube.com/iframe_api"
      document.body.appendChild(tag)
=======
  }, [course]);

  useEffect(() => {
    const existingScript = document.getElementById("youtube-api-script");
    if (!existingScript) {
      const tag = document.createElement("script");
      tag.id = "youtube-api-script";
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
>>>>>>> 1115a5812ebd38394ba956ad827ab420437c430e
    }

    const onYouTubeReady = () => {
      if (playerContainerRef.current) {
        playerRef.current = new window.YT.Player(playerContainerRef.current, {
          videoId,
          playerVars: {
            autoplay: 0,
            rel: 0,
            modestbranding: 1,
            controls: 0,
            showinfo: 0,
            fs: 0,
            disablekb: 1,
            iv_load_policy: 3,
            origin: window.location.origin,
          },
          events: {
            onReady: () => {
<<<<<<< HEAD
              setPlayerReady(true)
              setDuration(playerRef.current.getDuration())
            },
          },
        })
      }
    }

    if (window.YT && window.YT.Player) {
      onYouTubeReady()
    } else {
      window.onYouTubeIframeAPIReady = onYouTubeReady
=======
              setPlayerReady(true);
              setDuration(playerRef.current.getDuration());
            },
          },
        });
      }
    };

    if (window.YT && window.YT.Player) {
      onYouTubeReady();
    } else {
      window.onYouTubeIframeAPIReady = onYouTubeReady;
>>>>>>> 1115a5812ebd38394ba956ad827ab420437c430e
    }

    return () => {
      if (playerRef.current?.destroy) {
<<<<<<< HEAD
        playerRef.current.destroy()
      }
      setPlayerReady(false)
    }
  }, [videoId])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const togglePlayPause = useCallback(() => {
    if (!playerReady) return
    const state = playerRef.current.getPlayerState()
    if (state === window.YT.PlayerState.PLAYING) {
      playerRef.current.pauseVideo()
      setIsPlaying(false)
    } else {
      playerRef.current.playVideo()
      setIsPlaying(true)
    }
  })
=======
        playerRef.current.destroy();
      }
      setPlayerReady(false);
    };
  }, [videoId]);
>>>>>>> 1115a5812ebd38394ba956ad827ab420437c430e

  // ⌨️ Keyboard Shortcut UseEffect
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!playerReady) return

      const video = playerRef.current

      if (e.key === "ArrowRight") {
        const current = video.getCurrentTime()
        video.seekTo(current + 5, true) // ⏩ Forward
      } else if (e.key === "ArrowLeft") {
        const current = video.getCurrentTime()
        video.seekTo(Math.max(current - 5, 0), true) // ⏪ Backward
      } else if (e.key === " ") {
        e.preventDefault()
        togglePlayPause() // Space toggles play/pause
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [playerReady, togglePlayPause])

  useEffect(() => {
    let interval
    if (isPlaying) {
      interval = setInterval(() => {
        const time = playerRef.current?.getCurrentTime()
        setCurrentTime(time || 0)
        setDuration(playerRef.current?.getDuration() || 0)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value)
    playerRef.current?.seekTo(seekTime, true)
    setCurrentTime(seekTime)
  }

  const formatTime = (s) => {
    const mins = Math.floor(s / 60)
      .toString()
      .padStart(2, "0")
    const secs = Math.floor(s % 60)
      .toString()
      .padStart(2, "0")
    return `${mins}:${secs}`
  }

  // Fullscreen toggle function
  const toggleFullscreen = (e) => {
    e.stopPropagation()
    if (!containerRef.current) return

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {
        // fail silently or add fallback
      })
    } else {
      document.exitFullscreen().catch(() => {
        // fail silently or add fallback
      })
    }
  }
  // Load YouTube Iframe API once
  // useEffect(() => {
  //   const existingScript = document.getElementById("youtube-api");
  //   if (!existingScript) {
  //     const script = document.createElement("script");
  //     script.id = "youtube-api";
  //     script.src = "https://www.youtube.com/iframe_api";
  //     document.body.appendChild(script);
  //   }

  //   window.onYouTubeIframeAPIReady = () => {
  //     if (videoId) {
  //       playerRef.current = new window.YT.Player("videoFrame", {
  //         videoId,
  //         events: {
  //           onReady: () => setPlayerReady(true),
  //         },
  //         playerVars: {
  //           rel: 0,
  //           modestbranding: 1,
  //           controls: 0,
  //           fs: 0,
  //           showinfo: 0,
  //           disablekb: 1,
  //         },
  //       });
  //     }
  //   };

  //   document.addEventListener("contextmenu", (e) => e.preventDefault());

  //   return () => {
  //     document.removeEventListener("contextmenu", (e) => e.preventDefault());
  //   };
  // }, []);

  // Update video when changed
  useEffect(() => {
    if (playerRef.current && videoId && playerReady) {
<<<<<<< HEAD
      playerRef.current.loadVideoById(videoId)
=======
      // playerRef.current.loadVideoById(videoId);
>>>>>>> 1115a5812ebd38394ba956ad827ab420437c430e
    }
  }, [videoId, playerReady])

<<<<<<< HEAD
  const handlePlay = () => {
    if (playerReady && playerRef.current) {
      playerRef.current.playVideo()
    }
  }
=======
  // const handlePlay = () => {
  //   if (playerReady && playerRef.current) {
  //     playerRef.current.playVideo();
  //   }
  // };
>>>>>>> 1115a5812ebd38394ba956ad827ab420437c430e

  if (loading) return <p>Loading modules...</p>
  if (error) return <p>Error loading modules: {error.message || error}</p>
  if (!modules?.length) return <p>No modules found.</p>

  return (
    <>
      <Helmet>
        <title>Course Modules — Lifeline IT</title>
      </Helmet>

      <h1 className="text-3xl underline text-[#0B254C] font-bold text-left">
        Course Modules
      </h1>

      {/* ✅ YouTube Player */}
      {videoId ? (
        <div
          ref={containerRef}
          onClick={togglePlayPause}
          className="relative w-full max-w-4xl h-[500px] mx-auto mt-10 overflow-hidden rounded-lg bg-black cursor-pointer"
        >
          {/* YouTube Player */}
          <div
            ref={playerContainerRef}
            className="w-full h-full pointer-events-none"
            id="videoFrame"
          />

          {/* Play Icon Center */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 hover:bg-white/30 rounded-full p-6 transition duration-200">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}

          {/* Custom Controls */}
          {isPlaying && (
            <div
              onClick={(e) => e.stopPropagation()} // prevent closing video on control click
<<<<<<< HEAD
              className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 px-4 py-2 bg-black/60 text-white rounded"
            >
              <div className="flex gap-2 items-center">
                <button
=======
              className={`absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 px-4 py-2  ${isPlaying && "hidden"} bg-black/60 text-white rounded`}
            >
              <div className="flex gap-2 items-center">
                {/* <button
>>>>>>> 1115a5812ebd38394ba956ad827ab420437c430e
                  onClick={togglePlayPause}
                  className="px-2 py-1 bg-white/10 rounded"
                >
                  ⏸ Pause
<<<<<<< HEAD
                </button>
=======
                </button> */}
>>>>>>> 1115a5812ebd38394ba956ad827ab420437c430e
                <span className="text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleSeek}
<<<<<<< HEAD
                className="w-full h-1 accent-orange-400"
              />

              {/* Fullscreen Button */}
=======
                className={`w-full h-[1px] accent-orange-400`}
              />
>>>>>>> 1115a5812ebd38394ba956ad827ab420437c430e
            </div>
          )}

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
<<<<<<< HEAD
            className="absolute bottom-4 right-4 px-3 py-1 bg-amber-500 rounded hover:bg-white/20 transition text-black z-10"
=======
            className="absolute bottom-4 right-4 px-3 py-1 bg-amber-500 rounded  transition text-black z-10"
>>>>>>> 1115a5812ebd38394ba956ad827ab420437c430e
            title="Toggle Fullscreen"
          >
            ⛶
          </button>
          {playerReady && !isPlaying && currentTime >= duration - 1 && (
            <div className="absolute inset-0 bg-black/90 flex items-center justify-center text-white text-lg font-semibold">
              Video Ended
            </div>
          )}
        </div>
      ) : (
        <p className="text-red-500 mt-5">Invalid or missing video link.</p>
      )}

      {/* 📘 Resources */}
      <h1 className="text-left my-3 text-2xl text-[#0B254C] font-bold">
        Resources
      </h1>

      <Accordion
        type="single"
        collapsible
        className="w-full shadow-lg p-4 rounded-md mx-auto border border-[#F7931E] text-left"
      >
        {resources.map((resource, index) => {
          const unique = `${index}-${resource?.title || "untitled"}`
          return (
            <AccordionItem key={unique} value={unique}>
              <AccordionTrigger className="text-lg font-medium py-4">
                {resource?.title || `Resource ${index + 1}`}
              </AccordionTrigger>
              <AccordionContent className="text-blue-800 font-bold text-base px-1 pb-4">
                <Link
                  to={resource?.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {resource?.link || "No link provided"}
                </Link>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>

      {/* 📚 Modules List */}
      <div className="text-left mt-10">
        {modules.map((module, index) => (
          <div key={module.id || module.title || index} className="mt-6">
            <h1
              onClick={() => {
                setVidUrl(module.videoLink)
                setResources(module.resources || [])
                setActiveModuleIndex(index)
              }}
              className={`border border-[#b96c16] cursor-pointer p-3 shadow rounded-md text-xl font-bold ${
                activeModuleIndex === index
                  ? "bg-[#b96c16] text-white"
                  : "bg-gray-50 text-black"
              }`}
            >
              <span
                className={`bg-[#F7931E] font-bold rounded-full px-3 py-1 ${
                  activeModuleIndex === index
                    ? "bg-white text-[#b96c16]"
                    : "bg-[#b96c16] text-white"
                }`}
              >
                {index + 1}
              </span>{" "}
              {module.title}
            </h1>
          </div>
        ))}
      </div>
    </>
<<<<<<< HEAD
  )
}

export default Modules
=======
  );
};

export default Modules;
>>>>>>> 1115a5812ebd38394ba956ad827ab420437c430e

// ei code ta main, working nicely

// import useCourseDetails from "@/hooks/useCourseDetails";
// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Helmet } from "react-helmet-async";
// import { BsXLg } from "react-icons/bs";

// // 🔧 Utility function to extract YouTube video ID
// function getYouTubeVideoId(url) {
//   try {
//     const parsedUrl = new URL(url);

//     if (parsedUrl.hostname.includes("youtube.com")) {
//       return parsedUrl.searchParams.get("v") || null;
//     }

//     if (parsedUrl.hostname === "youtu.be") {
//       return parsedUrl.pathname.slice(1) || null;
//     }

//     if (
//       parsedUrl.hostname === "www.youtube.com" &&
//       parsedUrl.pathname.startsWith("/embed/")
//     ) {
//       return parsedUrl.pathname.split("/embed/")[1] || null;
//     }

//     return null;
//   } catch {
//     return null;
//   }
// }

// const Modules = () => {
//   const [vidUrl, setVidUrl] = useState("");
//   const [resources, setResources] = useState([]);
//   const { route } = useParams();
//   const { course, loading, error } = useCourseDetails(route);
//   const [activeModuleIndex, setActiveModuleIndex] = useState(null);
//   const [playerReady, setPlayerReady] = useState(false);

//   const modules = course?.modules;

//   useEffect(() => {
//     if (course?.modules?.length) {
//       setVidUrl(course.modules[0].videoLink);
//     }

//     if (course?.modules?.length) {
//       setResources(course.modules[0].resources);
//     }
//   }, [course]);

//   const videoId = getYouTubeVideoId(vidUrl);

//   useEffect(() => {
//   const tag = document.createElement("script");
//   tag.src = "https://www.youtube.com/iframe_api";
//   document.body.appendChild(tag);

//   window.onYouTubeIframeAPIReady = () => {
//     playerRef.current = new window.YT.Player("videoFrame", {
//       videoId,
//       events: {
//         onReady: () => setPlayerReady(true),
//       },
//       playerVars: {
//         rel: 0,
//         modestbranding: 1,
//         controls: 0,
//         showinfo: 0,
//         fs: 0,
//         disablekb: 1,
//       },
//     });
//   };
// }, []);

// const handlePlay = () => {
//   if (playerReady) playerRef.current.playVideo();
// };

//   if (loading) return <p>Loading modules...</p>;
//   if (error) return <p>Error loading modules: {error.message || error}</p>;
//   if (!course?.modules?.length) return <p>No modules found.</p>;

//   return (
//     <>
//       <Helmet>
//         <title>Course Modules — Lifeline IT</title>
//       </Helmet>

//       <h1 className="text-3xl underline  text-[#0B254C] font-bold text-left">
//         Course Modules
//       </h1>
//       {/* Video Embed */}
//       {videoId ? (
//         <div className="my-8 max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg relative">
//           <iframe
//             // src={`https://www.youtube.com/embed/${videoId}`}
//             src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=0&showinfo=0&disablekb=1&fs=0`}
//             // title={`Course Video - ${module.title}`}
//             className="w-full h-full cursor-pointer"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//           <button
//             onClick={handlePlay}
//             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/60 text-white px-4 py-2 rounded"
//           >
//             ▶️ Play
//           </button>
//         </div>
//       ) : (
//         <p className="text-red-500 mt-5">Invalid or missing video link.</p>
//       )}

//       {/* Resources */}
//       <h1 className=" text-left my-3 text-2xl text-[#0B254C] font-bold">
//         Resources
//       </h1>

//       <Accordion
//         type="single"
//         collapsible
//         className="w-full shadow-lg p-4 rounded-md mx-auto border border-[#F7931E] text-left"
//       >
//         {resources.map((resource) => (
//           <AccordionItem key={resource} value={resource.title}>
//             <AccordionTrigger className="flex justify-between items-center text-left text-lg font-medium py-4">
//               {resource.title}
//             </AccordionTrigger>
//             <AccordionContent className="text-blue-800 font-bold text-base px-1 pb-4 transition-all duration-300 ease-in-out">
//               <Link
//                 to={resource.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 underline"
//               >
//                 {resource.link}
//               </Link>
//             </AccordionContent>
//           </AccordionItem>
//         ))}
//       </Accordion>
//       <div className="text-left mt-10">
//         {modules.map((module, index) => {
//           // const videoLink = module.videoLink[0].link;
//           // const videoId = getYouTubeVideoId(videoLink);

//           // module.videoLink.map((video) => {
//           //   const videoId = getYouTubeVideoId(video.link);
//           //   console.log(videoId);
//           // });

//           // console.log(module);
//           // const videoId = getYouTubeVideoId(module.videoLink);
//           // console.log(videoId);

//           const Resource = module.resources?.[0];

//           return (
//             <div key={module.id || module.title || index} className="mt-6">
//               {/* Module Title */}
//               <h1
//                 onClick={() => {
//                   setVidUrl(module.videoLink);
//                   setResources(module.resources);
//                   setActiveModuleIndex(index);
//                 }}
//                 className={`border border-[#b96c16] cursor-pointer p-3 shadow rounded-md text-xl  font-bold ${
//                   activeModuleIndex === index
//                     ? "bg-[#b96c16] text-white"
//                     : "bg-gray-50 text-black"
//                 }`}
//               >
//                 <span
//                   className={`bg-[#F7931E] text-white font-bold rounded-full px-3 py-1 ${
//                     activeModuleIndex === index
//                       ? "bg-white text-[#b96c16]"
//                       : "bg-[#b96c16] text-white"
//                   }`}
//                 >
//                   {index + 1}
//                 </span>{" "}
//                 {module.title}
//               </h1>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Modules;
