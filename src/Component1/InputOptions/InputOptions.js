import React from 'react'
import '../InputOptions/InputOptions.css'

const InputOptions = ({ icon, title, color }) => {
    return (
        <div className='input_Options'>
            {icon && <i className={icon} style={{ color: color }}></i>}
            <h4>{title}</h4>
        </div>
    )
}

export default InputOptions