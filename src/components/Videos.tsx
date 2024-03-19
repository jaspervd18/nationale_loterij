import { Button } from "./ui/button";

function Videos() {
    return (
        <>
            <h1 className="text-4xl font-semibold text-center mt-8 mb-4">Watch some of our crazy videos</h1>
            <div className="flex flex-row gap-4 justify-center">
                <img src="https://picsum.photos/200/300" className="h-48 w-72 rounded-sm"></img>
                <img src="https://picsum.photos/200/300" className="h-48 w-72 rounded-sm"></img>
                <img src="https://picsum.photos/200/300" className="h-48 w-72 rounded-sm"></img>
                <img src="https://picsum.photos/200/300" className="h-48 w-72 rounded-sm"></img>
            </div>
            <div className="ml-8 space-y-2">
                <h2 className="text-2xl font-semibolds mt-4">Your Input Matters: Request Your Own Video</h2>
                <p>
                    At the National Lottery, we always strive to put our players first. That's why we are excited 
                    to announce a new feature that lets you request your own video. With our "Request Your Own Video" 
                    feature, you can choose your favorite cause and suggest a creative idea for a video. We want to hear 
                    your thoughts and ideas, and we will work with you to create a video that showcases your chosen 
                    cause in the best possible way. Let's make a difference together!
                </p>
            <Button className="py-6 px-4 text-lg">Send in an idea</Button>
            </div>
            
        </>
    )
}

export default Videos;