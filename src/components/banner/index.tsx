const Banner=({Link='string'})=>{
    return(
        <div className="w-[100%]  flex justify-center h-[300px]">
            <img
            src={Link}
            alt="img"
            className="w-[95%] object-cover border border-[#29343e]  h-[95%] mt-2 shadow-2xl"
            />

        </div>
)}


export default Banner