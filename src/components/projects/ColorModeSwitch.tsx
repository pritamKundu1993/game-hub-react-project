import { HStack, Text } from '@chakra-ui/react';
import { useColorMode } from '../ui/color-mode';
import { Switch } from '@/components/ui/switch';

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <HStack>
            <Switch
                colorPalette="green"
                checked={colorMode === 'dark'}
                onChange={toggleColorMode}
            />
            <Text>{colorMode === 'dark' ? 'Dark mode' : 'Light mode'}</Text>
        </HStack>
    );
};

export default ColorModeSwitch;
