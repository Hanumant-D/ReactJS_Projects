import React from 'react';
import { tabData } from './data.js';

export default function TabContent(props) {
    return(
        <div>
            <p>{props.title}</p>
            <p>{props.content}</p>
            <pre>
                <code>
                    {props.code}
                </code>
            </pre>
        </div>
    )
}