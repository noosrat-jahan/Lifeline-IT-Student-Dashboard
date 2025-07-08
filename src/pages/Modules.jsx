import useCourseDetails from "@/hooks/useCourseDetails";
import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

const Modules = () => {
  const { route } = useParams();
  console.log(route);
  const { course, loading, error } = useCourseDetails(route);
  const modules = course?.modules || [];
  console.log(modules);
  return (
    <div className="text-left">
      {modules.map((module) => (
        <div key={module}>
          <h1 className=" text-2xl text-[#0B254C] font-bold">{module.title}</h1>
          <div className="mt-5 max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/${new URL(
                module.videoLink
              ).searchParams.get("v")}`}
              title="Course Video"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <h1 className="text-left my-5 text-2xl text-[#0B254C] font-bold">
            Resourses
          </h1>

          <Accordion
            type="single"
            collapsible
            className="w-full shadow-lg p-4 mx-auto"
          >
            <AccordionItem value= {module.resources[0].title}>
              <AccordionTrigger  className="flex justify-between items-center text-left text-lg font-medium py-4">
                {module.resources[0].title}
              </AccordionTrigger>
              <AccordionContent className="text-blue-800 font-bold text-base px-1 pb-4 transition-all duration-300 ease-in-out">
                <Link to="">{module.resources[0].link}</Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
         
        </div>
      ))}
    </div>
  );
};

export default Modules;
