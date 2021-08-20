import React from "react";

const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <div>
      <h3>Event</h3>
      <input onChange={onChange} />
    </div>
  );
};

export default EventComponent;
