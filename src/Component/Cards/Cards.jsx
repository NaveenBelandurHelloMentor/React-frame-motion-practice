import React from 'react'
import {CardData} from './cardjson'
import {motion} from 'framer-motion'
import './card.css'

const Card = () =>{
    return (
        <>
        <div className='container'>
            {CardData.map((data)=>{
                return (
                    <motion.div whileHover={{scale:1.2}} drag dragConstraints={{left:5,right:5}} animate={{transition:{type:'spring',duration:0.2}}} className='card' key={data.id}>
                        <p>{data.title}</p>
                        <p>{data.body}</p>
                    </motion.div>
                )
            })}

        </div>
        </>
    )
}



export default Card