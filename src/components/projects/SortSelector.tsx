import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@/components/ui/menu';
import { Button } from '@/components/ui/button';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
    onSelectSortOrder: (sortOrders: string) => void;
    sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date Added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release Date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average Ratings' },
    ];
    const currentSortOrder = sortOrders.find((order) => order.value === sortOrder);

    return (
        <div className="px-15">
            <MenuRoot>
                <MenuTrigger asChild>
                    <Button colorPalette="gray">
                        Order by: {currentSortOrder?.label || 'Relevance'}
                        <BsChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                </MenuTrigger>
                <MenuContent>
                    {sortOrders.map((order, index) => (
                        <MenuItem
                            key={index}
                            value={order.value}
                            onClick={() => onSelectSortOrder(order.value)}
                        >
                            {order.label}
                        </MenuItem>
                    ))}
                </MenuContent>
            </MenuRoot>
        </div>
    );
};

export default SortSelector;
