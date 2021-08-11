import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Danilo Dominoni</Text>
          <Text color="gray.300" fontSize="small">danilodomp@gmail.com</Text>
        </Box>
      )}
      <Avatar 
        size="md" 
        name="Danilo Dominoni" 
        src="https://github.com/dnldmp.png" 
      />
    </Flex>

  )
}