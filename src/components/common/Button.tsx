import styled from 'styled-components'


type btnSize = {
    size?:  'xxs'|'xs'|'sm'| 'md' | 'lg'|'xl'|'xxl'

}
const ButtonSizes = {
    xxs: {
        padding: [8, 10]
    },
    xs: {
        padding: [8, 12]
    },
    sm: {
        padding: [8, 16]
    },
    md: {
        padding: [10, 18]
    },
    lg: {
        padding: [12, 20]
    },
    xl: {
        padding: [16, 24]
    },
    xxl: {
        padding: [20, 32]
    },
    
}
const Globalbutton = () =>{
    return(
        <div>
        <h3>Button components</h3>

        <>
        {/* <StyledBtn size='xxs'>xxs</StyledBtn>
        <StyledBtn size='xs'>xs</StyledBtn>
        <StyledBtn size='sm'>sm</StyledBtn>
        <StyledBtn size='md'>md</StyledBtn>
        <StyledBtn size='xxl'>xxl</StyledBtn> */}
        </>
        </div>
    )
}

export  default Globalbutton;


// const StyledBtn = styled.button<btnSize>`
//     background-color: #ff0000;
//     padding: 8px 16px;
//     border-radius: 5px;
//     padding: ${({size = 'md'})=> ButtonSizes[size].padding.map((value, index)=> `${value}px` ).join(' ')};
// `