import icon from '/food1.png'
import icon2 from '/food2.png'

export function Navbar(){

    const list = [
        {key:'Início',url:'#'},
        {key:'Exclusivos',url:'#'},
        {key:'Endereço',url:'#'},
        {key:'Contato',url:'#'},
    ]
    return(
        <>
            <header className="fixed flex bg-black w-screen z-2 justify-center">
                <nav className="flex justify-between items-center w-[92%] text-white gap-3">
                    <img className="w-16" src={icon} alt='logo com o nome Sushi 3D'></img>
                    <div className="md:static absolute md:min-h-fit bg-black left-0 top-full w-full flex-items-center px-2">
                        <ul className="flex flex-col md:justify-center md:flex-row md:items-center gap-4 text-lg mb-5 mt-2 md:my-0">
                        {list.map((option)=>(
                            <li className="w-fit font-semibold hover:font-bold">
                                <a href={option.url}>{option.key}</a>
                            </li>
                        ))}
                    </ul>
                    </div>
                    <div className="flex flex-row gap-3">
                        <button className="bg-red-700 rounded-full px-3 py-2 font-semibold">Reservar</button>
                        <img src={icon2} className='md:hidden cursor-pointer w-10'></img>
                    </div>
                </nav>
            </header>
        </>
    )
}