import styled from "styled-components";

const HeroPage = styled.main`
  width: 100%;
  height: 100vh;
  position:relative;
  background: var(--purple);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
a.skip-login{
    position:absolute;
    top:0;
    right:0;
    margin:10px;
    color:white;
    text-decoration:none;
    font-size:.8rem;
}
  .text-top {
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    img{
      width: max(2vw, 60px);
    }
  }
  .text-center {
    text-align: center;
    color: #fff;
    h2 {
      font-size: 1.4rem;
      padding:5px 0;
    }
    p {
      font-size: 0.7rem;
    }
  }
  .area-btns {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;


    button{
        width:140px;
        height:35px;
        color:var(--blue-dark);
        font-size:.9rem;
        margin-top:15px;
        font-weight:600;
        border:none;
        border-radius:6px;
        cursor:pointer;
        &#btn-login{
   
        }
        &#btn-registrar{
            background:none;
            color:white;
            border:white 1px solid;
        }
    
    }
    
  }
`
export default HeroPage;
