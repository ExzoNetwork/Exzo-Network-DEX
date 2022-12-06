// used to mark unsupported tokens, these are hosted lists of unsupported tokens

const EXZOSWAP_LIST = 'https://raw.githubusercontent.com/ExzoNetwork/tokenlist/main/src/tokenlist.json'
const EXZOSWAP_COMMUNITY_LIST = 'https://raw.githubusercontent.com/ExzoNetwork/tokenlist/main/src/community-list.json'

export const UNSUPPORTED_LIST_URLS: string[] = []
// export const UNSUPPORTED_LIST_URLS: string[] = [BA_LIST]

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  EXZOSWAP_LIST,
  EXZOSWAP_COMMUNITY_LIST,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [EXZOSWAP_LIST]
