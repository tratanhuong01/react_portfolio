import React, { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext';
export default function PreviewImageVideo(props) {
    //
    const { state: { list, type, index }, dispatch, actions } = useContext(AppContext);
    const [pos, setPos] = useState(index);
    //
    return list ? <div className='w-full h-screen fixed top-0 left-0 bg-gray-100 z-50'>
        <div className={`w-full h-full flex flex-col relative ${type === 1 ? "bg-black bg-opacity-50" : ""}`}>
            <span onClick={() => {
                dispatch(actions.updateData('index', 0));
                dispatch(actions.updateData('preview', false));
                dispatch(actions.updateData('list', []));
            }} className='bx bx-x w-10 h-10 hover:bg-gray-300 rounded-full flex z-50 items-center cursor-pointer
            justify-center text-white absolute top-4 right-4 bg-black bg-opacity-50 text-xl hover:text-black'>
            </span>
            <div className='flex-1 relative'>
                {type === 0 ? <>
                    <div class="absolute top-0 left-0 bg-black" style={{ zIndex: -1 }}>
                        <img src={list[pos].src} alt='' style={{ filter: "blur(10px)" }}
                            className="flex-1 object-cover bg-black opacity-50" />
                    </div>
                    <img src={list[pos].src} alt=''
                        className="w-3/4 max-h-11/12 absolute top-1/2 left-1/2 transform 
                         -translate-x-1/2 -translate-y-1/2 object-cover" /></> :
                    <>
                        <video src={list[0]} className="w-3/4 max-h-11/12 absolute top-1/2 
                        left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
                            controls></video>
                    </>}
            </div>
            {type === 0 && <div className='w-full flex items-end'>
                <ul className='flex mx-auto gap-2 mb-3'>
                    {list.map((item, pos_) => <li onClick={() => setPos(pos_)}
                        className='w-20 h-20 relative rounded-lg' key={item.id}>
                        <img src={item.src} alt="" className='w-full h-full cursor-pointer rounded-lg object-cover' />
                        {pos !== pos_ && <div className='w-full h-full absolute top-0 left-0 
                        z-10 bg-opacity-50 bg-black rounded-lg cursor-pointer '>
                        </div>}
                    </li>)}
                </ul>
            </div>}
        </div>
    </div> : "";
}
