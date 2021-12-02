import { AppLayout } from '@/components/AppLayout'
import { Card } from '@/components/Card'
import { AUCTION_ROUTES, ROUTES } from '@/utils/constants'
import { Heading, Link, Stack, Text } from '@chakra-ui/layout'
import NextLink from 'next/link'

export default function Auction() {
  return (
    <Stack spacing="6">
      {AUCTION_ROUTES.map((route) => (
        <NextLink key={route.path} href={route.path}>
          <Link>
            <Card>
              <Heading size="md">{route.name}</Heading>
              <Text>{route.description}</Text>
            </Card>
          </Link>
        </NextLink>
      ))}
    </Stack>
  )
}

Auction.Layout = AppLayout
