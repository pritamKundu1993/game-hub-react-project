import { Box, HStack, Image } from '@chakra-ui/react';
import logo from '@/assets/images/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
    onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
    return (
        <HStack justifyContent={'space-between'} padding="10px" width="100%">
            <Image src={logo} boxSize={'60px'} />
            <Box flex="1" marginLeft="10px">
                <SearchInput onSearch={onSearch} />
            </Box>
            <ColorModeSwitch />
        </HStack>
    );
};

export default Navbar;
