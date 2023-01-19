const url = "https://kontests.net/api/v1/all";
const codeforces = "https://kontests.net/api/v1/codeforces";
const codechef = "https://kontests.net/api/v1/code_chef";
const atcoder = "https://kontests.net/api/v1/at_coder";
const leetcode = "https://kontests.net/api/v1/leet_code"
const hackerank = "https://kontests.net/api/v1/hacker_rank"
const hackerearth = "https://kontests.net/api/v1/hacker_earth"
const kickstart = "https://kontests.net/api/v1/kick_start"
const topcoder = "https://kontests.net/api/v1/top_coder"
//y=prompt("Enter your name");

const b = document.getElementById("write");

var cs = '<h1>CodeForces</h1>', cd = '<h1>CodeChef</h1>', ct = '<h1>AtCoder</h1>', lt = '<h1>LeetCode</h1>', kt = '<h1>KickStart</h1>', tt = '<h1>TopCoder</h1>', ht = '<h1>HackerRank</h1>', het = '<h1>HackerEarth</h1>';
async function apis() {
    await fetch(codeforces).then((response) => response.json()).

        then((data) => {
            if (data.length == 0) {
                cs += '<h1>No contest</h1>'
            }
            data.forEach(element => {
                let time = new Date(element.start_time);
                let etime = new Date(element.end_time);
                let dur = element.duration / 3600;
                cs += `<h4>*${element.name}</h4><br>
                            <a href = ${element.url}>click here to register</a><br>
                            <h4>Start time</h4>:-${time}<br>
                            <h4>End time</h4>:-${etime}<br>
                            <h4>Duration:-</h4>${dur}hr<br>
                            <h4>IsLive:-</h4>${element.status}<hr>`



            });
            //  console.log(`${ltime.getHours()}:${ltime.getMinutes()}:${ltime.getSeconds()}`);
            //localStorage.setItem(`${ltime.getHours()}:${ltime.getMinutes()}:${ltime.getSeconds()}`,y);
        }).
        catch(() => {

        })

    await fetch(codechef).then((response) => response.json()).

        then((data) => {
            if (data.length == 0) {
                cd += '<h1>No contest</h1>'
            }
            data.forEach(element => {
                let time = new Date(element.start_time);
                let etime = new Date(element.end_time);
                let dur = element.duration / 3600;
                cd += `<h4>*${element.name}</h4><br>
                            <a href = ${element.url}>click here to register</a><br>
                            <h4>Start time</h4>:-${time}<br>
                            <h4>End time</h4>:-${etime}<br>
                            <h4>Duration:-</h4>${dur}hr<br>
                            <h4>IsLive:-</h4>${element.status}<hr>`

            });
            console.log("done");
        }).
        catch(() => {

        })
    await fetch(leetcode).then((response) => response.json()).

        then((data) => {
            if (data.length == 0) {
                lt += '<h1>No contest</h1>'
            }
            data.forEach(element => {
                let time = new Date(element.start_time);
                let etime = new Date(element.end_time);
                let dur = element.duration / 3600;
                lt += `<h4>*${element.name}</h4><br>
                            <a href = ${element.url}>click here to register</a><br>
                            <h4>Start time</h4>:-${time}<br>
                            <h4>End time</h4>:-${etime}<br>
                            <h4>Duration:-</h4>${dur}hr<br>
                            <h4>IsLive:-</h4>${element.status}<hr>`

            });
            console.log("done");
        }).
        catch(() => {

        })
    await fetch(kickstart).then((response) => response.json()).

        then((data) => {
            if (data.length == 0) {
                kt += '<h1>No contest</h1>'
            }
            data.forEach(element => {
                let time = new Date(element.start_time);
                let etime = new Date(element.end_time);
                let dur = element.duration / 3600;
                kt += `<h4>*${element.name}</h4><br>
                            <a href = ${element.url}>click here to register</a><br>
                            <h4>Start time</h4>:-${time}<br>
                            <h4>End time</h4>:-${etime}<br>
                            <h4>Duration:-</h4>${dur}hr<br>
                            <h4>IsLive:-</h4>${element.status}<hr>`

            });
            console.log("done");
        }).
        catch(() => {

        })
    await fetch(topcoder).then((response) => response.json()).

        then((data) => {
            if (data.length == 0) {
                tt += '<h1>No contest</h1>'
            }
            data.forEach(element => {
                let time = new Date(element.start_time);
                let etime = new Date(element.end_time);
                let dur = element.duration / 3600;
                tt += `<h4>*${element.name}</h4><br>
                            <a href = ${element.url}>click here to register</a><br>
                            <h4>Start time</h4>:-${time}<br>
                            <h4>End time</h4>:-${etime}<br>
                            <h4>Duration:-</h4>${dur}hr<br>
                            <h4>IsLive:-</h4>${element.status}<hr>`

            });


        }).
        catch(() => {

        })
    await fetch(hackerank).then((response) => response.json()).

        then((data) => {
            if (data.length == 0) {
                ht += '<h1>No contest</h1>'
            }
            data.forEach(element => {
                let time = new Date(element.start_time);
                let etime = new Date(element.end_time);
                let dur = element.duration / 3600;
                ht += `<h4>*${element.name}</h4><br>
                            <a href = ${element.url}>click here to register</a><br>
                            <h4>Start time</h4>:-${time}<br>
                            <h4>End time</h4>:-${etime}<br>
                            <h4>Duration:-</h4>${dur}hr<br>
                            <h4>IsLive:-</h4>${element.status}<hr>`

            });

        }).
        catch(() => {

        })
    await fetch(atcoder).then((response) => response.json()).

        then((data) => {
            if (data.length == 0) {
                ct += '<h1>No contest</h1>'
            }
            data.forEach(element => {
                let time = new Date(element.start_time);
                let etime = new Date(element.end_time);
                let dur = element.duration / 3600;
                ct += `<h4>*${element.name}</h4><br>
                            <a href = ${element.url}>click here to register</a><br>
                            <h4>Start time</h4>:-${time}<br>
                            <h4>End time</h4>:-${etime}<br>
                            <h4>Duration:-</h4>${dur}hr<br>
                            <h4>IsLive:-</h4>${element.status}<hr>`

            });
        }).
        catch(() => {

        })


    await fetch(hackerearth).then((response) => response.json()).

        then((data) => {
            if (data.length == 0) {
                het += '<h1>No contest</h1>'
            }
            data.forEach(element => {
                let time = new Date(element.start_time);
                let etime = new Date(element.end_time);
                let dur = element.duration / 3600;
                het += `<h4>*${element.name}</h4><br>
                            <a href = ${element.url}>click here to register</a><br>
                            <h4>Start time</h4>:-${time}<br>
                            <h4>End time</h4>:-${etime}<br>
                            <h4>Duration:-</h4>${dur}hr<br>
                            <h4>IsLive:-</h4>${element.status}<hr>`

            });

        }).
        catch(() => {

        })
}
apis();
const check = document.getElementById("check");
let co = 0;
check.addEventListener('click', () => {
    if (co == 0) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        co = 1;
    }
    else {
        document.body.style.color = "white";
        document.body.style.backgroundColor = "black";
        co = 0;
    }
})
const cf = document.getElementById("cf");
cf.addEventListener('click', () => {
    console.log("cf");
    b.innerHTML = cs;
})
const cc = document.getElementById("cc");
cc.addEventListener('click', () => {
    b.innerHTML = cd;
})
const at = document.getElementById("at");
at.addEventListener('click', () => {
    b.innerHTML = ct;
})
const lc = document.getElementById("lc");
lc.addEventListener('click', () => {
    b.innerHTML = lt;
})
const he = document.getElementById("he");
he.addEventListener('click', () => {
    b.innerHTML = het;
})
const hr = document.getElementById("hr");
hr.addEventListener('click', () => {
    b.innerHTML = ht;
})
const ks = document.getElementById("ks");
ks.addEventListener('click', () => {
    b.innerHTML = kt;
})
const tc = document.getElementById("tc");
tc.addEventListener('click', () => {
    b.innerHTML = tt;
})

// 