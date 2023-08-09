import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import InputOptions from '../InputOptions/InputOptions'

const Post = ({ name, description, message, photoUrl }) => {
    return (
        <div className='post'>
            <div className='post_header'>
                <Avatar />
                <div className='post_info'>
                    <h2>Jai ram</h2>
                    <p style={{ marginTop: -10 }}>Description</p>
                </div>
            </div>
            <div className='post_body'>
                <p style={{ marginTop: 25 }}>{message}</p>
            </div>
            <div className='post_buttons'>
                <InputOptions icon="fa-solid fa-thumbs-up" title="Like" color="gray" />
                <InputOptions icon="fa-solid fa-comment" title="Comment" color="gray" />
                <InputOptions icon="fa-solid fa-share" title="Share" color="gray" />
                <InputOptions icon="fa-solid fa-paper-plane" title="Send" color="gray" />
            </div>
        </div>
    )
}

export default Post