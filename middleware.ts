import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'de', 'zh', 'ua', 'ru', 'jp','fr','es','pl','pt','it', 'tr'],
 
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'en'
});
 
export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next", "playground" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|playground|.*\\..*).*)']
};