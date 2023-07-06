type Fruits = {
  name: string;
  color: string;
};

export const List = ({
  thema = "blue",
  fruits,
}: {
  thema?: string;
  fruits: Fruits[];
}) => {
  return (
    <>
      <h1 style={{ color: thema }}>FRUITSLIST!!</h1>
      <ul>
        {fruits.map((v) => (
          <li style={{ color: v.color }}>{v.name}</li>
        ))}
      </ul>
    </>
  );
};
