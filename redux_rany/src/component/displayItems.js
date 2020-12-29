import React from 'react';

const DisplayItems = ( props ) => {

    const List = ( datalist  ) => {
        if ( datalist ) {
            return datalist.map( ( data ) => {
                return (
                    <li key={ data.id }>
                        {data.name }
                    </li>
                )
            })
        
        }
    }

    return (
        <ul>
            {List(props.datalist)}
        </ul>
    )
}
export default DisplayItems;