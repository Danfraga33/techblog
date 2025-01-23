import { useParams, useRouteLoaderData } from "@remix-run/react";
import React from "react";
import ContentLayout from "~/components/Dashboard/ContentLayout";
import PodcastPlayer from "~/components/PodcastPlayer";
import { PageTitle } from "~/lib/utils";
import { podcastList } from "./(podcast).podcast";

const PodcastDynamic = () => {
  const { name } = useParams();
  if (typeof name !== "string") return "Try Again";
  const pageTitle = PageTitle(name);
  const selectedPodcast = podcastList.find((podcast) => {
    return podcast.title === pageTitle;
  });

  if (!selectedPodcast) {
    console.error("No matching podcast found for:", pageTitle);
    return <div>No podcast found!</div>;
  }

  return <PodcastPlayer selectedPodcast={selectedPodcast} />;
};

export default PodcastDynamic;
