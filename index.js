const { Builder, By } = require("selenium-webdriver");

async function whatsapp() {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://web.whatsapp.com/");
    console.log("Please scan the QR code");
    const element = await driver.findElement(By.xpath("//div[@class='_1QMFu']"));

    var millisecondsToWait = 15000;
    setTimeout(function() {
        console.log("Scanned!");
        console.log("Waiting...");
        try {
            phone_no = "14155238886";
            sendMessage(phone_no);
            sendMessageWithMedia(phone_no);
            // phone_no = ["14155238886"];
            // // phone_no.forEach(element => {
            // //     sendMessage(element);
            // //     sendMessageWithMedia(element);
            // // });
            // console.log(phone_no.length);
            // var i = 0;
            // while ( phone_no.length !== 0 ) {
            //     let number = phone_no[i];
            //     sendMessage(number);
            //     sendMessageWithMedia(number);
            //     phone_no.length -= 1;
            //     console.log(phone_no.length);
            //     i++;
            //     console.log(i);
            // }
        } catch (err){
            console.error('Exception!\n', err.stack, '\n');
            driver.quit();
        }
    }, millisecondsToWait);

}
whatsapp();

function sendMessage(phone_no) {
    driver.findElement(By.xpath("//div[@class='_2FVVk cBxw-']//div[@class='_3FRCZ copyable-text selectable-text']")).sendKeys(phone_no + "\n");
    setTimeout(function() {
        driver.findElement(By.xpath("//div[@class='_2FVVk cBxw-']//div[@class='_3FRCZ copyable-text selectable-text']")).click();
        setTimeout(function() {
            driver.findElement(By.xpath("//div[@class='_2FVVk _2UL8j']//div[@class='_3FRCZ copyable-text selectable-text']")).sendKeys("abc", "\n");
            console.log("send message sucessfully!");
        }, 1000);
    }, 1000);
}

function sendMessageWithMedia(phone_no) {
    driver.findElement(By.xpath("//div[@class='_2FVVk cBxw-']//div[@class='_3FRCZ copyable-text selectable-text']")).sendKeys(phone_no + "\n");
    setTimeout(function() {
        driver.findElement(By.xpath("//div[@class='_3nq_A']//div[2]//div[1]")).click();
        setTimeout(function() {
            const uploadElement = driver.findElement(By.xpath("//li[1]//button[1]//input[1]"));
            uploadElement.sendKeys("C:\\Users\\AsahiArts\\Downloads\\WhatsApp Image 2020-06-30 at 09.16.23.jpeg");
            setTimeout(function() {
                driver.findElement(By.xpath("//div[@class='_2FVVk _3WjMU _1C-hz']//div[@class='_3FRCZ copyable-text selectable-text']")).sendKeys("qwe", "\n");
                console.log("send message with media sucessfully!");
            }, 1000);
        }, 1000);
    }, 3000);
}

// function sendMessageWithMedia() {
//     driver.findElement(By.xpath("//div[@class='_2FVVk cBxw-']//div[@class='_3FRCZ copyable-text selectable-text']")).sendKeys("Twilio" + "\n");
//     setTimeout(function() {
//         driver.findElement(By.xpath("//div[@class='_3nq_A']//div[2]//div[1]")).click();
//         setTimeout(function() {
//             // driver.findElement(By.xpath("//li[1]//button[1]")).click();
//             setTimeout(function() {
//                 const uploadElement = driver.findElement(By.xpath("//li[1]//button[1]//input[1]"));
//                 uploadElement.sendKeys("C:\\Users\\AsahiArts\\Downloads\\WhatsApp Image 2020-06-30 at 09.16.23.jpeg");
//             }, 1000);
//         }, 1000);
//     }, 3000);
// }