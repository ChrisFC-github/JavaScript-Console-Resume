var name = 'christopher francis chio'; // using JS function to capitalize name
var car = 'Aspiring Coder'; // career
var desc = 'I like cute and funny doggos'; // description
var int = ['Investing', 'Learning Languages', 'Craftsmanship', 'Classic Racing Cars']; // interests
var prevcomp = ['Social Enterprise', 'Tech Start Up', 'Birmingham Southern - College']; // my previous company
var prevjob = ['CashFlow dude', 'Strategist and Brainstormer', 'Teaching Assistant']; // my previous job title
var prevdesc = ['VP of Finance', 'Co-Founder', 'Teaching Assistant for college students in Business and Finance classes']; // my previous description
var skills = ['Project Management', 'Number Cruncher', 'Online Sim Racer', 'Microsoft Office Suite', 'Violinist and Guitarist', 'Finance', 'Innovation Seeker', '2nd Voicing to Lead Vocals', 'Capital Outlays']; // my skills 

console.log('Name:' + ' ' + name.toLowerCase().split(' ').map(name => name.charAt(0).toUpperCase() + name.substring(1)).join(' ')); // name text + capitalized name display regardless of string count
console.log('Career:' + ' ' + car); // career text + output display
console.log('Description:' + ' ' + desc); // description text + output display
console.log(' '); // hello im a spacer
console.log('My Interests:') // my interests text display

for (var i = 0; i < int.length; i++) { // my interests output display
    console.log('*' + ' ' + int[i])
}

console.log(' '); // hello im a spacer
console.log('My Previous Experience:') // my previous experience text display

// created displayPosition function to add previous job, company, and description
function displayPosition(prevjob, prevcomp, prevdesc) {
    return prevjob + ' ' + 'at' + ' ' + prevcomp + ' ' + '-' + ' ' + prevdesc;
}

for (var z = 0; z < prevjob.length; z++) { // my experience output display
    console.log('*' + ' ' + displayPosition(prevjob[z], prevcomp[z], prevdesc[z]))
}
console.log(' '); // hello im a spacer

function displaySkill(skills) { // this displaySkill function tells the browser what explosive skill i have
    switch (skills) {
        case 'Online Sim Racer':
            return 'BAM:' + ' ' + skills
            break;
        case 'Violinist and Guitarist':
            return 'BAM:' + ' ' + skills
            break;
        case '2nd Voicing to Lead Vocals':
            return 'BAM:' + ' ' + skills
            break;
        case 'Innovation Seeker':
            return 'BAM:' + ' ' + skills
            break;
        default:
            return skills
    }
}

console.log('My Skills:') // my skills display text

for (var x = 0; x < skills.length; x++) { // my skills display output
    console.log('*' + ' ' + displaySkill(skills[x]))
}






