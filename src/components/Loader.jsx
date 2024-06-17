import { Html } from '@react-three/drei'
import React from 'react'
import { ColorRing } from 'react-loader-spinner'


const Loader = () => {
  return (
     <Html>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="w-[10vw] h-[10vw] rounded-full">
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />

            </div>
        </div>
     </Html>
  )
}

export default Loader