/* =====================================================
   KHMER RIDDLE 404
   Main JavaScript
===================================================== */


/* ================= GAME DATA ================= */

const riddles = [

    {
        q: "ក្ងក់ដូចទង់ ក្ងង់ដូចត្មាត រកស៊ីសង្វាត រកពោះដាក់គ្មាន",
        a: "កណ្តៀវ",
        h: "ឧបករណ៍ប្រើកាត់ស្រូវ"
    },

    {
        q: "កូនអូរតូចមួយ បងមិនហ៊ានឆ្លង ស្រីពៅមាសបង ឆ្លងទៅឆ្លងមក",
        a: "ត្រល់សំរាប់ត្បាញ",
        h: "ប្រើសម្រាប់ត្បាញ"
    },

    {
        q: "ក្រុកៗមាន់ក្រាប លូកដៃទៅស្ទាប ម៉ែអើយប៉ុន្មាន?",
        a: "វាល់អង្ករដាំបាយ",
        h: "ធ្វើមុនពេលដាំបាយ"
    },

    {
        q: "កំប៉ូចៗដូចរបស់អ្នក កន្លាក់ៗដូចរបស់ខ្ញុំ ច្រឹមច្រុមចូលរបស់អ្នកវិញ",
        a: "អណ្តើក",
        h: "សត្វដែលមានសំបក"
    },

    {
        q: "ក្តិតទល់ក្តិត ដៃកាន់ដៃ ជើងខ្វៃៗ ភ្នែកមើលមុខ",
        a: "ជិះកង់",
        h: "មានកង់ពីរ"
    },

    {
        q: "កំប៉ាងៗអើយ ដូចស្លឹកម្លូ ប្រហោងគ្រហ៊ូ មមិះជុក",
        a: "ស្លឹកត្រចៀកជ្រូក",
        h: "ពាក់ព័ន្ធនឹងត្រចៀក"
    },

    {
        q: "កាត់កឥតឈាម កាត់ដៃឥតម្រាម ពុះទ្រូងឥតថ្លើម",
        a: "កាត់អាវ",
        h: "ពាក់លើខ្លួន"
    },

    {
        q: "កាលរស់គេស្អប់ ងាប់ទៅគេហិត",
        a: "សង្កើច",
        h: "ក្លិនខ្លាំង"
    },

    {
        q: "ក្រហមចុងស្ទីកគល់ ជញ្ជក់មិនស្រួល សើមជោគ",
        a: "បារី",
        h: "មនុស្សខ្លះជក់"
    },

    {
        q: "ក្មេងចាំផ្ទះ ចាស់ដើរលេង",
        a: "ស្លឹកឈើ",
        h: "នៅលើដើមឈើ"
    },

    {
        q: "ក្រពើមិនជិះទៅជិះគល់ឈើ ក្បាលដូចគេរើអាចម៍ដូចគេរោយ",
        a: "ខ្នោសកោសដូង",
        h: "ពាក់ព័ន្ធនឹងដូង"
    },

    {
        q: "ក្បាលមួយ ជើងពីរដណ្តប់ មានកូនគ្រប់៣៦៥",
        a: "១ឆ្នាំ ១២ខែ ៣៦៥ថ្ងៃ",
        h: "ពាក់ព័ន្ធនឹងពេលវេលា"
    },

    {
        q: "កេះឆ្អឹងជំនី ស៊ីគល់បបុស ឱបដៃវៃពោះ បរសេះកាត់ត្រឡោក",
        a: "កេះចាប៉ី ផ្លុំខ្លុយ គោះស្គ គូតទ្រ",
        h: "ឧបករណ៍តន្ត្រី"
    },

    {
        q: "កាប់មួយពាន់ ជាន់មួយម៉ឺន",
        a: "ជ្រុញ មាត់ទ្វា",
        h: "នៅជិតទ្វារ"
    },

    {
        q: "កាលដើមរូបអ្នកគួរឲ្យខ្ពើម លុះដូររូបកាលណា អ្នកគួរឲ្យស្រឡាញ់",
        a: "មេអំបៅ",
        h: "ពីដង្កូវទៅជាសត្វស្អាត"
    },

    {
        q: "កុកហើរពុំដែលទំ ភ្នំពុំដែលកន្លះ",
        a: "ពពក ភ្នំពេញ",
        h: "មួយនៅលើមេឃ"
    },

    {
        q: "កាកែវវងពងលើដី ដំរីពងចុងឈើ ក្រពើពងលើមេឃ",
        a: "ជីនាងវង ស្វាយក្បាលដំរី ផ្កាយក្រពើ",
        h: "ឈ្មោះរុក្ខជាតិ និងផ្កាយ"
    },

    {
        q: "មានភ្លើងមិនឆេះ មានផេះមិនហុយ",
        a: "ត្មាតភ្លើង ត្មាតផេះ",
        h: "មិនមែនភ្លើងពិតទេ 😂"
    },

    {
        q: "ក្លិកក្លក់ ដងឡើងក្រហមទែង",
        a: "អំពិលទុំ",
        h: "ផ្លែឈើមានរសជាតិជូរ"
    },

    {
        q: "កំប៉ុកកំប៉ុនស្រដៀងផ្លែជំពូ ប្រហោងពីរគ្រះហូ មមិះជុក",
        a: "ច្រមុះ",
        h: "នៅកណ្ដាលមុខ"
    },

    {
        q: "កាប់ឈើរាន់មែក",
        a: "កាប់ឈឺរែកមាន់",
        h: "ពាក្យលេងសំឡេង"
    },

    {
        q: "កាប់ផាំងដល់ថ្ម កាប់ផាំងដល់ដីស កាប់ផាំងដល់ទឹកសមុទ្រ",
        a: "កាប់ដូង",
        h: "មានទឹកនៅខាងក្នុង"
    },

    {
        q: "ខ្សែមួយច្រវាយរាយគ្រប់ស្រុក",
        a: "ផ្លូវ",
        h: "ប្រើធ្វើដំណើរ"
    },

    {
        q: "ខ្លួនខ្ញុំថ្លាដូចកញ្ចក់ ទឹកភ្នែកខ្ញុំស្រុក់ពេលត្រូវកំដៅ",
        a: "ទឹកកក",
        h: "ត្រជាក់ខ្លាំង"
    },

    {
        q: "ខ្មៅក្ងេះ កេះសូន",
        a: "កូនសេះ",
        h: "សត្វមានជើងបួន"
    },

    {
        q: "ខ្ចីខ្ចប់នំ ទុំស្ល",
        a: "ស្លឹកឬស្សី ទំពាំង",
        h: "ពាក់ព័ន្ធនឹងឬស្សី"
    },

    {
        q: "ស្រីសត្រសូល បណ្តូលចេកខ្ចី បងមិនឱ្យដើរដី ដើរលើក្បាលបង",
        a: "ស្នៀតសក់",
        h: "ប្រើលើសក់"
    },

    {
        q: "ស្រីសត្រសូល សទាំងបណ្តូល ល្អៀចចុង",
        a: "ទៀន",
        h: "មានភ្លើង"
    },

    {
        q: "ស្រីខ្មៅស្រអែម ក្បាលផ្អែមកន្ទុយសាប",
        a: "អំពៅ",
        h: "ផ្អែម"
    },

    {
        q: "ស្រីសល្អបងអើយ ងូតទឹករួចហើយ នាំគ្នាចូលដេក",
        a: "លាងចានយកទៅផ្កាប់",
        h: "ធ្វើក្រោយពេលលាងចាន"
    },

    {
        q: "ស្រីសើមរងើម ពោះដូចគេផើម អាក្រក់ពេកក្រៃ មានតែកន្ទបប៉ុនៗបាតដៃ ក្រណាស់សព្វថ្ងៃស្រីៗស្រឡាញ់",
        a: "ពាងប្រហុក",
        h: "ពាក់ព័ន្ធនឹងប្រហុក"
    },

    {
        q: "ស្រីលឿងខៀវខ្ចី មនុស្សលើផែនដី មេត្រីស្រីលឿង",
        a: "មាស",
        h: "លោហៈមានតម្លៃ"
    },

    {
        q: "ស្រីសទ្រមែ អង្គុយលើគ្រែ សណ្តូកជើងលេង អ្នកណាវាយនាង នាងយំគគ្រេង សង្ក្រៀតធ្មេញក្រុបៗ",
        a: "មូរសំឡី",
        h: "ពាក់ព័ន្ធនឹងសំឡី"
    },

    {
        q: "ស្លឹកចេកផ្ងា ស្លឹកចារផ្កាប់",
        a: "សាស្រ្តាស្លឹករឹត",
        h: "សៀវភៅបែបបុរាណ"
    },

    {
        q: "ស្លែវៗចាប",
        a: "ស្លាបចែវ",
        h: "ប្រើជាមួយទូក"
    },

    {
        q: "វាយគោពី ស៊ីដុំរទេះ វាយគោប្រឡាក់ផេះ កេះដោះនាង ទូកកំប៉ោងហាងដោតគល់ឬស្សីតម្រៀបហែ",
        a: "ស្គរធំ ផ្លុំស្រឡៃ ទះសម្ភោរ វាយគង រនាត",
        h: "ឧបករណ៍តន្ត្រីជាច្រើន"
    },

    {
        q: "អ្នកឡើងមិនបានបេះ អ្នកប្រឡេះមិនបានស៊ី អ្នកនៅទទេស៊ីឆ្អែត",
        a: "ជើង ដៃ និងមាត់",
        h: "ផ្នែកនៃរាងកាយ"
    },

    {
        q: "ឡើងដូងអន្តឹកៗ តោងព្រ័ត្រអន្តេវៗ ក្តិតតាហេវ ត្រពោកជូរ",
        a: "អង្ក្រង",
        h: "សត្វតូចៗ"
    },

    {
        q: "ហាលស្រូវលើចុងរកា អ្នកឥតប្រាជ្ញាសាស្រូចមិនអស់",
        a: "មើលសាស្រ្តា",
        h: "ពាក់ព័ន្ធនឹងការអាន"
    },

    {
        q: "ហុចឱ្យឡានច្រានទៅមុខ ជិតទង្គុកត្រះពងឯង",
        a: "ស៊ីក្លូ",
        h: "យានជំនិះចាស់ៗ"
    },

    {
        q: "ហៅឯងឆ្លើយឯង",
        a: "ដើមកណ្តោលបាត",
        h: "ជាឈ្មោះរុក្ខជាតិ"
    },

    {
        q: "សត្វមួយមកពីជើង ក្បាលទើងមើង ជើងប៉ុនស្នប់",
        a: "ដំរី",
        h: "សត្វធំជាងគេមួយ"
    },

    {
        q: "សត្វតា ទំលើតា បាក់មែកតា ធ្លាក់ក្នុងតា",
        a: "សត្វត្រដក់ ទំលើត្របែក ធ្លាក់ក្នុងត្រពាំង",
        h: "សត្វ + ផ្លែឈើ + ទឹក"
    },

    {
        q: "សត្វមួយមានភ្នែកធំជាងក្បាល ឃើញចំណីត្រកាលបូតដៃបូតជើង",
        a: "រុយ",
        h: "សត្វហើរដែលមនុស្សមិនសូវចូលចិត្ត"
    },

    {
        q: "សហឯកោង មហោងហឹង សហភិតភឹង ឯកោរមណីយ",
        a: "ស្គរ",
        h: "វាយហើយមានសំឡេង"
    },

    {
        q: "សអើយស្រីស កូនរាប់ដំប នៅឆ្ងាយពីគ្នា ឱ្យម្តាយលំបាកវេទនា ដើរអើតគ្រប់គ្នា ទំរាំបានកូន",
        a: "អន្ទងអំបោះ",
        h: "ពាក់ព័ន្ធនឹងអំបោះ"
    },

    {
        q: "ស៊ីមួយចាន នៅមួយចាន",
        a: "ខ្យង",
        h: "សត្វមានសំបក"
    },

    {
        q: "ស្រីសត្រសិត ដុះមមិះក្តិត ម្ខាងវែងម្ខាងខ្លី",
        a: "ម្ជុលនិងចេស",
        h: "ប្រើសម្រាប់ដេរ"
    },

    {
        q: "ស្រីស្តើងសាច់ស្វិត ដុះធ្មេញល្អិត ចំនួនរាប់ផ្លូន កើតមកម្នាក់ឯង ឥតបងឥតប្អូន ធ្មេញច្រើនរាប់ផ្លូវ ចាក់រួចបានស៊ី",
        a: "ធ្មេញឈើ",
        h: "ឧបករណ៍ធ្វើពីឈើ"
    },

    {
        q: "ស្ទាបក្លាល ទះពោះ",
        a: "វាយស្គរ",
        h: "វាយហើយមានសំឡេង"
    }

];


/* ================= COMMAND LINE ================= */

const commands = [

    {
        q: "Server មិនឆ្លើយតប។ តើ command មួយណាអាចសាកល្បងថា server នៅរស់ឬអត់? 😭",
        a: "ping",
        h: "វាយឈ្មោះ command ដែលប្រើ ICMP"
    },

    {
        q: "ចង់ដឹងថាខ្លួនឯងនៅ folder ណា? ដូចសួរសង្សារថា 'យើងនៅឯណា?' 😂",
        a: "pwd",
        h: "Print Working Directory"
    },

    {
        q: "ចង់មើល file និង folder នៅទីនេះ តើ command អ្វី?",
        a: "ls",
        h: "List files"
    },

    {
        q: "ចង់ចូលទៅ folder មួយ។ តើ command អ្វី?",
        a: "cd",
        h: "Change Directory"
    },

    {
        q: "ចង់បង្កើត folder ថ្មីសម្រាប់ទុករូបសង្សារ 😂",
        a: "mkdir",
        h: "Make Directory"
    },

    {
        q: "ចង់បង្កើត file ថ្មីមួយទទេ?",
        a: "touch",
        h: "បង្កើត empty file"
    },

    {
        q: "ចង់លុប file មួយដែលមិនចង់ឃើញទៀត ដូច chat សង្សារចាស់ 😂",
        a: "rm",
        h: "Remove"
    },

    {
        q: "ចង់ copy file មួយទៅកន្លែងផ្សេង?",
        a: "cp",
        h: "Copy"
    },

    {
        q: "ចង់ប្តូរឈ្មោះ file ឬផ្លាស់ទី file?",
        a: "mv",
        h: "Move"
    },

    {
        q: "ចង់មើលអត្ថបទនៅក្នុង file ដោយមិនបើក editor?",
        a: "cat",
        h: "បង្ហាញ contents"
    },

    {
        q: "ចង់ស្វែងរកពាក្យ 'love' នៅក្នុង file។ Command អ្វី? ❤️",
        a: "grep",
        h: "Search text"
    },

    {
        q: "ចង់ស្វែងរក file មួយនៅក្នុង Linux?",
        a: "find",
        h: "Search files"
    },

    {
        q: "ចង់មើល IP Address របស់ម៉ាស៊ីន?",
        a: "ip",
        h: "Command ចាប់ផ្តើមដោយ ip"
    },

    {
        q: "ចង់មើល process ដែលកំពុងដំណើរការ?",
        a: "ps",
        h: "Process Status"
    },

    {
        q: "ចង់មើល process បែប real-time ដូចមើលសង្សារថាតើ online ឬអត់ 😂",
        a: "top",
        h: "Real-time process viewer"
    },

    {
        q: "ចង់បញ្ឈប់ process មួយដែលធ្វើអោយ server ឈឺក្បាល?",
        a: "kill",
        h: "Terminate process"
    },

    {
        q: "ចង់មើល disk space ដែលនៅសល់?",
        a: "df",
        h: "Disk Free"
    },

    {
        q: "ចង់មើលទំហំ file/folder?",
        a: "du",
        h: "Disk Usage"
    },

    {
        q: "ចង់មើល RAM និង memory usage?",
        a: "free",
        h: "Free memory"
    },

    {
        q: "ចង់មើល network connections និង listening ports?",
        a: "ss",
        h: "Socket Statistics"
    },

    {
        q: "ចង់ប្តូរ permission file ឱ្យ executable?",
        a: "chmod",
        h: "Change Mode"
    },

    {
        q: "ចង់ប្តូរ owner របស់ file?",
        a: "chown",
        h: "Change Owner"
    },

    {
        q: "ចង់ប្តូរអ្នកប្រើប្រាស់ក្នុង terminal?",
        a: "su",
        h: "Switch User"
    },

    {
        q: "ចង់ដំណើរការ command ជា administrator?",
        a: "sudo",
        h: "SuperUser DO"
    },

    {
        q: "ចង់ដំឡើង package នៅ Ubuntu?",
        a: "apt",
        h: "Package manager"
    },

    {
        q: "ចង់ធ្វើ update package list នៅ Ubuntu?",
        a: "sudo apt update",
        h: "apt + update"
    },

    {
        q: "ចង់ដំឡើង package ឈ្មោះ nginx?",
        a: "sudo apt install nginx",
        h: "apt install"
    },

    {
        q: "ចង់មើល status របស់ service ដូចជា Apache?",
        a: "systemctl status",
        h: "System service manager"
    },

    {
        q: "ចង់ restart Apache service?",
        a: "sudo systemctl restart apache2",
        h: "systemctl + restart"
    },

    {
        q: "ចង់បើក SSH service?",
        a: "sudo systemctl start ssh",
        h: "systemctl + start"
    }

];


/* ================= VARIABLES ================= */

let currentGame = [];
let currentIndex = 0;
let score = 0;
let combo = 0;
let gameType = "";
let funnyMode = true;
let soundEnabled = true;


/* ================= SCREEN CONTROL ================= */

function showScreen(id) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    window.scrollTo(0, 0);
}


function goHome() {
    showScreen("homeScreen");
}


/* ================= PLAYER NAME ================= */

function getPlayerName() {

    let name = document.getElementById("playerName").value.trim();

    if (!name) {
        name = localStorage.getItem("playerName") || "Player";
    }

    localStorage.setItem("playerName", name);

    return name;
}


/* ================= START RIDDLE ================= */

function startRiddleGame() {

    getPlayerName();

    gameType = "riddle";

    currentGame = [...riddles];

    currentIndex = 0;
    score = 0;
    combo = 0;

    document.getElementById("gameTitle").textContent =
        "🧠 ពាក្យបណ្ដៅខ្មែរ";

    document.getElementById("totalQuestions").textContent =
        currentGame.length;

    showScreen("gameScreen");

    loadQuestion();
}


/* ================= START COMMAND ================= */

function startCommandGame() {

    getPlayerName();

    gameType = "command";

    currentGame = [...commands];

    currentIndex = 0;
    score = 0;
    combo = 0;

    document.getElementById("gameTitle").textContent =
        "💻 Command Line Challenge";

    document.getElementById("totalQuestions").textContent =
        currentGame.length;

    showScreen("gameScreen");

    loadQuestion();
}


/* ================= LOAD QUESTION ================= */

function loadQuestion() {

    const item = currentGame[currentIndex];

    document.getElementById("questionNumber").textContent =
        currentIndex + 1;

    document.getElementById("questionText").textContent =
        item.q;

    document.getElementById("answerInput").value = "";

    document.getElementById("feedback").textContent = "";

    document.getElementById("feedback").className = "feedback";

    document.getElementById("hintBox").textContent = "";

    document.getElementById("loveText").textContent = "";

    if (gameType === "command") {

        document.getElementById("questionIcon").textContent = "💻";

        if (funnyMode) {

            document.getElementById("loveText").textContent =
                getFunnyCommandText();

        }

    } else {

        document.getElementById("questionIcon").textContent = "🧠";

        if (funnyMode) {

            document.getElementById("loveText").textContent =
                getFunnyRiddleText();

        }
    }

    updateProgress();

    document.getElementById("answerInput").focus();
}


/* ================= FUNNY TEXT ================= */

function getFunnyRiddleText() {

    const texts = [
        "😂 ខុសកុំបារម្ភ... ខួរក្បាលក៏ត្រូវការ Update!",
        "🧠 កុំឱ្យ Brain Error 404!",
        "🤣 សំណួរនេះមិនពិបាកទេ... ប្រហែល!",
        "❤️ បើឆ្លើយត្រូវ អ្នកអាចបានស្នេហា... អត់ទេ Certificate 😂",
        "💀 Google ក៏ជួយមិនបានទេ!",
        "🔥 Use your brain, not your girlfriend's brain!"
    ];

    return texts[Math.floor(Math.random() * texts.length)];
}


function getFunnyCommandText() {

    const texts = [
        "😂 Server មិនមែនសង្សារ មិនចាំបាច់សួរ 'Are you online?'",
        "❤️ បើ command ត្រូវ សង្សារអាច Reply... ប្រហែល!",
        "💻 Linux មិន Ghost អ្នកទេ... process ប៉ុណ្ណោះ!",
        "😂 កុំ rm សង្សារចាស់ចោលលឿនពេក!",
        "🔥 sudo មានអំណាចជាង 'Please baby'!",
        "💀 Wrong command = Server sad!"
    ];

    return texts[Math.floor(Math.random() * texts.length)];
}


/* ================= ANSWER ================= */

document.getElementById("answerInput").addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            checkAnswer();
        }

    }
);


function normalize(text) {

    return text
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");
}


function checkAnswer() {

    const input = document
        .getElementById("answerInput")
        .value
        .trim();

    if (!input) {

        showFeedback(
            "🤨 មិនបញ្ចូលចម្លើយផង? ខួរក្បាលកំពុង Loading...",
            false
        );

        return;
    }

    const correct = currentGame[currentIndex].a;

    const userAnswer = normalize(input);
    const correctAnswer = normalize(correct);

    const feedback = document.getElementById("feedback");

    if (
        userAnswer === correctAnswer ||
        correctAnswer.includes(userAnswer) && userAnswer.length > 2
    ) {

        combo++;

        let points = 1;

        if (combo >= 3) {
            points += 1;
        }

        if (combo >= 5) {
            points += 2;
        }

        score += points;

        feedback.innerHTML =
            `🎉 ត្រូវហើយ! +${points} ⭐ <br>
             🔥 Combo x${combo}`;

        feedback.className = "feedback correct";

        playSound("correct");

        setTimeout(nextQuestion, 1100);

    } else {

        combo = 0;

        feedback.innerHTML =
            `❌ ខុសហើយ 😂<br>
             💡 ចម្លើយ: <b>${correct}</b>`;

        feedback.className = "feedback wrong";

        playSound("wrong");

        setTimeout(nextQuestion, 1600);
    }

    updateScore();
}


/* ================= NEXT ================= */

function nextQuestion() {

    currentIndex++;

    if (currentIndex >= currentGame.length) {

        finishGame();

        return;
    }

    loadQuestion();
}


/* ================= HINT ================= */

function showHint() {

    const item = currentGame[currentIndex];

    document.getElementById("hintBox").textContent =
        "💡 Hint: " + item.h;

}


/* ================= PROGRESS ================= */

function updateProgress() {

    const percent =
        (currentIndex / currentGame.length) * 100;

    document.getElementById("progressFill").style.width =
        percent + "%";
}


/* ================= SCORE ================= */

function updateScore() {

    document.getElementById("score").textContent = score;

    document.getElementById("gameScore").textContent = score;

    document.getElementById("combo").textContent = combo;
}


/* ================= FINISH ================= */

function finishGame() {

    showScreen("resultScreen");

    document.getElementById("finalScore").textContent =
        score;

    document.getElementById("finalTotal").textContent =
        currentGame.length;

    const title = document.getElementById("resultTitle");

    const message = document.getElementById("resultMessage");

    const icon = document.getElementById("resultIcon");

    const certificateButton =
        document.getElementById("certificateButton");


    localStorage.setItem(
        gameType + "Score",
        score
    );


    if (score >= 30) {

        icon.textContent = "🏆";

        title.textContent = "CONGRATULATIONS! 🎉";

        message.innerHTML =
            `អ្នកបានពិន្ទុ <b>${score}</b>!<br>
             🏆 អ្នកអាចទទួលបាន Certificate!`;

        certificateButton.style.display = "block";

        playSound("win");

    } else {

        icon.textContent = "😂";

        title.textContent = "BRAIN ERROR 404";

        message.innerHTML =
            `អ្នកបានពិន្ទុ <b>${score}</b>។<br>
             ត្រូវការ <b>30+</b> ដើម្បីបាន Certificate 😭`;

        certificateButton.style.display = "none";
    }

}


/* ================= CERTIFICATE ================= */

function openCertificate() {

    const name = getPlayerName();

    const riddleScore =
        Number(localStorage.getItem("riddleScore") || 0);

    const commandScore =
        Number(localStorage.getItem("commandScore") || 0);


    let type = gameType;

    let currentScore =
        type === "command"
            ? commandScore
            : riddleScore;


    if (currentScore >= 30) {

        window.location.href =
            "certificate.html?name=" +
            encodeURIComponent(name) +
            "&score=" +
            currentScore +
            "&type=" +
            encodeURIComponent(type);

    } else {

        if (!type) {

            alert(
                "🏆 ចាប់ផ្តើម Game មួយសិន!\n\n" +
                "ត្រូវបាន 30+ ដើម្បីទទួល Certificate 😂"
            );

        } else {

            alert(
                "🏆 Certificate ត្រូវការ 30+ ពិន្ទុ!\n\n" +
                "ពិន្ទុរបស់អ្នក: " +
                currentScore
            );

        }
    }

}


/* ================= OPTIONS ================= */

function showOptions() {

    showScreen("optionsScreen");

}


function toggleFunnyMode() {

    funnyMode = !funnyMode;

    document.getElementById("funnyToggle").textContent =
        funnyMode ? "ON" : "OFF";

}


function toggleSound() {

    soundEnabled = !soundEnabled;

    document.getElementById("soundToggle").textContent =
        soundEnabled ? "ON" : "OFF";

}


/* ================= CREDITS ================= */

function showCredits() {

    showScreen("creditsScreen");

}


/* ================= SOUND ================= */

function playSound(type) {

    if (!soundEnabled) return;

    try {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;

        const audio =
            new AudioContext();

        const oscillator =
            audio.createOscillator();

        const gain =
            audio.createGain();

        oscillator.connect(gain);

        gain.connect(audio.destination);

        if (type === "correct") {
            oscillator.frequency.value = 700;
        }

        else if (type === "wrong") {
            oscillator.frequency.value = 180;
        }

        else {
            oscillator.frequency.value = 900;
        }

        gain.gain.value = .08;

        oscillator.start();

        setTimeout(() => {

            oscillator.stop();

        }, 120);

    } catch (e) {

        console.log("Sound unavailable");

    }

}


/* ================= LOAD SAVED NAME ================= */

window.addEventListener("load", function() {

    const saved =
        localStorage.getItem("playerName");

    if (saved) {

        document.getElementById("playerName").value =
            saved;

    }

});