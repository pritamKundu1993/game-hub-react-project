import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@/components/ui/menu';
import { Button } from '@/components/ui/button';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '@/hooks/usePlarform';
import { Platform } from '@/hooks/useGames';

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const { data, error } = usePlatforms();

    if (error) return null;
    return (
        <div className="px-15">
            <MenuRoot>
                <MenuTrigger asChild>
                    <Button colorPalette="gray">
                        {selectedPlatform?.name || 'platform'}
                        <BsChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                </MenuTrigger>
                <MenuContent>
                    {data.map((platform) => (
                        <MenuItem
                            value={platform.name}
                            key={platform.id}
                            onClick={() => onSelectPlatform(platform)}
                        >
                            {platform.name}
                        </MenuItem>
                    ))}
                </MenuContent>
            </MenuRoot>
        </div>
    );
};

export default PlatformSelector;
