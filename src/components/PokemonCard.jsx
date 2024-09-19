import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid #d3d3d3;
  border-radius: 8px;

  background-color: #ffffff;

  padding: 8px;
`;
const Button = styled.button``;

function PokemonCard({ pokemon, onAdd, onRemove, isSelected }) {
  return (
    <Card
      onClick={() => {
        onAdd(pokemon);
      }}
    >
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <p>{pokemon.korean_name}</p>
      <p>No.{pokemon.id}</p>
      {isSelected ? (
        <Button onClick={() => onRemove(pokemon)}>삭제</Button>
      ) : (
        <Button onClick={() => onAdd(pokemon)}>추가</Button>
      )}
    </Card>
  );
}

export default PokemonCard;
