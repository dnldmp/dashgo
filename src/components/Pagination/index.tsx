import { Button, Stack, Box, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1

function genaratePagesArray(from: number, to: number){
  return [...new Array(to - from)].map((_, index) => {
    return from + index + 1;
  }).filter(page => page > 0)
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps){
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage)
  const previousPages = currentPage > 1
    ? genaratePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage
    ? genaratePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return(
    <Stack 
      direction={["column", "row"]} 
      mt="8" 
      justify="space-between" 
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      
      <Stack direction="row" spacing="2">

        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} pageNumber={1}/>
            { currentPage > (2 + siblingsCount) && (
              <Text textAlign="center" color="gray.300" width="8">...</Text>
            )}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} pageNumber={page}/>
        })}

        <PaginationItem onPageChange={onPageChange} pageNumber={currentPage} isCurrent/>

        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} pageNumber={page}/>
        })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + 1 + siblingsCount) < lastPage && (
              <Text textAlign="center" color="gray.300" width="8">...</Text>
            )}
            <PaginationItem onPageChange={onPageChange} pageNumber={lastPage}/>
          </>
        )}

      </Stack>
    </Stack>
  )
}