import icDown from '../assets/ic_down.svg' 
import { CustomCard } from '../components/CustomCard';
import { Navbar } from '../components/Navbar';
import cidade1 from '../../public/food1.png'

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
const adress=[
    {
        photo: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500", // Foto ilustrativa de sushi para o cardápio
        unit: "Loja 01",
        street: "Avenida Nações Unidas, nº 1975",
        neighborhood: "Centro",
        city: "Parintins - AM"
    },
    {
        photo: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=500",
        unit: "Bloco B",
        street: "Avenida John Kennedy, nº 1430",
        neighborhood: "Adrianópolis",
        city: "Manaus - AM"
    },
    {
        photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500",
        "unit": "Loja 04",
        "street": "Rua das Oliveiras, nº 820",
        "neighborhood": "Vila Buarque",
        "city": "São Paulo - SP"
    }
]

export default function Home() {

    function clicado(){
        alert("desci")
    }

    return(
        <main className="overflow-x-hidden">
            <Navbar></Navbar>
            <section className="w-screen h-screen overflow-hidden">
                <video src='/video/videoBg.mp4' autoPlay loop muted={true} playsInline style={{margin:0, width: '100dvw', height: '100dvh', objectFit: 'cover', zIndex: -1}}/>
                <button 
                    className='absolute left-1/2 bg-transparent -translate-x-1/2 z-1 bottom-5 flex items-center justify-center border-gray-400 border-2 hover:border-red-700 hover:scale-120' onClick={() => clicado()} style={styles.bt}>
                    <img src={icDown} alt="Seta para baixo" className="w-full h-full object-contain"/>
                </button>
                
                <div className="flex flex-col h-screen justify-center items-start px-10 overflow-hidden" style={{position:'absolute',right:0,left:0,top:'50%',transform: 'translateY(-50%)',background: 'linear-gradient(270deg, rgba(217, 217, 217, 0.00) 0%, #000 100%)'}}>
                    <h1 className="font-protest font-bold text-9xl text-white">SUSHI<span className='text-red-700'>3D</span></h1>
                    <p className="text-xl text-white italic">A experiência gastronômica e tecnológica do mundo</p>
                    <h2 className='text-white text-2xl my-4'>Faça sua reserva agora mesmo</h2>
                    <button className="bg-red-700 px-4 py-3 rounded-4xl text-white font-semibold text-xl hover:bg-red-800 active:scale-90" onClick={()=>clicado()}>Reservar agora</button>
                </div>
            </section>
            <section className="w-screen">
                <h2 className='text-5xl py-6 font-bold text-white font-protest'>Pratos Exlusivos</h2>
                <div className="flex items-end justify-center mt-5 mb-5 flex-col md:flex-row">
                    {
                        listFoods.map((food) => (
                            <CustomCard title={food.title} image={food.image} id={food.id} key={food.id}></CustomCard>
                        ))
                    }
                </div>
            </section>
            <section className='w-dvw h-auto bg-mauve-950 py-6'>
                <h1 className="font-protest font-bold text-5xl text-white">Endereço</h1>
                <div className="flex flex-col md:flex-row gap-3 mt-4 px-20">
                    {adress.map((ad)=>(
                        <div className="mt-5 w-full border-white border-2 pb-5 h-140 md:max-h-140 overflow-hidden rounded-3xl hover:shadow-[0_0_20px_5px_rgba(185,28,28,0.7)]">
                            <img className="w-full h-100 object-center overflow-hidden" src={ad.photo} alt="Foto da unidade do restaurante em Parintins no Amazonas" />
                            <div className="px-5 mt-3">
                                <h2 className='font-bold text-white text-xl'>Unidade {ad.city}</h2>
                                <p className='text-start text-lg'>Rua: {ad.street}</p>
                                <p className='text-start text-lg'>Bairro: {ad.neighborhood}</p>
                                <p className='text-start text-lg'>Cidade: {ad.city}</p>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </section>
        </main>   
    )
}