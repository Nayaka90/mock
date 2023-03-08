import { Key } from 'webdriverio'
describe("keyboard",async()=>{

it("keyboard tab",async()=>{
    await browser.url(`https://www.facebook.com/`)
    await $(`#email`).setValue('nithishnayaka')
    await browser.keys(['Control','a'])//we need to release ctrl so we have to call keys again
     await browser.keys([Key.Control,'c'])//Modifier like Control, Shift, Alt and Command will stay pressed so you need to trigger them again to release them
     await browser.keys(['Tab','Control','v'])//u can pass without Key interface also
     await browser.keys(Key.Tab)//u can pass single data also without an array
     await browser.keys(Key.Tab)//u can pass single data also without an array
     await browser.keys(Key.Enter)
     await browser.pause(10000)
})
})