chrome.alarms.onAlarm.addListener(() => {
    chrome.runtime.sendMessage({ action: 'timerUp'});
    chrome.notifications.create({
        type: 'basic',
        iconUrl: './assets/icon.png',
        title: 'Pomodoro Timer',
        message: 'Time is up!'
    });
});