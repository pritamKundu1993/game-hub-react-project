import { Input } from '@chakra-ui/react';
import { InputGroup } from '../ui/input-group';
import { BsSearch } from 'react-icons/bs';
import { useRef } from 'react';

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
    const ref = useRef<HTMLInputElement>(null);
    return (
        <form
            style={{ width: '100%' }}
            onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) onSearch(ref.current.value);
            }}
        >
            <InputGroup startElement={<BsSearch />}>
                <Input
                    style={{ width: '100%' }}
                    ref={ref}
                    borderRadius={20}
                    placeholder="Search Games..."
                    variant="subtle"
                    width="100%"
                />
            </InputGroup>
        </form>
    );
};

export default SearchInput;
