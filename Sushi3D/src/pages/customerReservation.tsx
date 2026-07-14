import { useState } from "react";
import { Navbar } from "../components/Navbar"

export default function CustumerReservation(){

    let restaraunts = [
        {name:'aaa'},
        {name:'teste2'}
    ];
    let tables = [
        {name:'1 Lugar'},
        {name:'2 Lugares'},
        {name:'4 Lugares'},
        {name:'6 Lugares'},
        {name:'8 Lugares'}
    ]

    let [restaurant, setRestaurant] = useState(restaraunts[0].name);
    let [table, setTable] = useState(tables[0].name);

    let [date, setDate] = useState('');
    let [menuDate,setMenuDate] = useState<Boolean>(false);
    let [menuTable,setMenuTable] = useState<Boolean>(false);

    function reserve(){

    }
    const handleDateChange = (event:any) => {
        setDate(event.target.value);
    };
    return (
        <main>
            <Navbar></Navbar>
            <section className="flex justify-center items-center h-screen w-screen">
                <form onSubmit={(e)=> {e.preventDefault();reserve();}} className="bg-mauve-950 flex flex-col gap-3 drop-shadow-[0_20px_100px_rgba(185,28,28,0.7)] py-4 px-5 rounded-2xl w-full max-w-100">
                    <h2 className="font-bold text-3xl text-white font-changa">Reserva</h2>
                    <label className="w-full text-start text-xl font-bold text-white">Nome:</label>
                    <div className="relative">
                        <button className="flex justify-between bg-white px-4 items-center w-full mauve-950 border rounded-lg border-gray-800 py-2 font-semibold text-black" onClick={()=>setMenuDate(!menuDate)}>
                            {restaurant}
                            {menuDate ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            )}
                        </button>
                        {menuDate && (
                            <div className="absolute z-10 bg-white border border-gray-800 w-full py-2 font-semibold text-black">
                                {restaraunts.map((restaurant)=>
                                    <a className="hover:bg-gray-200 w-full text-start py-1 px-4 flex cursor-pointer" onClick={(()=>(setRestaurant(restaurant.name),setMenuDate(!menuDate)))}>{restaurant.name}</a>
                                )}
                            </div>
                        )}
                    </div>
                    <label className="w-full text-start text-xl font-bold text-white">Data:</label>
                    <input 
                        type="date" 
                        onChange={handleDateChange}
                        value={date}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm font-semibold text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    />
                    <label className="w-full text-start text-xl font-bold text-white">Modelo de Mesa:</label>
                    <div className="relative">
                        <button className="flex justify-between bg-white px-4 items-center w-full mauve-950 border rounded-lg border-gray-800 py-2 font-semibold text-black" onClick={()=>setMenuTable(!menuTable)}>
                            {table}
                            {menuTable ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            )}
                        </button>
                        {menuTable && (
                            <div className="absolute z-10 bg-white border border-gray-800 w-full py-2 font-semibold text-black">
                                {tables.map((table)=>
                                    <a className="hover:bg-gray-200 w-full text-start py-1 px-4 flex cursor-pointer" onClick={(()=>(setTable(table.name),setMenuTable(!menuTable)))}>{table.name}</a>
                                )}
                            </div>
                        )}
                    </div>
                    <button className="bg-red-700 px-4 mt-2 py-3 rounded-4xl text-white font-semibold text-xl hover:bg-red-800 active:scale-90 font-changa">Confirmar</button>
                </form>
            </section>
        </main>
    )
}