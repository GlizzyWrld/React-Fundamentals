const Dog = ({ dog }) => {
  const { name, age, facts, imgSrc } = dog;
  return (
    <div>
      <h2>This is {name}!</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <h3>Facts about {name}:</h3>
      <ul>
        {facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
      <div>
        <img src={imgSrc} alt={name} />
      </div>
    </div>
  );
};

export default Dog;
