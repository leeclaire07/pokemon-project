import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 8px;

  background-color: #d3d3d3;

  margin-bottom: 20px;
`;

const SelectedList = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 100px);
  grid-gap: 12px;
  list-style: none;
`;

const Dashboard = ({ selectedPokemon, onRemovePokemon }) => {
  return (
    <DashboardContainer>
      <h2>나만의 포켓몬</h2>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <SelectedList>
          {selectedPokemon.map((pokemon) => (
            <li key={pokemon.id}>
              <PokemonCard
                pokemon={pokemon}
                onAdd={() => {}}
                onRemove={onRemovePokemon}
                isSelected={true}
              />
            </li>
          ))}
        </SelectedList>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
