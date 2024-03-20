import { Button } from "./ui/button";

function Videos() {
  return (
    <>
      <h1 className="text-4xl font-semibold mb-4">Watch some of our crazy videos</h1>
      <div className="flex flex-row gap-4 justify-between mt-8">
        <iframe
          height={350}
          width={620}
          src="https://www.youtube.com/embed/6x_b11Kyrco"
          title="We Adopted an Orphanage"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          height={350}
          width={620}
          src="https://www.youtube.com/embed/l5PvwYZQtT8?si=R3q1wcbF-PP4RErU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
          allowFullScreen
        ></iframe>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibolds mt-8">
          Your Input Matters: Request Your Own Video
        </h2>
        <p className="w-8/12">
          At the National Lottery, we always strive to put our players first.
          That's why we are excited to announce a new feature that lets you
          request your own video. With our "Request Your Own Video" feature, you
          can choose your favorite cause and suggest a creative idea for a
          video. We want to hear your thoughts and ideas, and we will work with
          you to create a video that showcases your chosen cause in the best
          possible way. Let's make a difference together!
        </p>
        <Button className="py-6 px-4 text-lg">Send in your idea</Button>
      </div>
    </>
  );
}

export default Videos;
