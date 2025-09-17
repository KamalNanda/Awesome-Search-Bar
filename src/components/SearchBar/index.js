import styled from 'styled-components'; 
import { useEffect, useState } from 'react';
import ResultTypes from './ResultTypes';
import { InputBar } from './InputBar';
import file_data from '../../data/data.json';
import { SearchResult } from './SearchResult';


const SearchBarWrapper = styled.div`
        border-radius: 12px;
        background-color: white;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        padding: 10px 20px; 
    
`

const ResultsSection = styled.div`
    max-height: 0;
    opacity: 0;
    transform: translateY(-6px);
    transition: max-height 500ms ease, opacity 400ms ease, transform 400ms ease;
    &.open {
        max-height: 800px; 
        opacity: 1;
        transform: translateY(0);
    }
`


export const SearchBar = () => {
    const [search_query, set_search_query] = useState('');
    const [data, set_data] = useState(file_data)
    const [filtered_data, set_filtered_data] = useState([])
    const [selected_result_type, set_selected_result_type] = useState('all')

    useEffect(() => { 
        set_data(() => {
            if(selected_result_type === 'all') return filtered_data
            return filtered_data.filter((item) => item.type === selected_result_type)
        })
    }, [selected_result_type,filtered_data])

    const handle_search = (value) => {
        set_search_query(value) 
        set_filtered_data(() => {
            if(value === '') return []
            return file_data.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
        }) 
    }
    useEffect(() => {
        set_data(filtered_data)
    }, [filtered_data])
    
    return <SearchBarWrapper>
        <InputBar 
            search_query={search_query} 
            set_search_query={handle_search} 
        />
        <ResultsSection className={data.length > 0 ? 'open' : ''}>
            <ResultTypes 
                data={data}
                set_selected_result_type={set_selected_result_type}
            />
            <SearchResult 
                data={data}
            />
        </ResultsSection>
    </SearchBarWrapper>
}