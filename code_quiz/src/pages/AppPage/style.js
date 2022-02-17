import styled from "styled-components";

const App = styled.div`
    width:100%;
    background: var(--purple);
    
    .app-top{
        width: 100%;
        display: flex;
        align-items: center;
        text-align: center;
        padding: 10px;
        .back-area{
            background-color:var(--purple-light) ;
            width: max(4vw, 2rem);
            height: max(3.5vw, 1.7rem);;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            .icon-back{
            font-size: max(4vw, 1.3rem);
            color: white;
            
        }
        }
        h2{
            width: 100%;
            font-size: max(4vw, .9rem);
            color: var(--green);
        }
    }
    .app-categorias{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 25px 3px;
        justify-content: center;
        .categoria-card{
            width: max(15vw, 100px);
            height: max(15vw, 95px);
            margin: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .card-star{
                color: var(--green);
            }
            .card-name{
                width: 80%;
                height: 80%;
                background-color: red;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color:var( --purple-light);
                text-decoration: none;
                span{
                    font-size: max(4vw, 1.2rem);
                    color: white;
                   
                }
            }
        }
    }
`
export default App;
