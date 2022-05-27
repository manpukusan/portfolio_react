import { Box, Divider, Heading, Spacer, Stack, Text } from '@chakra-ui/react';

export const PocketTheme = () => {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      spacing="3"
      mt={4}
      fontSize={{ base: 'md', md: 'xl', lg: '2xl', xl: '3xl' }}
    >
      <Box as="section" bg="white" p={4} m={4} borderRadius="lg">
        <Heading
          as="h2"
          color="gray.600"
          borderBottom="2px"
          borderColor="pink.500"
        >
          貧血
        </Heading>
        <Divider color="gray.500" />
        <Text as="p">
          めまいや立ち眩み、顔色が悪いといった分かりやすい症状だけでなく、物忘れや顎周辺に吹き出物がでるといった一見関係ないように感じることも実は、貧血が原因かも！？
        </Text>
      </Box>
      <Spacer />
      <Box as="section">
        <Heading as="h2">貧血</Heading>
        <Text as="p">
          めまいや立ち眩み、顔色が悪いといった分かりやすい症状だけでなく、物忘れや顎周辺に吹き出物がでるといった一見関係ないように感じることも実は、貧血が原因かも！？
        </Text>
      </Box>
      <Box as="section">
        <Heading as="h2">貧血</Heading>
        <Text as="p">
          めまいや立ち眩み、顔色が悪いといった分かりやすい症状だけでなく、物忘れや顎周辺に吹き出物がでるといった一見関係ないように感じることも実は、貧血が原因かも！？
        </Text>
      </Box>
      <Box as="section">
        <Heading as="h2">貧血</Heading>
        <Text as="p">
          めまいや立ち眩み、顔色が悪いといった分かりやすい症状だけでなく、物忘れや顎周辺に吹き出物がでるといった一見関係ないように感じることも実は、貧血が原因かも！？
        </Text>
      </Box>
    </Stack>
  );
};
