import Card from "@/components/main/Card";
import { fcApi } from "@/libs/fcApi";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
  const learnTokVids: VideoProp[] = await fcApi.fetchVids();

  return (
    <>
      {learnTokVids.length > 0 ? (
        <Suspense fallback={<Loading />}>
          {learnTokVids.map((v) => (
            <Card card={v} key={v.video_id} />
          ))}
        </Suspense>
      ) : (
        <div className="h-screen xl:h-videoContainer_xl center_all sm:h-videoContainer_sm">
          <p>There are no videos currently on platform </p>
        </div>
      )}
    </>
  );
}
