const { Builder, By, until } = require("selenium-webdriver");
const readline = require("readline");
const fs = require("fs");

async function whatsapp() {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://web.whatsapp.com/");
    console.log("Please scan the QR code");

    let search = await driver.wait(until.elementLocated(By.xpath("//div[@class='_2FVVk cBxw-']//div[@class='_3FRCZ copyable-text selectable-text']")), 30000);
    console.log("Scanned!");

    const csvFile = fs.createReadStream('names.csv');

    const rl = readline.createInterface({
        input: csvFile,
        crlfDelay: Infinity
    });

    // phone_no = ["0165786561", "0109639289", "14155238886"];

    try {
        // for (let i = 0; i < phone_no.length; i++) {
        //     setTimeout(function () {
        //         console.log('line ' + i +': ' + phone_no[i]);
        //         number = phone_no[i];
        //         sendMessage(search, number);
        //         // sendMessageWithMedia(search, number);
        //     }, 3000 * i);
        //     // }, 8000 * i);
        // }

        var lineno = -1;
        for await (const line of rl) {
            lineno++;
            setTimeout(function () {
                
            // send message only
                sendMessage(search, line);
            }, 3000 * lineno);

            // // send message with image selected
            //     sendMessageWithMedia(search, line);
            // }, 8000 * lineno);
        }

    } catch (err){
        console.error('Exception!\n', err.stack, '\n');
        driver.quit();
    }

}
whatsapp();

function sendMessage(search, phone_no) {
    console.log(phone_no);
    search.sendKeys(phone_no, "\n");
    setTimeout(function() {
        search.click();
        setTimeout(function() {
            let messagebox = driver.wait(until.elementLocated(By.xpath("//div[@class='_2FVVk _2UL8j']//div[@class='_3FRCZ copyable-text selectable-text']")), 1000);
            messagebox.sendKeys("testing", "\n");
            console.log("send message sucessfully to " + phone_no);
        }, 1000);
    }, 1000);
}

function sendMessageWithMedia(search, phone_no) {
    console.log(phone_no)
    search.sendKeys(phone_no, "\n");
    setTimeout(function() {
        driver.findElement(By.xpath("//div[@class='_3nq_A']//div[2]//div[1]")).click();
        setTimeout(function() {
            const uploadElement = driver.findElement(By.xpath("//li[1]//button[1]//input[1]"));
            uploadElement.sendKeys("C:\\Users\\AsahiArts\\Downloads\\WhatsApp Image 2020-06-30 at 09.16.23.jpeg");
            setTimeout(function() {
                driver.findElement(By.xpath("//div[@class='H36t4 _19AnP']")).click();
                setTimeout(function() {
                    driver.findElement(By.xpath("//div[@class='_2FVVk _3WjMU _1C-hz']//div[@class='_3FRCZ copyable-text selectable-text']")).sendKeys("qwe", "\n");
                    console.log("send message with media sucessfully to " + phone_no);
                }, 1000)
            }, 2000);
        }, 1000);
    }, 3000);
}