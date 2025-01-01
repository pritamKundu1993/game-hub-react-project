import useGenres from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import { HStack, Image, List, Spinner, Text } from '@chakra-ui/react';

const GenreList = () => {
    const { data, isLoading, error } = useGenres();
    if (isLoading) return <Spinner></Spinner>;
    if (error) return null;

    return (
        <List.Root listStyle="none">
            {data.map((genres) => (
                <List.Item key={genres.id} paddingY="5px">
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius={8}
                            src={getCroppedImageUrl(genres.image_background)}
                        />
                        <Text fontSize={'lg'}>{genres.name}</Text>
                    </HStack>
                </List.Item>
            ))}
        </List.Root>
    );
};

export default GenreList;
