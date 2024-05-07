/* eslint-disable react/prop-types */
export const PersonDetails = ({person}) => {
    return(
        <p>Id: {person.id} - Name: {person.name} - Number: {person.number}</p>
    )
}