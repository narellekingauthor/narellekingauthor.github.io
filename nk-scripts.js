const buyFromPublisher = document.createElement('a')
buyFromPublisher.textContent='Buy from Publisher'
buyFromPublisher.href='https://www.blackcockiepress.com.au/shop/#!/The-Bonehead-Resistance-Narelle-King/p/502171741/category=0'
const buyFromAmazon = document.createElement('a')
buyFromAmazon.textContent='Buy from Amazon'
buyFromAmazon.href='https://www.amazon.com.au/Bonehead-Resistance-Narelle-King/dp/0645489603/ref=mp_s_a_1_1 crid=1J39N6SA1SF72&keywords=bonehead+resistance&qid=1688680111&sprefix=the+bonehead+res%2Caps%2C292&sr=8-1'
document.querySelector('div#header nav ul').append(buyFromPublisher, buyFromAmazon)
