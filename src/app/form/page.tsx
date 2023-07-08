"use client";
import { ChangeEvent, useState } from "react";
import { useImmer } from "use-immer";

type Person = {
  name: string;
  artwork: {
    title: string;
    city: string;
    image: string;
  };
};

export default function Form() {
  const [person, updatePerson] = useImmer<Person>({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    updatePerson((draft) => {
      draft.name = e.target.value;
    });
  };
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updatePerson((draft) => {
      draft.artwork.title = e.target.value;
    });
  };
  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updatePerson((draft) => {
      draft.artwork.city = e.target.value;
    });
  };
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updatePerson((draft) => {
      draft.artwork.image = e.target.value;
    });
  };

  const { name } = person;
  const { title, city, image } = person.artwork;
  return (
    <>
      <div>
        <label htmlFor="">
          Name:
          <input
            type="text"
            value={name}
            name="name"
            onChange={handleNameChange}
          />
        </label>
        <label htmlFor="">
          Title:
          <input
            type="text"
            value={title}
            name="title"
            onChange={handleTitleChange}
          />
        </label>
        <label htmlFor="">
          City:
          <input
            type="text"
            value={city}
            name="city"
            onChange={handleCityChange}
          />
        </label>
        <label htmlFor="">
          Image:
          <input
            type="text"
            value={image}
            name="image"
            onChange={handleImageChange}
          />
        </label>
      </div>
      <div>
        <p>{`${title} by ${name}`}</p>
        <p>{`located in ${city}`}</p>
        <img src={image} alt="" />
      </div>
    </>
  );
}
