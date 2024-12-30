import useGames from '@/hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
    const { games, error, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];
    return (
        <div>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, lg: 3 }} gap={10} padding="10px">
                {isLoading && skeletons.map((skeletons) => <GameCardSkeleton key={skeletons} />)}
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </div>
    );
};

export default GameGrid;
