/* eslint-disable react/prop-types */
import { PersonDetails } from "./PersonDetails";
export const Persons = ({ persons }) => {
  return (
    <>
      {persons?.map((person) => (
        <PersonDetails key={person.id} person={person} />
      ))}
    </>
  );
};
