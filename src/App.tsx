import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from './components/projects/navbar';

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
                <GridItem area="main" bg="dodgerblue">
                    main
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
