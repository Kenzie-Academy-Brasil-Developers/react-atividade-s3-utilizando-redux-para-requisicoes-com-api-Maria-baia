import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    
    body {
        background-color: #ffadad;
        display: flex;
        justify-content: center;
        color: #ffd6a5;
        text-align: center;
    }

    input{
        background-color: #fdffb6;
        border: 1px solid #a0c4ff;
        font-size: 16px;
        margin: 5px;
        width: 250px;
        height: 25px;
        padding: 5px;
        border-radius: 10px;
        color: #bdb2ff;
        ::placeholder {
            color: #a0c4ff;
        }
    }
    
    button{
        background-color: #ffc6ff;
        border: 1px solid #fffffc;
        font-size: 15px;
        margin: 5px;
        padding: 5px;
        border-radius: 10px;
        color: #fffffc;
    }

    ul {
        list-style: none;
        background-color: #ffd6a5;
        margin: 5px;
        padding: 5px;
        border-radius: 10px;
        color: #bdb2ff;
    }

    img{
        border-radius: 10px;
        margin: 10px;
    }

    p{
        font-weight: bold;
    }
`;