import { useState } from "react";
import { Navbar } from "../components/Navbar"

export default function CustumerReservation(){

    let restaraunts = [
        {name:'aaa'},
        {name:'teste2'}
    ];
    
    let [restaurant, setRestaurant] = useState(restaraunts[0].name);
    let [date, setDate] = useState('');
    let [people, setPeople] = useState('');
    let [menu,setMenu] = useState<Boolean>(true);

    function reserve(){

    }

    return (
        <main>
            <Navbar></Navbar>
            <section className="flex justify-center items-center h-screen w-screen">
                <form onSubmit={(e)=> {e.preventDefault();reserve();}} className="bg-mauve-950 flex flex-col gap-3 drop-shadow-[0_20px_100px_rgba(185,28,28,0.7)] py-4 px-5 rounded-2xl w-full max-w-100">
                    <h2 className="font-bold text-3xl text-white font-changa">Registro</h2>
                    <label className="w-full text-start text-xl font-bold text-white">Nome:</label>
                    <div className="relative">
                        <button className="flex justify-between bg-gray-950 px-2 items-center w-full mauve-950 border border-gray-800 py-2 font-bold text-white" onClick={()=>setMenu(!menu)}>
                            {restaurant}
                            {menu ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            )}
                        </button>
                        {menu && (
                            <div className="absolute z-10 bg-mauve-950 border border-gray-800 w-full py-2 font-bold text-white">
                                {restaraunts.map((restaurant)=>
                                    <a className="hover:bg-gray-800 w-full text-start py-1 px-2 flex cursor-pointer" onClick={(()=>(setRestaurant(restaurant.name),setMenu(!menu)))}>{restaurant.name}</a>
                                )}
                            </div>
                        )}
                    </div>
                    <a href="/admin/login" className="text-xl text-center mb-4">Já tem uma conta? <span className="text-white">Faça login</span></a>
                </form>
            </section>
        </main>
    )
}