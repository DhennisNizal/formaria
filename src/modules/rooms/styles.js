import styled from "styled-components";
import { color, breakpoint, shadow } from "../../styles";
import { Button } from "antd";

export const RoomsWrapper = styled.section`
  width: 100%;
  display: block;
  margin-bottom: 8rem;
`;

export const Content = styled.div`
  width: 90%;
  margin: auto;
`;

export const SectionTitle = styled.h2`
  width: 25rem;
  font-size: 2.5rem;
  font-weight: 500;
  color: ${color.darkGray};
  font-family: "Roboto", sans-serif;

  span {
    color: ${color.brown};
  }

  ${breakpoint.mobile} {
    font-size: 1.8rem;
    width: 70vw;
  }
`;

export const Room = styled.div`
  display: grid;
  height: auto !important;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  ${breakpoint.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }

  ${breakpoint.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const RoomCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 30rem;
  border-radius: 1rem;
  background-color: ${color.lightBrown};
  box-shadow: ${shadow.medium};
  overflow: hidden;

  .image-wrapper {
    overflow: hidden;
    border-radius: 1rem 1rem 0 0;

    img {
      width: 100%;
      height: 16.5rem;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  .room-info {
    padding: 1.5rem;

    h3 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 500;
      font-family: "Roboto", sans-serif;
      color: ${color.brown};
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const BookButton = styled(Button)`
  background-color: ${color.brown};
  color: ${color.white};
  padding: 1.2rem;

  &:hover {
    background-color: ${color.brown} !important;
    color: ${color.white} !important;
    border: 1px solid ${color.brown} !important;
    transform: scale(1.02);
  }
`;
