import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox'

import './GalleryShow.scss'

import { photos } from './photos'

const GalleryShow = () => {


    return (
        <SRLWrapper>
            <div className="gallery" id="gallery">
                <h2>Gallery</h2>
                <div className="gallery__container">
                    {
                        photos.map((photo) => (
                            <img key={photo.id} src={photo.src} alt="" className="gallery__container__img" />
                        ))
                    }
                </div>
            </div>

        </SRLWrapper>
    )
}

export default GalleryShow
