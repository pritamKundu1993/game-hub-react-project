import { Grid, GridItem, HStack } from '@chakra-ui/react';
import Navbar from './components/projects/Navbar';
import GameGrid from './components/projects/GameGrid';
import GenreList from './components/projects/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/projects/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/projects/SortSelector';
import GameHeadings from './components/projects/GameHeadings';

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
    searchText: string;
}

function App() {
    // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return (
        <>
            <Grid
                templateAreas={{
                    base: '"nav" "main"',
                    lg: '"nav nav" "aside main"',
                }}
            >
                <GridItem area="nav">
                    <Navbar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
                </GridItem>
                <GridItem area="aside" display={{ base: 'none', lg: 'block' }} paddingX={5}>
                    <GenreList
                        selectedGenre={gameQuery.genre}
                        onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
                    />
                </GridItem>
                <GridItem area="main">
                    <GameHeadings gameQuery={gameQuery} />
                    <HStack wordSpacing={5} paddingLeft={2} marginBottom={5}>
                        <PlatformSelector
                            onSelectPlatform={(platform) =>
                                setGameQuery({ ...gameQuery, platform })
                            }
                            selectedPlatform={gameQuery.platform}
                        />
                        <SortSelector
                            onSelectSortOrder={(sortOrder) =>
                                setGameQuery({ ...gameQuery, sortOrder })
                            }
                            sortOrder={gameQuery.sortOrder}
                        />
                    </HStack>
                    <GameGrid gameQuery={gameQuery} />
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
