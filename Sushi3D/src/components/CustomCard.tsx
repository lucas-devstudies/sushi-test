interface CustomCardProps{
    id:number;
    title:string;
    image:string;
}

export function CustomCard({id,title,image}:CustomCardProps){
    return(
        <>
        <div className="flex flex-col items-center">

            {id%2!==0 ?(
                <img src={image} height={20} width={'80%'}></img>
            ):(
                <img src={image} height={20} width={'90%'}></img>
            )}
            <h1 className="text-white text-3xl my-4">{title}</h1>
        </div>
        </>
    )
}