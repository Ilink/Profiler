function Profiler(args){
    var results, name, running, timers;
    timers = [];
    results = [];
    running = false;

    // @function start : this function must be called before each stop in order to work properly
    this.start = function(name){
        if(!running){
            running = true;
        }
        timers.push({
            start: new Date(),
            name: name
        });
    }

    // @function stop : this function must be called after each start in order to work properly
    this.stop = function(){
        if(running){
            running = false;
        }
        var last_run = timers.pop();
        var start = last_run.start;
        var name = last_run.name;
        var end = new Date();
        results.push({
            'speed': end - start,
            'name': name
        });
    }

    this.report = function(){
        var total_time = 0;
        $.each(results, function(i, result){
            total_time += result.speed;
            if ( $.browser.msie ){
                $("#profile").append("<div>" + '~~ PROFILE RESULT ~~ '+result.name + " speed: " + result.speed + "</div>")
                console.log('~~ PROFILE RESULT ~~ '+result.name + " speed: ", result.speed);
            } else {
                console.log('~~ PROFILE RESULT ~~ '+result.name + " speed: ", result.speed);
            }
        });


//        console.log('~~PROFILE RESULTS~~', results, 'Total Time: ', total_time);
//        console.log('~~PROFILE RESULTS~~', results);
        console.log('test');
    }
}