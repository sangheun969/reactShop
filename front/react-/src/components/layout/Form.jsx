import React from "react";

import styled from "styled-components";

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  gap: 10px;
`;

const Form = ({ formSubmitHandler, name }) => {
  return (
    <FormStyle onSubmit={formSubmitHandler}>
      <input name="id" placeholder="아이디" />
      <input name="pw" placeholder="비밀번호" />
      <button type="submit">{name}</button>
    </FormStyle>
  );
};

export default Form;
