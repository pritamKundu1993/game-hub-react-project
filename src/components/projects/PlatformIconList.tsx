// import { Platform } from '@/hooks/useGames';
// import { Icon, HStack } from '@chakra-ui/react';
// import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
// import { MdPhoneIphone } from 'react-icons/md';
// import { SiNintendo } from 'react-icons/si';
// import { BsGlobe } from 'react-icons/bs';
// import { Tooltip } from '@/components/ui/tooltip';

// interface Props {
//     platforms: Platform[];
// }

// const PlatformIconList = ({ platforms }: Props) => {
//     const iconMap: Record<string, React.ElementType> = {
//         pc: FaWindows,
//         playstation: FaPlaystation,
//         xbox: FaXbox,
//         nintendo: SiNintendo,
//         mac: FaApple,
//         linux: FaLinux,
//         ios: MdPhoneIphone,
//         web: BsGlobe,
//         android: FaAndroid,
//     };

//     return (
//         <HStack marginY={1}>
//             {platforms.map((platform) => {
//                 const IconComponent = iconMap[platform.slug];
//                 if (!IconComponent) return null;
//                 return (
//                     <Tooltip content={platform.slug} key={platform.id}>
//                         <Icon boxSize={4} color={'gray.500'}>
//                             <IconComponent />
//                         </Icon>
//                     </Tooltip>
//                 );
//             })}
//         </HStack>
//     );
// };

// export default PlatformIconList;

import { Platform } from '@/hooks/useGames';
import { Box, HStack } from '@chakra-ui/react';
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Tooltip } from '@/components/ui/tooltip';

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: Record<string, React.ElementType> = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid,
    };

    return (
        <HStack marginY={1}>
            {platforms.map((platform) => {
                const IconComponent = iconMap[platform.slug];
                if (!IconComponent) return null;

                return (
                    <Tooltip content={platform.slug} key={platform.id}>
                        <Box as={IconComponent} boxSize={4} color="gray.500" />
                    </Tooltip>
                );
            })}
        </HStack>
    );
};

export default PlatformIconList;
