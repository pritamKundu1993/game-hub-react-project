import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from './components/projects/Navbar';
import GameGrid from './components/projects/GameGrid';
import GenreList from './components/projects/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/projects/PlatformSelector';
import { Platform } from './hooks/useGames';

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

    return (
        <>
            <Grid
                templateAreas={{
                    base: '"nav" "main"',
                    lg: '"nav nav" "aside main"',
                }}
            >
                <GridItem area="nav">
                    <Navbar />
                </GridItem>
                <GridItem area="aside" display={{ base: 'none', lg: 'block' }} paddingX={5}>
                    <GenreList
                        selectedGenre={selectedGenre}
                        onSelectGenre={(genre) => setSelectedGenre(genre)}
                    />
                </GridItem>
                <GridItem area="main">
                    <PlatformSelector
                        onSelectPlatform={(platform) => setSelectedPlatform(platform)}
                        selectedPlatform={selectedPlatform}
                    />
                    <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
