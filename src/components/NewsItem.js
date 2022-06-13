import React, { Component } from 'react'
import Image from './noimage.jpg'

export default class NewsItem extends Component {
    render() {
        let { title, description, url, urlToImage, publishedAt, author } = this.props;
        return (
            <div className='px-5 mb-16'>
                <div ><img className='w-[360px] h-[196px]' src={urlToImage ? urlToImage : Image} alt="" /></div>
                <div>
                    <div className='text-sm flex my-2'>
                        <div className='bg-orange-400 px-3 py-[3px] text-white font-semibold rounded-[4px]'>{author?author:"Unknown"}</div>
                        <div className='my-auto ml-6'>{new Date(publishedAt).toUTCString().slice(0,26)}</div>
                    </div>
                    <div className='text-xl font-[600]'>{title}</div>
                    <div>{description}</div>
                    <button type="button" className="mt-2 bg-violet-600 py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-white hover:bg-white hover:text-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><a href={url} target="_blank" rel="noopener noreferrer">Read more</a></button>
                </div>
            </div>
        )
    }
}
