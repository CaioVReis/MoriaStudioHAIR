import ButtonCSS from "../buttons"





const Cards = ({ link = 'string', name = 'string', disc = 'string' }) => {
    return (
        <>
            <div className="grid justify-items-center mt-5">

                <img
                    className="w-[310px] h-[180px] border-[3px] border-[#FFD700] rounded-sm "
                    src={link}
                    //"http://theonesalon.com.br/wp-content/uploads/2023/08/hair-style.jpg"
                    alt="ImagemTeste"
                />

                <h1 className="text-center text-black font-bold text-2xl mt-3">
                    {name}

                </h1>
                <p className=" text-center w-[300px]  justify-center h-[200px] p-2 leading-[25px]">

                    {disc}
                </p>

           <ButtonCSS/>

            </div>

        </>
    )

}

export default Cards