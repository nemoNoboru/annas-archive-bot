const {scrapeAnnaList, scrapeAnnaDetail} = require("../scraper")
const {mock} = require('../../mocks/annalistpage')
const detailMock = require("../../mocks/annadetailpage")

test('should scrape titles and descriptions of books, along with ids', async () => {
    const list = scrapeAnnaList(mock)

    const listLength = list.length > 1
    expect(listLength).toBe(true)

    const first = list[0]

    const {title, id} = first

    expect(title).toBe("Norse Mythology")
    expect(id).toBe("/md5/66e3722a18c794b8890000207f2accf7")

    list.forEach(e => {
        const {title, description, id} = e
        expect(title).toBeDefined()
        expect(description).toBeDefined()
        expect(id).toBeDefined()
    });
})

test('should extract a url from a detail page', () => {
    const url = scrapeAnnaDetail(detailMock)
    expect(url).toBe("bafykbzacedhzizkqvaoir7dp2ynorhmhec4m2jks5il4rqu2kr5vyi3hqc25u")
})