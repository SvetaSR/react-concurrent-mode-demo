import React, { useState, useEffect } from "react";
import { tvDataApi, commentsApi } from './helpers/Api';
import { Spinner } from './Spinner';

const Details = ({id}) => {

    const [tvData, setTvData] = useState(null);
    
    useEffect(()=>{
        tvDataApi(id).then(value =>{
            setTvData(value);
        })
    }, []);
    
    useEffect(()=>{
        setTvData(null);
        tvDataApi(id).then(value =>{
            setTvData(value);
        })
    }, [id]);

    if (tvData === null) return <Spinner />;

    return <div className="flex">
            <div>
                <h2>{tvData.name}</h2>
                <div className="details">{tvData.description}</div>
            </div>
            <div>
                <img src={`https://res.cloudinary.com/dqsubx7oc/image/upload/w_200/v1582908284/tv-shows/${id}.jpg`} alt={tvData.name} />
            </div>
        </div>
}

const Comments = ({id}) => {

    const [comments, setComments] = useState(null);
    
    useEffect(()=>{
        commentsApi(id).then(value =>{
            setComments(value);
        })
    }, []);
    
    useEffect(()=>{
        setComments(null);
        commentsApi(id).then(value =>{
            setComments(value);
        })
    }, [id]);

    if (comments === null) return <Spinner />;

    const commentsArr = comments.map(comment => <div className="comment" key={comment.id}>
        <h4>{comment.title}</h4>
        <div className="text">{comment.text}</div>
    </div>);

    return <div className="flex flex-col comments">
        <h3>Comments</h3>
        {commentsArr}
    </div>;
}

export const TvShowDetails = ({id}) => {
    return <div className="tvshow-details">
        <Details id={id} />
        <Comments id={id} />
    </div>
}