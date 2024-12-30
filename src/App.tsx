import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from './components/projects/Navbar';
import GameGrid from './components/projects/GameGrid';
import GenreList from './components/projects/GenreList';

function App() {
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
                <GridItem area="aside" display={{ base: 'none', lg: 'block' }}>
                    <GenreList />
                </GridItem>
                <GridItem area="main">
                    <GameGrid />
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
