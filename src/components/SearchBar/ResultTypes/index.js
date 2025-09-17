import { useEffect, useState } from "react";
import styled from "styled-components"; 
import { ConfigureResultType } from "./ConfigureResultType";
import { MdAttachFile } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";

 
const ResultTypesWrapper = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    .result-type-lists {
        display: flex;
        gap: 10px;
    }
`
const ResultTypeWrapper = styled.div`
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    padding: 5px 10px;
    display:flex;
    align-items:center;
    gap:4px;
    border-bottom: ${({active}) => active ? '2px solid #000' : 'transparent'}; 
` 
export const ResultTypes = (props) => { 
    const [selected_result_type, set_selected_result_type] = useState('all');
    const [result_types, set_result_types] = useState([])
    useEffect(() => {
        console.log(result_types)
    },[result_types])
    useEffect(() => {
        set_result_types([ 
            {
                id: 2,
                name: 'Files',
                value: 'file',
                show: false,
                icon: <MdAttachFile />
            },
            {
                id: 3,
                name: 'People',
                value: 'person',
                show: false,
                icon: <IoPersonSharp />
            }
        ])
    },[])
    const [is_configuration_shown, set_is_configuration_shown] = useState(false)
    return <ResultTypesWrapper>
        <div className="result-type-lists">
            <div 
                key={1} 
                onClick={() => {
                    set_selected_result_type('all')
                    props.set_selected_result_type('all')
                    set_is_configuration_shown(false)
                }}
            >
                <ResultTypeWrapper 
                    active={'all' === selected_result_type}
                > 
                    All
                </ResultTypeWrapper>
            </div>
            {
                result_types?.filter(result_type => result_type.show == true).map((result_type) => (
                    <div 
                        key={result_type.id} 
                        onClick={() => {
                            set_selected_result_type(result_type.value)
                            props.set_selected_result_type(result_type.value)
                            set_is_configuration_shown(false)
                        }}
                    >
                        <ResultTypeWrapper 
                            active={result_type.value === selected_result_type}
                        > 
                           {result_type.icon}{result_type.name}
                        </ResultTypeWrapper>
                    </div>
                ))
            } 
        </div>
        <ConfigureResultType 
            result_types={result_types} 
            set_result_types={set_result_types}
            is_configuration_shown={is_configuration_shown}
            set_is_configuration_shown={set_is_configuration_shown}
        />
    </ResultTypesWrapper>
}

export default ResultTypes;