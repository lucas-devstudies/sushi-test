import videoBg from '../assets/video/videoBG.mp4'
import icDown from '../assets/ic_down.svg' 
import { CustomCard } from '../components/CustomCard';

interface CustomCard{
    id:number;
    title:string;
    image:string;
}

const styles = {
    bt: {
        width: '52px',   
        height: '52px',  
        borderRadius: '50%',
        cursor: 'pointer',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

const listFoods:CustomCard[]=[
    {id:1,title:'Combo Niguiri & Hossomaki Prime.',image:'food1.png'},
    {id:2,title:'Combinado Premium do Chef (30/40 peças)',image:'food2.png'},
    {id:3,title:'Combinado Exclusivo Salmão & Sashimi',image:'food3.png'},
]

export default function DashRestaurant() {

    function clicado(){
        alert("desci")
    }

    return(
        <main className="overflow-x-hidden">
            <section className="w-screen h-screen">
                <video src={videoBg} autoPlay loop muted style={{ width: '100dvw', height: '100dvh', objectFit: 'cover', zIndex: -1}}/>
                <button 
                    className='absolute left-1/2 bg-transparent -translate-x-1/2 z-20 bottom-5 flex items-center justify-center border-gray-400 border-2 hover:border-red-700 hover:scale-120' onClick={() => clicado()} style={styles.bt}>
                    <img src={icDown} alt="Seta para baixo" className="w-full h-full object-contain"/>
                </button>
                
                <div className="flex flex-col h-screen justify-center items-start px-10 overflow-hidden" style={{position:'absolute',right:0,left:0,top:'50%',transform: 'translateY(-50%)',background: 'linear-gradient(270deg, rgba(217, 217, 217, 0.00) 0%, #000 100%)'}}>
                    <h1 className="font-bold text-9xl text-white">Sushi<span className='text-red-700'>3D</span></h1>
                    <p className="text-xl text-white italic">A experiência gastronômica e tecnológica do mundo</p>
                    <h2 className='text-white text-2xl my-4'>Faça sua reserva agora mesmo</h2>
                    <button className="bg-red-700 px-4 py-3 rounded-4xl text-white font-semibold text-xl hover:bg-red-800 active:scale-90" onClick={()=>clicado()}>Reservar agora</button>
                </div>
            </section>
            <section className="w-screen h-dvh">
                <h2 className='text-5xl py-6 font-bold text-red-700'>PRATOS PRINCIPAIS</h2>
                <div className="flex items-end justify-center mt-5">
                    {
                        listFoods.map((food) => (
                            <CustomCard title={food.title} image={food.image} id={food.id}></CustomCard>
                        ))
                    }
                </div>
            </section>
            <form className='w-screen overflow-hidden'>
                <label htmlFor="">Teste de coisas</label>
            </form>
        </main>   
    )
}