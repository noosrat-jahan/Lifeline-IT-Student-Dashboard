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




import useCourseDetails from "@/hooks/useCourseDetails";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

// 🔧 Extract YouTube video ID
function getYouTubeVideoId(url) {
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.hostname.includes("youtube.com")) {
      return parsedUrl.searchParams.get("v") || null;
    }
    if (parsedUrl.hostname === "youtu.be") {
      return parsedUrl.pathname.slice(1) || null;
    }
    if (parsedUrl.pathname.startsWith("/embed/")) {
      return parsedUrl.pathname.split("/embed/")[1] || null;
    }
    return null;
  } catch {
    return null;
  }
}

const Modules = () => {
  const [vidUrl, setVidUrl] = useState("");
  const [resources, setResources] = useState([]);
  const { route } = useParams();
  const { course, loading, error } = useCourseDetails(route);
  const [activeModuleIndex, setActiveModuleIndex] = useState(null);

  const videoId = getYouTubeVideoId(vidUrl);
  const playerRef = useRef(null);
  const [playerReady, setPlayerReady] = useState(false);

  const modules = course?.modules;

  // Set initial video & resources
  useEffect(() => {
    if (course?.modules?.length) {
      setVidUrl(course.modules[0].videoLink);
      setResources(course.modules[0].resources || []);
      setActiveModuleIndex(0);
    }
  }, [course]);

  // Load YouTube Iframe API once
  useEffect(() => {
    const existingScript = document.getElementById("youtube-api");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "youtube-api";
      script.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(script);
    }

    window.onYouTubeIframeAPIReady = () => {
      if (videoId) {
        playerRef.current = new window.YT.Player("videoFrame", {
          videoId,
          events: {
            onReady: () => setPlayerReady(true),
          },
          playerVars: {
            rel: 0,
            modestbranding: 1,
            controls: 0,
            fs: 0,
            showinfo: 0,
            disablekb: 1,
          },
        });
      }
    };

    document.addEventListener("contextmenu", (e) => e.preventDefault());

    return () => {
      document.removeEventListener("contextmenu", (e) => e.preventDefault());
    };
  }, []);

  // Update video when changed
  useEffect(() => {
    if (playerRef.current && videoId && playerReady) {
      playerRef.current.loadVideoById(videoId);
    }
  }, [videoId, playerReady]);

  const handlePlay = () => {
    if (playerReady && playerRef.current) {
      playerRef.current.playVideo();
    }
  };

  if (loading) return <p>Loading modules...</p>;
  if (error) return <p>Error loading modules: {error.message || error}</p>;
  if (!modules?.length) return <p>No modules found.</p>;

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
        <div className="my-8 max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg relative">
          <div id="videoFrame" className="w-full h-full pointer-events-none"></div>
          <button
            onClick={handlePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/60 text-white px-4 py-2 rounded"
          >
            ▶️ Play
          </button>
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
          const unique = `${index}-${resource?.title || "untitled"}`;
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
          );
        })}
      </Accordion>

      {/* 📚 Modules List */}
      <div className="text-left mt-10">
        {modules.map((module, index) => (
          <div key={module.id || module.title || index} className="mt-6">
            <h1
              onClick={() => {
                setVidUrl(module.videoLink);
                setResources(module.resources || []);
                setActiveModuleIndex(index);
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
  );
};

export default Modules;

