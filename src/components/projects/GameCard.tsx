import { Game } from '@/hooks/useGames';
import { Box, Card, CardBody, Heading, Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card.Root overflow="hidden">
            <Image src={game.background_image} alt={game.name} fit="cover" maxH="400px" />
            <CardBody bg="gray.700" color="white">
                <Box>
                    <Heading fontSize="2xl" mb={2}>
                        {game.name}
                    </Heading>
                    <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
                </Box>
            </CardBody>
        </Card.Root>
    );
};

export default GameCard;
