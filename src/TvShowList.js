import React, { useState, useEffect } from 'react';
import { tvMetadataApi } from './helpers/Api';
import { Spinner } from './Spinner';

export const TvShowList = ({onClick}) => {
    
    const [tvMetadata, setTvMetadata] = useState(null);
    
    useEffect(()=>{
        tvMetadataApi().then(value =>{
            setTvMetadata(value);
        })
    }, []);

    if (tvMetadata === null) return <Spinner />;

    const tvshows = tvMetadata.map(item => (
        <div className="item" key={item.id} onClick={() => onClick(item.id)}>
            <div className="name">{item.name}</div>
            <div className="score">{item.score}</div>
        </div>
    ))
    return <div className="tvshow-list">{tvshows}</div>;
}