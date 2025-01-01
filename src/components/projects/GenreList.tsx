import useGenres, { Genre } from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import { Button, HStack, Image, List, Spinner } from '@chakra-ui/react';

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
    const { data, isLoading, error } = useGenres();
    if (isLoading) return <Spinner></Spinner>;
    if (error) return null;

    return (
        <List.Root listStyle="none">
            {data.map((genres) => (
                <List.Item key={genres.id} paddingY="5px">
                    <HStack cursor="pointer">
                        <Image
                            boxSize="32px"
                            borderRadius={8}
                            src={getCroppedImageUrl(genres.image_background)}
                        />
                        <Button
                            fontSize="lg"
                            variant="ghost"
                            _hover={{
                                textDecoration: 'underline',
                                cursor: 'pointer',
                                background: 'transparent',
                            }}
                            onClick={() => onSelectGenre(genres)}
                        >
                            {genres.name}
                        </Button>
                    </HStack>
                </List.Item>
            ))}
        </List.Root>
    );
};

export default GenreList;
