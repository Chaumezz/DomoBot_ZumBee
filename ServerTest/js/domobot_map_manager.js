/*
    Project created by Blascarr from ZMS
    - Loader Scripts
    - Script and CSS Manager
    
    DOMOBOT MAP MANAGER
*/

// const remote_rsc = "https://domo-bot.s3.eu-west-3.amazonaws.com/remote.config.json";
// const remote_rsc = "js/remote.config.json";
const remote_rsc = "js/src.config.json";

// const remote_rsc = "https://domo-bot.s3.eu-west-3.amazonaws.com/remote.config.json";
const queue_rsc = "js/Queue_manager.js";
let config_json ;
const loadTime = 7000;
let scriptHeadQueue;
let cssHeadQueue;

fetch( queue_rsc , { method: 'HEAD', cache: 'reload' })
    .then(async res => {
        const scriptToLoad = document.createElement('script');
        scriptToLoad.src = queue_rsc;
        document.head.append(scriptToLoad);
})
.catch(err => console.log('Error:', err));
