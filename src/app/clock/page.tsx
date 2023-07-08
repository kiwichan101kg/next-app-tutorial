type Thema = {
  color: string;
  ampm: string;
};

export default function Clock() {
  const hours = new Date().getHours();
  const minute = new Date().getMinutes().toString().padStart(2, "0");
  const time = `${hours}:${minute}`;

  let thema: Thema = {
    color: "",
    ampm: "",
  };
  if (hours >= 0 && hours <= 6) {
    thema = {
      color: "white",
      ampm: "AM",
    };
  } else {
    thema = {
      color: "pink",
      ampm: "PM",
    };
  }

  return (
    <>
      <h1 style={{ color: thema.color }}>{`${thema.ampm} ${time}`}</h1>
    </>
  );
}

// type Props = {
//   time: string;
// } & { thema: Thema };

// function Time({ time, thema }: Props) {
//   return (
//     <>
//       <h1 style={{ color: thema.color }}>{`${thema.ampm} ${time}`}</h1>
//     </>
//   );
// }
