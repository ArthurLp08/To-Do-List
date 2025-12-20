import addIcon from "../assets/addIcon.svg"

function Input(){
    return(
        <div className="relative w-1/2">
            <input className="bg-[#BDE0FE] w-full h-[57px] indent-4 rounded-3xl place placeholder:text-black" type="text" placeholder="Type some task you have to do" />
            <button className="bg-[#CDB4DB] p-3 rounded-full absolute right-1 top-[50%] translate-y-[-50%]" type="submit"><img src={ addIcon } alt="" /></button>
        </div>
    )
}

export default Input