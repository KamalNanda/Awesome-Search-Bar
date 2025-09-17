import styled from "styled-components"
import { ResultItemWrapper } from "./ResultItemWrapper"

const ItemTypePersonWrapper = styled(ResultItemWrapper)`
    .avatar {
        position: relative;
        display: inline-block;
    }
    .avatar::after {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: ${props => props.status === 'active' ? '#21c55d' : 'red'};
        border: 2px solid #fff;
        right: 4px;
        bottom: -4px;
    }
    img {
        display: block;
    }
`
 
export const ItemTypePerson = ({item}) => {

    return <ItemTypePersonWrapper key={item.id} status={item.status}>
        <div className="avatar">
            <img src={item.image_url} alt={item.name} />
        </div>
        <div>
            <h4>{item.name}</h4> 
            <span>
                {
                    item.status === 'active'
                        ? 'Active now'
                        : 'Inactive'
                }
            </span>
        </div>
    </ItemTypePersonWrapper>
}