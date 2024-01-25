import LogoMoira from "../Logo"
import {ButtonContato,ButtonSobreNos} from "../buttons/index"

import React from "react"




 
const Navbar = () => {
    return (
        <div className="container border colorbase border-black h-[62px]">
          <LogoMoira img="/../Users/kaiov/Desktop/Projects/MoriaStudioHAIR/my-app-moirahair/public/images/logo.png"/>
            <div className="flex justify-end">
                <div className="w-[260px] h-[60px]">
                    <div className="mt-[8px] flex  justify-end   font-semibold">
                       <ButtonContato/>
                       <ButtonSobreNos/>

                    </div>

                </div>
            </div>

        </div>
    )
}


export default Navbar