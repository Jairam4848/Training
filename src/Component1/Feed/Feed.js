import React from 'react'
import '../Feed/Feed.css'
import InputOptions from '../InputOptions/InputOptions'
import Post from '../Post/Post'
import { useState } from 'react'

const Feed = () => {

    const [posts, setPosts] = useState([])

    const sendPosts = (e) => {
        e.preventDefault()
        sendPosts([...posts])
    }

    return (
        <div className='feed'>
            <div className='feed_inputContainer'>
                <div className='feed_input'>
                    <i className="fa-regular fa-pen-to-square"></i>
                    <form>
                        <input type='text' />
                        <button onClick={sendPosts} type='submit'>send</button>
                    </form>
                </div>
                <div className='feed_inputOptions'>
                    <InputOptions icon="fa-solid fa-images" title="Photo" color="#70B5F9" />
                    <InputOptions icon="fa-solid fa-video" title="Video" color="#E7A33E" />
                    <InputOptions icon="fa-solid fa-calendar-days" title="Event" color="#C0CBCD" />
                    <InputOptions icon="fa-regular fa-newspaper" title="Write article" color="#7FC15E" />
                </div>
            </div>
            {/* Posts */}
            {posts.map((post) => (
                <Post />
            ))}
            <Post name="Jai ram" description="This is a description" message='Wow this is Working' />
        </div>
    )
}

export default Feed