import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@/components/ui/menu';
import { Button } from '@/components/ui/button';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '@/hooks/usePlarform';

const PlatformSelector = () => {
    const { data, error } = usePlatforms();

    if (error) return null;
    return (
        <div className="px-15">
            <MenuRoot>
                <MenuTrigger asChild>
                    <Button colorPalette="gray">
                        Platforms
                        <BsChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                </MenuTrigger>
                <MenuContent>
                    {data.map((platform) => (
                        <MenuItem value={platform.name} key={platform.id}>
                            {platform.name}
                        </MenuItem>
                    ))}
                </MenuContent>
            </MenuRoot>
        </div>
    );
};

export default PlatformSelector;
