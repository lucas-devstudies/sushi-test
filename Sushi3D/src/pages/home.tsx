import icDown from '../assets/ic_down.svg' 
import { CustomCard } from '../components/CustomCard';
import { Navbar } from '../components/Navbar';
import { useState } from 'react';

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

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const sendMessage = async (event: any) => {
        event.preventDefault();

        // 1. Criamos um FormData limpo e inserimos os estados nele
        const formData = new FormData();
        formData.append("access_key", "4735c136-436e-4ab6-afa5-d3e5e4dc9bf1");
        formData.append("name", name);
        formData.append("email", email);
        formData.append("subject", title);
        formData.append("message", text);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            
            if (data.success) {
                alert("Sucesso! Mensagem enviada com sucesso.");
            } else {
                alert("Erro na API da Web3Forms: " + data.message);
            }
        } catch (error) {
            console.error("Erro detalhado:", error);
            alert("Erro na rede. Verifique se sua chave está correta.");
        }
    };

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
                    <h1 className="font-protest font-bold text-7xl sm:text-9xl text-white">SUSHI<span className='text-red-700'>3D</span></h1>
                    <p className="text-xl text-start text-white italic font-changa">A experiência gastronômica e tecnológica do mundo</p>
                    <h2 className='text-white text-xl text-start sm:text-2xl my-6 sm:my-4 font-changa'>Faça sua reserva agora mesmo</h2>
                    <button className="bg-red-700 px-4 py-3 rounded-4xl text-white font-semibold text-xl hover:bg-red-800 active:scale-90 font-changa " onClick={()=>clicado()}>Reservar agora</button>
                </div>
            </section>
            <section className="w-screen px-3">
                <h2 className='text-5xl py-6 font-bold text-white font-protest'>Pratos Exlusivos</h2>
                <div className="flex items-center md:items-end justify-center mt-5 mb-5 flex-col md:flex-row">
                    {
                        listFoods.map((food) => (
                            <CustomCard title={food.title} image={food.image} id={food.id} key={food.id}></CustomCard>
                        ))
                    }
                </div>
            </section>
            <section className='w-dvw h-auto bg-mauve-950 py-6'>
                <h1 className="font-protest font-bold text-5xl text-white">Endereço</h1>
                <div className="flex flex-col md:flex-row gap-5 md:gap-10 mt-4 px-3 md:px-5">
                    {adress.map((ad, index) => {
                        return (
                            <div key={index} className="bg-black mt-5 w-full pb-5 h-auto md:max-h-180 overflow-hidden rounded-3xl hover:-translate-y-3 transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.4)] cursor-auto">
                                <img className="w-full h-80 object-center object-cover overflow-hidden" src={ad.photo} alt="Foto da unidade do restaurante" />
                                <div className="px-5 mt-3">
                                    <h2 className='font-bold text-white text-2xl font-changa my-2'>Unidade {ad.unit}</h2>
                                    <p className='text-start text-lg'><span className="font-bold text-white">Rua:</span> {ad.street}</p>
                                    <p className='text-start text-lg'><span className="font-bold text-white">Bairro:</span> {ad.neighborhood}</p>
                                    <p className='text-start text-lg'><span className="font-bold text-white">Cidade:</span> {ad.city}</p>
                                    <hr className="my-5"/>
                                    <button className="font-changa bg-red-700 px-4 py-3 rounded-4xl text-white font-semibold text-xl hover:bg-red-800 active:scale-90 w-full cursor-pointer" onClick={() => clicado()}>Reservar agora</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
            <section className='w-dvw h-auto bg-black py-6 flex flex-col items-center px-3'>
                <h1 className="font-protest font-bold text-5xl text-white">Contato</h1>
                <form className="bg-mauve-950 py-5 mt-10 gap-3 px-5 rounded-xl flex flex-col items-start h-auto w-full max-w-xl shadow-[0_0_5px_3px_rgba(255,255,255,0.4)]" onSubmit={sendMessage}>
                    <label className="w-100 text-white text-start text-xl font-bold">Nome:</label>
                    <input className="mt-2 w-full border-2  text-black bg-white text-xl px-2 py-2 rounded-xl placeholder:text-gray-500" type="text" onChange={(e) => setName(e.target.value)} name="nome" placeholder="Nome Completo"/>
                    
                    <label className="w-100 text-white text-start text-xl font-bold">Email:</label>
                    <input className="mt-2 w-full border-2  text-black bg-white text-xl px-2 py-2 rounded-xl placeholder:text-gray-500" type="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="seuemail@gmail.com"/>
                    
                    <label className="w-100 text-white text-start text-xl font-bold">Título:</label>
                    <input className="mt-2 w-full border-2  text-black bg-white text-xl px-2 py-2 rounded-xl placeholder:text-gray-500" type="text" onChange={(e) => setTitle(e.target.value)} name="Título" placeholder="Um título"/>
                    
                    <label className="w-100 text-white text-start text-xl font-bold">Mensagem:</label>
                    <textarea className="mt-2 w-full border-2  text-black bg-white text-xl px-2 py-2 rounded-xl placeholder:text-gray-500" onChange={(e) => setText(e.target.value)} name="Mensagem" placeholder="Sua mensagem completa"/>
                    <button className="font-changa bg-red-700 px-4 py-3 rounded-4xl text-white font-semibold text-xl hover:bg-red-800 active:scale-90 w-full cursor-pointer" type='submit'>Enviar</button>
                </form>
            </section>
        </main>   
    )
}