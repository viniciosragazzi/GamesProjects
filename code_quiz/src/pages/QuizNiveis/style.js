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
    .app-niveis{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 25px 3px;
        justify-content: center;
        .nivel-card{
            width: max(15vw, 100px);
            height: max(15vw, 95px);
            margin: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            text-align: center;
            .icon-lock{
                display: none;
            }
            &.locked{
                opacity: .4;
                .icon-lock{
                position: absolute;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 10px;
                svg{
                    font-size: max(6vw, 3.5rem);
                    color: gold;
                }
            }
            }
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
                    font-size: max(3vw, 1.2rem);
                    color: white;
                   
                }
            }
        }
    }
`
export default App;
