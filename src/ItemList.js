import LineItem from './LineItem';

const ItemList = ({items, handleCheck, handleDelete}) => {
    return (
        <ul>
            {items.map((idx) => (
               <LineItem
                    key={idx.id}
                    idx={idx} 
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    )
}

export default ItemList;