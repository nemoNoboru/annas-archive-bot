const cheerio = require("cheerio")

function getText(elem, query) {
    return elem.find(query).text().trim()
}

function filterEmpty(list) {
    return list.filter(e => e.id)
}

function scrapeAnnaList(html) {
    const $ = cheerio.load(html)

    const itemList = $('div.mb-4 > div')
    return filterEmpty(itemList.map((i, elem) => {
        const e = $(elem)
        return ({
            description: getText(e, '.text-gray-500'),
            title: getText(e, ".font-bold"),
            id: e.find('a.custom-a').attr("href"),
        })
    }).toArray())
}

function scrapeAnnaDetail(html) {
    const $ = cheerio.load(html)
    return $('div.mb-4:nth-child(10) > div:nth-child(1) > div:nth-child(2)').text().trim()
}

module.exports = {
    scrapeAnnaList,
    scrapeAnnaDetail
}