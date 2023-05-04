import React from 'react';
import Map from '../components/map.js';
export default function home(props) {

    return (
        <div>
            <h1 className='title'>
                Try It Out!
            </h1>
            <p className='description'>The NewImpact Wiki is a free online directory of resources in your impact area. 
                The unique dataset provided by NewImpact allows you to explore through various modes and filters!
            </p>
            <p className='description'>
                Familiar with Kibana? Visit our Kibana dashboard <a className="kibana" href="https://wiki.newimpact.care/s/datadawgs/app/kibana#/dashboard/53a42230-acbf-11ed-8ffd-45d02d2b23c5?_g=()" target="_blank">here</a>!
                <p className='smalltext'>
                    User: DD Shared <br></br>
                    Password: Sh@reWiki2023!
                </p>
            </p>
            <Map></Map>
        </div>
    );
    
};