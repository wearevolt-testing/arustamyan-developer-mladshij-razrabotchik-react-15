import React from 'react';

let TableHead = (props) => {
    const {headers} = props;
    return (
            <thead>
                <tr className="tr">
                    {
                        headers.map((h,i) => <th key={i}>{h}</th>)
                    }
                </tr>
            </thead>
    );
}

export default TableHead;