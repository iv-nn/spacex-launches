import 'expect-puppeteer'

describe('spaceX launches', () => {

    it('show a video when clicking a past launch', async () => {
        await page.click('.past-launches a:first-of-type')
        await expect(page).toMatchElement('.video-player')
    })
})
