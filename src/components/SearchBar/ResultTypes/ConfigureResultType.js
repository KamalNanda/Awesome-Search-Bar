import styled from "styled-components"
import { IoSettingsOutline } from "react-icons/io5"; 
const ConfigureResultTypeWrapper = styled.div`
    button {
        border: none; 
        background: none; 
    }
`

const ConfigurationDropdownWrapper = styled.div`
    background: white;
    position:absolute;
    border-radius: 7px;
    margin-top: 4px;
    right: 6px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    width: 150px;
    .configuration-option{
        padding: 6px 10px;
        font-size: 16px;
        display: flex;
        cursor:pointer; 
        align-items: center;
        justify-content: space-between;
        span{
            display: flex; 
            align-items: center; 
            gap: 2px;
        } 
    }
`
const ConfigurationDropdown = ({result_types, set_result_types}) => {
    const handleCheckType = (value, name) => { 
        set_result_types(prevTypes => prevTypes.map(type => {
            if (type.name === name) {
                return { ...type, show: value };
            }
            return type;
        }))
    }
    return <ConfigurationDropdownWrapper>
        {
            result_types?.map(result_type => {
                return <div key={result_type.id} className="configuration-option">
                    <span>
                        {result_type.icon}
                        <label htmlFor={`result_type_${result_type.name}`}>{result_type.name}</label>
                    </span>
                    <input 
                        checked={result_type.show} 
                        onChange={e => handleCheckType(e.target.checked,result_type.name)} 
                        type="checkbox" 
                        id={`result_type_${result_type.name}`} 
                    />
                </div> 
            })
        }
    </ConfigurationDropdownWrapper>
}
export const ConfigureResultType = ({result_types,set_result_types,set_is_configuration_shown, is_configuration_shown}) => {
    return <ConfigureResultTypeWrapper>
        <button 
            onClick={() => {
                set_is_configuration_shown(prevValue => !prevValue)
            }}
        >
            <IoSettingsOutline />
        </button> 
        {
            is_configuration_shown && <ConfigurationDropdown 
                result_types={result_types} 
                set_result_types={set_result_types}
            />
        }
    </ConfigureResultTypeWrapper>
}