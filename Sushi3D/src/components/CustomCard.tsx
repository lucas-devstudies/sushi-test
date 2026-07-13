interface CustomCardProps{
    id:number;
    title:string;
    image:string;
}

export function CustomCard({id,title,image}:CustomCardProps){
    return(
        <>
        <div className="flex flex-col items-center">
            <div className="flex justify-center transition-transform duration-500 hover:rotate-10 filter hover:drop-shadow-[0_20px_30px_rgba(185,28,28,0.7)]">
            {id%2!==0 ?(
                <img src={image} height={20} width={'80%'}></img>
            ):(
                <img src={image} height={20} width={'90%'}></img>
            )}
            </div>
            <h1 className="text-white font-changa text-3xl my-4">{title}</h1>
        </div>
        </>
    )
}