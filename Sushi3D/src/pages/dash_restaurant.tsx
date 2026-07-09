import videoBg from '../assets/video/videoBG.mp4'

export default function DashRestaurant() {

    function clicado(){
        alert("desci")
    }

    return(
        <main className="overflow-x-hidden">
            <video src={videoBg} autoPlay loop muted  style={{ width: '100dvw', height: '100dvh', objectFit: 'cover', position: 'sticky', top: 0, left: 0, zIndex: -1}}/>
            <button className='absolute left-0 right-0 z-1 tex-white text-center bottom-5' onClick={()=>clicado()} >Baixar</button>
            <section className="flex flex-col justify-center items-start px-10 overflow-hidden" style={{position:'absolute',top:'50%',left:0}}>
                <h1 className="font-bold text-8xl text-white">Sushi 3D</h1>
                <p className="text-xl text-white">A experiência gastronômica e tecnológica do mundo</p>
            </section>
            <form className='w-screen overflow-hidden'>
                <label htmlFor="">Teste de coisas</label>
            </form>
        </main>   
    )
}