import { useParams } from "@remix-run/react";
import PodcastPlayer from "~/components/PodcastPlayer";
import { podcastList } from "~/data/podcasts";
import { PageTitle } from "~/lib/utils";

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
