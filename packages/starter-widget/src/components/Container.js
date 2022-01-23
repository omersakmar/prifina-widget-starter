import styled from "styled-components";
import { variant } from "styled-system";

export const Container = styled("div")(
  {
    boxShadow: 0,
    padding: 5,
    borderRadius: 10,
  },
  variant({
    variants: {
      small: {
        height: 300,
        width: 300,
      },
      medium: {
        height: 616,
        width: 616,
      },
      mediumVertical: {
        height: 616,
        width: 300,
      },
      mediumHorizontal: {
        height: 300,
        width: 616,
      },
    },
  })
);

export const ContainerOne = styled.div`
  height: 300px;
  font-size: 14px;
  width: 300px;
  padding: 5px;
  /*
  display: flex;
  justify-content: center;
  align-items: center;
  */
`;
