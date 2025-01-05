import useGames from '@/hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

import { GameQuery } from '@/App';

interface Props {
    gameQuery: GameQuery;
    // selectedGenre: Genre | null;
    // selectedPlatform: Platform | null;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];
    return (
        <div>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, lg: 3 }} gap={10} padding="10px">
                {isLoading && skeletons.map((skeletons) => <GameCardSkeleton key={skeletons} />)}
                {data.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </div>
    );
};

export default GameGrid;
