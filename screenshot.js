exports.run = function (url, prefix) {
var assert        = require('assert');
var fs		  = require('fs');
var wd            = require('webdriver-sync');
var path 	  = require('path');
var By            = wd.By;
var ChromeDriver  = wd.ChromeDriver;
var ChromeDriverService = wd.ChromeDriverService;
var File		= wd.File;
var findsChromeDriver	= require("./node_modules/webdriver-sync/src/lib/finds-chrome-driver");
var service	  = new ChromeDriverService.Builder()
			.usingAnyFreePort()
			.usingDriverExecutable(new File(findsChromeDriver.find()))
			.withEnvironment({"DISPLAY":":99.0"})
			.build();
var driver        = new ChromeDriver(service);
var link 	  = url;
var OutputType 	  = wd.OutputType;
var title;
console.log("Screenshot");

driver.get(link);
title = driver.getTitle();
try {
	var signInButton = driver.findElement(By.linkText('Sign in'));
} catch (ex) {
	var signInButton = undefined;
}
if (signInButton) {
	signInButton.click();
	try {
		var approveButton = driver.findElement(By.name('submit_true'));
		approveButton.click();
	} catch (ex) {

	}
	var email = driver.findElement(By.id('Email'));
	var password = driver.findElement(By.id('Passwd'));
	var signIn = driver.findElement(By.id('signIn'));
	if (email && password && signIn) {
		email.sendKeys("alistair@10people.co.uk");
		password.sendKeys("m3nH?00s321");
		signIn.click();
	}
}

setTimeout(function () {
	var time = new Date().getTime();
	var file = driver.getScreenshotAs(OutputType.BASE64);
	fs.writeFile(prefix + "-" + time + '.png', file, 'base64');
	driver.quit();
}, 10000);


}


