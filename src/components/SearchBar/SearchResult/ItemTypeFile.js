import { FaImage } from "react-icons/fa";
import { ResultItemWrapper } from "./ResultItemWrapper";
import styled from "styled-components";

const ItemTypeFileWrapper = styled(ResultItemWrapper)` 
    .image-icon-container {
        width: 40px;
        height: 40px;
        background-color:rgb(177, 177, 177);
        border-radius: 6px; 
        display:flex;
        align-items:center;
        justify-content:center;
        margin-right: 10px;
    }
`


export const ItemTypeFile = ({item}) => {

    return <ItemTypeFileWrapper key={item.id}>
        <div className="image-icon-container">
            <FaImage className='image-icon' />
        </div>
        <div>
            <h4>{item.name}</h4>  
            <span>in {item.location}</span>
        </div>
    </ItemTypeFileWrapper>
}