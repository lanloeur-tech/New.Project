/* =====================================================
   KHMER RIDDLE GAME
   ===================================================== */


/* =====================================================
   RIDDLE QUESTIONS
===================================================== */

const riddles = [

    {
        q: "ស្រីសត្រសិត ដុះមមិះក្តិត ម្ខាងវែងម្ខាងខ្លី",
        a: "ម្ជុលនិងចេស"
    },

    {
        q: "ស្រីស្តើងសាច់ស្វិត ដុះធ្មេញល្អិត ចំនួនរាប់ផ្លូន កើតមកម្នាក់ឯង ឥតបងឥតប្អូន ធ្មេញច្រើនរាប់ផ្លូវ ចាក់រួចបានស៊ី",
        a: "ធ្មេញឈើ"
    },

    {
        q: "ស្ទាបក្លាល ទះពោះ",
        a: "វាយស្គរ"
    },

    {
        q: "ស៊ីមួយចាន នៅមួយចាន",
        a: "ខ្យង"
    },

    {
        q: "សអើយស្រីស កូនរាប់ដំប នៅឆ្ងាយពីគ្នា ឱ្យម្តាយលំបាកវេទនា ដើរអើតគ្រប់គ្នា ទំរាំបានកូន",
        a: "អន្ទងអំបោះ"
    },

    {
        q: "សហឯកោង មហោងហឹង សហភិតភឹង ឯកោរមណីយ",
        a: "ស្គរ"
    },

    {
        q: "សត្វមួយមានភ្នែកធំជាងក្បាល ឃើញចំណីត្រកាលបូតដៃបូតជើង",
        a: "រុយ"
    },

    {
        q: "សត្វតា ទំលើតា បាក់មែកតា ធ្លាក់ក្នុងតា",
        a: "សត្វត្រដក់ ទំលើត្របែក ធ្លាក់ក្នុងត្រពាំង"
    },

    {
        q: "សត្វមួយមកពីជើង ក្បាលទើងមើង ជើងប៉ុនស្នប់",
        a: "ដំរី"
    },

    {
        q: "ហៅឯងឆ្លើយឯង",
        a: "ដើមកណ្តោលបាត"
    },

    {
        q: "ហុចឱ្យឡានច្រានទៅមុខ ជិតទង្គុកត្រះពងឯង",
        a: "ស៊ីក្លូ"
    },

    {
        q: "ហាលស្រូវលើចុងរកា អ្នកឥតប្រាជ្ញាសាស្រូចមិនអស់",
        a: "មើលសាស្រ្តា"
    },

    {
        q: "ឡើងដូងអន្តឹកៗ តោងព្រ័ត្រអន្តេវៗ ក្តិតតាហេវ ត្រពោកជូរ",
        a: "អង្ក្រង"
    },

    {
        q: "អ្នកឡើងមិនបានបេះ អ្នកប្រឡេះមិនបានស៊ី អ្នកនៅទទេស៊ីឆ្អែត",
        a: "ជើង ដៃ និងមាត់"
    },

    {
        q: "វាយគោពី ស៊ីដុំរទេះ វាយគោប្រឡាក់ផេះ កេះដោះនាង ទូកកំប៉ោងហាងដោតគល់ឬស្សីតម្រៀបហែ",
        a: "ស្គរធំ ផ្លុំស្រឡៃ ទះសម្ភោរ វាយគង រនាត"
    },

    {
        q: "ស្លែវៗចាប",
        a: "ស្លាបចែវ"
    },

    {
        q: "ស្លឹកចេកផ្ងា ស្លឹកចារផ្កាប់",
        a: "សាស្រ្តាស្លឹករឹត"
    },

    {
        q: "ស្រីសទ្រមែ អង្គុយលើគ្រែ សណ្តូកជើងលេង អ្នកណាវាយនាង នាងយំគគ្រេង សង្ក្រៀតធ្មេញក្រុបៗ",
        a: "មូរសំឡី"
    },

    {
        q: "ស្រីលឿងខៀវខ្ចី មនុស្សលើផែនដី មេត្រីស្រីលឿង",
        a: "មាស"
    },

    {
        q: "ស្រីសើមរងើម ពោះដូចគេផើម អាក្រក់ពេកក្រៃ មានតែកន្ទបប៉ុនៗបាតដៃ ក្រណាស់សព្វថ្ងៃស្រីៗស្រឡាញ់",
        a: "ពាងប្រហុក"
    },

    {
        q: "ស្រីសល្អបងអើយ ងូតទឹករួចហើយ នាំគ្នាចូលដេក",
        a: "លាងចានយកទៅផ្កាប់"
    },

    {
        q: "ស្រីខ្មៅស្រអែម ក្បាលផ្អែមកន្ទុយសាប",
        a: "អំពៅ"
    },

    {
        q: "ស្រីសត្រសូល សទាំងបណ្តូល ល្អៀចចុង",
        a: "ទៀន"
    },

    {
        q: "ស្រីសត្រសូល បណ្តូលចេកខ្ចី បងមិនឱ្យដើរដី ដើរលើក្បាលបង",
        a: "ស្នៀតសក់"
    },

    {
        q: "ខ្ចីខ្ចប់នំ ទុំស្ល",
        a: "ស្លឹកឬស្សី ទំពាំង"
    },

    {
        q: "ខ្មៅក្ងេះ កេះសូន",
        a: "កូនសេះ"
    },

    {
        q: "ខ្លួនខ្ញុំថ្លាដូចកញ្ចក់ ទឹកភ្នែកខ្ញុំស្រុក់ពេលត្រូវកំដៅ",
        a: "ទឹកកក"
    },

    {
        q: "ខ្សែមួយច្រវាយរាយគ្រប់ស្រុក",
        a: "ផ្លូវ"
    },

    {
        q: "កាប់ផាំងដល់ថ្ម កាប់ផាំងដល់ដីស កាប់ផាំងដល់ទឹកសមុទ្រ",
        a: "កាប់ដូង"
    },

    {
        q: "កាប់ឈើរាន់មែក",
        a: "កាប់ឈឺរែកមាន់"
    },

    {
        q: "កំប៉ុកកំប៉ុនស្រដៀងផ្លែជំពូ ប្រហោងពីរគ្រះហូ មមិះជុក",
        a: "ច្រមុះ"
    },

    {
        q: "ក្លិកក្លក់ ដងឡើងក្រហមទែង",
        a: "អំពិលទុំ"
    },

    {
        q: "មានភ្លើងមិនឆេះ មានផេះមិនហុយ",
        a: "ត្មាតភ្លើង ត្មាតផេះ"
    },

    {
        q: "កាកែវវងពងលើដី ដំរីពងចុងឈើ ក្រពើពងលើមេឃ",
        a: "ជីនាងវង ស្វាយក្បាលដំរី ផ្កាយក្រពើ"
    },

    {
        q: "កុកហើរពុំដែលទំ ភ្នំពុំដែលកន្លះ",
        a: "ពពក ភ្នំពេញ"
    },

    {
        q: "កាលដើមរូបអ្នកគួរឲ្យខ្ពើម លុះដូររូបកាលណា អ្នកគួរឲ្យស្រឡាញ់",
        a: "មេអំបៅ"
    },

    {
        q: "កាប់មួយពាន់ ជាន់មួយម៉ឺន",
        a: "ជ្រុញ មាត់ទ្វា"
    },

    {
        q: "កេះឆ្អឹងជំនី ស៊ីគល់បបុស ឱបដៃវៃពោះ បរសេះកាត់ត្រឡោក",
        a: "កេះចាប៉ី ផ្លុំខ្លុយ គោះស្គ គូតទ្រ"
    },

    {
        q: "ក្បាលមួយ ជើងពីរដណ្តប់ មានកូនគ្រប់៣៦៥",
        a: "១ឆ្នាំ ១២ខែ ៣៦៥ថ្ងៃ"
    },

    {
        q: "ក្រពើមិនជិះទៅជិះគល់ឈើ ក្បាលដូចគេរើអាចម៍ដូចគេរោយ",
        a: "ខ្នោសកោសដូង"
    },

    {
        q: "ក្មេងចាំផ្ទះ ចាស់ដើរលេង",
        a: "ស្លឹកឈើ"
    },

    {
        q: "ក្រហមចុងស្ទីកគល់ ជញ្ជក់មិនស្រួល សើមជោគ",
        a: "បារី"
    },

    {
        q: "កាលរស់គេស្អប់ ងាប់ទៅគេហិត",
        a: "សង្កើច"
    },

    {
        q: "កាត់កឥតឈាម កាត់ដៃឥតម្រាម ពុះទ្រូងឥតថ្លើម",
        a: "កាត់អាវ"
    },

    {
        q: "កំប៉ាងៗអើយ ដូចស្លឹកម្លូ ប្រហោងគ្រហ៊ូ មមិះជុក",
        a: "ស្លឹកត្រចៀកជ្រូក"
    },

    {
        q: "ក្តិតទល់ក្តិត ដៃកាន់ដៃ ជើងខ្វៃៗ ភ្នែកមើលមុខ",
        a: "ជិះកង់"
    },

    {
        q: "កំប៉ូចៗដូចរបស់អ្នក កន្លាក់ៗដូចរបស់ខ្ញុំ ច្រឹមច្រុមចូលរបស់អ្នកវិញ",
        a: "អណ្តើក"
    },

    {
        q: "ក្រុកៗមាន់ក្រាប លូកដៃទៅស្ទាប ម៉ែអើយប៉ុន្មាន?",
        a: "វាល់អង្ករដាំបាយ"
    },

    {
        q: "កូនអូរតូចមួយ បងមិនហ៊ានឆ្លង ស្រីពៅមាសបង ឆ្លងទៅឆ្លងមក",
        a: "ត្រល់សំរាប់ត្បាញ"
    },

    {
        q: "ក្ងក់ដូចទង់ ក្ងង់ដូចត្មាត រកស៊ីសង្វាត រកពោះដាក់គ្មាន",
        a: "កណ្តៀវ"
    }

];


/* =====================================================
   COMMAND LINE QUESTIONS
===================================================== */

const commands = [

    {
        q: "បើអ្នកចង់មើលថា File មួយមានអ្វីខ្លះ តើ Command មួយណា?",
        a: "ls",
        options: ["ls", "love", "cd girlfriend", "rm -rf heart"]
    },

    {
        q: "ចង់ចូលទៅ Folder ផ្សេង តើប្រើ Command អ្វី?",
        a: "cd",
        options: ["cd", "go love", "enter heart", "jump"]
    },

    {
        q: "Command `pwd` ប្រើសម្រាប់អ្វី?",
        a: "បង្ហាញទីតាំង Directory បច្ចុប្បន្ន",
        options: [
            "បង្ហាញទីតាំង Directory បច្ចុប្បន្ន",
            "ប្រាប់ថា Crush នៅណា",
            "បើក Wi-Fi",
            "បិទ Server"
        ]
    },

    {
        q: "ចង់បង្កើត Folder ថ្មី តើប្រើ Command អ្វី?",
        a: "mkdir",
        options: ["mkdir", "make-love", "new-folder.exe", "create heart"]
    },

    {
        q: "ចង់បង្កើត File ទទេមួយ តើប្រើ Command អ្វី?",
        a: "touch",
        options: ["touch", "hug", "create", "love"]
    },

    {
        q: "Command `rm` មានតួនាទីអ្វី?",
        a: "លុប File",
        options: [
            "លុប File",
            "លុប Crush ចេញពីចិត្ត",
            "Restart Computer",
            "បើក Browser"
        ]
    },

    {
        q: "បើ Server កំពុងរត់ ហើយអ្នកចង់មើល Process តើ Command មួយណាអាចប្រើបាន?",
        a: "ps",
        options: ["ps", "love-status", "server-love", "heart"]
    },

    {
        q: "ចង់មើល Process ដែលកំពុងដំណើរការ Real-time តើអាចប្រើអ្វី?",
        a: "top",
        options: ["top", "crush", "watch-love", "feelings"]
    },

    {
        q: "Command `clear` ធ្វើអ្វី?",
        a: "សម្អាត Terminal Screen",
        options: [
            "សម្អាត Terminal Screen",
            "លុប Memories",
            "Clear Browser History",
            "លុប Crush"
        ]
    },

    {
        q: "បើអ្នកចង់ចម្លង File តើប្រើ Command អ្វី?",
        a: "cp",
        options: ["cp", "copy-love", "clone-heart", "duplicate"]
    },

    {
        q: "បើចង់ Move ឬ Rename File តើប្រើ Command អ្វី?",
        a: "mv",
        options: ["mv", "move-heart", "run-away", "rename-love"]
    },

    {
        q: "Command `cat file.txt` ប្រើសម្រាប់អ្វី?",
        a: "បង្ហាញមាតិកា File",
        options: [
            "បង្ហាញមាតិកា File",
            "ហៅឆ្មា",
            "បើក Camera",
            "Restart Linux"
        ]
    },

    {
        q: "ចង់ស្វែងរកពាក្យមួយនៅក្នុង File តើ Command មួយណាសម?",
        a: "grep",
        options: ["grep", "find-love", "search-crush", "look"]
    },

    {
        q: "Command `find` ប្រើសម្រាប់អ្វី?",
        a: "ស្វែងរក File/Directory",
        options: [
            "ស្វែងរក File/Directory",
            "ស្វែងរក Crush",
            "រក Password Facebook",
            "រក Wi-Fi"
        ]
    },

    {
        q: "ចង់មើល Network Configuration តើ Command មួយណាអាចប្រើ?",
        a: "ip addr",
        options: ["ip addr", "my-ip-love", "network-love", "where-am-i"]
    },

    {
        q: "ចង់ Test ថា Server មួយ Reachable ឬអត់ តើ Command អ្វី?",
        a: "ping",
        options: ["ping", "poke", "hello-server", "love-test"]
    },

    {
        q: "Command `sudo` មានន័យប្រហែលថា?",
        a: "ដំណើរការ Command ជាមួយ Privileged Permission",
        options: [
            "ដំណើរការ Command ជាមួយ Privileged Permission",
            "សុំ Crush ឲ្យ Reply",
            "បើក Root Website",
            "Save Password"
        ]
    },

    {
        q: "បើចង់មើល Disk Space តើ Command មួយណា?",
        a: "df -h",
        options: ["df -h", "disk-love", "space", "hard-love"]
    },

    {
        q: "បើចង់មើលទំហំ File និង Folder តើប្រើ Command អ្វី?",
        a: "du -sh",
        options: ["du -sh", "size-love", "folder-size", "big-heart"]
    },

    {
        q: "Command `chmod` ប្រើសម្រាប់អ្វី?",
        a: "ផ្លាស់ប្តូរ File Permissions",
        options: [
            "ផ្លាស់ប្តូរ File Permissions",
            "Change Mood",
            "Change Password",
            "Change Girlfriend"
        ]
    },

    {
        q: "បើចង់មើល User ដែល Login បច្ចុប្បន្ន តើ Command អ្វី?",
        a: "whoami",
        options: ["whoami", "who-is-my-crush", "am-i-alone", "user-love"]
    },

    {
        q: "Command `date` បង្ហាញអ្វី?",
        a: "ថ្ងៃ និងម៉ោងបច្ចុប្បន្ន",
        options: [
            "ថ្ងៃ និងម៉ោងបច្ចុប្បន្ន",
            "ថ្ងៃរៀបការ",
            "ថ្ងៃ Crush Reply",
            "ថ្ងៃ Exam"
        ]
    },

    {
        q: "ចង់បិទ Linux Server តើ Command មួយណាអាចប្រើ?",
        a: "shutdown",
        options: ["shutdown", "sleep", "goodnight-server", "bye"]
    },

    {
        q: "ចង់ Restart Linux Server តើ Command មួយណា?",
        a: "reboot",
        options: ["reboot", "restart-love", "again", "refresh"]
    },

    {
        q: "Command `history` ប្រើសម្រាប់អ្វី?",
        a: "មើល Command ដែលបានវាយពីមុន",
        options: [
            "មើល Command ដែលបានវាយពីមុន",
            "មើលប្រវត្តិស្នេហា",
            "មើល Browser History",
            "មើលអតីត Crush"
        ]
    },

    {
        q: "ចង់ប្តូរ User ទៅ Root តើអាចប្រើអ្វី?",
        a: "sudo -i",
        options: ["sudo -i", "be-root", "king", "root-love"]
    },

    {
        q: "ចង់ Download File តាម Terminal ជាមួយ HTTP/HTTPS តើ Command មួយណា?",
        a: "wget",
        options: ["wget", "download-love", "get-file", "grab"]
    },

    {
        q: "Command `nano file.txt` ប្រើសម្រាប់អ្វី?",
        a: "បើក Text Editor Nano",
        options: [
            "បើក Text Editor Nano",
            "បើក TikTok",
            "បើក Game",
            "បើក Camera"
        ]
    },

    {
        q: "បើ Website មិនដំណើរការ ហើយចង់មើល Log របស់ Apache តើគួររកនៅណា?",
        a: "/var/log/apache2/",
        options: [
            "/var/log/apache2/",
            "/home/love/",
            "/etc/crush/",
            "/root/heart/"
        ]
    },

    {
        q: "Command `systemctl status apache2` ប្រើសម្រាប់អ្វី?",
        a: "ពិនិត្យ Status របស់ Apache2",
        options: [
            "ពិនិត្យ Status របស់ Apache2",
            "Check Love Status",
            "Restart Browser",
            "Check RAM"
        ]
    },

    {
        q: "ចង់ Start Apache2 Service តើ Command អ្វី?",
        a: "systemctl start apache2",
        options: [
            "systemctl start apache2",
            "apache-love start",
            "start website",
            "run apache"
        ]
    },

    {
        q: "ចង់ Stop Apache2 Service តើ Command អ្វី?",
        a: "systemctl stop apache2",
        options: [
            "systemctl stop apache2",
            "stop love",
            "apache bye",
            "shutdown website"
        ]
    },

    {
        q: "Command `ssh user@server` ប្រើសម្រាប់អ្វី?",
        a: "ភ្ជាប់ទៅ Server តាម SSH",
        options: [
            "ភ្ជាប់ទៅ Server តាម SSH",
            "Send Love",
            "Open Facebook",
            "Connect Bluetooth"
        ]
    },

    {
        q: "ចង់មើល RAM Usage តើ Command មួយណាអាចប្រើ?",
        a: "free -h",
        options: ["free -h", "ram-love", "memory", "brain"]
    },

    {
        q: "ចង់មើល Linux Kernel/System Information តើអាចប្រើ Command អ្វី?",
        a: "uname -a",
        options: ["uname -a", "linux-info", "system-love", "who-linux"]
    }

];


/* =====================================================
   GAME VARIABLES
===================================================== */

let currentGame = "";
let questions = [];
let currentQuestion = 0;

let score = 0;
let combo = 0;
let hintUsed = false;

let playerName = "";

let answered = false;


/* =====================================================
   FUNNY MESSAGES
===================================================== */

const funnyCorrect = [
    "🔥 អូហូ! ខួរក្បាល Online ហើយ!",
    "😂 ត្រឹមត្រូវ! Crush ក៏ភ្ញាក់ផ្អើល!",
    "🧠 Brain.exe កំពុងដំណើរការ!",
    "🚀 Nice! អ្នកមិនទាន់ Error 404 ទេ!",
    "💪 ឡូយ! បន្តទៀត!",
    "❤️ ស្នេហាអាចចាញ់ តែចម្លើយនេះមិនចាញ់ទេ!",
    "👑 មកដល់កម្រិត Pro ហើយ!",
    "🔥 Combo បន្ត! កុំឲ្យខួរក្បាល Shutdown!"
];

const funnyWrong = [
    "💀 Error 404: ចម្លើយរកមិនឃើញ!",
    "😂 ខួរក្បាលកំពុង Restart...",
    "🥲 សូម្បី Google ក៏មិនដឹងថាអ្នកជ្រើសអ្វី!",
    "💔 Crush មិន Reply ហើយចម្លើយក៏ខុសទៀត!",
    "🤡 អូខេ... នេះគឺជាចម្លើយដែលមិនគួរជ្រើស!",
    "😵 Brain.exe has stopped working!",
    "💀 សូមចុច Ctrl + Z ក្នុងជីវិត!"
];


/* =====================================================
   START GAME
===================================================== */

function startGame(type) {

    playerName =
        document.getElementById("playerName").value.trim();

    if (!playerName) {

        alert("😂 សូមដាក់ឈ្មោះអ្នកលេងសិន!");

        document.getElementById("playerName").focus();

        return;
    }

    currentGame = type;

    if (type === "riddle") {

        questions = [...riddles];

        document.getElementById("gameTitle").innerText =
            "🧠 ពាក្យបណ្ដៅខ្មែរ";

        document.getElementById("questionIcon").innerText =
            "🧠";

    } else {

        questions = [...commands];

        document.getElementById("gameTitle").innerText =
            "💻 Command Line Challenge";

        document.getElementById("questionIcon").innerText =
            "💻";
    }

    /* Shuffle questions */

    questions.sort(() => Math.random() - 0.5);

    currentQuestion = 0;
    score = 0;
    combo = 0;

    document.getElementById("score").innerText = score;

    document.getElementById("totalQuestions").innerText =
        questions.length;

    document.getElementById("homeScreen").classList.add("hidden");

    document.getElementById("statsScreen").classList.add("hidden");

    document.getElementById("gameScreen").classList.remove("hidden");

    loadQuestion();

}


/* =====================================================
   LOAD QUESTION
===================================================== */

function loadQuestion() {

    answered = false;
    hintUsed = false;

    const q = questions[currentQuestion];

    document.getElementById("questionNumber").innerText =
        currentQuestion + 1;

    document.getElementById("progressFill").style.width =
        ((currentQuestion) / questions.length * 100) + "%";

    document.getElementById("questionText").innerText =
        q.q;

    document.getElementById("funnyMessage").innerText =
        "🤔 គិតឲ្យល្អ... កុំឲ្យ Brain.exe Crash!";

    document.getElementById("hintButton").disabled = false;

    document.getElementById("comboMessage").innerText =
        "🔥 Combo x" + combo;

    createAnswers(q);

}


/* =====================================================
   CREATE ANSWERS
===================================================== */

function createAnswers(q) {

    const container =
        document.getElementById("answers");

    container.innerHTML = "";

    let options = [];

    if (q.options) {

        options = [...q.options];

    } else {

        options = generateRiddleOptions(q.a);

    }

    options.sort(() => Math.random() - 0.5);

    options.forEach(option => {

        const button =
            document.createElement("button");

        button.className = "answer-btn";

        button.innerText = option;

        button.onclick = () => checkAnswer(button, option);

        container.appendChild(button);

    });

}


/* =====================================================
   RIDDLE FAKE ANSWERS
===================================================== */

function generateRiddleOptions(correct) {

    const fake = [
        "ឆ្មា",
        "កង់",
        "ទូរស័ព្ទ",
        "ដំរី",
        "ស្គរ",
        "អំពៅ",
        "មេអំបៅ",
        "ទៀន",
        "ច្រមុះ",
        "ផ្លូវ",
        "ខ្យង",
        "កណ្តៀវ"
    ];

    let options = [correct];

    while (options.length < 4) {

        const random =
            fake[Math.floor(Math.random() * fake.length)];

        if (!options.includes(random)) {
            options.push(random);
        }

    }

    return options;
}


/* =====================================================
   CHECK ANSWER
===================================================== */

function checkAnswer(button, answer) {

    if (answered) return;

    answered = true;

    const correct =
        questions[currentQuestion].a;

    const buttons =
        document.querySelectorAll(".answer-btn");

    buttons.forEach(btn => {

        btn.disabled = true;

        if (btn.innerText === correct) {
            btn.classList.add("correct");
        }

    });


    if (answer === correct) {

        button.classList.add("correct");

        combo++;

        let points = 1;

        if (combo >= 3) {
            points = 2;
        }

        if (combo >= 5) {
            points = 3;
        }

        if (hintUsed) {
            points = Math.max(1, points - 1);
        }

        score += points;

        document.getElementById("score").innerText =
            score;

        document.getElementById("comboMessage").innerText =
            "🔥 Combo x" + combo + "  +" + points;

        document.getElementById("funnyMessage").innerText =
            funnyCorrect[
                Math.floor(
                    Math.random() * funnyCorrect.length
                )
            ];

    } else {

        button.classList.add("wrong");

        combo = 0;

        document.getElementById("comboMessage").innerText =
            "💀 Combo Reset!";

        document.getElementById("funnyMessage").innerText =
            funnyWrong[
                Math.floor(
                    Math.random() * funnyWrong.length
                )
            ];

    }


    setTimeout(() => {

        currentQuestion++;

        if (currentQuestion >= questions.length) {

            finishGame();

        } else {

            loadQuestion();

        }

    }, 1300);

}


/* =====================================================
   HINT
===================================================== */

function useHint() {

    if (hintUsed || answered) return;

    hintUsed = true;

    document.getElementById("hintButton").disabled = true;

    const correct =
        questions[currentQuestion].a;

    const buttons =
        document.querySelectorAll(".answer-btn");

    let removed = 0;

    buttons.forEach(btn => {

        if (
            btn.innerText !== correct &&
            removed < 2
        ) {

            btn.style.opacity = "0.3";

            btn.disabled = true;

            removed++;

        }

    });

    document.getElementById("funnyMessage").innerText =
        "💡 Hint ប្រើហើយ! ពិន្ទុអាចតិច... តែខួរក្បាលនៅរស់ 😂";

}


/* =====================================================
   FINISH GAME
===================================================== */

function finishGame() {

    const total = questions.length;

    const percentage =
        Math.round((score / total) * 100);

    let title = "";
    let emoji = "";

    if (score >= 30) {

        title = "🏆 អ្នកជាប់ហើយ!";

        emoji = "🎉";

    } else if (score >= 20) {

        title = "🔥 Almost Pro!";

        emoji = "😎";

    } else if (score >= 10) {

        title = "😂 Brain needs Update!";

        emoji = "🤣";

    } else {

        title = "💀 Error 404: Brain Not Found";

        emoji = "💀";
    }


    document.getElementById("resultEmoji").innerText =
        emoji;

    document.getElementById("resultTitle").innerText =
        title;

    document.getElementById("resultText").innerText =
        `${playerName} បាន ${score}/${total} ពិន្ទុ (${percentage}%)`;

    document.getElementById("finalScore").innerText =
        score;


    /* Save stats */

    saveScore();


    /* Certificate */

    const certificateArea =
        document.getElementById("certificateArea");

    certificateArea.innerHTML = "";

    if (score >= 30) {

        const btn =
            document.createElement("button");

        btn.className = "certificate-btn";

        btn.innerText =
            "🏆 ទទួល Certificate";

        btn.onclick = () => {

            localStorage.setItem(
                "certificateName",
                playerName
            );

            localStorage.setItem(
                "certificateGame",
                currentGame === "riddle"
                    ? "ពាក្យបណ្ដៅខ្មែរ"
                    : "Command Line Challenge"
            );

            localStorage.setItem(
                "certificateScore",
                score
            );

            window.location.href =
                "certificate.html";
        };

        certificateArea.appendChild(btn);

    } else {

        certificateArea.innerHTML = `
            <p style="
                color:#d33;
                font-weight:800;
                margin:15px 0;
            ">
                🥲 ត្រូវការយ៉ាងហោចណាស់ 30 ពិន្ទុ
                ដើម្បីទទួល Certificate!
            </p>
        `;

    }


    document.getElementById("resultModal")
        .classList.remove("hidden");

}


/* =====================================================
   SAVE SCORE
===================================================== */

function saveScore() {

    const key =
        currentGame === "riddle"
            ? "riddleBest"
            : "commandBest";

    const oldScore =
        parseInt(localStorage.getItem(key) || "0");

    if (score > oldScore) {

        localStorage.setItem(
            key,
            score
        );

    }

    localStorage.setItem(
        "playerName",
        playerName
    );

}


/* =====================================================
   HOME
===================================================== */

function showHome() {

    document.getElementById("resultModal")
        .classList.add("hidden");

    document.getElementById("gameScreen")
        .classList.add("hidden");

    document.getElementById("statsScreen")
        .classList.add("hidden");

    document.getElementById("homeScreen")
        .classList.remove("hidden");

}


/* =====================================================
   STATS
===================================================== */

function showStats() {

    document.getElementById("homeScreen")
        .classList.add("hidden");

    document.getElementById("gameScreen")
        .classList.add("hidden");

    document.getElementById("statsScreen")
        .classList.remove("hidden");

    document.getElementById("statName").innerText =
        localStorage.getItem("playerName") || "-";

    document.getElementById("riddleBest").innerText =
        localStorage.getItem("riddleBest") || "0";

    document.getElementById("commandBest").innerText =
        localStorage.getItem("commandBest") || "0";

    let certificates = 0;

    if (
        parseInt(localStorage.getItem("riddleBest") || "0")
        >= 30
    ) {
        certificates++;
    }

    if (
        parseInt(localStorage.getItem("commandBest") || "0")
        >= 30
    ) {
        certificates++;
    }

    document.getElementById("certCount").innerText =
        certificates;

}


/* =====================================================
   RESET STATS
===================================================== */

function resetStats() {

    const confirmReset =
        confirm(
            "⚠️ តើអ្នកពិតជាចង់ Reset Score មែនទេ?"
        );

    if (!confirmReset) return;

    localStorage.removeItem("riddleBest");
    localStorage.removeItem("commandBest");
    localStorage.removeItem("playerName");

    showStats();

}


/* =====================================================
   LOAD SAVED NAME
===================================================== */

window.addEventListener("DOMContentLoaded", () => {

    const savedName =
        localStorage.getItem("playerName");

    if (savedName) {

        document.getElementById("playerName").value =
            savedName;

    }

});