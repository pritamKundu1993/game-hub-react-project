import { Card, CardBody, HStack, Box } from '@chakra-ui/react';

import { Skeleton, SkeletonText, SkeletonCircle } from '@/components/ui/skeleton';

const GameCardSkeleton = () => {
    return (
        <Card.Root overflow="hidden">
            <Skeleton height="260px" width="460px" />
            <CardBody bg="gray.700" color="white">
                <Box>
                    <SkeletonText noOfLines={1} height={6} mb={2} />
                    <HStack justifyContent="space-between">
                        <HStack>
                            <SkeletonCircle size="6" />
                            <SkeletonCircle size="6" />
                            <SkeletonCircle size="6" />
                        </HStack>
                        <Skeleton height="20px" width="30px" borderRadius="md" />
                    </HStack>
                </Box>
            </CardBody>
        </Card.Root>
    );
};

export default GameCardSkeleton;
