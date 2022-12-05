const fetcher = require("../../frameworks/fetcher")
const {scrapeAnnaList, scrapeAnnaDetail} = require("../../frameworks/scraper")
const { QueryAnnas, GetAnnasBook } = require("../annas-archive")

test("should emit a valid list of items", async () => {
    const list = await QueryAnnas(fetcher, scrapeAnnaList, "william gibson")
    const notEmpty = list.length > 1
    expect(notEmpty).toBe(true)
    console.log(list)
})

test("should get a valid ipfs link", async () => {
    const link = await GetAnnasBook(fetcher, scrapeAnnaDetail, "/md5/883ba1be11c67afbb00a33ca7a84c576")
    expect(link).toBe("bafykbzacebbkdhzy2o7phvyl2zapqmwaabq5awiwxvkra6nxx6r5nti2igyzo")
})