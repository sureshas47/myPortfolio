import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("https://res.cloudinary.com/springboard-images/image/upload/w_1080,c_limit,q_auto,f_auto,fl_lossy/wordpress/2019/07/sb-blog-programming.png");
  background-size: cover;
`;
export const Img = styled.img`
  width: 10%;
  height: 20%;
  border-radius: 100%;
  object-fit: cover;
`;
export const Button = styled.button`
  margin-top: 30px;
  background-color: darkorange;
  border: 1px solid white;
  font-size: 30px;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  :hover {
    background-color: white;
    color: darkorange;
    border-color: darkorange;
  }
`;
