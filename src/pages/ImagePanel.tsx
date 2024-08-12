import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

export function ImagePage() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Explore Stunning Images
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to experience the 3D effect
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="https://www.wanderershub.com/wp-content/uploads/2023/09/Cafe-des-Art-Puducherry.jpg"
            alt="Beautiful landscape"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-blue-500 text-white text-xs font-bold"
          >
            Download
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold dark:bg-black dark:text-white"
          >
            View Gallery
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default ImagePage;
