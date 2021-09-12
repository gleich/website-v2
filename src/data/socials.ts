export interface SocialMediaAccount {
  name: string
  url: string
  imagePath: string
}

const getSocials = async (): Promise<SocialMediaAccount[]> => {
  // Making request to api
  const resp = await fetch('https://gql.api.mattglei.ch', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: 'query { socials { accounts { name, url } } }',
    }),
  })
  const resp_body = await resp.json()
  const socials: Record<string, string>[] =
    resp_body['data']['socials']['accounts']

  // Remove accounts that aren't needed
  const requiredAccounts: Record<string, string> = {
    twitter: 'Twitter',
    github: 'GitHub',
    linkedin: 'Linkedin',
    wakatime: 'Wakatime',
    producthunt: 'Product Hunt',
  }
  // Accounts is a list of the social media platform paired
  const accounts: SocialMediaAccount[] = []
  for (const account of socials) {
    if (account.name in requiredAccounts) {
      accounts.push({
        name: requiredAccounts[account.name],
        url: account.url,
        imagePath: `/images/socials/${account.name}.svg`,
      })
    }
  }
  return accounts
}

export default getSocials
