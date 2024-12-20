import { useState } from "react"

 

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChangue = ({ target }) => {
       setinputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
        
        //setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim() );
        setinputValue('');
    }

  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar Gifts"
            value={ inputValue }
            onChange={ onInputChangue }
        />
    </form>
  )
}

