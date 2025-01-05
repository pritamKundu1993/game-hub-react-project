import { Game } from '@/hooks/useGames';
import { Box, Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '@/services/image-url';

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card.Root overflow="hidden">
            <Image
                src={getCroppedImageUrl(game.background_image)}
                alt={game.name}
                fit="cover"
                maxH="400px"
            />
            <CardBody bg="gray.700" color="white">
                <Box>
                    <Heading fontSize="2xl" mb={2}>
                        {game.name}
                    </Heading>
                    <HStack justifyContent={'space-between'}>
                        <PlatformIconList
                            platforms={game.parent_platforms.map((p) => p.platform)}
                        />
                        <CriticScore score={game.metacritic || 0} />
                    </HStack>
                </Box>
            </CardBody>
        </Card.Root>
    );
};

export default GameCard;
