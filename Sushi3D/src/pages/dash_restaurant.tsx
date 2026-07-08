import videoBg from '../assets/video/videoBG.mp4'

export default function DashRestaurant() {

    return(
        <>
            <video src={videoBg} autoPlay loop muted  style={{ width: '100vw', height: '100vh', objectFit: 'cover', position: 'fixed', top: 0, left: 0, zIndex: -1 }}/>
            <section className="w-screen h-screen flex flex-col justify-center items-start px-10">
                <h1 className="font-bold text-8xl text-white">Sushi 3D</h1>
                <p className="text-xl text-white">A experiência gastronômica e tecnológica do mundo</p>
            </section>
        </>
    )
}