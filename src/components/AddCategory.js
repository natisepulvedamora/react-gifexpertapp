import React,{useState} from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');
    const  handleInput= (e) => {
        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //uso callback , cat es el estado anterior
        if(inputValue.trim().length>2){
            setCategorias(cat=>[inputValue,...cat]);
            setInputValue('');

        }
        //console.log('enviado')
    }
     
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleInput}
                
             />
        </form>
    )
}
AddCategory.propTypes={
    setCategorias: PropTypes.func.isRequired
}

export default AddCategory;