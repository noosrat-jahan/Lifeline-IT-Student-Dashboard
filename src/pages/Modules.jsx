import useCourseDetails from "@/hooks/useCourseDetails";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";
import { BsXLg } from "react-icons/bs";

// 🔧 Utility function to extract YouTube video ID
function getYouTubeVideoId(url) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtube.com")) {
      return parsedUrl.searchParams.get("v") || null;
    }

    if (parsedUrl.hostname === "youtu.be") {
      return parsedUrl.pathname.slice(1) || null;
    }

    if (
      parsedUrl.hostname === "www.youtube.com" &&
      parsedUrl.pathname.startsWith("/embed/")
    ) {
      return parsedUrl.pathname.split("/embed/")[1] || null;
    }

    return null;
  } catch {
    return null;
  }
}

const Modules = () => {
  const [vidUrl, setVidUrl] = useState("");
  const { route } = useParams();
  const { course, loading, error } = useCourseDetails(route);

  const modules = course?.modules;

  useEffect(() => {
    if (course?.modules?.length) {
      setVidUrl(course.modules[0].videoLink);
    }
  }, [course]);

  const videoId = getYouTubeVideoId(vidUrl);
  console.log(videoId);

  if (loading) return <p>Loading modules...</p>;
  if (error) return <p>Error loading modules: {error.message || error}</p>;
  if (!course?.modules?.length) return <p>No modules found.</p>;

  return (
    <>
      <Helmet>
        <title>Course Modules — Lifeline IT</title>
      </Helmet>

      <h1 className="text-3xl underline  text-[#0B254C] font-bold text-left">Course Modules</h1>
      {/* Video Embed */}
      {videoId ? (
        <div className="my-8 max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            // title={`Course Video - ${module.title}`}
            className="w-full h-full cursor-pointer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p className="text-red-500 mt-5">Invalid or missing video link.</p>
      )}
      <div className="text-left">
        {modules.map((module, index) => {
          // const videoLink = module.videoLink[0].link;
          // const videoId = getYouTubeVideoId(videoLink);

          // module.videoLink.map((video) => {
          //   const videoId = getYouTubeVideoId(video.link);
          //   console.log(videoId);
          // });

          // console.log(module);
          // const videoId = getYouTubeVideoId(module.videoLink);
          // console.log(videoId);

          const Resource = module.resources?.[0];

          return (
            <div key={module.id || module.title || index} className="mb-10">
              
              {/* Module Title */}
              <h1
                onClick={() => {
                  setVidUrl(module.videoLink);
                }}
                className="bg-gray-100 cursor-pointer p-3 shadow-md rounded-md text-xl text-[#0B254C] font-bold"
              >
                {index + 1}. {module.title}
              </h1>

              {/* Resources */}
              <h1 className=" text-left my-5 text-2xl text-[#0B254C] font-bold">
                Resources
              </h1>

              {Resource ? (
                <Accordion
                  type="single"
                  collapsible
                  className="w-full shadow-lg p-4 mx-auto"
                >
                  <AccordionItem value={Resource.title}>
                    <AccordionTrigger className="flex justify-between items-center text-left text-lg font-medium py-4">
                      {Resource.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-blue-800 font-bold text-base px-1 pb-4 transition-all duration-300 ease-in-out">
                      <Link
                        to={Resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        {Resource.link}
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <p>No resources available.</p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Modules;
