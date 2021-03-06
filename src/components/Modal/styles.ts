import styled from "styled-components";

export const Container = styled.section`
width: 100vw;
height: 100vh;
top: 0;
left: 0;
z-index: 10;
position: fixed;
background-color: rgba(0, 0, 0, 0.8);
`
export const Form = styled.div`
font-size: 14px;
display: flex;
flex-direction: column;
width: 400px;
margin: 30px auto;
padding: 30px;
border: 1px solid #ededed;
border-width: 5px;
background-color: #f7f7f7;

.lb{
    margin-bottom: 3px;
}

#name{
    width: 300px;
    margin-bottom: 10px;
}
#tel{
    width: 300px;
    margin-bottom: 10px;
}
#email{
    width: 300px;
    margin-bottom: 30px;
}

.checkbox-text{
    margin-bottom: 20px;
    width: 300px;

    
}
.checkbox{
    margin-right: 6px;
}
.btn-zone{
    display: flex;
    justify-content: center;
}

button{
    width: 120px;
}

`