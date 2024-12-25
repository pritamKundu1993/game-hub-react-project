import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from './components/projects/Navbar';
import GameGrid from './components/projects/GameGrid';

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
                <GridItem area="aside" bg="gold" display={{ base: 'none', lg: 'block' }}>
                    aside
                </GridItem>
                <GridItem area="main">
                    <GameGrid />
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
