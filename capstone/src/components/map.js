import React from 'react';

export default function map(props) {

    return (
        <div className='map-container' id='interactive-map'>
            <iframe id='tableau' title='map' src='https://public.tableau.com/views/connectedresources/Dashboard3?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link:showVizHome=no&:embed=true' />
        </div>
    );
    
};