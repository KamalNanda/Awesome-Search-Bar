import styled from 'styled-components';
import { IoSearch } from "react-icons/io5"; 
import ClearButton from '../ClearButton';


const InputBarWrapper = styled.div`
    width: 300px; 
    height: 40px;
    display: flex;
    align-items: center;  
    input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 16px; 
    }  
    .search-icon {
        font-size: 24px;
        margin-right: 10px;
    } 
`


export const InputBar = ({search_query, set_search_query}) => {  
    return <InputBarWrapper> 
        <IoSearch className='search-icon' />
        <input 
            type='text'
            placeholder='Search...'
            onChange={(e) => set_search_query(e.target.value)}
            value={search_query}
        />
        <ClearButton onClick={() => set_search_query('')} />  
    </InputBarWrapper>
}