import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from './components/projects/Navbar';
import GameGrid from './components/projects/GameGrid';
import GenreList from './components/projects/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
                    <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
                </GridItem>
                <GridItem area="main">
                    <GameGrid selectedGenre={selectedGenre} />
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
