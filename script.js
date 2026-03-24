// ============================================================
// IRONFLOW — script.js
// ============================================================

// ===== DATA =====
const EXERCISES = [
  // CHEST
  { id:1, name:"Bench Press", part:"chest", emoji:"🏋️", diff:"INTERMEDIATE",
    legend:"CBum's favorite mass builder — he hits 4x8-12 every chest day.",
    sets:["4x8-12","3x10","5x5"], tips:["Keep shoulder blades pinched","Lower to mid-chest","Drive feet into floor"] },
  { id:2, name:"Incline Dumbbell Press", part:"chest", emoji:"💪", diff:"BEGINNER",
    legend:"Arnold used incline work to build his legendary upper chest shelf.",
    sets:["4x10-15","3x12","4x8"], tips:["30-45 degree angle","Don't go too heavy","Full stretch at bottom"] },
  { id:3, name:"Cable Flyes", part:"chest", emoji:"🔗", diff:"BEGINNER",
    legend:"CBum ends every chest session with cable flyes for that carved look.",
    sets:["3x15-20","4x12"], tips:["Feel the stretch at arms open","Squeeze hard at peak","Slight forward lean"] },
  { id:4, name:"Dips (Chest)", part:"chest", emoji:"⬇️", diff:"INTERMEDIATE",
    legend:"Old school legends like Arnold called dips the 'upper body squat'.",
    sets:["3x10-15","4xfailure"], tips:["Lean slightly forward","Wide grip","Lower till stretch felt"] },
  { id:5, name:"Pec Deck", part:"chest", emoji:"🦅", diff:"BEGINNER",
    legend:"Great finishing move — Mukesh Gahlot uses this for chest separation.",
    sets:["3x15","4x12-15"], tips:["Elbows at shoulder height","Squeeze 1 sec at peak","Light weight, feel muscle"] },
  { id:28, name:"Decline Bench Press", part:"chest", emoji:"📉", diff:"INTERMEDIATE",
    legend:"Targets the lower chest. Arnold called it essential for complete chest development.",
    sets:["4x8-12","3x10"], tips:["Head slightly lower than hips","Don't bounce bar off chest","Full lockout at top"] },
  { id:29, name:"Dumbbell Pullover", part:"chest", emoji:"🔄", diff:"INTERMEDIATE",
    legend:"Old school chest-back combo move. Arnold used it for chest expansion and serratus.",
    sets:["3x12-15","4x12"], tips:["Full arm arc over head","Keep elbows slightly bent","Feel stretch at bottom"] },
  { id:30, name:"Push-Ups (Weighted)", part:"chest", emoji:"🔼", diff:"BEGINNER",
    legend:"Mukesh Gahlot built his base with bodyweight. Add plates on back for progression.",
    sets:["4xfailure","3x20","5x15"], tips:["Hands slightly wider than shoulder","Lower chest to ground","Squeeze at top"] },

  // BACK
  { id:6, name:"Deadlift", part:"back", emoji:"🏆", diff:"ADVANCED",
    legend:"The king of all lifts. Arnold called it the foundation of a thick back.",
    sets:["5x5","4x6-8","3x3"], tips:["Bar over mid-foot","Hip hinge, not squat","Drive through heels","Brace core tight"] },
  { id:7, name:"Pull-Ups", part:"back", emoji:"⬆️", diff:"INTERMEDIATE",
    legend:"CBum does weighted pull-ups — the best width builder bar none.",
    sets:["4xfailure","3x10","5x8"], tips:["Full dead hang at bottom","Chin over bar","Don't swing"] },
  { id:8, name:"Barbell Row", part:"back", emoji:"🔄", diff:"INTERMEDIATE",
    legend:"Old school staple. Dorian Yates built his legendary back with heavy rows.",
    sets:["4x8-12","3x10"], tips:["45 degree torso angle","Pull to belly button","Squeeze shoulder blades"] },
  { id:9, name:"Lat Pulldown", part:"back", emoji:"📉", diff:"BEGINNER",
    legend:"Best starter exercise to build that V-taper. CBum always includes it.",
    sets:["4x10-12","3x15"], tips:["Wide grip, lean slightly back","Pull to upper chest","Full stretch at top"] },
  { id:10, name:"Seated Cable Row", part:"back", emoji:"🚣", diff:"BEGINNER",
    legend:"Thickness builder. Mukesh Gahlot emphasizes this for full back development.",
    sets:["4x12","3x10-15"], tips:["Chest up, don't lean back","Elbows close to body","Full stretch forward"] },
  { id:31, name:"T-Bar Row", part:"back", emoji:"🔱", diff:"INTERMEDIATE",
    legend:"Dorian Yates' signature move. Best for building that insane back thickness.",
    sets:["4x8-12","5x8"], tips:["Chest on pad","Drive elbows back and up","Squeeze hard at peak"] },
  { id:32, name:"Single Arm Dumbbell Row", part:"back", emoji:"1️⃣", diff:"BEGINNER",
    legend:"Allows full range of motion. CBum uses these to fix muscle imbalances.",
    sets:["4x10-12 each","3x12"], tips:["Brace on bench","Pull to hip, not chest","Don't rotate torso"] },
  { id:33, name:"Straight Arm Pulldown", part:"back", emoji:"📐", diff:"BEGINNER",
    legend:"Best lat isolation. Forces lats to work without bicep involvement.",
    sets:["3x15-20","4x15"], tips:["Keep arms straight","Push bar down in arc","Squeeze lats at bottom"] },

  // LEGS
  { id:11, name:"Squat", part:"legs", emoji:"🦵", diff:"INTERMEDIATE",
    legend:"Tom Platz's obsession. 'Legs are the foundation of the physique' — Arnold.",
    sets:["5x5","4x8-12","3x10"], tips:["Hip width stance","Break parallel","Knees track over toes","Big breath, brace"] },
  { id:12, name:"Romanian Deadlift", part:"legs", emoji:"📐", diff:"INTERMEDIATE",
    legend:"CBum's go-to for hamstring development — slow eccentric, feel every rep.",
    sets:["4x10-12","3x12"], tips:["Slight knee bend","Push hips back","Feel hamstring stretch","Bar stays close to legs"] },
  { id:13, name:"Leg Press", part:"legs", emoji:"🦾", diff:"BEGINNER",
    legend:"Great for quad volume. Used by Arnold and CBum for sheer size.",
    sets:["4x15-20","3x12","5x10"], tips:["Don't lock out knees","Feet shoulder width","Full depth if flexible"] },
  { id:14, name:"Leg Curl", part:"legs", emoji:"🔃", diff:"BEGINNER",
    legend:"Isolate those hamstrings. CBum uses these to create the hamstring tie-in.",
    sets:["4x12-15","3x15"], tips:["Curl all the way up","Hold 1 sec at peak","Slow on the way down"] },
  { id:15, name:"Calf Raises", part:"legs", emoji:"🦶", diff:"BEGINNER",
    legend:"Arnold would do 1000 calf reps in a session. High reps build calves.",
    sets:["5x20-25","4x15-20"], tips:["Full range of motion","Pause at stretch","Pause at peak contraction"] },
  { id:34, name:"Hack Squat", part:"legs", emoji:"🔧", diff:"INTERMEDIATE",
    legend:"CBum loves hack squats for quad isolation. Safer on the back than barbell squat.",
    sets:["4x10-15","3x12"], tips:["Feet shoulder width on platform","Full depth","Don't lock knees out"] },
  { id:35, name:"Bulgarian Split Squat", part:"legs", emoji:"🎯", diff:"ADVANCED",
    legend:"One of the best single-leg moves. Mukesh Gahlot uses these for leg symmetry.",
    sets:["4x8-10 each","3x10 each"], tips:["Rear foot elevated","Front shin vertical at bottom","Keep torso upright"] },
  { id:36, name:"Leg Extension", part:"legs", emoji:"⬆️", diff:"BEGINNER",
    legend:"Best quad isolation. Finish every leg day with this for that teardrop look.",
    sets:["4x15-20","3x20"], tips:["Hold 1 sec at top","Don't use momentum","Full extension each rep"] },

  // SHOULDERS
  { id:16, name:"Overhead Press", part:"shoulders", emoji:"🏋️", diff:"INTERMEDIATE",
    legend:"The king of shoulder builders. CBum, Arnold — everyone presses overhead.",
    sets:["4x8-12","5x5","3x10"], tips:["Brace core hard","Bar in front of face, not behind neck","Don't flare elbows"] },
  { id:17, name:"Lateral Raises", part:"shoulders", emoji:"✈️", diff:"BEGINNER",
    legend:"CBum's secret weapon — 6 sets of laterals for those boulder shoulders.",
    sets:["5x15-20","4x12","6x15"], tips:["Lead with elbows, not wrists","Don't shrug","Slight forward lean","Go lighter, feel the burn"] },
  { id:18, name:"Rear Delt Fly", part:"shoulders", emoji:"🔙", diff:"BEGINNER",
    legend:"Most skipped exercise. Mukesh Gahlot says rear delts complete the 3D shoulder.",
    sets:["4x15-20","3x20"], tips:["Bent over, look down","Elbows slightly bent","Squeeze rear delts at top"] },
  { id:19, name:"Face Pulls", part:"shoulders", emoji:"😤", diff:"BEGINNER",
    legend:"Best shoulder health exercise. Jeff Nippard calls it the most important pulling movement.",
    sets:["4x15-20","3x20"], tips:["Pull to face","External rotate at peak","Elbows high"] },
  { id:37, name:"Arnold Press", part:"shoulders", emoji:"🔁", diff:"INTERMEDIATE",
    legend:"Arnold invented this. Hits all 3 delt heads in one movement — most complete shoulder exercise.",
    sets:["4x10-12","3x12"], tips:["Start with palms facing you","Rotate as you press","Full rotation at top"] },
  { id:38, name:"Upright Row", part:"shoulders", emoji:"⬆️", diff:"BEGINNER",
    legend:"Old school mass builder for traps and front delts. Used by golden era legends.",
    sets:["4x12","3x10-12"], tips:["Pull to chin height","Elbows higher than wrists","Don't go too heavy"] },

  // ARMS
  { id:20, name:"Barbell Curl", part:"arms", emoji:"💪", diff:"BEGINNER",
    legend:"Arnold used to pump his biceps before every photo shoot for that peak.",
    sets:["4x10-12","3x8","5x10"], tips:["Don't swing body","Squeeze at top","Full extension at bottom"] },
  { id:21, name:"Hammer Curl", part:"arms", emoji:"🔨", diff:"BEGINNER",
    legend:"Builds the brachialis for that thick arm look. CBum alternates with regular curls.",
    sets:["3x12","4x10"], tips:["Neutral grip, thumbs up","Don't rotate wrist","Slow and controlled"] },
  { id:22, name:"Tricep Pushdown", part:"arms", emoji:"⬇️", diff:"BEGINNER",
    legend:"Triceps are 2/3 of the arm. CBum does pushdowns every single session.",
    sets:["4x12-15","3x15"], tips:["Elbows locked at sides","Full extension","Squeeze at bottom"] },
  { id:23, name:"Skull Crushers", part:"arms", emoji:"💀", diff:"INTERMEDIATE",
    legend:"Old school mass builder. Arnold and CBum both swear by this for tricep size.",
    sets:["4x10-12","3x10"], tips:["Bar to forehead, not neck","Upper arms vertical","Control the negative"] },
  { id:24, name:"Close Grip Bench", part:"arms", emoji:"🤲", diff:"INTERMEDIATE",
    legend:"Heavy compound for massive triceps. Best size builder for the horseshoe.",
    sets:["4x8-12","3x10"], tips:["Shoulder width grip","Elbows 45 degrees out","Touch mid/low chest"] },
  { id:39, name:"Concentration Curl", part:"arms", emoji:"🎯", diff:"BEGINNER",
    legend:"Arnold's peak builder. Sitting concentration curls — his secret for that bicep mountain.",
    sets:["3x12 each","4x10 each"], tips:["Elbow on inner thigh","Curl all the way up","Squeeze 2 sec at peak"] },
  { id:40, name:"Overhead Tricep Extension", part:"arms", emoji:"☝️", diff:"BEGINNER",
    legend:"Stretches long head of tricep maximally. CBum does cable version for constant tension.",
    sets:["3x12-15","4x15"], tips:["Keep elbows close to head","Full stretch overhead","Squeeze hard at extension"] },
  { id:41, name:"Preacher Curl", part:"arms", emoji:"🙏", diff:"BEGINNER",
    legend:"Eliminates cheating. Old school staple for building thick bicep mass at the base.",
    sets:["4x10-12","3x12"], tips:["No momentum at all","Lower till almost straight","Squeeze at top"] },

  // CORE
  { id:25, name:"Plank", part:"core", emoji:"📏", diff:"BEGINNER",
    legend:"CBum does planks for time — core stability is the base of every lift.",
    sets:["3x60s","4x45s"], tips:["Neutral spine — don't sag","Squeeze glutes","Breathe steadily"] },
  { id:26, name:"Cable Crunch", part:"core", emoji:"🔗", diff:"BEGINNER",
    legend:"Weighted ab work. Heavy cable crunches built Arnold's legendary abs.",
    sets:["4x15-20","3x20"], tips:["Crunch with abs, not hips","Round spine over","Weight should challenge you"] },
  { id:27, name:"Hanging Leg Raise", part:"core", emoji:"🦵", diff:"INTERMEDIATE",
    legend:"Best lower ab exercise. CBum does these for that complete shredded look.",
    sets:["4x10-15","3x12"], tips:["Don't swing","Tuck pelvis","Lower slowly back down"] },
  { id:42, name:"Ab Wheel Rollout", part:"core", emoji:"🎡", diff:"ADVANCED",
    legend:"Most brutal core exercise. Mukesh Gahlot calls it the true test of core strength.",
    sets:["3x10","4x8"], tips:["Start from knees if beginner","Go slow on the way out","Brace abs the entire time"] },
  { id:43, name:"Russian Twist", part:"core", emoji:"🌀", diff:"BEGINNER",
    legend:"Best oblique exercise. Builds the V-taper with side waist definition.",
    sets:["4x20","3x30"], tips:["Feet off ground for harder version","Twist from waist, not just arms","Hold weight for progression"] },
  { id:44, name:"Dead Bug", part:"core", emoji:"🐛", diff:"BEGINNER",
    legend:"Best spine-safe core exercise. CBum uses this for deep core activation before heavy lifts.",
    sets:["3x10 each side","4x8 each"], tips:["Lower back flat on floor the entire time","Move slowly","Opposite arm and leg"] },
];

// ===== SUPERSET / DOUBLE BODY SPLIT PLANS =====
const SUPERSETS = [
  {
    name:"Chest + Triceps (Push Day)",
    icon:"💥",
    color:"#CC0000",
    level:"INTERMEDIATE",
    desc:"Classic push combo. Train chest first when fresh, triceps get secondary stimulus. Then finish triceps directly.",
    pairs:[
      { a:"Bench Press 4x8-12", b:"Tricep Pushdown 4x12-15", rest:"60s between pairs" },
      { a:"Incline DB Press 3x10-12", b:"Skull Crushers 3x10", rest:"60s between pairs" },
      { a:"Cable Flyes 3x15", b:"Overhead Tricep Extension 3x12", rest:"45s between pairs" },
    ],
    tip:"CBum does this exact split every Push day. Your triceps are pre-fatigued after bench — they grow insane."
  },
  {
    name:"Back + Biceps (Pull Day)",
    icon:"🔄",
    color:"#C9A84C",
    level:"INTERMEDIATE",
    desc:"The classic pull combo. Pull the weight with your back first, finish biceps when back is done.",
    pairs:[
      { a:"Deadlift 4x5", b:"Barbell Curl 4x10", rest:"90s between pairs" },
      { a:"Lat Pulldown 4x12", b:"Hammer Curl 3x12", rest:"60s between pairs" },
      { a:"Seated Cable Row 3x12", b:"Concentration Curl 3x10 each", rest:"45s between pairs" },
    ],
    tip:"Dorian Yates' signature approach. Back is King — curl as finisher. Biceps get a killer pump from rowing."
  },
  {
    name:"Chest + Back (Antagonist)",
    icon:"⚔️",
    color:"#4488CC",
    level:"ADVANCED",
    desc:"Advanced technique. Opposing muscles — while chest rests, you train back. Maximum efficiency.",
    pairs:[
      { a:"Bench Press 4x8", b:"Barbell Row 4x8", rest:"60s between pairs" },
      { a:"Incline DB Press 3x10", b:"Pull-Ups 3x10", rest:"60s between pairs" },
      { a:"Pec Deck 3x15", b:"Straight Arm Pulldown 3x15", rest:"45s between pairs" },
    ],
    tip:"Arnold himself trained chest and back together. The opposing stretch actually helps each muscle contract better."
  },
  {
    name:"Shoulders + Arms",
    icon:"💪",
    color:"#44AA66",
    level:"INTERMEDIATE",
    desc:"Full upper arm day. Shoulders first for compound work, then pump those arms till they burst.",
    pairs:[
      { a:"Overhead Press 4x8-10", b:"Barbell Curl 4x10", rest:"60s between pairs" },
      { a:"Lateral Raises 4x15", b:"Tricep Pushdown 4x15", rest:"45s between pairs" },
      { a:"Arnold Press 3x12", b:"Hammer Curl 3x12", rest:"45s between pairs" },
    ],
    tip:"CBum smashes shoulders then pumps arms. You'll walk out looking twice your size. Best for arm days."
  },
  {
    name:"Quads + Hamstrings (Legs)",
    icon:"🦵",
    color:"#AA4444",
    level:"ADVANCED",
    desc:"Complete leg annihilation. Quads and hamstrings alternated — legs will be dead by the end.",
    pairs:[
      { a:"Squat 4x8-10", b:"Romanian Deadlift 4x10", rest:"90s between pairs" },
      { a:"Leg Press 4x15", b:"Leg Curl 4x12", rest:"60s between pairs" },
      { a:"Leg Extension 3x20", b:"Leg Curl 3x15", rest:"45s between pairs" },
    ],
    tip:"Tom Platz trained legs like this. Quads and hamstrings balance each other. Zero rest days for leg growth."
  },
  {
    name:"Full Upper Body Superset",
    icon:"🏆",
    color:"#CC8800",
    level:"ADVANCED",
    desc:"For when you have limited time. Hit every upper body muscle in one brutal session.",
    pairs:[
      { a:"Bench Press 3x8", b:"Barbell Row 3x8", rest:"60s" },
      { a:"Overhead Press 3x10", b:"Pull-Ups 3x10", rest:"60s" },
      { a:"Lateral Raises 3x15", b:"Barbell Curl 3x12", rest:"45s" },
      { a:"Tricep Pushdown 3x15", b:"Face Pulls 3x20", rest:"45s" },
    ],
    tip:"Mukesh Gahlot's full upper body approach. Used when time is short but intensity stays HIGH."
  },
];

const LEGENDS = [
  { name:"Chris Bumstead (CBum)", avatar:"🏆", tip:"Train each muscle group with full focus. No half reps, no ego lifting. Consistent moderate weight with perfect form beats heavy sloppy reps every time.", quote:'"The pump is just the beginning. The real work is in recovery."' },
  { name:"Arnold Schwarzenegger", avatar:"💪", tip:"Visualize the muscle while you train. Mind-muscle connection is real. Also — never skip a muscle group. Balance builds the best physique.", quote:'"The last 3 reps is what makes the muscle grow. This separates champions from everyone else."' },
  { name:"Mukesh Gahlot", avatar:"🇮🇳", tip:"Desi bodybuilding is about consistency over years, not months. Daal, roti, and eggs can build a champion physique. Don't overcomplicate nutrition.", quote:'"Gyaan se nahi, mehnat se body banti hai."' },
  { name:"Dorian Yates", avatar:"👁️", tip:"High intensity, lower volume. One brutal working set taken to absolute failure beats 5 comfortable sets. Train smarter, not just harder.", quote:'"Most people have never truly trained to failure. That is why they never see championship results."' },
];

const SONGS = [
  // 🙏 SPIRITUAL / MOTIVATIONAL
  { title:"Jai Jai Shiv Shankar (Remix)", artist:"Kishore Kumar | Bass Boosted", tags:["spiritual","bass"], yt:"https://youtube.com/results?search_query=jai+jai+shiv+shankar+bass+boosted+gym" },
  { title:"Har Har Mahadev", artist:"Ranbir Kapoor | Shamshera OST", tags:["spiritual","pump"], yt:"https://youtube.com/results?search_query=har+har+mahadev+shamshera+gym" },
  { title:"Maha Mrityunjaya Mantra (Bass Mix)", artist:"DJ Remix | Gym Version", tags:["spiritual","bass"], yt:"https://youtube.com/results?search_query=maha+mrityunjaya+mantra+bass+mix+gym" },
  { title:"Ram Siya Ram (Gym Mix)", artist:"Sachet Tandon | Adipurush", tags:["spiritual","pump"], yt:"https://youtube.com/results?search_query=ram+siya+ram+adipurush+gym+mix" },
  { title:"Shiv Tandav Stotram (EDM Mix)", artist:"Ravana | Remix Version", tags:["spiritual","bass"], yt:"https://youtube.com/results?search_query=shiv+tandav+stotram+edm+remix+gym" },
  { title:"Jai Bajrangbali (Workout Mix)", artist:"Hanuman Chalisa Remix", tags:["spiritual","pump"], yt:"https://youtube.com/results?search_query=hanuman+chalisa+gym+remix+bass+boosted" },
  { title:"Kesariya (Motivational Mix)", artist:"Arijit Singh | Brahmastra", tags:["spiritual","bollywood"], yt:"https://youtube.com/results?search_query=kesariya+arijit+singh+gym+mix" },
  { title:"Deva Shree Ganesha (Bass)", artist:"Agneepath | Ajay-Atul", tags:["spiritual","bass"], yt:"https://youtube.com/results?search_query=deva+shree+ganesha+bass+boosted+gym" },

  // 🎬 BOLLYWOOD HIGH BASS / PUMP
  { title:"Zinda (Bass Boosted)", artist:"Shankar-Ehsaan-Loy | Bhaag Milkha", tags:["bollywood","bass","pump"], yt:"https://youtube.com/results?search_query=zinda+bhaag+milkha+bhaag+bass+boosted" },
  { title:"Sher Khul Gaye", artist:"Hrithik Roshan | Fighter", tags:["bollywood","pump"], yt:"https://youtube.com/results?search_query=sher+khul+gaye+fighter+gym" },
  { title:"War Title Track", artist:"Hrithik Roshan | Vishal-Shekhar", tags:["bollywood","bass","pump"], yt:"https://youtube.com/results?search_query=war+title+track+hrithik+bass+boosted" },
  { title:"Gali Gali (Bass Boosted)", artist:"KGF Chapter 2 | Ravi Basrur", tags:["bollywood","bass","pump"], yt:"https://youtube.com/results?search_query=kgf+chapter+2+bgm+bass+boosted+gym" },
  { title:"Dhoom Machale Dhoom", artist:"Dhoom 3 | Pritam", tags:["bollywood","pump"], yt:"https://youtube.com/results?search_query=dhoom+machale+dhoom+3+gym+bass" },
  { title:"Sultan (Title Track)", artist:"Salman Khan | Vishal-Shekhar", tags:["bollywood","pump","motivational"], yt:"https://youtube.com/results?search_query=sultan+title+track+salman+bass+boosted+gym" },
  { title:"Dangal Title Song", artist:"Aamir Khan | Pritam", tags:["bollywood","motivational"], yt:"https://youtube.com/results?search_query=dangal+title+song+bass+boosted+gym" },
  { title:"Bhaag Milkha Bhaag Title", artist:"Farhan Akhtar | Shankar-Ehsaan-Loy", tags:["bollywood","motivational"], yt:"https://youtube.com/results?search_query=bhaag+milkha+bhaag+title+gym+bass" },
  { title:"Toofan (Title)", artist:"Farhan Akhtar | Shankar-Ehsaan-Loy", tags:["bollywood","pump"], yt:"https://youtube.com/results?search_query=toofan+title+song+farhan+gym" },
  { title:"Aankh Marey (Bass Mix)", artist:"Simmba | Mika Singh", tags:["bollywood","bass"], yt:"https://youtube.com/results?search_query=aankh+marey+simmba+bass+boosted" },
  { title:"Ghungroo (Gym Mix)", artist:"War | Arijit Singh | Bass", tags:["bollywood","bass"], yt:"https://youtube.com/results?search_query=ghungroo+war+bass+boosted+gym" },
  { title:"Befikre Title (Bass)", artist:"Ranveer Singh | Vishal-Shekhar", tags:["bollywood","bass"], yt:"https://youtube.com/results?search_query=befikre+title+bass+boosted" },
  { title:"Naatu Naatu (Gym Mix)", artist:"RRR | M.M. Keeravani | Bass", tags:["bollywood","bass","pump"], yt:"https://youtube.com/results?search_query=naatu+naatu+bass+boosted+gym+mix" },

  // 💪 ENGLISH PUMP
  { title:"Lose Yourself", artist:"Eminem", tags:["english","pump"], yt:"https://youtube.com/results?search_query=eminem+lose+yourself" },
  { title:"Till I Collapse", artist:"Eminem", tags:["english","pump","bass"], yt:"https://youtube.com/results?search_query=eminem+till+i+collapse+bass+boosted" },
  { title:"Eye of the Tiger", artist:"Survivor", tags:["english","pump"], yt:"https://youtube.com/results?search_query=eye+of+the+tiger+survivor" },
  { title:"Thunderstruck (Bass)", artist:"AC/DC | Bass Boosted", tags:["english","pump","bass"], yt:"https://youtube.com/results?search_query=acdc+thunderstruck+bass+boosted" },
  { title:"Stronger", artist:"Kanye West", tags:["english","pump"], yt:"https://youtube.com/results?search_query=kanye+west+stronger+gym" },
  { title:"Power", artist:"Kanye West | Bass Boosted", tags:["english","pump","bass"], yt:"https://youtube.com/results?search_query=kanye+west+power+bass+boosted" },
  { title:"Not Afraid", artist:"Eminem", tags:["english","pump"], yt:"https://youtube.com/results?search_query=eminem+not+afraid" },
  { title:"Work Hard Play Hard", artist:"Wiz Khalifa", tags:["english","pump"], yt:"https://youtube.com/results?search_query=wiz+khalifa+work+hard+play+hard" },
];

// Calorie analogies — fun comparison
const CAL_ANALOGIES = [
  { cal:50,  text:"That's like 1 Oreo cookie. Keep going! 🍪" },
  { cal:100, text:"That's 1 banana. One fruit's worth of fuel burned! 🍌" },
  { cal:150, text:"That's a small bowl of dal. Solid warm-up! 🥣" },
  { cal:200, text:"That's 2 rotis. Your body just used 2 rotis as fuel! 🫓" },
  { cal:250, text:"That's half a Big Mac. You're cooking! 🍔" },
  { cal:300, text:"That's 1 plate of rice. A full carb load gone! 🍚" },
  { cal:400, text:"That's a full desi thali! Serious work. 🍽️" },
  { cal:500, text:"That's 4 samosas worth of calories. Bhai you went hard! 🫔" },
  { cal:600, text:"That's a full McD meal. Warrior mode activated! 🏆" },
  { cal:700, text:"That's 1.5 hours of cricket. You're a beast! 🏏" },
  { cal:800, text:"That's like 8 glasses of cold coffee. Savage session! ☕" },
  { cal:999, text:"That's 10 cups of chai! Legendary workout! 🔥" },
];

// ===== STATE =====
let currentUser = null;
let workoutLog = [];
let streak = 0;
let lastWorkoutDate = '';
let customExercises = [];

function uKey(k) {
  const uid = currentUser ? currentUser.uid : 'guest';
  return 'if_' + uid + '_' + k;
}

// ===== SAVE =====
function save() {
  localStorage.setItem(uKey('log'), JSON.stringify(workoutLog));
  localStorage.setItem(uKey('streak'), streak);
  localStorage.setItem(uKey('lastdate'), lastWorkoutDate);
  localStorage.setItem(uKey('customex'), JSON.stringify(customExercises));
}

function loadUserData() {
  workoutLog      = JSON.parse(localStorage.getItem(uKey('log'))      || '[]');
  streak          = parseInt(localStorage.getItem(uKey('streak'))     || '0');
  lastWorkoutDate = localStorage.getItem(uKey('lastdate'))            || '';
  customExercises = JSON.parse(localStorage.getItem(uKey('customex')) || '[]');
}

// ===== AUTH =====
function hashPass(p) {
  let h = 0;
  for (let i = 0; i < p.length; i++) { h = ((h << 5) - h) + p.charCodeAt(i); h |= 0; }
  return h.toString(36);
}
function getAllUsers() { return JSON.parse(localStorage.getItem('if_users') || '[]'); }
function saveAllUsers(u) { localStorage.setItem('if_users', JSON.stringify(u)); }

function showLoginTab(tab) {
  document.getElementById('loginForm').classList.toggle('hidden', tab !== 'login');
  document.getElementById('signupForm').classList.toggle('hidden', tab !== 'signup');
  document.getElementById('ltabLogin').classList.toggle('active', tab === 'login');
  document.getElementById('ltabSignup').classList.toggle('active', tab === 'signup');
}

function doSignup() {
  const name  = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim().toLowerCase();
  const pass  = document.getElementById('signupPass').value;
  const err   = document.getElementById('signupErr');
  if (!name || !email || !pass) { showErr(err,'Sab fields fill karo!'); return; }
  if (pass.length < 6)          { showErr(err,'Password min 6 chars chahiye!'); return; }
  if (!email.includes('@'))     { showErr(err,'Valid email daalo!'); return; }
  const users = getAllUsers();
  if (users.find(u => u.email === email)) { showErr(err,'Email pehle se registered! Login karo.'); return; }
  const uid = 'u_' + Date.now();
  users.push({ uid, name, email, pass: hashPass(pass) });
  saveAllUsers(users);
  err.classList.add('hidden');
  loginUser({ uid, name, email });
}

function doLogin() {
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const pass  = document.getElementById('loginPass').value;
  const err   = document.getElementById('loginErr');
  if (!email || !pass) { showErr(err,'Email aur password daalo!'); return; }
  const user = getAllUsers().find(u => u.email === email && u.pass === hashPass(pass));
  if (!user) { showErr(err,'Email ya password galat hai!'); return; }
  err.classList.add('hidden');
  loginUser(user);
}

function showErr(el, msg) { el.textContent = msg; el.classList.remove('hidden'); }

function loginUser(user) {
  currentUser = user;
  localStorage.setItem('if_session', JSON.stringify(user));
  loadUserData();
  startApp();
}

function doLogout() {
  currentUser = null;
  localStorage.removeItem('if_session');
  location.reload();
}

function toggleUserMenu() {
  document.getElementById('userDropdown').classList.toggle('hidden');
}
document.addEventListener('click', (e) => {
  const menu = document.getElementById('userMenu');
  if (menu && !menu.contains(e.target)) {
    document.getElementById('userDropdown')?.classList.add('hidden');
  }
});

function startApp() {
  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  const initial = currentUser.name ? currentUser.name[0].toUpperCase() : '?';
  document.getElementById('userAvatar').textContent = initial;
  document.getElementById('userNameDisplay').textContent = currentUser.name || '-';
  document.getElementById('userEmailDisplay').textContent = currentUser.email || '-';
  document.getElementById('streakCount').textContent = streak;
  renderExercises('all');
  renderLog();
  renderLegends();
  renderPlaylist('all');
  renderSupersets();
}

// ===== CUSTOM EXERCISE =====
function openAddExModal() { document.getElementById('addExModal').classList.remove('hidden'); }
function closeAddExModal() {
  document.getElementById('addExModal').classList.add('hidden');
  ['cexName','cexSets','cexTips','cexLegend'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('cexErr').classList.add('hidden');
}

function saveCustomEx() {
  const name    = document.getElementById('cexName').value.trim();
  const part    = document.getElementById('cexPart').value;
  const diff    = document.getElementById('cexDiff').value;
  const setsRaw = document.getElementById('cexSets').value.trim();
  const tipsRaw = document.getElementById('cexTips').value.trim();
  const legend  = document.getElementById('cexLegend').value.trim();
  const err     = document.getElementById('cexErr');
  if (!name) { err.textContent = 'Exercise naam toh daalo!'; err.classList.remove('hidden'); return; }
  const sets = setsRaw ? setsRaw.split(',').map(s=>s.trim()).filter(Boolean) : ['3x12'];
  const tips = tipsRaw ? tipsRaw.split('\n').map(s=>s.trim()).filter(Boolean) : ['Focus on form'];
  customExercises.unshift({ id:'c_'+Date.now(), name, part, diff, emoji:'⭐', legend:legend||'Your exercise!', sets, tips, isCustom:true });
  save();
  closeAddExModal();
  renderExercises('all');
  showToast('\u2705 "' + name + '" saved!');
}

function deleteCustomEx(id) {
  customExercises = customExercises.filter(e => e.id !== id);
  save(); renderExercises('all'); closeModal();
  showToast('\uD83D\uDDD1 Exercise deleted');
}

function showToast(msg) {
  const t = document.createElement('div');
  t.style.cssText = 'position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:var(--surface);border:1px solid var(--gold);border-radius:8px;padding:10px 18px;font-family:var(--font-c);font-size:14px;font-weight:700;color:var(--gold);z-index:500;white-space:nowrap;box-shadow:0 4px 20px rgba(0,0,0,0.5)';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2500);
}

// ===== SPLASH =====
window.addEventListener('load', () => {
  setTimeout(() => {
    const sp = document.getElementById('splash');
    sp.classList.add('out');
    setTimeout(() => {
      sp.style.display = 'none';
      const saved = localStorage.getItem('if_session');
      if (saved) {
        try { currentUser = JSON.parse(saved); loadUserData(); startApp(); }
        catch(e) { document.getElementById('loginScreen').classList.remove('hidden'); }
      } else {
        document.getElementById('loginScreen').classList.remove('hidden');
      }
    }, 700);
  }, 2000);
});

// ===== TAB SWITCH =====
function switchTab(tab) {
  document.querySelectorAll('.tab-section').forEach(s => s.classList.add('hidden'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.remove('hidden');
  document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
}

// ===== EXERCISE LIBRARY =====
let currentPart = 'all';

function filterPart(part, btn) {
  currentPart = part;
  document.querySelectorAll('.part-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderExercises(part);
}

function renderExercises(part) {
  const grid = document.getElementById('exerciseGrid');
  // Combine built-in + custom exercises
  const allEx = [...EXERCISES, ...(customExercises || [])];
  let filtered;
  if (part === 'all')     filtered = allEx;
  else if (part === 'custom') filtered = customExercises || [];
  else filtered = allEx.filter(e => e.part === part);

  if (filtered.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--grey);font-size:14px">Koi exercise nahi mili. + button se apni add karo! ⭐</div>';
    return;
  }

  grid.innerHTML = filtered.map(ex => `
    <div class="ex-card ${ex.isCustom ? 'custom-ex' : ''}" onclick="openModal('${ex.id}')">
      <div class="ex-card-emoji">${ex.emoji}</div>
      <div class="ex-card-diff">${ex.diff}</div>
      ${ex.isCustom ? '<div class="custom-badge">MINE</div>' : ''}
      <div class="ex-card-body">
        <div class="ex-card-name">${ex.name}</div>
        <div class="ex-card-part">${ex.part.toUpperCase()}</div>
      </div>
    </div>
  `).join('');
}

function openModal(id) {
  // Find in both built-in and custom
  const allEx = [...EXERCISES, ...(customExercises || [])];
  const ex = allEx.find(e => String(e.id) === String(id));
  if (!ex) return;
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-ex-emoji">${ex.emoji}</div>
    <div class="modal-ex-name">${ex.name}</div>
    <div class="modal-ex-part">${ex.part.toUpperCase()} · ${ex.diff}</div>
    <div class="modal-legend">💬 "${ex.legend}"</div>
    <div class="modal-section-title">Recommended Sets & Reps</div>
    <div class="modal-sets">
      ${ex.sets.map(s => '<span class="set-pill">' + s + '</span>').join('')}
    </div>
    <div class="modal-section-title">Form Tips</div>
    <ul class="modal-tips">
      ${ex.tips.map(t => '<li>' + t + '</li>').join('')}
    </ul>
    <button class="btn-primary" style="margin-top:20px" onclick="prefillLog('${ex.name}','${ex.part}');closeModal()">📝 Log This Exercise</button>
    ${ex.isCustom ? '<button class="btn-primary" style="margin-top:8px;background:var(--surface2);color:var(--red);border:1px solid var(--red)" onclick="deleteCustomEx(\'' + ex.id + '\')">🗑 Delete This Exercise</button>' : ''}
  `;
  document.getElementById('exModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('exModal').classList.add('hidden');
}

function prefillLog(name, part) {
  switchTab('logger');
  document.getElementById('logExercise').value = name;
  document.getElementById('logPart').value = part.charAt(0).toUpperCase() + part.slice(1);
}

// ===== WORKOUT LOGGER =====
function logWorkout() {
  const ex = document.getElementById('logExercise').value.trim();
  const part = document.getElementById('logPart').value;
  const sets = parseInt(document.getElementById('logSets').value);
  const reps = parseInt(document.getElementById('logReps').value);
  const weight = parseFloat(document.getElementById('logWeight').value) || 0;
  const notes = document.getElementById('logNotes').value.trim();

  if (!ex || !sets || !reps) { alert('Fill exercise name, sets, and reps!'); return; }

  const today = new Date().toDateString();
  // Streak logic
  if (lastWorkoutDate !== today) {
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    if (lastWorkoutDate === yesterday.toDateString()) {
      streak++;
    } else if (lastWorkoutDate !== today) {
      streak = 1;
    }
    lastWorkoutDate = today;
  }

  workoutLog.unshift({
    id: Date.now(),
    ex, part, sets, reps, weight, notes,
    date: today,
    time: new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})
  });

  save();
  document.getElementById('logExercise').value = '';
  document.getElementById('logSets').value = '';
  document.getElementById('logReps').value = '';
  document.getElementById('logWeight').value = '';
  document.getElementById('logNotes').value = '';
  document.getElementById('streakCount').textContent = streak;
  renderLog();
}

function calcCalories(entries) {
  // Rough estimate: sets × reps × weight(kg) × 0.05 kcal per kg lifted
  let total = 0;
  entries.forEach(e => {
    const vol = e.sets * e.reps * (e.weight || 10);
    total += vol * 0.05;
  });
  return Math.round(total);
}

function getCalAnalogy(cal) {
  const sorted = [...CAL_ANALOGIES].sort((a,b) => a.cal - b.cal);
  let result = sorted[sorted.length - 1];
  for (let i = 0; i < sorted.length; i++) {
    if (cal <= sorted[i].cal) { result = sorted[i]; break; }
  }
  return result.text;
}

function deleteLog(id) {
  workoutLog = workoutLog.filter(e => e.id !== id);
  save(); renderLog();
}

function renderLog() {
  const today = new Date().toDateString();
  const todayEntries = workoutLog.filter(e => e.date === today);
  const cal = calcCalories(todayEntries);

  document.getElementById('burnNum').textContent = cal;

  const analogyEl = document.getElementById('calAnalogy');
  if (cal > 0) {
    analogyEl.textContent = '💡 ' + getCalAnalogy(cal);
    analogyEl.classList.remove('hidden');
  } else {
    analogyEl.classList.add('hidden');
  }

  const todayDiv = document.getElementById('todayLog');
  if (todayEntries.length === 0) {
    todayDiv.innerHTML = '<p style="color:var(--grey);font-size:14px;text-align:center;padding:20px">No sets logged today. Time to hit the iron! 💪</p>';
  } else {
    todayDiv.innerHTML = todayEntries.map(e => `
      <div class="log-entry">
        <div class="log-entry-left">
          <div class="ex-name">${e.ex}</div>
          <div class="ex-detail">${e.sets} sets × ${e.reps} reps · ${e.part} · ${e.time}</div>
          ${e.notes ? `<div class="ex-detail" style="color:var(--gold-light);margin-top:2px">"${e.notes}"</div>` : ''}
        </div>
        <div class="log-entry-right">
          ${e.weight ? `<div class="vol">${e.weight}kg</div><div class="vol-label">per set</div>` : '<div class="vol" style="font-size:14px">Bodyweight</div>'}
          <button class="btn-del" onclick="deleteLog(${e.id})">🗑</button>
        </div>
      </div>
    `).join('');
  }

  // History
  const histDiv = document.getElementById('logHistory');
  const past = workoutLog.filter(e => e.date !== today);
  if (past.length === 0) {
    histDiv.innerHTML = '<p style="color:var(--grey);font-size:13px">No history yet. Start logging! 📝</p>';
    return;
  }
  const byDate = {};
  past.forEach(e => { if (!byDate[e.date]) byDate[e.date] = []; byDate[e.date].push(e); });
  histDiv.innerHTML = Object.keys(byDate).map(date => `
    <div class="history-day">
      <div class="history-day-header">${date} — ${byDate[date].length} sets</div>
      ${byDate[date].slice(0,3).map(e => `
        <div class="log-entry">
          <div class="log-entry-left">
            <div class="ex-name">${e.ex}</div>
            <div class="ex-detail">${e.sets}×${e.reps} · ${e.weight ? e.weight+'kg' : 'Bodyweight'}</div>
          </div>
        </div>
      `).join('')}
      ${byDate[date].length > 3 ? `<p style="color:var(--grey);font-size:12px;padding:4px 0">+${byDate[date].length-3} more exercises</p>` : ''}
    </div>
  `).join('');
}

// ===== DIET CALCULATOR =====
function calcDiet() {
  const w = parseFloat(document.getElementById('dietWeight').value);
  const h = parseFloat(document.getElementById('dietHeight').value);
  const a = parseInt(document.getElementById('dietAge').value);
  const g = document.getElementById('dietGender').value;
  const goal = document.getElementById('dietGoal').value;
  const act = parseFloat(document.getElementById('dietActivity').value);

  if (!w || !h || !a) { alert('Please fill in all fields!'); return; }

  // Mifflin-St Jeor BMR
  let bmr = g === 'male'
    ? 10*w + 6.25*h - 5*a + 5
    : 10*w + 6.25*h - 5*a - 161;

  let tdee = Math.round(bmr * act);
  let target = goal === 'bulk' ? tdee + 300 : goal === 'cut' ? tdee - 400 : tdee;
  let protein = Math.round(w * 2.2);
  let fat = Math.round(target * 0.25 / 9);
  let carbs = Math.round((target - protein*4 - fat*9) / 4);

  document.getElementById('dietResult').classList.remove('hidden');
  document.getElementById('macroCards').innerHTML = `
    <div class="macro-card highlight" style="grid-column:span 2">
      <div class="macro-num">${target}</div>
      <div class="macro-unit"> kcal/day</div>
      <div class="macro-label">${goal === 'bulk' ? '💪 Bulk Target' : goal === 'cut' ? '🔥 Cut Target' : '⚖️ Maintenance'}</div>
    </div>
    <div class="macro-card">
      <div class="macro-num">${protein}</div><div class="macro-unit">g</div>
      <div class="macro-label">Protein</div>
      <div class="macro-bar-wrap"><div class="macro-bar" style="width:${Math.min(100,protein*4/target*100)}%;background:#CC0000"></div></div>
    </div>
    <div class="macro-card">
      <div class="macro-num">${carbs}</div><div class="macro-unit">g</div>
      <div class="macro-label">Carbs</div>
      <div class="macro-bar-wrap"><div class="macro-bar" style="width:${Math.min(100,carbs*4/target*100)}%;background:#C9A84C"></div></div>
    </div>
    <div class="macro-card">
      <div class="macro-num">${fat}</div><div class="macro-unit">g</div>
      <div class="macro-label">Fat</div>
      <div class="macro-bar-wrap"><div class="macro-bar" style="width:${Math.min(100,fat*9/target*100)}%;background:#448844"></div></div>
    </div>
    <div class="macro-card">
      <div class="macro-num">${Math.round(w*2.2*10)/10}</div><div class="macro-unit">g</div>
      <div class="macro-label">Daily Protein</div>
      <div style="font-size:11px;color:var(--grey);margin-top:4px">${Math.round(w*2.2*10/10)} chicken strips</div>
    </div>
  `;

  const isVeg = false;
  document.getElementById('mealPlan').innerHTML = `
    <h3>📋 Sample Meal Plan</h3>
    ${[
      {time:"6:30 AM — Pre-Workout", food:"6 egg whites + 2 whole eggs scrambled, 2 rotis or oats, banana", kcal:Math.round(target*0.22)},
      {time:"9:00 AM — Post-Workout", food:"Whey protein shake + fruit, or paneer bhurji + roti", kcal:Math.round(target*0.15)},
      {time:"1:00 PM — Lunch", food:"2 cups rice/roti + 200g chicken/dal + salad + curd", kcal:Math.round(target*0.28)},
      {time:"4:30 PM — Snack", food:"Handful of nuts + banana, or bread + peanut butter", kcal:Math.round(target*0.10)},
      {time:"8:00 PM — Dinner", food:"200g chicken/paneer + vegetables + 1-2 rotis or rice", kcal:Math.round(target*0.20)},
      {time:"10:30 PM — Before Bed", food:"Casein protein or 1 cup milk + 10 almonds", kcal:Math.round(target*0.05)},
    ].map(m => `
      <div class="meal-item">
        <div>
          <div class="meal-time">${m.time}</div>
          <div style="font-size:13px;color:var(--grey-light);margin-top:2px">${m.food}</div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div style="font-family:var(--font-display);font-size:18px;color:var(--gold)">${m.kcal}</div>
          <div style="font-size:10px;color:var(--grey)">kcal</div>
        </div>
      </div>
    `).join('')}
  `;
}

// ===== LEGENDS =====
function renderLegends() {
  document.getElementById('legendCards').innerHTML = LEGENDS.map(l => `
    <div class="legend-card">
      <div class="legend-avatar">${l.avatar}</div>
      <div>
        <div class="legend-name">${l.name}</div>
        <div class="legend-tip">${l.tip}</div>
        <div class="legend-quote">${l.quote}</div>
      </div>
    </div>
  `).join('');
}

// ===== PLAYLIST =====
function filterPlaylist(filter, btn) {
  document.querySelectorAll('.pl-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderPlaylist(filter);
}

function renderPlaylist(filter) {
  const filtered = filter === 'all' ? SONGS : SONGS.filter(s => s.tags.includes(filter));
  document.getElementById('playlistGrid').innerHTML = filtered.map((s,i) => `
    <div class="song-card">
      <div class="song-num">${String(i+1).padStart(2,'0')}</div>
      <div class="song-info">
        <div class="song-title">${s.title}</div>
        <div class="song-artist">${s.artist}</div>
        <div class="song-tags">
          ${s.tags.map(t => `<span class="song-tag tag-${t}">${t.toUpperCase()}</span>`).join('')}
        </div>
      </div>
      <a class="song-yt" href="${s.yt}" target="_blank" title="Open on YouTube">▶️</a>
    </div>
  `).join('');
  if (filtered.length === 0) {
    document.getElementById('playlistGrid').innerHTML = '<p style="color:var(--grey);text-align:center;padding:20px">No songs found for this filter.</p>';
  }
}

// ===== SUPERSETS =====
function renderSupersets() {
  const grid = document.getElementById('supersetGrid');
  if (!grid) return;
  grid.innerHTML = SUPERSETS.map((s,i) => `
    <div class="superset-card" onclick="openSuperset(${i})">
      <div class="ss-icon" style="background:${s.color}22;border-color:${s.color}">${s.icon}</div>
      <div class="ss-info">
        <div class="ss-name">${s.name}</div>
        <div class="ss-level" style="color:${s.color}">${s.level} · ${s.pairs.length} pairs</div>
        <div class="ss-desc">${s.desc.substring(0,60)}...</div>
      </div>
    </div>
  `).join('');
}

function openSuperset(i) {
  const s = SUPERSETS[i];
  document.getElementById('modalContent').innerHTML = `
    <div style="font-size:48px;text-align:center;margin-bottom:12px">${s.icon}</div>
    <div class="modal-ex-name">${s.name}</div>
    <div class="modal-ex-part" style="color:${s.color}">${s.level}</div>
    <div class="modal-legend" style="border-color:${s.color};background:${s.color}11">💡 ${s.tip}</div>
    <div class="modal-section-title">Exercise Pairs (A → B with no rest between)</div>
    ${s.pairs.map((p,j) => `
      <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:14px;margin-bottom:10px">
        <div style="display:flex;gap:10px;align-items:center;margin-bottom:8px">
          <span style="background:${s.color};color:#fff;font-family:var(--font-display);font-size:13px;padding:3px 10px;border-radius:4px;letter-spacing:1px">PAIR ${j+1}</span>
          <span style="font-size:11px;color:var(--grey)">${p.rest}</span>
        </div>
        <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
          <div style="flex:1;background:var(--surface3);border-radius:8px;padding:10px">
            <div style="font-size:10px;color:${s.color};font-family:var(--font-cond);font-weight:700;letter-spacing:1px;margin-bottom:4px">A</div>
            <div style="font-size:14px;color:var(--white);font-family:var(--font-cond);font-weight:600">${p.a}</div>
          </div>
          <div style="font-size:20px;color:var(--grey)">⚡</div>
          <div style="flex:1;background:var(--surface3);border-radius:8px;padding:10px">
            <div style="font-size:10px;color:var(--gold);font-family:var(--font-cond);font-weight:700;letter-spacing:1px;margin-bottom:4px">B</div>
            <div style="font-size:14px;color:var(--white);font-family:var(--font-cond);font-weight:600">${p.b}</div>
          </div>
        </div>
      </div>
    `).join('')}
    <p style="font-size:12px;color:var(--grey);text-align:center;margin-top:12px">Do A immediately followed by B. Rest only between pairs.</p>
  `;
  document.getElementById('exModal').classList.remove('hidden');
}
async function askAI(prompt) {
  document.getElementById('aiInput').value = prompt;
  sendAI();
}

async function sendAI() {
  const input = document.getElementById('aiInput');
  const userMsg = input.value.trim();
  if (!userMsg) return;
  input.value = '';

  const chat = document.getElementById('aiChat');

  // Clear welcome if first msg
  const welcome = chat.querySelector('.ai-welcome');
  if (welcome) welcome.remove();

  // User bubble
  chat.innerHTML += `<div class="ai-msg user">${userMsg}</div>`;

  // Loading
  const loadId = 'load-' + Date.now();
  chat.innerHTML += `<div class="ai-msg coach ai-loading" id="${loadId}"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>`;
  chat.scrollTop = chat.scrollHeight;

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: `You are an elite gym coach AI inside the IronFlow app — inspired by legends like CBum, Arnold Schwarzenegger, Mukesh Gahlot, and Dorian Yates. 
You give practical, no-BS gym advice. Mix Hindi and English naturally (Hinglish is great). 
Be motivating but direct. Give specific sets/reps when relevant. 
Keep answers concise but complete — use bullet points where helpful. 
Sign off occasionally with "Keep lifting! 💪" or "IRON NEVER LIES. 🔥"`,
        messages: [{ role: "user", content: userMsg }]
      })
    });
    const data = await res.json();
    const reply = data.content?.[0]?.text || "Bhai kuch technical issue aa gaya. Dobara try karo! 💪";
    document.getElementById(loadId).remove();
    chat.innerHTML += `<div class="ai-msg coach">${reply.replace(/\n/g,'<br>')}</div>`;
  } catch(e) {
    document.getElementById(loadId).remove();
    chat.innerHTML += `<div class="ai-msg coach">Network issue bhai! Phir try karo. Aur gym mat chhodo! 💪</div>`;
  }
  chat.scrollTop = chat.scrollHeight;
}