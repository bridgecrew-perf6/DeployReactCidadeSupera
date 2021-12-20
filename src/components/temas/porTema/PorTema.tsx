import React from 'react'
import { useParams } from 'react-router-dom';

function PorTema() {

    const { id } = useParams<{ id: string }>();

    return (
        <div>
            <video src="../../../assets/video/covinha.mp4"></video>
        </div>
    )
}

export default PorTema
