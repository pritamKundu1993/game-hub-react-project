import useGames from '@/hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';

const GameGrid = () => {
    const { games, error } = useGames();
    return (
        <div>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, lg: 3 }} gap={10} padding="10px">
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </div>
    );
};

export default GameGrid;
