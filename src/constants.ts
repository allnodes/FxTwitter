export const Constants = {
  /* These constants are populated by variables in .env, then set by Webpack */
  BRANDING_NAME: BRANDING_NAME,
  STANDARD_DOMAIN_LIST: STANDARD_DOMAIN_LIST.split(','),
  DIRECT_MEDIA_DOMAINS: DIRECT_MEDIA_DOMAINS.split(','),
  TEXT_ONLY_DOMAINS: TEXT_ONLY_DOMAINS.split(','),
  INSTANT_VIEW_DOMAINS: INSTANT_VIEW_DOMAINS.split(','),
  GALLERY_DOMAINS: GALLERY_DOMAINS.split(','),
  FORCE_MOSAIC_DOMAINS: FORCE_MOSAIC_DOMAINS.split(','),
  MOSAIC_DOMAIN_LIST: MOSAIC_DOMAIN_LIST.split(','),
  API_HOST_LIST: API_HOST_LIST.split(','),
  HOST_URL: HOST_URL,
  EMBED_URL: EMBED_URL,
  REDIRECT_URL: REDIRECT_URL,
  RELEASE_NAME: RELEASE_NAME,
  API_DOCS_URL: `https://github.com/dangeredwolf/FixTweet/wiki/API-Home`,
  TWITTER_ROOT: 'https://twitter.com',
  TWITTER_GLOBAL_NAME_ROOT: 'twitter.com',
  TWITTER_API_ROOT: 'https://api.twitter.com',
  BOT_UA_REGEX:
    /bot|facebook|embed|got|firefox\/92|firefox\/38|curl|wget|go-http|yahoo|generator|whatsapp|revoltchat|preview|link|proxy|vkshare|images|analyzer|index|crawl|spider|python|cfnetwork|node|mastodon|http\.rb|ruby|bun\/|fiddler/gi,
  /* 3 hours */
  GUEST_TOKEN_MAX_AGE: 3 * 60 * 60,
  GUEST_BEARER_TOKEN: GUEST_BEARER_TOKEN,
  GUEST_FETCH_PARAMETERS: [
    'cards_platform=Web-12',
    'include_cards=1',
    'include_ext_alt_text=true',
    'include_ext_views=true',
    'include_quote_count=true',
    'include_reply_count=1',
    'tweet_mode=extended',
    'include_entities=true',
    'include_ext_media_color=true',
    'include_ext_media_availability=true',
    'include_ext_sensitive_media_warning=true',
    'include_ext_has_birdwatch_notes=true',
    'simple_quoted_tweet=true',
    'ext=mediaStats%2ChighlightedLabel'
  ].join('&'),
  BASE_HEADERS: {
    'DNT': `1`,
    'x-twitter-client-language': `en`,
    'sec-ch-ua-mobile': `?0`,
    'content-type': `application/x-www-form-urlencoded`,
    'x-twitter-active-user': `yes`,
    'sec-ch-ua-platform': `"Windows"`,
    'Accept': `*/*`,
    'Origin': `https://twitter.com`,
    'Sec-Fetch-Site': `same-site`,
    'Sec-Fetch-Mode': `cors`,
    'Sec-Fetch-Dest': `empty`,
    'Referer': `https://twitter.com/`,
    'Accept-Encoding': `gzip, deflate`,
    'Accept-Language': `en`
  },
  RESPONSE_HEADERS: {
    'allow': 'OPTIONS, GET, PURGE, HEAD',
    'content-type': 'text/html;charset=UTF-8',
    'x-powered-by': `${RELEASE_NAME}`,
    'x-trans-rights': 'true',
    'Vary': 'Accept-Encoding, User-Agent'
  },
  API_RESPONSE_HEADERS: {
    'access-control-allow-origin': '*',
    'content-type': 'application/json'
  },
  POLL_TWEET_CACHE: 'max-age=60',
  DEFAULT_COLOR: '#10A3FF',
  FRIENDLY_USER_AGENT: `Mozilla/5.0 FixEmbedBot/1.0 (like Twitterbot; +https://fxtwitter.com/crawler)`
};
