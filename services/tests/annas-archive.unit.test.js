const {QueryAnnas, GetAnnasBook, URL} = require('../annas-archive')

test("should query correctly fetch correctly", async () => {
    const fetcher = jest.fn()
    const scraper = jest.fn()

    await QueryAnnas(fetcher, scraper, "neil gaiman")

    expect(fetcher).toHaveBeenCalledWith(URL, "/search?q=neil%20gaiman")
    expect(scraper).toHaveBeenCalled()
})


test("should getBook IPFS link correctly", async () => {
    const fetcher = jest.fn()
    const scraper = jest.fn()

    await GetAnnasBook(fetcher, scraper, "/md5/b0ba70d40e6f3edc41dd32b4b1b13646")

    expect(fetcher).toHaveBeenCalledWith(URL, "/md5/b0ba70d40e6f3edc41dd32b4b1b13646")
    expect(scraper).toHaveBeenCalled()
})