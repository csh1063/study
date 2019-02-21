var study = {
    member: ["Choi", "Park", "Kim"],
    goal: "Master Web Programming",
    nextStudy: function () {
        "use strict";
        var interval = [3, 4, 5, 6, 0, 1, 2], today = new Date(), cal = 0;
        
        if(today.getHours() >= 20){cal = 7;}
        today.setDate(interval[today.getDay()] + cal + today.getDate());
        
        var year = today.getFullYear(),
            month = '' + (today.getMonth() + 1),
            day = '' + today.getDate();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [[year, month, day].join('-'), ["20", "00", "00"].join(':')].join(' ')
    },
    dinnerSelector: () => {
        var placeProb = Math.floor((Math.random() * 100) + 1);
        var menuProb = Math.floor((Math.random() * 100) + 1);
        var place = "";
        var menus = ["한식", "일식", "중식", "양식"];
        if(placeProb > 50){
            place = "고터";
        }else{
            place = "이수";
        }
        
        return place + "에서 " + menus[menuProb%4] + " 먹읍시다!";
    }
};

var newStudy = (() => {
    var member = ["Choi", "Park", "Kim"],
        goal = "Master Web Programming";
    
    var nextStudy = function () {
        "use strict";
        var interval = [3, 4, 5, 6, 0, 1, 2], today = new Date(), cal = 0;
        
        if(today.getHours() >= 20){cal = 7;}
        today.setDate(interval[today.getDay()] + cal + today.getDate());
        
        var year = today.getFullYear(),
            month = '' + (today.getMonth() + 1),
            day = '' + today.getDate();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [[year, month, day].join('-'), ["20", "00", "00"].join(':')].join(' ')
    }
    var dinnerSelector = () => {
        var placeProb = Math.floor((Math.random() * 100) + 1);
        var menuProb = Math.floor((Math.random() * 100) + 1);
        var place = "";
        var menus = ["한식", "일식", "중식", "양식"];
        if(placeProb > 50){
            place = "고터";
        }else{
            place = "이수";
        }
        
        return place + "에서 " + menus[menuProb%4] + " 먹읍시다!";
    }
    
    return {
        member: member,
        nextStudy: nextStudy,
        dinner: dinnerSelector,
        goal: goal
    }
})();