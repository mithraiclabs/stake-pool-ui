import React, { useState } from "react";
import Flex from "src/styled/Flex";
import Placeholder from "src/styled/Placeholder";
import styled, { css } from "styled-components";

const Amount = styled.input`
  width: 40px;
  height: 24px;
`;

const DepositButton = styled.button`
  width: 100%;
`;

const Deposit: React.FC = () => {
  const [depositAmt, setDepositAmt] = useState("0.00");
  const [err, setErr] = useState(false);
  return (
    <Placeholder bg="green">
      <Flex
        css={css`
          align-items: center;
        `}
      >
        <Amount
          type="text"
          value={depositAmt}
          onChange={(e) => {
            e.preventDefault();
            const {
              target: { value },
            } = e;
            const regex = /^\d+(?:\.\d{1,2})?$/;
            setDepositAmt(value);
            !regex.test(value) || +value < 0.01 ? setErr(true) : setErr(false);
          }}
        />
        <DepositButton disabled={err}>deposit</DepositButton>
        <div> you will receive: </div>
        {err && <div> 0.01 SOL increments</div>}
      </Flex>
    </Placeholder>
  );
};

export default Deposit;
