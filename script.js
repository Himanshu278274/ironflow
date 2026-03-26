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
    icon:"💥", color:"#E8142A", level:"INTERMEDIATE",
    desc:"Classic CBum push day — 4-5 chest exercises followed by 3-4 tricep movements. Chest first when fresh, triceps finish the job.",
    totalTime:"75-90 min",
    pairs:[
      { label:"CHEST — COMPOUND", a:"Flat Bench Press", aSets:"4x8-12", b:"Incline DB Press", bSets:"4x10-12", rest:"75s", note:"Heavy compound first — this is your mass builder." },
      { label:"CHEST — UPPER & MID", a:"Incline Barbell Press", aSets:"3x10", b:"Cable Chest Fly (Mid)", bSets:"3x15", rest:"60s", note:"Stretch and squeeze — feel every rep." },
      { label:"CHEST — ISOLATION", a:"Pec Deck / Machine Fly", aSets:"3x12-15", b:"Decline Dumbbell Press", bSets:"3x10-12", rest:"60s", note:"Full chest coverage — upper to lower." },
      { label:"TRICEPS — MASS", a:"Skull Crushers (EZ Bar)", aSets:"4x10-12", b:"Close Grip Bench Press", bSets:"3x10", rest:"60s", note:"Heaviest tricep movements — do these fresh." },
      { label:"TRICEPS — ISOLATION", a:"Cable Tricep Pushdown", aSets:"3x12-15", b:"Overhead Tricep Extension", bSets:"3x12", rest:"45s", note:"Full extension every rep. Squeeze the horseshoe." },
    ],
    tip:"CBum's exact push day structure — chest compounds, then fly movements, finish with heavy triceps. Never skip the overhead extension."
  },
  {
    name:"Back + Biceps (Pull Day)",
    icon:"🔄", color:"#C8982E", level:"INTERMEDIATE",
    desc:"Dorian Yates approved pull day — 4-5 back movements for width and thickness, 3-4 bicep finishers.",
    totalTime:"75-90 min",
    pairs:[
      { label:"BACK — THICKNESS", a:"Deadlift", aSets:"4x5-6", b:"Barbell Row (Bent Over)", bSets:"4x8-10", rest:"90s", note:"The two kings of back mass. Go heavy, brace hard." },
      { label:"BACK — WIDTH", a:"Pull-Ups (Weighted)", aSets:"4x8-10", b:"Lat Pulldown (Wide Grip)", bSets:"3x12", rest:"60s", note:"Pull-ups build the V-taper nothing else can match." },
      { label:"BACK — DETAIL", a:"Seated Cable Row", aSets:"3x12", b:"Single Arm DB Row", bSets:"3x12 each", rest:"60s", note:"Row elbows to hip — not to shoulder. Feel the lat." },
      { label:"BICEPS — MASS", a:"Barbell Curl (Standing)", aSets:"4x8-10", b:"Incline DB Curl", bSets:"3x12", rest:"60s", note:"No swinging. Strict form = better peak." },
      { label:"BICEPS — PEAK", a:"Concentration Curl", aSets:"3x12 each", b:"Hammer Curl", bSets:"3x12", rest:"45s", note:"Concentration curl for the peak, hammer for thickness." },
    ],
    tip:"Pull the bar with your elbows, not your hands. This mental cue activates the lats 40% more. Dorian's biggest secret."
  },
  {
    name:"Shoulders (Full 3D Delts)",
    icon:"✈️", color:"#4488CC", level:"INTERMEDIATE",
    desc:"Complete shoulder destruction — front, side, and rear delts. CBum-style 3D boulder shoulders.",
    totalTime:"60-75 min",
    pairs:[
      { label:"FRONT DELTS — PRESS", a:"Seated Dumbbell Overhead Press", aSets:"4x8-12", b:"Arnold Press", bSets:"3x12", rest:"75s", note:"Arnold Press hits all 3 delt heads in one move." },
      { label:"SIDE DELTS — RAISES", a:"Lateral Raises (DB)", aSets:"5x15-20", b:"Cable Lateral Raise", bSets:"3x15-20", rest:"45s", note:"CBum does 6 sets of laterals. This is his signature." },
      { label:"REAR DELTS", a:"Rear Delt Fly (Bent Over)", aSets:"4x15-20", b:"Face Pulls (Cable)", bSets:"4x15-20", rest:"45s", note:"Most skipped muscles. These complete the 3D look." },
      { label:"TRAPS", a:"Barbell Shrug", aSets:"4x12-15", b:"Upright Row", bSets:"3x12", rest:"60s", note:"Traps frame the entire upper body. Never skip them." },
    ],
    tip:"Lateral raises are the secret to wide shoulders. Use light weight — feel the burn at the side delt, not the trap."
  },
  {
    name:"Legs (Quads + Hamstrings)",
    icon:"🦵", color:"#AA4444", level:"ADVANCED",
    desc:"Tom Platz would be proud. Full quad and hamstring annihilation — no leg day excuses.",
    totalTime:"90-100 min",
    pairs:[
      { label:"QUADS — COMPOUND", a:"Barbell Squat", aSets:"5x5-8", b:"Hack Squat", bSets:"4x10-12", rest:"90s", note:"Squat is king. Break parallel every rep, no excuses." },
      { label:"HAMSTRINGS — COMPOUND", a:"Romanian Deadlift", aSets:"4x10-12", b:"Leg Press (Feet High)", bSets:"4x12-15", rest:"75s", note:"RDL — push hips back, feel hamstring stretch. Slow eccentric." },
      { label:"QUADS — ISOLATION", a:"Leg Extension", aSets:"4x15-20", b:"Bulgarian Split Squat", bSets:"3x10 each", rest:"60s", note:"Leg extension for teardrop shape. Split squat for symmetry." },
      { label:"HAMSTRINGS — ISOLATION", a:"Lying Leg Curl", aSets:"4x12-15", b:"Seated Leg Curl", bSets:"3x15", rest:"60s", note:"Both machines hit hamstrings differently. Do both." },
      { label:"CALVES", a:"Standing Calf Raise", aSets:"5x20-25", b:"Seated Calf Raise", bSets:"4x20", rest:"45s", note:"Arnold trained calves daily. Full ROM every rep." },
    ],
    tip:"Never skip legs. Legs produce the most testosterone and growth hormone. Your upper body grows faster when you train legs hard."
  },
  {
    name:"Chest + Back (Antagonist)",
    icon:"⚔️", color:"#6644CC", level:"ADVANCED",
    desc:"Arnold's favorite — opposing muscles trained together. While chest rests, back works. Maximum efficiency and pump.",
    totalTime:"70-80 min",
    pairs:[
      { label:"COMPOUND PUSH/PULL", a:"Flat Bench Press", aSets:"4x8", b:"Barbell Row", bSets:"4x8", rest:"60s between pairs", note:"No rest between A and B. Only rest after both done." },
      { label:"UPPER CHEST / WIDTH", a:"Incline DB Press", aSets:"3x10", b:"Pull-Ups", bSets:"3x10", rest:"60s between pairs", note:"Chest stretch into back width — complete upper body." },
      { label:"ISOLATION PAIR", a:"Cable Fly (Mid)", aSets:"3x15", b:"Lat Pulldown", bSets:"3x12", rest:"45s between pairs", note:"Feel the squeeze. Each muscle fully isolated here." },
      { label:"FINISH STRONG", a:"Pec Deck", aSets:"3x15", b:"Seated Cable Row", bSets:"3x12", rest:"45s between pairs", note:"Pump finisher. Both muscles fully exhausted." },
    ],
    tip:"The opposing muscle stretch actually helps the working muscle contract harder. Arnold proved this in the 70s — science confirmed it later."
  },
  {
    name:"Arms Hypertrophy Day",
    icon:"💪", color:"#44AA66", level:"BEGINNER",
    desc:"Pure arm day for maximum size. Biceps and triceps alternated for constant pump and blood flow.",
    totalTime:"60 min",
    pairs:[
      { label:"TRICEPS MASS", a:"Close Grip Bench Press", aSets:"4x8-10", b:"Skull Crushers", bSets:"4x10", rest:"60s", note:"Triceps = 2/3 of arm size. Start with heaviest moves." },
      { label:"BICEPS MASS", a:"Barbell Curl", aSets:"4x8-10", b:"Incline DB Curl", bSets:"3x12", rest:"60s", note:"Incline curl gives maximum stretch for peak development." },
      { label:"TRICEPS ISOLATION", a:"Cable Pushdown (Rope)", aSets:"4x12-15", b:"Overhead Extension", bSets:"3x12", rest:"45s", note:"Rope pushdown hits all three tricep heads. Spread rope at bottom." },
      { label:"BICEPS ISOLATION", a:"Hammer Curl", aSets:"3x12", b:"Concentration Curl", aSets:"3x12 each", rest:"45s", note:"Hammer = brachialis thickness. Concentration = peak height." },
    ],
    tip:"Rest 60 seconds between pairs — this keeps the pump without sacrificing strength. Your arms should be completely swollen by the end."
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

// ===== WGER EXERCISE IMAGE MAP =====
// Maps exercise name → wger exercise ID for real images
const WGER_IDS = {
  "Bench Press": 192,
  "Incline Dumbbell Press": 165,
  "Cable Flyes": 186,
  "Dips (Chest)": 93,
  "Pec Deck": 291,
  "Decline Bench Press": 356,
  "Dumbbell Pullover": 84,
  "Deadlift": 241,
  "Pull-Ups": 31,
  "Barbell Row": 63,
  "Lat Pulldown": 122,
  "Seated Cable Row": 110,
  "T-Bar Row": 221,
  "Squat": 111,
  "Romanian Deadlift": 91,
  "Leg Press": 105,
  "Leg Curl": 278,
  "Calf Raises": 99,
  "Hack Squat": 152,
  "Leg Extension": 126,
  "Overhead Press": 64,
  "Lateral Raises": 85,
  "Rear Delt Fly": 346,
  "Face Pulls": 228,
  "Arnold Press": 187,
  "Barbell Curl": 72,
  "Hammer Curl": 226,
  "Tricep Pushdown": 125,
  "Skull Crushers": 97,
  "Close Grip Bench": 194,
  "Concentration Curl": 75,
  "Preacher Curl": 73,
  "Plank": 318,
  "Hanging Leg Raise": 198,
  "Cable Crunch": 175,
};

function getExerciseImageUrl(name) {
  const id = WGER_IDS[name];
  if (!id) return null;
  return `https://wger.de/en/exercise/${id}/view/base`;
}

function getWgerImageUrl(name) {
  const id = WGER_IDS[name];
  if (!id) return null;
  // Direct image endpoint
  return `https://wger.de/api/v2/exerciseimage/?exercise_base=${id}&format=json`;
}

// ===== FEMALE WORKOUT DATA =====
const FEMALE_EXERCISES = [
  // GLUTES & LEGS (most important for women)
  { id:'f1', name:"Hip Thrust", part:"glutes", emoji:"🍑", diff:"BEGINNER",
    legend:"Bret Contreras — the glute guy — says hip thrust is the #1 glute builder. Period.",
    sets:["4x12-15","3x15-20","5x10"], tips:["Bar padded on hips","Drive through heels","Full hip extension at top","Squeeze glutes hard at peak"] },
  { id:'f2', name:"Sumo Squat", part:"glutes", emoji:"🦵", diff:"BEGINNER",
    legend:"Wide stance activates glutes and inner thighs more than regular squat.",
    sets:["4x12-15","3x15"], tips:["Feet wider than shoulders","Toes pointed out 45°","Knees track over toes","Go deep for glute activation"] },
  { id:'f3', name:"Romanian Deadlift (Women)", part:"glutes", emoji:"📐", diff:"INTERMEDIATE",
    legend:"Best hamstring and glute exercise for women. Slow eccentric builds the shape.",
    sets:["4x10-12","3x12"], tips:["Hinge at hips","Feel hamstring stretch","Keep back straight","Slow on the way down"] },
  { id:'f4', name:"Cable Kickback", part:"glutes", emoji:"🦶", diff:"BEGINNER",
    legend:"Direct glute isolation. Used by fitness models worldwide for shape and definition.",
    sets:["4x15-20 each","3x20 each"], tips:["Squeeze at full extension","Don't swing the leg","Slow controlled movement","Feel the glute — not the lower back"] },
  { id:'f5', name:"Leg Press (High Feet)", part:"glutes", emoji:"🦾", diff:"BEGINNER",
    legend:"Feet high on the platform = more glutes. Feet low = more quads. Simple science.",
    sets:["4x12-15","3x15-20"], tips:["Feet high and wide","Don't lock out knees","Full depth","Press through heels"] },
  { id:'f6', name:"Walking Lunges", part:"legs", emoji:"🚶", diff:"BEGINNER",
    legend:"Best all-round leg exercise for women. Builds quads, hamstrings, glutes simultaneously.",
    sets:["3x12-15 each","4x10 each"], tips:["Long step forward","Back knee near ground","Torso upright","Alternate legs walking forward"] },
  { id:'f7', name:"Abductor Machine", part:"glutes", emoji:"↔️", diff:"BEGINNER",
    legend:"Targets the outer glutes and hip abductors — gives hips that round full shape.",
    sets:["4x15-20","3x20-25"], tips:["Full range of motion","Slow on the way in","Don't lean forward","Squeeze outer glute at peak"] },

  // UPPER BODY (toning focused)
  { id:'f8', name:"Dumbbell Shoulder Press", part:"shoulders", emoji:"🏋️", diff:"BEGINNER",
    legend:"Builds that toned shoulder cap women love. Light weight, full range.",
    sets:["3x12-15","4x12"], tips:["Don't go too heavy","Full range of motion","Don't arch back","Press straight up"] },
  { id:'f9', name:"Lateral Raises (Light)", part:"shoulders", emoji:"✈️", diff:"BEGINNER",
    legend:"Creates that toned shoulder look. Higher reps, lighter weight for women.",
    sets:["4x15-20","3x20"], tips:["Very light weight","Lead with elbows","Don't shrug","Feel the burn in the side delt"] },
  { id:'f10', name:"Tricep Rope Pushdown", part:"arms", emoji:"⬇️", diff:"BEGINNER",
    legend:"Best exercise for toning the back of the arm — the area most women want to target.",
    sets:["4x15-20","3x20"], tips:["Spread rope at bottom","Keep elbows at sides","Full extension","Squeeze hard at bottom"] },
  { id:'f11', name:"Dumbbell Bicep Curl", part:"arms", emoji:"💪", diff:"BEGINNER",
    legend:"Toned arms start here. Light weight, perfect form, full squeeze.",
    sets:["3x12-15","4x12"], tips:["Full extension at bottom","Squeeze at top","Don't swing","Alternate arms"] },
  { id:'f12', name:"Chest Press (Machine)", part:"chest", emoji:"🤲", diff:"BEGINNER",
    legend:"Safer than barbell for beginners. Builds upper body strength and posture.",
    sets:["3x12-15","4x12"], tips:["Elbows at 90°","Full range","Don't lock out","Controlled movement"] },
  { id:'f13', name:"Seated Row (Cable)", part:"back", emoji:"🚣", diff:"BEGINNER",
    legend:"Great posture builder. Women with good back development look athletic and confident.",
    sets:["3x12-15","4x12"], tips:["Chest up","Pull to belly button","Squeeze shoulder blades","Don't lean back too much"] },

  // CORE
  { id:'f14', name:"Crunches", part:"core", emoji:"🫀", diff:"BEGINNER",
    legend:"Classic but effective. Quality over quantity — 20 good reps > 100 bad ones.",
    sets:["3x20","4x15-20"], tips:["Hands behind head lightly","Lift with abs not neck","Full crunch — shoulders off ground","Slow eccentric"] },
  { id:'f15', name:"Plank (Women)", part:"core", emoji:"📏", diff:"BEGINNER",
    legend:"Best core stability exercise. Improves posture, flattens stomach over time.",
    sets:["3x45s","4x30s"], tips:["Neutral spine","Squeeze abs and glutes","Breathe steadily","Don't let hips sag"] },
  { id:'f16', name:"Russian Twist", part:"core", emoji:"🌀", diff:"BEGINNER",
    legend:"Targets obliques — creates that hourglass waist shape.",
    sets:["4x20","3x25"], tips:["Feet off ground for harder","Twist from waist","Hold each side briefly","Use light weight"] },
];

const FEMALE_DIET = {
  goals: ["🍑 Booty Gains", "🔥 Fat Loss & Tone", "💪 Lean Muscle", "⚖️ Maintain Shape"],
  tips: [
    { icon:"🥩", title:"Protein Is Your Best Friend", body:"Aim for 1.6-2g per kg bodyweight. Chicken, eggs, paneer, dahi — these build the muscle that gives you shape, not bulk." },
    { icon:"🍚", title:"Don't Fear Carbs", body:"Carbs give you energy to train hard. Rice, roti, oats — eat them around your workout. Cut carbs at night for fat loss." },
    { icon:"💧", title:"Water = Results", body:"Drink 3-4 liters daily. Dehydration causes bloating, poor performance, and slower fat loss. Start your day with 2 glasses." },
    { icon:"⏰", title:"Eating Timing Matters", body:"Pre-workout: banana + protein. Post-workout: protein + rice within 45 min. This window is when your muscles absorb nutrition best." },
    { icon:"🚫", title:"What To Avoid", body:"Ultra-processed food, excessive sugar, liquid calories (juice, cold drinks). These spike insulin and store fat — especially around the waist." },
  ]
};

const FEMALE_LEGENDS = [
  { name:"Noel Deyzel (Female Edition Tip)", avatar:"💪", tip:"Women don't get bulky from lifting heavy. Biggest myth in fitness. You don't have the testosterone to get bulky — you'll just get lean and strong.", quote:"Pick up the heavy weights. You won't regret it." },
  { name:"Kayla Itsines", avatar:"👩", tip:"Consistency over 12 weeks beats any crash diet or extreme workout. Show up 4 days a week, eat real food, sleep 8 hours. That is the real secret.", quote:"It is not about being perfect. It is about effort." },
  { name:"Rujuta Diwekar", avatar:"🇮🇳", tip:"Dal chawal is not the enemy. Eat local, eat seasonal, eat with family. Indian food is medicine when eaten right — don't replace it with protein bars and supplements.", quote:"Ghar ka khana hi best supplement hai." },
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

// ===== THEME =====
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme === 'dark' ? '' : theme);
  localStorage.setItem('if_theme', theme);
  document.querySelectorAll('.theme-dot').forEach(d => d.classList.remove('active'));
  const dot = document.getElementById('td-' + theme);
  if (dot) dot.classList.add('active');
}

function loadTheme() {
  const saved = localStorage.getItem('if_theme') || 'dark';
  setTheme(saved);
}


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
  renderFemale();
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
  loadTheme(); // Apply saved theme immediately
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
  const allEx = [...EXERCISES, ...(customExercises || []), ...FEMALE_EXERCISES];
  const ex = allEx.find(e => String(e.id) === String(id));
  if (!ex) return;

  const wgerId = WGER_IDS[ex.name];
  // Try multiple wger image URL patterns
  const imgSrc = wgerId ? `https://wger.de/media/exercise-images/${wgerId}/main.png` : null;
  const imgSection = imgSrc
    ? `<div class="ex-img-wrap">
        <img class="ex-demo-img" 
          src="${imgSrc}"
          onerror="this.src='https://wger.de/static/images/logo.png';this.style.objectFit='contain';this.style.padding='20px';this.style.opacity='0.3'"
          alt="${ex.name}" loading="lazy" />
        <div class="ex-img-label">via wger.de</div>
       </div>`
    : `<div class="ex-img-placeholder">${ex.emoji}</div>`;

  document.getElementById('modalContent').innerHTML = `
    ${imgSection}
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


// ===== FEMALE SECTION =====
function renderFemale() {
  // Body part filter
  const part = 'all';
  renderFemaleExercises(part);
  renderFemaleDiet();
}

function renderFemaleExercises(part) {
  const grid = document.getElementById('femaleExGrid');
  if (!grid) return;
  const filtered = part === 'all' ? FEMALE_EXERCISES : FEMALE_EXERCISES.filter(e => e.part === part);
  grid.innerHTML = filtered.map(ex => `
    <div class="ex-card" onclick="openModal('${ex.id}')">
      <div class="ex-card-emoji">${ex.emoji}</div>
      <div class="ex-card-diff">${ex.diff}</div>
      <div class="ex-card-body">
        <div class="ex-card-name">${ex.name}</div>
        <div class="ex-card-part">${ex.part.toUpperCase()}</div>
      </div>
    </div>
  `).join('');
}

function filterFemalePart(part, btn) {
  document.querySelectorAll('.female-part-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderFemaleExercises(part);
}

function renderFemaleDiet() {
  const el = document.getElementById('femaleDietTips');
  if (!el) return;
  el.innerHTML = FEMALE_DIET.tips.map(t => `
    <div class="legend-card" style="margin-bottom:10px">
      <div class="legend-avatar">${t.icon}</div>
      <div>
        <div class="legend-name">${t.title}</div>
        <div class="legend-tip">${t.body}</div>
      </div>
    </div>
  `).join('');

  const legEl = document.getElementById('femaleLegends');
  if (!legEl) return;
  legEl.innerHTML = FEMALE_LEGENDS.map(l => `
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

// ===== OFFLINE COACH (works without internet/API) =====
function getOfflineCoachReply(msg) {
  const m = msg.toLowerCase();
  
  if (m.includes('chest') || m.includes('bench')) return `**Chest Training Tips 💪**<br><br>• Flat Bench Press: 4x8-12 — mass builder<br>• Incline DB Press: 4x10 — upper chest<br>• Cable Fly: 3x15 — isolation<br>• Pec Deck: 3x15 — squeeze and hold<br><br>CBum tip: Always warm up rotator cuff before chest day. 2-3 light sets of face pulls.<br><br>IRON NEVER LIES. 🔥`;
  
  if (m.includes('back') || m.includes('pull')) return `**Back Training Tips 🔄**<br><br>• Deadlift: 4x5 — king of all lifts<br>• Pull-Ups: 4x failure — width builder<br>• Barbell Row: 4x8 — thickness<br>• Lat Pulldown: 3x12 — V-taper<br><br>Dorian Yates tip: Pull with your elbows, not your hands. Game changer.<br><br>Keep lifting! 💪`;
  
  if (m.includes('leg') || m.includes('squat')) return `**Leg Training Tips 🦵**<br><br>• Squat: 5x5-8 — foundation<br>• Romanian Deadlift: 4x10 — hamstrings<br>• Leg Press: 4x15 — volume<br>• Leg Extension: 4x20 — isolation<br>• Calf Raises: 5x25 — never skip!<br><br>Tom Platz trained legs 3x a week. That's why his legs were legendary.<br><br>IRON NEVER LIES. 🔥`;
  
  if (m.includes('shoulder') || m.includes('delt')) return `**Shoulder Training Tips ✈️**<br><br>• OHP: 4x8-12 — mass<br>• Lateral Raises: 5x15-20 — width (CBum's secret weapon)<br>• Rear Delt Fly: 4x20 — 3D look<br>• Face Pulls: 4x20 — health + rear delts<br><br>Light weight, high reps on laterals. Feel the burn — not the trap.<br><br>Keep lifting! 💪`;
  
  if (m.includes('arm') || m.includes('bicep') || m.includes('tricep')) return `**Arm Training Tips 💪**<br><br>**Biceps:**<br>• Barbell Curl: 4x8-10<br>• Hammer Curl: 3x12<br>• Concentration Curl: 3x12 each<br><br>**Triceps:**<br>• Close Grip Bench: 4x10<br>• Skull Crushers: 4x10<br>• Cable Pushdown: 4x15<br><br>Triceps = 2/3 of arm size. Train them harder than biceps!<br><br>IRON NEVER LIES. 🔥`;
  
  if (m.includes('diet') || m.includes('protein') || m.includes('food') || m.includes('eat') || m.includes('khana')) return `**Diet Tips 🍗**<br><br>• Protein: 2g per kg bodyweight daily<br>• Chicken, eggs, paneer, dahi — desi protein sources<br>• Pre-workout: banana + protein shake<br>• Post-workout: rice + chicken within 45 min<br>• Water: 4 liters daily<br><br>Mukesh Gahlot tip: Dal chawal aur eggs se bhi champion body ban sakti hai. Supplements optional hain.<br><br>Keep lifting! 💪`;
  
  if (m.includes('beginner') || m.includes('start') || m.includes('shuru') || m.includes('naya')) return `**Beginner Plan 🌱**<br><br>3 days/week — Monday, Wednesday, Friday:<br><br>**Each day (Full Body):**<br>• Squat: 3x10<br>• Bench Press: 3x10<br>• Barbell Row: 3x10<br>• OHP: 3x10<br>• Plank: 3x30s<br><br>Focus on form for first 3 months. Heavy weight comes later.<br><br>IRON NEVER LIES. 🔥`;
  
  if (m.includes('cbum') || m.includes('arnold') || m.includes('split') || m.includes('ppl')) return `**CBum PPL Split 🏆**<br><br>**Push (Mon/Thu):** Chest + Shoulders + Triceps<br>**Pull (Tue/Fri):** Back + Biceps<br>**Legs (Wed/Sat):** Quads + Hamstrings + Calves<br><br>CBum trains 6 days/week. Rest 1 day. Each muscle gets hit twice per week.<br><br>Key: Progressive overload every week. Add weight or reps — always.<br><br>Keep lifting! 💪`;

  if (m.includes('fat') || m.includes('weight loss') || m.includes('slim') || m.includes('cut') || m.includes('patle')) return `**Fat Loss Tips 🔥**<br><br>• Calorie deficit: 300-400 kcal below maintenance<br>• Keep protein HIGH (2g/kg) — preserve muscle<br>• Cardio: 20-30 min after weights, 3-4x/week<br>• Sleep 7-8 hours — cortisol destroys fat loss<br>• Avoid liquid calories — chai mein chini band karo!<br><br>Fat loss is 80% diet, 20% gym. Kitchen mein hi results bante hain.<br><br>IRON NEVER LIES. 🔥`;

  if (m.includes('rest') || m.includes('recovery') || m.includes('sleep')) return `**Recovery Tips 😴**<br><br>• Sleep 7-9 hours — muscle grows during sleep, not gym<br>• Protein before bed — casein or dahi<br>• Deload every 6-8 weeks — go light for 1 week<br>• Stretch post-workout — 10 minutes minimum<br>• Stay hydrated — 4 liters water daily<br><br>Arnold slept 8 hours every night. Recovery IS training.<br><br>Keep lifting! 💪`;

  // Default response
  return `**Coach IronFlow Here! 🤖**<br><br>Main abhi offline mode mein hoon bhai — internet pe jaoge toh live AI coach milega!<br><br>Tab tak yeh yaad rakh:<br>• Consistency > Intensity<br>• Progressive overload hi growth ka secret hai<br>• Form perfect rakho — ego mat karo<br>• 80% diet, 20% gym<br><br>Splits tab mein dekh — complete workout plans hain wahan!<br><br>IRON NEVER LIES. 🔥`;
}

async function askAI(prompt) {
  document.getElementById('aiInput').value = prompt;
  sendAI();
}

let aiHistory = [];

async function sendAI() {
  const input = document.getElementById('aiInput');
  const userMsg = input.value.trim();
  if (!userMsg) return;
  input.value = '';

  const chat = document.getElementById('aiChat');
  const welcome = chat.querySelector('.ai-welcome');
  if (welcome) welcome.remove();

  chat.innerHTML += `<div class="ai-msg user">${userMsg}</div>`;
  const loadId = 'load-' + Date.now();
  chat.innerHTML += `<div class="ai-msg coach ai-loading" id="${loadId}"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>`;
  chat.scrollTop = chat.scrollHeight;

  aiHistory.push({ role:"user", content: userMsg });

  const SYSTEM = `You are an elite gym coach AI inside IronFlow — inspired by CBum, Arnold Schwarzenegger, Mukesh Gahlot, and Dorian Yates. Give practical, no-BS gym advice. Mix Hindi and English naturally (Hinglish). Be motivating but direct. Give specific sets/reps when asked. Use bullet points for lists. Keep responses under 300 words. End with "Keep lifting! 💪" or "IRON NEVER LIES. 🔥"`;

  // Check if running inside Claude.ai (API available) or standalone
  const isClaudeEnv = window.location.hostname.includes('claude') || 
                      window.location.hostname.includes('anthropic') ||
                      window.location.protocol === 'blob:';
  
  if (!isClaudeEnv) {
    // Running locally - use smart offline coach
    document.getElementById(loadId)?.remove();
    const reply = getOfflineCoachReply(userMsg);
    aiHistory.push({ role:"assistant", content: reply });
    chat.innerHTML += `<div class="ai-msg coach">${reply.replace(/\n/g,'<br>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')}</div>`;
    chat.scrollTop = chat.scrollHeight;
    return;
  }

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 600,
        system: SYSTEM,
        messages: aiHistory.slice(-6)
      })
    });
    if (!res.ok) throw new Error('API ' + res.status);
    const data = await res.json();
    const reply = data.content?.[0]?.text || "Thoda technical issue aa gaya bhai. Dobara try karo!";
    aiHistory.push({ role:"assistant", content: reply });
    document.getElementById(loadId)?.remove();
    chat.innerHTML += `<div class="ai-msg coach">${reply.replace(/\n/g,'<br>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')}</div>`;
  } catch(e) {
    document.getElementById(loadId)?.remove();
    const reply = getOfflineCoachReply(userMsg);
    chat.innerHTML += `<div class="ai-msg coach">${reply}</div>`;
  }
  chat.scrollTop = chat.scrollHeight;
}