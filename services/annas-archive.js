// Queries and fetches files from Annas-archive 
// Biggest shadow library running today (after the fall of zlib) https://annas-archive.org/

const URL = "annas-archive.org"

/** Queries books from the whole library
 * @param searchTerm - string
 * @returns AnnasObj - object
 */
async function QueryAnnas(fetcher, scraper, searchTerm) {
    const html = await fetcher(URL, `/search?q=${encodeURI(searchTerm)}`)
    return scraper(html)
}

/** fetches a detailed book by id (md5 hash in this case) 
 * @param id - string (md5 hash)
 * @returns AnnasObj - object
 */
async function GetAnnasBook(fetcher, scraper, id) {
    const html = await fetcher(URL, id)
    return scraper(html)
}

/** Downlads a file given a ipfs link. Well see how this works in the practice
 * @param link - string (ipfs link)
 * @return book - blob
 */
async function downloadFile(fetcher, scraper, link) {
    return ""
}

module.exports = {
    URL,
    QueryAnnas,
    GetAnnasBook
}