import { Person, people } from "./data";
import { getImageUrl } from "./utils";

export default function Chemists() {
  // const chemist = people.filter((v) => v.profession === "chemist");
  // const everyoneElse = people.filter((v) => v.profession !== "chemist");

  let chemist: Person[] = [];
  let everyoneElse: Person[] = [];
  people.forEach((person) => {
    if (person.profession === "chemist") {
      chemist.push(person);
    } else {
      everyoneElse.push(person);
    }
  });

  return (
    <>
      <ListSection title={"chemist"} people={chemist} />
      <ListSection title={"everyoneElse"} people={everyoneElse} />
    </>
  );
}

const ListSection = ({
  title,
  people,
}: {
  title: string;
  people: Person[];
}) => {
  return (
    <>
      <h1>{title}</h1>
      {people.map((person) => (
        <li key={person.id}>
          <img src={getImageUrl(person)} alt="" />
          <p>
            <b>{person.name}:</b>
            {" " + person.profession + " "}
            known for {person.accomplishment}
          </p>
        </li>
      ))}
    </>
  );
};
