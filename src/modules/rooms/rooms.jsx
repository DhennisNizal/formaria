import React from "react";
import * as S from "./styles";
import { roomsData } from "./data";

const Rooms = () => {
  return (
    <S.RoomsWrapper>
      <S.Content>
        <S.SectionTitle>
          Where <span>Comfort</span> Meets Style in Every Room
        </S.SectionTitle>

        <S.Room>
          {roomsData.map((room) => (
            <S.RoomCard key={room.id}>
              <div className="image-wrapper">
                <img src={room.image} alt={room.title} />
              </div>
              <div className="room-info">
                <h3>{room.title}</h3>
                <p>{room.description}</p>
                <S.BookButton>Book Now</S.BookButton>
              </div>
            </S.RoomCard>
          ))}
        </S.Room>
      </S.Content>
    </S.RoomsWrapper>
  );
};

export default Rooms;
