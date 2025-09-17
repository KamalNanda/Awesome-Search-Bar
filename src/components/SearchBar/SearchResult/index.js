import styled from 'styled-components';
import { ItemTypeFile } from './ItemTypeFile';
import { ItemTypePerson } from './ItemTypePerson';


const SearchBarWrapper = styled.div`
    max-height: 300px;
    overflow-y: scroll;
`

const ItemTypeSwitch = (data) => {

    switch (data.type) {
        case 'file' : return <ItemTypeFile item={data} />
        case 'person': return <ItemTypePerson item={data} />
        default: return <span>Invalid item type</span>
    }
}

export const SearchResult = ({data}) => {
    return <SearchBarWrapper>
        {
            data.map(item => {
                return ItemTypeSwitch(item)
            })
        }
    </SearchBarWrapper>
}