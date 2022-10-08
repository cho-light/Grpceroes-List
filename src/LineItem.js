import {FaTrashAlt} from 'react-icons/fa';
import { useState } from 'react';

const LineItem = ({idx, handleCheck, handleDelete}) => {
    return (
        <li className="item" key={idx.id}>
            <input 
                type="checkbox"
                onChange={() => handleCheck(idx.id)}
                checked={idx.checked}
            />
            <label
                style={(idx.checked) ? { textDecoration : 'linge-through'} :null }
                onDoubleClick={() => handleCheck(idx.id)}
            >{idx.item}</label>
            <FaTrashAlt
                onClick={() => handleDelete(idx.id)}
                role="button"
                tabIndex="0"
                aria-labe={`Delete ${idx.item}`}
            />
        </li>
    )
}

export default LineItem;