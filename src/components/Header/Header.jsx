import React from "react";


function Header({position}) {
    return<>

        {position==='top'?
            <div className={`w-full h-24 border-t border-white flex flex-col items-center justify-center`}>
                <span className={'text-white text-3xl'}>NIGGA ENTERTAINMENT</span>
            </div> :
            <div className={`w-full h-24 border-b border-white flex flex-col items-center justify-center`}>
                <span className={' text-white text-3xl font-semibold'}>NIGGA ENTERTAINMENT</span>
            </div>
        }
    </>
}
export default Header