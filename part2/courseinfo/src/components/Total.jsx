export const Total = ({parts}) => {

    const totalExercices = parts
        .map((part) => part.exercises)
        .reduce((accumulator, currentValue) => accumulator + currentValue);

    return (
      <p>Number of exercises {totalExercices}</p>
    )
  }