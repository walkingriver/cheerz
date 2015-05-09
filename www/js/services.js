/**
 * A simple service that returns some default cheers.
 */
(function () {
    'use strict';

    angular
        .module('cheerz')
        .service('cheerContext', ['$http', cheerContext]);

    function cheerContext($http) {
        var id = 0;
        var currentCheer = {};

        // Might use a resource here that returns a JSON array
        var cheers = null;
        var randomCheers = null;

        var service = {
            all: function () {
                return cheers;
            },
            getCount: getCount,
            get: function (cheerId) {
                return cheers[cheerId];
            },
            currentCheer: function () { return currentCheer; },
            nextCheer: nextCheer,
            resetCheers: resetCheers,
            saveCheer: saveCheer
        };

        activate();
        return service;

        function activate() {
            cheers = getCheers();
            randomCheers = _.sortBy(cheers, 'order');
            currentCheer = resetCheers();
        }

        function getCount() {
            return cheers.length;
        }

        function nextCheer() {
            currentCheer = randomCheers[++id];
            if (!currentCheer) {
                return resetCheers();
            }

            return currentCheer;
        }

        function resetCheers() {
            id = 0;
            currentCheer = randomCheers[id];
            return currentCheer;
        }

        function saveCheer(id, cheer) {

        }

        function getCheers() {
            // These are the default cheers
            // This is the cheer format: { id: 61, order: getOrder(), title: 'Wolf Cheer', description: 'Wolf howl: "Wooooooooooooooooooo!"' }
            var index = 0;
            var cheersMap = allCheers().map(function (e) {
                return {
                    id: index++,
                    order: getOrder(),
                    title: e.title,
                    description: e.desc
                };
            });

            return cheersMap;
        }

        function getOrder() {
            return Math.random();
        }

        function allCheers() {
            return [
                {
                    "title": "A Cheer",
                    "desc": "Everyone stands, while applauding, throw their heads back and yell 'A-cheer'."
                },
                {
                    "title": "A Cheer",
                    "desc": "Ask everyone to stand up and applaud. Then with heads thrown back and chest puffed out, shout 'Pack of the Boy Scouts of America."
                },
                {
                    "title": "A Frogs First Aid For Bumps",
                    "desc": "Rubbit, Rubbit, Rubbit"
                },
                {
                    "title": "A Nickel's Worth",
                    "desc": "Flip your thumb as though flipping a coin, then catch it and slap it on the back of your hand.\r\n"
                },
                {
                    "title": "A Real Big Hand",
                    "desc": "Make a fist. Put the thumb of the fist in your mouth and blow up like a balloon. As the fist blows up, straighten out first the index finger, and then follow with the rest."
                },
                {
                    "title": "A Round Of Applause",
                    "desc": "Clap hands in a Big circle in front of yourself in a clockwise motion."
                },
                {
                    "title": "A Rousing Hand",
                    "desc": "Hold hand with palm open in front of you about waist high, then thrust it high into the air, going up and down several times."
                },
                {
                    "title": "A Stirring Round Of Applause",
                    "desc": "Move hands in a flat circle in front of you as if stirring a pot while clapping."
                },
                {
                    "title": "ABC",
                    "desc": "Divide the audience into three groups. They each say, \"America,\" \"Beautiful,\" and \"Country.\" Point to different groups. Vary speed."
                },
                {
                    "title": "Abe Lincoln",
                    "desc": "\"That was great--honestly!\""
                },
                {
                    "title": "Abraham Lincoln",
                    "desc": "That was great-HONEST!"
                },
                {
                    "title": "Advancement",
                    "desc": "Extra!!  Extra!!  Read all about it!  Bobcat!!  Wolf!!  Bear!!  Webelos!!  Arrow of Light!!!"
                },
                {
                    "title": "After Dinner",
                    "desc": "Plop, plop, fizz, fizz, oh what a relief it is!\""
                },
                {
                    "title": "Airplane",
                    "desc": "extend arms to sides and say \"NRRRRRRRRR\""
                },
                {
                    "title": "Airplane",
                    "desc": "Arms out, Circle around, Leg up, \"Airplane noises\""
                },
                {
                    "title": "Akela's Cheer",
                    "desc": "Boys sit, arms folded across their chests and softly chant, \"A -ke - la!\" The leader can direct tempo and volume"
                },
                {
                    "title": "Alka Seltzer",
                    "desc": "Plop, Plop, Fizz, Fizz, Oh what a relief it is."
                },
                {
                    "title": "All Star",
                    "desc": "Clap and yell to this rhythm: clap, clap, pause, pause, clap, clap, 'These guys are our stars', clap, clap, pause, pause, clap, clap, 'They deserve our best', clap, clap, pause, pause, clap, clap, 'They are our all stars', clap, clap, pause, pause, clap, clap, 'They deserve our best--- YEA ALL STARS.' \r\n"
                },
                {
                    "title": "All Temp-a",
                    "desc": "(1/3rd of the audience is HOT, 1/3rd is WARM and 1/3rd is COLD, when you point to that part of the crowd, they yell their temperature)"
                },
                {
                    "title": "All-star Applause",
                    "desc": "Clap and yell to this rhythm: Clap, clap, pause, pause, clap, clap, 'These guys are our all-stars,' clap, clap, pause, pause, clap, clap, 'They deserve our best,' clap, clap, pause, pause, clap, clap, 'They are our all-stars,' clap, clap, pause, pause, clap, clap, 'They deserve our best -- YEA, ALL-STARS!'"
                },
                {
                    "title": "Alligator",
                    "desc": "Alligator opens his mouth very slowly, then snaps shut very fast. Both hands together start opening from fingers and palm, keeping wrists together, then snap hands together very fast. Repeat 3 times. "
                },
                {
                    "title": "Almost",
                    "desc": "With hands far apart, bring them rapidly together but miss just before meeting each other."
                },
                {
                    "title": "Amateur Electrician",
                    "desc": "Fix light switch then turn on light and get shocked. Say: \"Buzz-z-z-z,\" while shaking arm."
                },
                {
                    "title": "America",
                    "desc": "A-M-E-R-I-C-A Cub Scouts(or Boy Scouts), Cub Scouts USA!"
                },
                {
                    "title": "America",
                    "desc": "Shout U.S.A. and thrust right hand with doubled fist skyward, then shout, \"Hooray, onward and upward!!\""
                },
                {
                    "title": "America",
                    "desc": "Clap three times, yell, 'America, America;' clap three times, yell, 'You are the greatest;' clap three times. Repeat three times."
                },
                {
                    "title": "America America",
                    "desc": "'America, Rah, Rah, Rah!!!!!"
                },
                {
                    "title": "Ant",
                    "desc": "Hold out left arm and with two fingers of right hand walk them up and down arm toward hand while saying \"hup two-three-four.\" When fingers reach opened palm, grab them and say: \"Gotcha!\""
                },
                {
                    "title": "Ant",
                    "desc": "Dance around like you have ants in your pants while slapping at your legs."
                },
                {
                    "title": "Anteater",
                    "desc": "Walk around and spy an anthill, bend at the waist and say; SUURRP,SLUUURP."
                },
                {
                    "title": "Anti-litter",
                    "desc": "\"Every litter bit hurts!\""
                },
                {
                    "title": "Applaud and Cheer",
                    "desc": "When you raise your right hand, the audience is to applaud. When you raise your left hand, they will cheer. When you raise both hands they will do both at the same time. Do the actions quickly and alternate."
                },
                {
                    "title": "Applause for Food",
                    "desc": "Rub stomach and say: \"Yum, Yum!\""
                },
                {
                    "title": "Applause No One Has Ever Heard, The",
                    "desc": "Bring hands together but don't hit."
                },
                {
                    "title": "Apple",
                    "desc": "Get out your apple, pretend to shine it on your shirt, look it over, open your mouth, breathe on it, pretend to shine it again, then take a big bite out of it. Say, 'Yum, yum.'"
                },
                {
                    "title": "Apple Pie",
                    "desc": "Grab a pretend pie, take a huge bite and spit it out and yell, \"Phooey, Phooey, this pie is rotten!!!\""
                },
                {
                    "title": "Archeologist",
                    "desc": "I say, I think I've found one just over here."
                },
                {
                    "title": "Archeologist's",
                    "desc": "Divide the group into two. \r\nLEFT SIDE yells'Shovel!\r\nRIGHT SIDE yells'Sift!\r\nRepeat three times.\r\nLEADER yells'Stop!\r\nALL yell'We finally found something!"
                },
                {
                    "title": "Archery",
                    "desc": "Mimic shooting an arrow, then call out, \"Bull's Eye!\""
                },
                {
                    "title": "Arches, Bryce & Zion Cheer",
                    "desc": "Say, 'Large, spectacular, colorful, amazing, wonderful, marvelous!'"
                },
                {
                    "title": "Arizona",
                    "desc": "\"Yucca! Yucca! Yucca! Yucca!\""
                },
                {
                    "title": "Arizona Cheer",
                    "desc": "I'm an Arizona, Arizona, Arizona star And I come from the west where the Cowboys are. I can ride 'em, I can rope 'em I can show how its done, I'm a rootin' tootin' cowboy with my six-shooting gun. Bumbadadum, bang bang! "
                },
                {
                    "title": "Around The World",
                    "desc": "Everyone stand up and claps while turning around 180 degrees."
                },
                {
                    "title": "Arrow Of Light",
                    "desc": "Hold your hands out in front of your left side. Make an arc by moving your hands over your head to your right side while saying \"Whoosh\"."
                },
                {
                    "title": "Arrow of Light, The",
                    "desc": "Hold your hands out to your left side. Make an arc by moving your hands over your head to your right side while you say \"WHOOOOOSH\"."
                },
                {
                    "title": "Arrow Point",
                    "desc": "Pretend to shoot bow and arrow. As you release the arrow say \"Twang\"."
                },
                {
                    "title": "Artillery",
                    "desc": "Begin slowly with the flats of your palms and increase in speed: then slow down until finally the last time the hands are not brought together."
                },
                {
                    "title": "Artillery",
                    "desc": "Have everyone stand at attention. Now have them take a half step forward and grasp the cannon's lanyard. Let them jerk it backward and utter a swishing sound. Then all give a loud 'BOOM' at the same time covering their ears. "
                },
                {
                    "title": "Astronaut",
                    "desc": "Countdown, 10 ' 1!! BLASTOFF!"
                },
                {
                    "title": "Audience",
                    "desc": "Stand, clap hands and shout 'Bravo! Bravo! Encore!'"
                },
                {
                    "title": "Augie Augie Augie",
                    "desc": "The goal of this one is simple -- to see which group can be the loudest. This was a great cheer in the summer of 1998 at Ingersoll. We had the boys sheltered in low ravines because of a tornado, and we yelled it back and forth. It was very cool. Here it goes'\r\n"
                },
                {
                    "title": "Auto Mechanic",
                    "desc": "Say \"Wrench, socket, hammer.\"Say \"OUCH,\"while sticking your thumb in your mouth."
                },
                {
                    "title": "Avon Lady",
                    "desc": "Point a forefinger and shout, \"Ding, Dong!\""
                },
                {
                    "title": "Eagle",
                    "desc": "Lock thumbs and flutter fingers like wings and shout 'Cree, cree!'"
                },
                {
                    "title": "Earthquake",
                    "desc": "Shake a little here, shake a little there, shake a little, shake a little everywhere."
                },
                {
                    "title": "Eating Pie",
                    "desc": "Yummy, yummy, yummy"
                },
                {
                    "title": "Echo",
                    "desc": "\"Well done, well done, well done!\" Say as if echoing back."
                },
                {
                    "title": "Echo",
                    "desc": "Divide group in half. Have the first section clap a rhythm and the second section repeat it only softer. Then first section repeats even softer. Continue until no clapping is heard."
                },
                {
                    "title": "Echo",
                    "desc": "Divide group in half first section says a phrase (like \"That's Great!\") and the second section repeats it only softer. You  can make the echo last longer by dividing the group into as many sections as want."
                },
                {
                    "title": "Echo Cheer",
                    "desc": "Have one-half of the group holler out a cheer, and the other half be the echo, giving the cheer repeatedly fainter and fainter."
                },
                {
                    "title": "Echo Cheer",
                    "desc": "Everyone shouts, 'Akela!\" then repeats the word, 'Akela\" several times, each time getting softer like an echo.(Instead of 'Akela\", substitute 'Cub Scouts\", 'Do Your Best\", the name of your Webelos patrol, or any other appropriate phrase.)"
                },
                {
                    "title": "Echo Cheer",
                    "desc": "The audience is in two lines. One side shouts, 'How! How! How!' The other side whispers, 'How! How! How!'"
                },
                {
                    "title": "Egg Beater",
                    "desc": "Hand crank (wave,) other hand on head, squat to knees, wiggle knees."
                },
                {
                    "title": "Egg Beater",
                    "desc": "Bend knees and swing them in and out like beaters while putting hand on top of the head to hold handle and use other hand to turn beater crank. "
                },
                {
                    "title": "Egyptian Clap",
                    "desc": "Clap hands like Jeannie in \"I Dream of Jeannie.' (You do remember that show, I hope!)"
                },
                {
                    "title": "Electricity",
                    "desc": "Place both index fingers together and say \"ZIP ZAP ZOP!\" "
                },
                {
                    "title": "Elevated Clapping",
                    "desc": "As leader raises hand, clap louder, then slowly lower"
                },
                {
                    "title": "Elf",
                    "desc": "In a high pitched voice say, \"Ho, ho, ho!\""
                },
                {
                    "title": "Elves",
                    "desc": "\"Saw, saw, saw\" (make motions like sawing). \"Tap, tap, tap\" (make motions like hammering). \"Paint, paint, paint\" (make motions like painting). \"Merry Christmas!\""
                },
                {
                    "title": "End Of Hike Cheer",
                    "desc": "Throw hands up in the air, yell, \"We made it!\""
                },
                {
                    "title": "Engineer's Applause",
                    "desc": "All stand and say \"WHAT A JOURNEY!'"
                },
                {
                    "title": "Eskimo Cheer",
                    "desc": "Brrrrr-rrr, Brrrrr-rrr."
                },
                {
                    "title": "Eureka Applause",
                    "desc": "Pretend to hold up a test tube in one hand. Pour something into it, then smile and shout, 'Eureka!'"
                },
                {
                    "title": "Everyman a Tiger",
                    "desc": "To keep everyone alert, announce that whenever you shout \"Everyman a Tiger;\" they are to yell \"Everyman a Tiger.\""
                },
                {
                    "title": "Exhausted Yell",
                    "desc": "How TIRED? (Build up a loud HOW, with a soft TIRED and a stretch.)"
                },
                {
                    "title": "Extension Cord Yell",
                    "desc": "Plug it in! Plug it in! Plug it in! Where is the electric? Where is the electric? Where is the electric? Use your muscles! Use your muscles! Use your muscles!"
                },
                {
                    "title": "Extra Applause",
                    "desc": "Extra! Extra! Read all about it! Great Cub Scout Pack. Extra! Extra'"
                },
                {
                    "title": "Dainty Eater Watermelon",
                    "desc": "Cut Watermelon in long thin slices, then pretend you eat it in several large quick bites, then spit out the seeds."
                },
                {
                    "title": "Dancer",
                    "desc": "Have everyone stand up, link arms, and do the Can-Can."
                },
                {
                    "title": "Dasher",
                    "desc": "Slide hands against each other, making loud swishing noises."
                },
                {
                    "title": "Days Of '47 Celebration Days",
                    "desc": "Clap hand and slap lap like galloping horses. "
                },
                {
                    "title": "Dead Cockroach Dance",
                    "desc": "Have everyone lie on their backs on the floor. Extends arms and legs into the air and wave them around while groaning and moaning \"Ahhhhhh!\""
                },
                {
                    "title": "Dead Fish Cheer, The",
                    "desc": "Cubs lie on floor/ground and flop around like a dying fish then lay very, very still."
                },
                {
                    "title": "Deep Sea Diver",
                    "desc": "\"Blurp, Blurp, Blurp\" or \"Blub, Blub\"."
                },
                {
                    "title": "Deep Sea Diver",
                    "desc": "Pretend to put on your diving suit, adjust your helmet, pretend to close face door, and screw the locks in place. Then pretend to jump into the water by jumping one step ahead, pretend to be sinking to the ocean floor, mumbling, \"GLUG, GLUG, GLUG!!!\" Variation: Add the following when you reach the \"bottom\": walk around very stiffly in a circle, then slowly bend over and pick up something and yell: \"I found the TREASURE!!! I found the TREASURE.\""
                },
                {
                    "title": "Den Howl Cheer",
                    "desc": "'Strawberry shortcake, Eskimo pop, Den -, Den _ Always on top!'"
                },
                {
                    "title": "Den Leader",
                    "desc": "\"C'mon Gold! C'mon Blue! C'mon Cubs! C'mon Through!."
                },
                {
                    "title": "Den Leader",
                    "desc": "Ahhhhhh! (Wave hands above head.)"
                },
                {
                    "title": "Den Leader",
                    "desc": "Shout \"C'mon Gold! C'mon Blue! C'mon Cubs! C'mon Through. Chow! Chow! Bow! Wow! (Den Leader's name) Wow! Wow!\""
                },
                {
                    "title": "Den Yell",
                    "desc": "(Cubs form a line and bow) \r\n(Begin with Cubs sitting or squatting) \r\nOur Den is great \r\nOur Cubs are swell. \r\nAll for Den ___ \r\nStand up and yell. \r\n(All Cubs stand and yell the Den number 3 times.)"
                },
                {
                    "title": "Den Yell",
                    "desc": "Chase 'em down the alley, \r\nRun 'em down the street \r\nDen ____ can't be beat. \r\nWe're not like the rest \r\nThere's only one best. \r\nDen ___ , Den ___ , \r\nPut us to the test."
                },
                {
                    "title": "Den Yell",
                    "desc": "(Cubs stand in a circle) \r\nNorth (point), South (point) \r\nEast (point), West (point) \r\nDen ___ (hands on shoulders) \r\nIs the best!"
                },
                {
                    "title": "Den Yell",
                    "desc": "Shout \"Rip, Rap, Rap! Rip, Rap, Ree! Loyal, happy Cub Scouts are we!\""
                },
                {
                    "title": "Den yells",
                    "desc": "Cheers and Applauses \r\nDen Yells \r\n\r\nWe're from Den ____ \r\nCouldn't be prouder. \r\nIf you can't hear us, \r\nWe'll yell a little louder. \r\n\r\n\r\nUnited we stand. \r\nDivided we fall! \r\nDen ____ \r\nIs best of all! \r\n\r\n\r\nLook out! \r\nHere we come. \r\nDen ____ \r\nIs on the run! \r\n\r\n\r\nNorth, South, \r\nEast or West, \r\nDen ____ \r\nIs the best! \r\n\r\n\r\nClap your hands! \r\nStomp your feet! \r\nFor Den ____ \r\nCan't be beat! \r\n\r\n\r\nStarter Cheer \r\n\r\nOn your mark, get set, go! (Clap hands \r\nloudly on go.) \r\n\r\nMotorcycle Cheer \r\n\r\nStart by pumping the foot down to get the \r\ncycle going, then rev up and take off with \r\nhands on handlebars yelling \"VAROOM!\" \r\n\r\nWheely Cheer \r\n\r\n\"That was Wheely, Wheely, Wheely Good!\" \r\n\r\nFlat Tire Cheer \r\n\r\nPretend you're driving a car: chug-chugputt- \r\nputt-BANG\" then - SSSSSSS like air \r\ncoming out. Start out loud and get softer. \r\n\r\nSPARKLERS \r\nJokes/Run-ons \r\n\r\nWhy did the Cub Scout take peanut butter \r\nbread with him in the street? \r\nAnswer: He was looking for traffic jam. \r\n\r\n\r\nA Cub Scout walks across stage carrying a car \r\ndoor (imaginary). \r\nWhy are you carrying a car door? \r\nThe Cub Scout demonstrates as he says, \"So \r\nthat I can roll down the window when it gets \r\nhot!\" \r\n\r\n\r\nWhy can't bicycles go as fast as cars? \r\nAnswer: Because they are \"two\" tired. \r\n\r\n\r\nWhat did the jack say to the car? \r\nAnswer: \"Can I give you a lift?\" \r\n\r\n\r\nWhat part of a car is the laziest? \r\nAnswer: The wheels. They are always tired. \r\n\r\n\r\nWhat would happen if everyone bought a pink \r\ncar? \r\nAnswer: We would be a pink car nation. \r\n\r\n\r\nCub Scout #1: Did you hear about the wooden \r\ncar with wooden wheels and wooden engine? \r\nCub Scout #2: It wooden go! \r\n\r\n\r\nDad: Son, here are the keys to my magic car. \r\nCub Scout: Is it really magic? \r\nDad: Yes, one speeding ticket and it will \r\ndisappear! \r\n\r\n\r\nLeader: Knock, knock. \r\nScout: Who's there? \r\nLeader: Noah. \r\nScout: Noah, who? \r\nLeader: Noah how to build a fast pinewood \r\nderby car? \r\n\r\n\r\nCub Scout #1: What happened to the frog's car \r\nwhen it parked in the handicapped spot? \r\nCub Scout #2: What? \r\nCub Scout #1: It got toad! \r\n\r\n\r\n\f"
                },
                {
                    "title": "Den Yells",
                    "desc": "A Den yell is a little statement that each den can make up and use whenever it is appropriate. It can build Den spirit and morale. It gives each boy a chance to partici- pate at Pack meetings. By working on a Den Yell togeth- eq the boys can build team work and cooperation. \r\n"
                },
                {
                    "title": "Desert Cheer",
                    "desc": "Named after the yucca plant. Shout three times, 'Yucca, yucca, yucca!' "
                },
                {
                    "title": "Desert Rat",
                    "desc": "Clutch throat and say: \"HOW, HOW, HOW, WATER, WATER, GLUG, GLUG, GLUG.\" Wipe your mouth and sigh \"AHHHHhhhhhh, I sure feel and look better.!!!\" \r\n"
                },
                {
                    "title": "Desert Yell",
                    "desc": "\"Yucca, Yucca, Yucca !!\""
                },
                {
                    "title": "Detergent cheer",
                    "desc": "Is it Tide? NO! Is it Cheer? NO! Is it All? NO!\r\nIs it FAB? YES! Fabulous!"
                },
                {
                    "title": "Dinner",
                    "desc": "Rub Tummy and say, \"Yum, Yum, Good!\""
                },
                {
                    "title": "Dinner Bell",
                    "desc": "Rotate arm in a large circle and say \"Clang, Clang, Clang\" with each circle."
                },
                {
                    "title": "Dinosaur Watermelon",
                    "desc": "Pick up melon, toss in the air, eat in one bite, swallow."
                },
                {
                    "title": "Dip Stick",
                    "desc": "Pretend to get under the hood of your car, find the dip stick, pull it out, and say, \"OH, NO, YOU'RE A QUART LOW!!!\" \r\n"
                },
                {
                    "title": "Disappearing Rabbit",
                    "desc": "Hold hands to the side of your head to approximate bunny \r\nears and shout, \"Poof! Poof! Poof!\""
                },
                {
                    "title": "Disc",
                    "desc": "Say, 'A bit, a byte of electronic information'. "
                },
                {
                    "title": "Disco Mosquito Cheer",
                    "desc": "Slap 4 times'once on each cheek, once on each arm, while singing \"Oh, oh, oh, oh!\" Then point finger up and down while singing, \"Staying alive! Staying alive!\""
                },
                {
                    "title": "Discovery",
                    "desc": "Place hand above eyes and pretend to scan the horizon. 'Ah-h-h what's that I see?'"
                },
                {
                    "title": "Diver's Cheer",
                    "desc": "Pretend to walk to the end of the diving board, bounce a few times, look down and say \"No way!\""
                },
                {
                    "title": "Diver's Cheer",
                    "desc": "Pretend to jump off the diving board and say \"Kersplash! PERFECT!\""
                },
                {
                    "title": "Diver's Cheer",
                    "desc": "Pretend to walk to the end of the diving board, bounce a few times, look down and say 'No way!' "
                },
                {
                    "title": "Do a Good Turn",
                    "desc": "Have the group stand up to applaud. They clap once, turn a 1/4 turn and clap again, turn another 1/4 turn and clap again, and continue like that until they have completed a full turn."
                },
                {
                    "title": "Do What I do",
                    "desc": "The orders are, \"When I bring my hands together, you do. When I do not, you must not either.\" Then go through several false motions to see if you can catch the group napping."
                },
                {
                    "title": "Doctor",
                    "desc": "Open mouth, stick out tongue, say Ahhhhhhhhh!"
                },
                {
                    "title": "Door",
                    "desc": "Stand up and motion a closing door and yell 'SLAM'"
                },
                {
                    "title": "Doorbell",
                    "desc": "\"Ding dong\" after pressing imaginary button."
                },
                {
                    "title": "Double How",
                    "desc": "Say two \"how\" almost together. \"How, how.\""
                },
                {
                    "title": "Double Ice Cube",
                    "desc": "Make an ice cube with a thumb and index finger of each hand, saying, 'TOOOOO COOOOOOL!'"
                },
                {
                    "title": "Double Ice Cube Circle",
                    "desc": "Make an ice cube with a thumb and index finger of each hand, make a large round motion of with 'ice cubes,' saying, 'WAAAAY COOOOOOOL!'"
                },
                {
                    "title": "Doubtful Yell",
                    "desc": "How come? (Build up on the HOW COME? Build up on the HOW to a big volume and then cut it off with a soft \"COME?\")"
                },
                {
                    "title": "Dragon Yell",
                    "desc": "\"ROAR, HISSSS, ROAR, HISSSS, ROAR!\""
                },
                {
                    "title": "Dreamer",
                    "desc": "Pretend to snore and wake up. Stretch and say: WOW, that was a Great Dream !!!"
                },
                {
                    "title": "Dreidel Cheer",
                    "desc": "Spin a dreidel on a table or desk. When it lands, all yell \"Happy Holiday!\""
                },
                {
                    "title": "Drowning Cheer",
                    "desc": "Pinch nose and say, 'Glub, glub, glub'. (particularly effective after a real 'groaner' of a skit)"
                },
                {
                    "title": "Drum",
                    "desc": "1. Everyone stands and bends slightly at the waist, smacking their legs to the rhythm while saying \"Rat-a-tat-tat, Rat-a-tat-tat, Rat-a-tat-tat.\" \r\n"
                },
                {
                    "title": "Drum",
                    "desc": "On legs make a rat-a-tat sound 3 or 4 times, then hit the stomach two times and say \"Boom, Boom\"."
                },
                {
                    "title": "Drum Applause",
                    "desc": "Slap your legs and go 'Rat-a-tat-tat' three times and then slap your stomach twice and say, 'Boom, boom.'"
                },
                {
                    "title": "Drum Cheer",
                    "desc": "On legs make a rat-a-tat sound 3 or 4 times, then hit the stomach two times and say \"Boom, Boom\"."
                },
                {
                    "title": "Duck",
                    "desc": "Squat down and tuck hands into arm pits forming wings, \"Duck walk\" saying \"QUACK, QUACK, QUACK\"."
                },
                {
                    "title": "Dumbo",
                    "desc": "Put hands behind ears, palms open forward and wave as if flying by the ears. "
                },
                {
                    "title": "DYB",
                    "desc": "All together on signal from Leader, say, \"D.Y.B., D.Y.B.\" (stands for Do Your Best)"
                },
                {
                    "title": "DYB (Do Your Best)",
                    "desc": "Leader chants \"DYB, DYB, DYB, DYB, Do Your Best.\" Group responds with \"We'll DOB, DOB, DOB, Do Our Best.\" Repeat two times."
                },
                {
                    "title": "DYB Click",
                    "desc": "Pretend to operate a telegraph, clicking \"dash-dot-dot, dash-dot-dash-dash, dash-dotdot-dot...Do Your Best!'"
                },
                {
                    "title": "False Motion Clap",
                    "desc": "Applaud only when I do! (Give several false motions.)"
                },
                {
                    "title": "Family Picnic Applause",
                    "desc": "Pretend to pick ants out of food and say, \"He didn't eat very much.\""
                },
                {
                    "title": "Fanfare Cheer",
                    "desc": "Raise hands like an orchestra leader. Then lower hands and audience says, 'Ta-da! ' three times as you direct them. "
                },
                {
                    "title": "Farewell",
                    "desc": "Hold one hand above the eyes as though looking into the distance while slowly waving the other hand."
                },
                {
                    "title": "Farrah Faucet",
                    "desc": "In a high voice: 'Hip, hip, hurray' Wiggle your hips from side to side, one hand on hips and the other held in front of you with wrist relaxed. "
                },
                {
                    "title": "Faucet",
                    "desc": "Using one hand, pretend to gently turn off a faucet while saying \"Drip, drip, drip\". Stop turning off the faucet with your hand, grab an imaginary wrench, and give the faucet a hefty turn, while continuing to say drip, drip, drip. When you stop turning the wrench, leap back in horror as you watch the imaginary faucet break -- saying, \"gush, gush, gush\""
                },
                {
                    "title": "FBI & CIA",
                    "desc": "One side of room says FBI the other says CIA when you point to them. Mix it up."
                },
                {
                    "title": "Fer denk'm cheer",
                    "desc": "Hold out hand with a thumbs up sign and say \"Fer denk'm, good on ya, mate\""
                },
                {
                    "title": "Ferris Wheel",
                    "desc": "Move right arm in a large circle, on the upswing say:\"OHHHHH!\" On the downswing say: \"AHHHHH!\" Variation: Insert the following between the ooh and aah above: when you are at the top, hold arm in place and rock back and forth and hold other hand over the eyes and say: \"GEE, YOU CAN SURE SEE A LOT FROM UP HERE!!!"
                },
                {
                    "title": "Fingerprints",
                    "desc": "Pat all 10 of your fingerprints together several times as loud as you can."
                },
                {
                    "title": "Fire",
                    "desc": "Make the noise of the fire, \"Crackle, crackle, pop\" (moving fingers over head.) Make noise of fire engine, \"Whee, whee,\" act like holding hose, putting out the fire. Have fingers and hands flutter down with \"Shhhhhhh, shhhhhhh\" noise."
                },
                {
                    "title": "Fire",
                    "desc": "Shout \"Call 911! Call Smokey the Bear! Our fire's out of control!\" "
                },
                {
                    "title": "Fire",
                    "desc": "Hold hands out in front of you as if in front of a campfire, sigh and say, \"I feel warm all over!\" "
                },
                {
                    "title": "Fire",
                    "desc": "Gather wood, lay down in front of you, take match from pocket, strike match, light wood. Say \"ooh A ooh!\" "
                },
                {
                    "title": "Fire Bucket Brigade Cheer",
                    "desc": "Pretend to pass buckets of water, throw water on fire going 'swwooossshh.'"
                },
                {
                    "title": "Fire Engine",
                    "desc": "Divide the group into four sections: (1) Rings the bell fast, DING; (2) Honks the horn, HONK, HONK, HONK; (3) Sounds the siren, Rrrr, Rrrr, Rrrr; (4) Clangs the clanger, CLANG, CLANG, CLANG. Have all four groups do their parts together."
                },
                {
                    "title": "Firecracker",
                    "desc": "Strike a match on the leg, light the firecracker, make noise like fuse \"sssss\", then yell loudly \"BANG!!\""
                },
                {
                    "title": "Firecracker Cheer",
                    "desc": "Everyone stands. With one hand they grab an imaginary match from the back pocket and light the imaginary firecrackers that they are holding in their other hand. They throw it on the ground and dance around while clapping their hands real loud."
                },
                {
                    "title": "Fireman Yell",
                    "desc": "Water, Water, Water! More, More, More !"
                },
                {
                    "title": "Fireman's",
                    "desc": "(make siren sounds, then roll out the hose)  YESSSSSSSSSSS!"
                },
                {
                    "title": "Fireworks",
                    "desc": "Skyrocket! WHEEEEE (Whistle) --Boom! Aah! Pack___Pack___Pack___! "
                },
                {
                    "title": "Fireworks Cheer",
                    "desc": "Everyone stank and say loudly, \"Skyrocket, wheee (whistle at this point)... then yell \"Boom, boom!'"
                },
                {
                    "title": "Fireworks Cheer",
                    "desc": "Take match, strike it (\"SCRATCH\"), tight fireworks (\"SSSHH\"), takes off (\"WHOOSH\"), explodes (\"BOOM\"), impressed by the pretty sight (\"AAAHHH\")."
                },
                {
                    "title": "Fireworks Cheer",
                    "desc": "\"pssss...SSSSS (grows louder) BOOM!\"\""
                },
                {
                    "title": "Fish",
                    "desc": "Pretend to a fish by it's tail with one hand with one hand and plug your nose with the other and say:\"PEEE-U-EEEEE!!!!\"\r\n"
                },
                {
                    "title": "Fish",
                    "desc": "Suck in cheeks, form an O with mouth. Moving it like a fish does without making a sound."
                },
                {
                    "title": "Fish",
                    "desc": "How, how, how! Flop, flop, flop! (Flip flop motion with the hands)"
                },
                {
                    "title": "Fish",
                    "desc": "Open and close mouth several times with no sound."
                },
                {
                    "title": "Fish",
                    "desc": "Suck in your cheeks, bug out your eyes, wiggle your top and bottom lips up and down"
                },
                {
                    "title": "Fish",
                    "desc": "Pucker up lips like you are going to kiss and make kissing sound."
                },
                {
                    "title": "Fish Lips",
                    "desc": "Suck in your cheeks and form an \"O\" with your mouth. Then move your lips as if you were a fish!"
                },
                {
                    "title": "Fish Yell",
                    "desc": "Open and close mouth several times without making any sounds. "
                },
                {
                    "title": "Fisherman",
                    "desc": "Pretend to reel out some line, let it drift, yank your pretend pole back and start to reel in the fish. Struggle with it for a short time and say: \"I'VE GOT IT!!! I'VE GOT IT!!!\""
                },
                {
                    "title": "Fisherman",
                    "desc": "\"The fish I missed was this long, no this long, well, maybe this long.\""
                },
                {
                    "title": "Fishing",
                    "desc": "Pretend to cast and reel in 3 times and then say something like 3 feet as you hold your hands apart to show how big the fish is."
                },
                {
                    "title": "Fishing",
                    "desc": "Pretend to cast and reel in fish 3 times. Then stretch your arms as far apart as you can get them, holding your fingers up to show how long the fish was and say, \"it was this Loooooong, but it got away!\""
                },
                {
                    "title": "Fishing At The Jordan River",
                    "desc": "Pretend to fish, catch something, pull it in with great effort. A strange kind of fish appears, round, black with 'SARDINE' printed on the side. Everyone say 'sardine' three times. "
                },
                {
                    "title": "Fitness",
                    "desc": "Clap your hands (clap twice.) Stomp your feet (stomp twice.) Heave a sigh (say Whew-w-w,) take your seat (everyone sit down.)"
                },
                {
                    "title": "Flag Cheer",
                    "desc": "Pretend to raise flag by alternately raising hands over head with grasping motions. Then stand back and salute and say, \"Aaaah.'"
                },
                {
                    "title": "Flamenco Cheer",
                    "desc": "Stand on one leg'one arm up, and the other down'snap fingers and yell ole!"
                },
                {
                    "title": "Flaming Arrow",
                    "desc": "Take arrow from quiver. Light arrow, Shoot arrow. Start hitting yourself and yell, \"Yeow.\""
                },
                {
                    "title": "Flamingo Cheer",
                    "desc": "Stand on one leg ' then clap hands with stiff arms"
                },
                {
                    "title": "Flap Jack",
                    "desc": "Pretend to pry a spatula under a pancake, then throw it up into the air and nod your head three times up and down as if watching the pancake flip and then catch it with the spatula and say, 'Wow!'"
                },
                {
                    "title": "Flat Tire",
                    "desc": "Bend down, attach pump to tire, lift and push on pump three times, then say, \"BOOM!\" and jump back in surprise."
                },
                {
                    "title": "Flat Tire Cheer",
                    "desc": "Say, 'Flop, flop, flop, where's the spare?'"
                },
                {
                    "title": "Flat Tire Cheer",
                    "desc": "Start with a very loud 'Sass sass s s sass ' and gradually fade it out. "
                },
                {
                    "title": "Flat Tire Cheer",
                    "desc": "Pretend you're driving a car: chug-chugputt-putt-BANG\" then - SSSSSSS like air coming out. Start out loud and get softer."
                },
                {
                    "title": "Flea",
                    "desc": "Raise both arms above your head. Bring your thumb and first finger nails together, snapping them and shouting 'you can never find a Dog when you need one!!!'"
                },
                {
                    "title": "Flea Clap",
                    "desc": "Everyone raises hand over the head. Applause is accomplished by clicking the nails of the thumbs and forefingers of each hand together."
                },
                {
                    "title": "Flea Flip",
                    "desc": "Flick your middle fingernail with your thumbnail. "
                },
                {
                    "title": "Flintstone",
                    "desc": "Shake hands over the head and say, \"Yabbadabba-doo\"."
                },
                {
                    "title": "Flintstone",
                    "desc": "In Fred Flintstone manner yell 'Weelll Dooooonne!' (like Wilmahhhhhh)"
                },
                {
                    "title": "Floating Down The Jordan River",
                    "desc": "Each row sways a different way and everyone sings 'Sailing, sailing over the bounding main.' "
                },
                {
                    "title": "Flower",
                    "desc": "Like a flower blooming, raise part way in your chair, look around and thumb jump up yelling, \"Sproooooong!\""
                },
                {
                    "title": "Flute",
                    "desc": "Pretend to be playing the flute and give two big toots."
                },
                {
                    "title": "Flying Elephant",
                    "desc": "\"Dumbo, dumbo, dumbo\""
                },
                {
                    "title": "Flyswatter",
                    "desc": "Move your head around as if watching a fly circling. Suddenly clap once and shout, \"Got it!\""
                },
                {
                    "title": "Foil Dinner",
                    "desc": "\"RAW, RAW, RAW !!\""
                },
                {
                    "title": "Foil Dinner",
                    "desc": "'Sizzle, Sizzle, Sizzle, MMMMMMMMMMM Yummy'"
                },
                {
                    "title": "Follow the Leader",
                    "desc": "Give the order, \"When I applaud, you applaud; when I don't, you don't.' Go through several false motions to see if you can catch someone."
                },
                {
                    "title": "Follow The Leader",
                    "desc": "Right hand up - applaud; left hand up - cheer; both hands up - applaud and cheer."
                },
                {
                    "title": "Fonz",
                    "desc": "Make a fist thumbs pointing up with each hand in front of you and say \"Aaaaaayyyy.\"\r\n"
                },
                {
                    "title": "Food",
                    "desc": "Rub tummy and say \"Yum, yum, yum!\" "
                },
                {
                    "title": "Football Cheer",
                    "desc": "Pretend to toss a football to a teammate. Watch as he runs with the ball and makes a touch down, and shout \"Touch down!\" while putting arms straight up as a referee would."
                },
                {
                    "title": "Football Wave",
                    "desc": "Start at one side and have everyone stand and sit."
                },
                {
                    "title": "For Goodness Sake (For a really corny skit)",
                    "desc": "Cheer Leader: Give me an OFER ! \r\nCircle: OFER ! \r\nCheer Leader: Give me an OFER ! \r\nCircle: OFER ! \r\nCheer Leader: Give me an OFER ! \r\nCircle: OFER ! \r\nCheer leader: What have we got ? \r\nCircle: OH FER GOODNESS SAKE !"
                },
                {
                    "title": "For the Birds (For a 'dumb' skit)",
                    "desc": "Cheer Leader: That calls for a High Flying Cheer. Was it a ONE ? \r\nCircle: NO ! \r\nCheer Leader: Was it a TWO ? \r\nCircle: NO ! \r\nCheer Leader: Was it a THREE ? \r\nCircle: NO ! \r\nCheer Leader: Was it a FOUR ? \r\nCircle: YES ! FOR THE BIRDS !"
                },
                {
                    "title": "Fred Flintstone",
                    "desc": "Shake hands over head and yell \"Yabba-dabba-doo!\" "
                },
                {
                    "title": "Freight Train",
                    "desc": "This applause simulates a freight train, in the distance, approaching the station, and then fading off again. Use a four beat handclap with the first beat of each grouping of four loud and then the following three softer beats. The train can speed up, slow dwon, stop, start with varying tempo. Throw in a few train whistles for sound effects."
                },
                {
                    "title": "Friendship",
                    "desc": "Have your neighbor put his left hand out to his side, and you clap it with your right hand; meanwhile you are also holding out your left hand and your other neighbor is clapping with his right hand, etc. "
                },
                {
                    "title": "Frog",
                    "desc": "Gribbit, Gribbit."
                },
                {
                    "title": "Frog",
                    "desc": "'Luv' it, luv' it, luv' it!'"
                },
                {
                    "title": "Frog",
                    "desc": "Act like a toad looking for dinner. Say, \"Ribbit, ribbit\" Pretend to snatch a fly with your tongue and gulp loudly."
                },
                {
                    "title": "Frog Mating Call",
                    "desc": "Spin a yarn about a frog native to your area and then tell the group that they can simulate its mating call."
                },
                {
                    "title": "Frosty",
                    "desc": "Fold your arms across your chest and shiver and say \"BRRR, BRRR, BRRR."
                },
                {
                    "title": "Frosty The Snowman",
                    "desc": "Say, Thumpity, thump, thump!' twice."
                },
                {
                    "title": "Frozen Cub",
                    "desc": "Wrap your arms around yourself and say 'Brrrrrrr! '"
                },
                {
                    "title": "Fruit Salad",
                    "desc": "Eat a large piece of pretend watermelon, spit out the seeds, pretend to have a piece of cantalope, spit out the seeds, then have a cherry, place a finger in your cheek and give one small pop, as if spitting out the pit of the cherry.\r\n"
                },
                {
                    "title": "Funny Face Cheer",
                    "desc": "On signal, everyone make the funniest face they can."
                },
                {
                    "title": "Babbling Brook",
                    "desc": "Babble, babble, babble'"
                },
                {
                    "title": "Baby Doll",
                    "desc": "\"mama, mama, mama\""
                },
                {
                    "title": "Backpackers",
                    "desc": "Pretend to pick up a backpack and put it on your back. Lean over saying 'Heavyweight stuff!'"
                },
                {
                    "title": "Backwoods",
                    "desc": "Pretend to slap at mosquitoes that are landing (and biting) all over your body."
                },
                {
                    "title": "Backyard Barbecue",
                    "desc": "Take in deep breath through nose, as if sniffing, then say, 'Ah-h-h-h,'"
                },
                {
                    "title": "Backyard Pool",
                    "desc": "Don't stand up for this cheer. Lean back in your floating pool chair, take sip of your tall cool drink and say, 'Ahhh, this is the life.' "
                },
                {
                    "title": "Backyard Serenade",
                    "desc": "Assign different groups a different animal sound, when you raise your hand, each group is to make their sound at the same time."
                },
                {
                    "title": "Baden-Powell",
                    "desc": "Stand with hands behind and then nod head as if back in parade saying \"Yes\" rest position, Smile."
                },
                {
                    "title": "Bagheera",
                    "desc": "Let out a great ROAR!"
                },
                {
                    "title": "Ball",
                    "desc": "Hold any kind of ball in your hands. When you are holding the ball, everyone is quiet. When the ball leaves your hands, everyone goes wild and cheers. Try bouncing the ball, faking a throw, or tossing it to another person."
                },
                {
                    "title": "Balloon",
                    "desc": "Make a fist. Put the thumb in your mouth and blow. Slowly open fingers to resemble enlarging balloon. Then flip out hand yelling, \"Pop!' Or have air escape from mouth of balloon in a hiss."
                },
                {
                    "title": "Balloon",
                    "desc": "Put hands to mouth and blow. As you blow, put hands out in circle getting bigger, then yell \"BANG!\". "
                },
                {
                    "title": "Balloon Applause",
                    "desc": "Put hands to mouth and blow. As you blow, expand hands and then fling them out with a big \"BANG!\""
                },
                {
                    "title": "Baloney",
                    "desc": "Clap \"Below Knee'"
                },
                {
                    "title": "Baloo",
                    "desc": "Give a great big bear growl; you can also turn one quarter turn with each growl (four repetitions)."
                },
                {
                    "title": "Banana",
                    "desc": "Peel a banana, then Splat! it with your hand"
                },
                {
                    "title": "Banana",
                    "desc": "Peel banana, eat banana, throw peel over shoulder, rub tummy and say \"HMMM! GOOD!'"
                },
                {
                    "title": "Banana",
                    "desc": "BANANAS OF THE WORLD UNITE (place hands together above head), \r\nPEEL TO THE LEFT (lower left hand to your side) \r\nPEEL TO THE RIGHT (lower right hand to your side) \r\nPEEL DOWN THE CENTER (place both hands above head again and lower simultaneously) \r\nAND UMPH TAKE A BITE! (Snap arms together in a giant bite) \r\nGO BANANAS! GO, GO BANANAS! (while dancing around)"
                },
                {
                    "title": "Banana",
                    "desc": "Make motions of peeling the banana and then eating it, then say \"spit out the seeds\", but everyone knows that bananas don't have seeds."
                },
                {
                    "title": "Banana Cheer",
                    "desc": "BANANAS OF THE WORLD UNITE (place hands together above head), \r\nPEEL TO THE LEFT (lower left hand to your side) \r\nPEEL TO THE RIGHT (lower right hand to your side) \r\nPEEL DOWN THE CENTER (place both hands above head again and lower simultaneously) \r\nAND UMPH TAKE A BITE! (Snap arms together in a giant bite) \r\nGO BANANAS! GO, GO BANANAS! (while dancing around)"
                },
                {
                    "title": "Banana Squish",
                    "desc": "Peel banana as you say \"swish, swish, swish\" and then squirt the banana at the audience."
                },
                {
                    "title": "Band",
                    "desc": "1. Have everyone get out an instrument and pretend to play it, using vocal sounds. 2. Have them play a familiar tune like: ' \"76 Trombones\" ' \"For He's a Jolly Good Fellow.\""
                },
                {
                    "title": "Band Practice Cheer",
                    "desc": "Tell everyone that on the count of 3 they are to play their own band instrument until the conductor gives the \"stop playing\" signal. Give examples, such as drum, bugle, trumpet, flute, trombone, etc. Count to 3 and conduct the band for a few seconds."
                },
                {
                    "title": "Bandana Cheer",
                    "desc": "Throw a bandana in the air with instructions for the audience to clap and cheer until it hits the floor. Vary the length of the noise, with a long throw, a short throw, or no throw at all."
                },
                {
                    "title": "Banquet Cheer",
                    "desc": "\"C'mon gold! C'mon blue! C'mon Cub Scouts! That's me and you!\""
                },
                {
                    "title": "Banquet Cheer",
                    "desc": "C'mon Gold! C'mon Blue! C'mon Cubs! C'mon through chow, chow, chow, chow!"
                },
                {
                    "title": "Banquet Cheer",
                    "desc": "Everyone holds stomach, smiles, and says \"Hmmmmm, Good\"."
                },
                {
                    "title": "Banquet Yell",
                    "desc": "C'mmon Gold! C'mon Blue! C'mon Cubs! C'mon through! Chow! Chow! Bow! Wow! (Cubmaster's name) Wow! Wow!"
                },
                {
                    "title": "Barber",
                    "desc": "Alternately strike the back then the palm of one hand against the palm of the other as though sharpening a razor on a strap."
                },
                {
                    "title": "Barber Shop",
                    "desc": "Make a razor sharp motion on the palm of your left hand with your right hand, turning your right over with each stroke. Don't forget the barber's flourishes."
                },
                {
                    "title": "Barker's Yell",
                    "desc": "Showtime, Showtime!"
                },
                {
                    "title": "Barkers",
                    "desc": "Yell: \"Show time, show time. See the Greatest Show on Earth. Show time, show time\""
                },
                {
                    "title": "Barn Cat",
                    "desc": "You're PURRRRRR-Fect!!"
                },
                {
                    "title": "Barnyard",
                    "desc": "Think of a barnyard animal and when I raise my hand you make the sound when I lower it you stop. Raise and lower hand several times. Repeat three times."
                },
                {
                    "title": "Barnyard Serenade",
                    "desc": "He haw, he haw, he haw"
                },
                {
                    "title": "Baseball",
                    "desc": "Pretend to throw a ball up and pretend to hit it with the bat. After you hit the ball, pretend to follow the ball with your eyes and then shout: \"Home run!\""
                },
                {
                    "title": "Baseball",
                    "desc": "Get out your bat and take a swing and yell 'PLAY BALL'"
                },
                {
                    "title": "Baseball",
                    "desc": "Using a pretend bat, take two practice swings and then say \"Crack\" \"Look at that ball go!\""
                },
                {
                    "title": "Baseball Cheer",
                    "desc": "Pretend to throw a baseball up, then swing three times and holler, \"You're out!\""
                },
                {
                    "title": "Basketball",
                    "desc": "Pretend to Bounce your basketball and say DRIBBLE, DRIBBLE, DRIBBLE, DRIBBLE."
                },
                {
                    "title": "Batman",
                    "desc": "Say \"Zap, Pow, Zowie.\""
                },
                {
                    "title": "Baton Throwing Cheer",
                    "desc": "Have everyone hold their invisible batons in their hands and on your signal toss them into the air and then try to catch them."
                },
                {
                    "title": "Be Prepared",
                    "desc": "Be Prepared, Be Prepared, Shout it out, Shout it out. Pioneer, Voyageur, Pathfinder Scout !"
                },
                {
                    "title": "Beach Cheer",
                    "desc": "Divide the audience into three groups. When you point to group one, they yell \"Sand!\" When you point to group two, they yell, \"Surf!\" When you point to group three, they yell, \"Sun!\""
                },
                {
                    "title": "Bear",
                    "desc": "Make a loud growling sound."
                },
                {
                    "title": "Bear",
                    "desc": "Bend your knees, show your claws and jump forward as you growl."
                },
                {
                    "title": "Bear",
                    "desc": "Give a big bear growl to each of the 4 points of the compass. In other words, give four scowls as you turn in a circle, stopping at each growl."
                },
                {
                    "title": "Bear Cheer",
                    "desc": "Give a great big 'GRRRRRRRROWL!!!'"
                },
                {
                    "title": "Bear Hug",
                    "desc": "Put arms around your own shoulders and give a big hug. "
                },
                {
                    "title": "Bear Yell",
                    "desc": "'GROWL, GROWL, GROWL'."
                },
                {
                    "title": "Beatnick",
                    "desc": "Snap fingers to a jazzy beat."
                },
                {
                    "title": "Beaver",
                    "desc": "Bend lightly at the waist and stick rump out in one direction and head in the other. Slap rump with one hand while gnashing tree with teeth."
                },
                {
                    "title": "Beaver",
                    "desc": "Start by yelling, \"Papa Beaver\" and clap hands with straight arms and large swing for the beaver's tail hitting the water. Then announce, \"Mama Beaver\" and put base of each hand together and clap. Finally yell, \"Baby Beaver\" and bring the thumb and forefinger together."
                },
                {
                    "title": "Beaver",
                    "desc": "Cut a tree by tapping front teeth together, slap your tail by slapping a palm against a thigh, and then yell \"Timber!\""
                },
                {
                    "title": "Beavis",
                    "desc": "'Heh, heh, heh, heh. Cool!' "
                },
                {
                    "title": "Bee",
                    "desc": "Put arms out to sides pretending to fly, while saying \"Buzz, buzz, buzz.\" "
                },
                {
                    "title": "Bee",
                    "desc": "See how long people can stay up with only one breath, have something sweet to 'Reward' the winner. A little 'HONEY of a Person.'"
                },
                {
                    "title": "Bee",
                    "desc": "Make a buzzing sound while watching an imaginary bee in flight, then quickly duck your head as the bee passes over. "
                },
                {
                    "title": "Beehive",
                    "desc": "Leader instructs everyone to start humming, when he raises his hands, the humming gets louder. When he lowers his hands, the humming gets more quiet. "
                },
                {
                    "title": "Beehive",
                    "desc": "Buzz Buzzzzzzzzzzzzz!"
                },
                {
                    "title": "Beethoven",
                    "desc": "Pretend to hold a cello as you sing, \"Da-da-da-da. Da-da-da-da.\" to Beethoven's Fifth Symphony."
                },
                {
                    "title": "Bell",
                    "desc": "Raise and lower hand as if ringing a bell. Say, 'Ding-a-ling. Ding-a- ling.'"
                },
                {
                    "title": "Ben Franklin",
                    "desc": "Hold both hands out in front of you as if flying a kite. Jerk back suddenly while saying, \"Zap, Zap, Zap.\"(Lightening)"
                },
                {
                    "title": "Betty Boop",
                    "desc": "Put one hand on your waist and one hand behind your head and say 'BOO BOOP BE DOOP'."
                },
                {
                    "title": "Bicycle",
                    "desc": "Pump, Pump, Pump."
                },
                {
                    "title": "Bicycle",
                    "desc": "Pretend to get out your bicycle, throw one leg over the center bar, put on your helmet, and move your legs as if you were peddling the bike and yell out, \"Pump, pump, pump, up the hill, pump, pump, pump,, down the hill, down the hill. Look, no hands"
                },
                {
                    "title": "Big Bear",
                    "desc": "Put your arms up over your head, make fingers into claws and growl."
                },
                {
                    "title": "Big Bear Hug",
                    "desc": "Wrap your arms around your own shoulders and give yourself a Big Bear Hug!"
                },
                {
                    "title": "Big Cottonwood Canyon Skiing",
                    "desc": "Put on skies, ride up lift, take off, straight down, fall with a huge clap and slide down the mountain in a tangle of skies, bindings, arms, and legs. Get up unhurt and say, 'That was fun!' "
                },
                {
                    "title": "Big Deal",
                    "desc": "Deal cards in circle."
                },
                {
                    "title": "Big Dog",
                    "desc": "Stand and give a loud Roof!, Roof!, Roof! three times."
                },
                {
                    "title": "Big Foot",
                    "desc": "Hold one foot up off the floor."
                },
                {
                    "title": "Big Foot Variation",
                    "desc": "Jump around on one foot while saying \"Ouch, ouch, ouch!\""
                },
                {
                    "title": "Big Hand",
                    "desc": "Leader says, \"let's give them a big hand\" everybody in the audience holds up one of their hands with the palm up."
                },
                {
                    "title": "Big Hand",
                    "desc": "Raise hand making sure it is open high above head."
                },
                {
                    "title": "Big Hand",
                    "desc": "Hold up a fist with thumb sticking out. Put thumb to mouth and blow up a full hand, one finger at a time."
                },
                {
                    "title": "Big Hand 'wizzer' Applause",
                    "desc": "With the hand in a fist, insert thumb into the mouth and, with a blowing motion, pretend to blow \r\nup a balloon -- letting the fingers rise one at a time until all the fingers are extended. Let the \r\n\"balloon\" rise until the arm is extended and then pretend air is coming out of the balloon. Make a \r\nhissing sound and flail the arm around as if the balloon is out of control."
                },
                {
                    "title": "Big Hand With Feeling",
                    "desc": "Leader says \"Let's give [name] a BIG HAND.\" Everyone holds up one hand with palm out. Then leader says \"With feeling\" and everyone \"feels\" with their hand while it's up in the air. "
                },
                {
                    "title": "Big Hand, The",
                    "desc": "Hold up hand palm forward."
                },
                {
                    "title": "Big Rain",
                    "desc": "Tap fingers together very quickly. "
                },
                {
                    "title": "Big Rainstorm",
                    "desc": "To simulate rain, have everyone hit one finger of his left hand with one finger of his right hand. Gradually increase the intensity of the storm by increasing the number of fingers hit together. Hold up the desired number of fingers as the signal to increase the intensity of the storm. Decrease the number of fingers tapping as the storm passes."
                },
                {
                    "title": "Big Rock Candy Mountain",
                    "desc": "How sweet it is."
                },
                {
                    "title": "Big Sneeze",
                    "desc": "Cup hands in front of nose and sneeze in hands. Having nowhere to put it, wipe your hands in your hair."
                },
                {
                    "title": "Big Sneeze",
                    "desc": "Divide group into three parts. On your signal Group 1 yells: \"A-hish!\" Then Group 2 yells: \"A-hash!\" Then Group 3 yells: \"A-choo!\" Finally, on your signal, all three yell at once."
                },
                {
                    "title": "Big Thumb",
                    "desc": "Hold out a hand at arms length, make a fist with the thumb up. Variation: Add,\"GREAT JOB!!\""
                },
                {
                    "title": "Big Watermelon",
                    "desc": "Take out a big watermelon, cut it in half and then make motions that you are eating the whole piece. Spit out the seeds, lots of them."
                },
                {
                    "title": "Big Wave",
                    "desc": "Best done in a big group. Have the odd numbered rows lean to the right first and the even numbered rows lean to the left first and say \"Swoosh' as they move back and forth."
                },
                {
                    "title": "Bikini",
                    "desc": "Clap with only index fingers. That's why we call it the bikini applause. Because there's nothing to it."
                },
                {
                    "title": "Billy Goat Cheer",
                    "desc": "Pull on 'beard' three times. Each time you pull, yell 'Baaa! ' "
                },
                {
                    "title": "Bird",
                    "desc": "Put hands under your arm pits and flap your arms like wings and say chirp, chirp, chirp."
                },
                {
                    "title": "Bird Call Cheer",
                    "desc": "Any bird sound will do, including owl, duck, chicken, whatever."
                },
                {
                    "title": "Bird Watcher",
                    "desc": "Stand. Tuck hands under armpits, flap 3 times while doing the sound of your favorite bird."
                },
                {
                    "title": "Bird Watchers",
                    "desc": "Make fingers into pretend binoculars, put them up to your eyes, and say \"I see one, I see one\"."
                },
                {
                    "title": "Birthday",
                    "desc": "Pretend to blow out candles. As each person runs out of air they sit down. The one who blows the longest (last person standing) without taking a breath, wins."
                },
                {
                    "title": "Black Pepper",
                    "desc": "Shake pepper out. Sneeze three times, each time with a louder \"Ah Choo, AH CHOO, AH CHOO!!!'"
                },
                {
                    "title": "Black Powder Gun Cheer",
                    "desc": "Pretend to have black powder in your hand. Pour powder down the barrel. Stamp it down, raise the gun and fire saying \"Click, Bang\"."
                },
                {
                    "title": "Blast Off",
                    "desc": "Count backwards from 10-1. At the end of one everyone stomp feet and clap hands."
                },
                {
                    "title": "Blast Off",
                    "desc": "Tell audience to stand. Everyone counts backward from 10, crouching slightly lower with each number. On zero, everyone shouts 'BLAST OFF!!!\" and jumps as high as he can."
                },
                {
                    "title": "Blast Off",
                    "desc": "Start counting backwards from 6 to 1. Bend the knees a little more on each count until you are in a squatting position. Then, while saying, \"BLAST OFF!\", just straight up in the air."
                },
                {
                    "title": "Blue & Gold",
                    "desc": "1. Divide in two groups; one \"blue\" the other \"gold\". \r\n"
                },
                {
                    "title": "Blue & Gold Cheer",
                    "desc": "Similar to above, but divide the group into thirds. Group one shouts, \"Blue\", group two shouts, \"And\", group three shouts, \"Gold\", then all together clap at once. Use a four beat rhythm."
                },
                {
                    "title": "Blue & Gold Cheer, The",
                    "desc": "Divide the group in half. Tell one group shout, \"Blue!\" as you point to them. Tell the other group to shout, \"Gold!\" as you point to them. Direct the cheer by; pointing alternately to one group, then the other. Vary the speed up and down."
                },
                {
                    "title": "Blunderbuss",
                    "desc": "Pretend to pour powder into the gun barrel, stamp it down, raise the gun and fire saying \"Click\" and \"Bang.\""
                },
                {
                    "title": "Boat",
                    "desc": "Make motion of rowing boat repeating heave ho. Then sight land and shout Land ahoy!"
                },
                {
                    "title": "Boat",
                    "desc": "Motion with arm and say \"all aboard\""
                },
                {
                    "title": "Bobcat",
                    "desc": "Stand and give a loud \"Meow\" three times."
                },
                {
                    "title": "Bobcat Cheer",
                    "desc": "Pretend to lick the back of your hand and wipe your face, like a cat does, and say MEOW, MEOW, MEOW."
                },
                {
                    "title": "Boomalacka",
                    "desc": "Boomalacka, Boomalacka, \r\nBoomalacka, Boomalacka, \r\nBow-wow-wow. \r\nChingalacka, Chingalacka, \r\nChow-chow-chow. \r\nBoomalcacka, Chingalacka, \r\nWOW ! WOW ! WOW !"
                },
                {
                    "title": "Both Hands",
                    "desc": "When leader holds up the right hand, everyone cheers; holds up the left hand everyone claps; both, both!"
                },
                {
                    "title": "Bottle Rocket Cheer",
                    "desc": "Everyone stands. With one hand they grab an imaginary match from the back pocket and light the imaginary firecracker that they are holding in their other hand. Then making a whooshing sound with their mouths they watch it fly into the sky and explode. Then you say \"Boom! Oooh, Aaah!\""
                },
                {
                    "title": "Bouncing Ball",
                    "desc": "Using a golf ball (preferably) Have the group yell 'Pow' every time the ball hits the floor when dropped initially from an outstretched hand above the head, or thrown up."
                },
                {
                    "title": "Bow and Arrow",
                    "desc": "Make motion as if shooting an arrow and say, \"Zing, Zing, Zing.\" Pretend to release an arrow with each zing. Variation: Slowly draw arrow from quiver on your back. Place arrow against string of bow, pull back, release and say \"pffft.\""
                },
                {
                    "title": "Bow and Arrow",
                    "desc": "Make motion as if shooting an arrow, and say fire and release the arrow! "
                },
                {
                    "title": "Bowling",
                    "desc": "Pretend to throw the ball down the alley and then holler \"Strike!\""
                },
                {
                    "title": "Bowling Ball",
                    "desc": "Pretend to roll a bowling ball and say 'OH NO ! NOT ANOTHER GUTTER BALL'"
                },
                {
                    "title": "Boy Satisfyin' Yell",
                    "desc": "Do the Skyrocket Cheer, followed by the AMERICA Cheer, with a buildup to a mighty U-S-A! (Warning: Don't try this one unless you have prior clearance from the building custodian, the head man, the police, and the fire company!) "
                },
                {
                    "title": "Boy Scout",
                    "desc": "Shout \"Hoor-rah, Hooray! We're the Boy Scouts of the BSA!\""
                },
                {
                    "title": "Boy Scout/Cubby Yell",
                    "desc": "\"What's the best patrol/den?\" All the patrols/dens yell back the Boy/Cubby winner's patrol name/den name."
                },
                {
                    "title": "Boy Scouts of America Cheer",
                    "desc": "A-M-E-R-I-C-A, Boy Scouts, Boy Scouts, USA!"
                },
                {
                    "title": "Boy/Cub Scout Yell",
                    "desc": "Rip, Rap, Rap! Rip, Rap, Ree! Loyal Happy Boy/Cub scouts are We!"
                },
                {
                    "title": "Brachiosaurus",
                    "desc": "This was one of the largest plant eating dinosaur. Stand up and walk in place heavily, take a bite of some tree leaves, and chew loudly, with a big smile on your face."
                },
                {
                    "title": "Brain Power",
                    "desc": "With right index finger tip to the side of forehead, raise your eye-brows and say \"AHHHHHHHHHHHHHHH!\""
                },
                {
                    "title": "Bravo",
                    "desc": "The cheer leader says, \"That deserves a Bravo! We'll do this in a circle.\" He then proceeds to have one end of the circle start with the 'BRR' sound and proceeds to point around the circle while they do the 'AVOOOO' sound. The sound level should rise as more of the circle comes in."
                },
                {
                    "title": "Bravo",
                    "desc": "Spell out the letters B R A V O. Then yell together BRAVO When given as a cheer, it is traditional for the people being cheered to reply in the same way, and try to be louder than the group who cheered them."
                },
                {
                    "title": "Bravo, Bravissimo",
                    "desc": "A very nice way of saying thank you \r\n  \r\nBravo, bravo, bravo, bravissimo\r\nBravo, bravo, jolly well done!\r\nBravo, bravissimo, bravo, bravissimo\r\nBravo, bravissimo, jolly well done!"
                },
                {
                    "title": "British Rank Yell",
                    "desc": "Be Prepared! Be Prepared! Shout! Shout! Shout! Tenderfoot! Second Class! First \r\nClass Scout!"
                },
                {
                    "title": "Broken Arm",
                    "desc": "Stick arm out in front of you with the lower arm and hand dangling. Swing lower arm and hand back and forth in a limp manner."
                },
                {
                    "title": "Broken Trolley",
                    "desc": "Pull the bell rope as if ringing a bell, repeating \"CLUNK, CLUNK, CLUNK.\""
                },
                {
                    "title": "Broom",
                    "desc": "Pretend to take a broom and sweep the floor saying CLEAN SWEEP three times."
                },
                {
                    "title": "BSA",
                    "desc": "Give each section a letter (B, S or A) to yell when you point at them. Vary it by mixing the letters up, then speed them up!"
                },
                {
                    "title": "Bubble Gum",
                    "desc": "Chew your gum a few times, blow a BIG bubble, clap your hands loud once and peel the gum off your face."
                },
                {
                    "title": "Bubble Gum Applause",
                    "desc": "(Pantomime) Unwrap gum, stick gum in mouth, chew, then blow a bubble. Slap hands together representing bubble popping."
                },
                {
                    "title": "Buccaneer",
                    "desc": "Same as above, add, Yo, Ho, Ho, and a Bottle of PEAR --E-- A !! We Must be French Pirates."
                },
                {
                    "title": "Buccaneer",
                    "desc": "Yo, ho, ho! And a bottle of lemonade!"
                },
                {
                    "title": "Buccaneer Cheer",
                    "desc": "Hop on one leg, saying, 'You, ho, ho, and a bottle of Coke.' "
                },
                {
                    "title": "Bueno (boo-ay-no)",
                    "desc": "means good! Repeat several times!"
                },
                {
                    "title": "Buffah Bonzo",
                    "desc": "(For a 'corny' skit) \r\n"
                },
                {
                    "title": "Bug",
                    "desc": "When the leader waves hands (as if to \"shoo\" away a bee or mosquito) make a buzzing sound. When leader finally slaps hands together (as in smacking the bug) everyone stops."
                },
                {
                    "title": "Bugs Bunny",
                    "desc": "Act as if chewing on a carrot and say 'What's up, Doc!'"
                },
                {
                    "title": "Bull",
                    "desc": "Make bull horns with fingers while shouting \"El Toro, El Toro !\""
                },
                {
                    "title": "Bull",
                    "desc": "Put your fists with pointer fingers extended on each side of head like horns of a bull. Say \"Moooo-ooo.\""
                },
                {
                    "title": "Bull Fighter",
                    "desc": "Hold down cape and move to in appropriate motion while shouting \"OLE!\""
                },
                {
                    "title": "Bullfighter",
                    "desc": "Hold cape to side, make pass yelling 'ole'. After 3 passes, get gored with an 'arrrrgggghhh'."
                },
                {
                    "title": "Buoy",
                    "desc": "Rock head and upper body back and forth like a giant bobber, and say slowly, 'BONG, BONG, BONG' letting the sound ring out like a bell."
                },
                {
                    "title": "Bury it",
                    "desc": "Cheer leader: I think we had better bury that skit. Alright, everybody stand up and dig a big hole with your shovel (suitable grunting sounds and shoveling actions), now throw the skit into the hole (thump) and cover it up (more shoveling and grunting), now, jump on it to keep it in there. (Everybody jumps up and down three times.)"
                },
                {
                    "title": "Busy Bee",
                    "desc": "\"Buzzzzzzzzzzzz\" as arms are outstretched as wings"
                },
                {
                    "title": "Butterfly",
                    "desc": "Stuff thumbs into armpits and flap \"wings.\""
                },
                {
                    "title": "Butterfly",
                    "desc": "Use arms as graceful wings and say, \"Flutter by, flutter by.\""
                },
                {
                    "title": "Butterfly",
                    "desc": "Move your hands rapidly like fluttering wings as if clapping, but do not make any sound. "
                },
                {
                    "title": "Butterfly With Hiccups",
                    "desc": "Snap finger as hands flutter around."
                },
                {
                    "title": "Buzz Lightyear",
                    "desc": "Put Your Arms Up And Yell \"To Infinity And Beyond\" Variation: Add \"I Am Buzz Lightyear, I Come In Peace\""
                },
                {
                    "title": "Buzzz!",
                    "desc": "As the mosquito lands on your arm, make a 'click' with your tongue. As the mosquito sucks, say 'SLUUUUUUUURRRPPPPPPP.' Then smack the mosquito with the other hand and say 'Smack.' "
                },
                {
                    "title": "Call the Hogs",
                    "desc": "SOOOOOOOO EEEEEEEE, SOOOOOOOO, EEEEEEEE!!!!!!! PIG, PIG, PIG PIG!!!"
                },
                {
                    "title": "Campbell Soup",
                    "desc": "Mmmm, mmmm, good."
                },
                {
                    "title": "Campfire",
                    "desc": "Dance around the campfire. Start getting knees up quite high and then say, 'Ow, ecch, ouch, hot, hot, hot coals.\""
                },
                {
                    "title": "Campfire",
                    "desc": "Look around pretending to gather some wood and tinder. Begin building your fire. Light the fire by striking the match on your backside. As the fire starts say, \"Crackle, Crackle, Crackle.\""
                },
                {
                    "title": "Can of Applause",
                    "desc": "Have a can with lid. Scream and cheer when lifting lid. No noise when lid is shut."
                },
                {
                    "title": "Can Opener",
                    "desc": "Pretend to chomp around the edge of a can."
                },
                {
                    "title": "Canary (2000 lb)",
                    "desc": "Put hands on opposite shoulders, while opening and closing elbows, say, \"Here, kitty, kitty.\""
                },
                {
                    "title": "Candle",
                    "desc": "'Flicker, flicker, flicker.'"
                },
                {
                    "title": "Canned Laughter",
                    "desc": "Laugh when lid is removed from a can and stop when lid is closed. "
                },
                {
                    "title": "Cannonball Divers",
                    "desc": "Scrunch down and wrap your arms around your knees, jump up and yell, 'KERSPLASH!'"
                },
                {
                    "title": "Canoe",
                    "desc": "Pretend to paddle canoe leisurely. Yell, \"Other Indian tribe is attacking.\" Now paddle \r\nextremely fast."
                },
                {
                    "title": "Cantaloupe",
                    "desc": "A variation of the Watermelon--cup your hands for the cantaloupe and shorten the time and noise for spitting out the seeds."
                },
                {
                    "title": "Cantaloupe --Double Rotten Cantaloupe",
                    "desc": "Same as above except have two cantaloupes, one in each hand, slurp from each, spit seeds from each, and \"yuk, yuk.\""
                },
                {
                    "title": "Cantaloupe Applause",
                    "desc": "Same as watermelon, but on a smaller scale."
                },
                {
                    "title": "Cape Canaveral",
                    "desc": "Countdown- leader directing 10-9-8-7-6-5-4-3-2-1 if good-blast off, if not so good--fizzle, fizzle, fizzle"
                },
                {
                    "title": "Car",
                    "desc": "Make motion of turning key in ignition and sound of reving up engine. End with screech for brakes. (Step on brakes)"
                },
                {
                    "title": "Car Wreck",
                    "desc": "(Screech!  Honk Honk!)"
                },
                {
                    "title": "Carpenter",
                    "desc": "Pretend to be holding a hammer in one hand and a nail in the other. Start pounding the nail with the hammer while saying, \"Bang, Bang, Ouch\"."
                },
                {
                    "title": "Casey Jones",
                    "desc": "Close fist and make circular motion while saying \"Chug-a-Chug-a-Chug\" then say \"Whoo Whoo.\""
                },
                {
                    "title": "Casey Jones",
                    "desc": "Hold left arm straight out, palm up, using right hand start clapping on shoulder, slowly speeding up while moving down left arm, until clapping hands, then use right hand to make motion of pulling whistle cord and go \"Whoo, whoo\" followed by crashing sound."
                },
                {
                    "title": "Casper",
                    "desc": "Wave hands in air and shriek 'BOOOOOOOOOO!'"
                },
                {
                    "title": "Cat Cheer",
                    "desc": "Stand and give a loud \"Me-ow' three times."
                },
                {
                    "title": "Cat Stretch",
                    "desc": "Have the group start in their chairs, move hands and arms slowly upward until they are as far above their heads as possible, then stretch out their legs as far as \r\npossible, then stand and arch their backs and say \"Purrrrrfect!\""
                },
                {
                    "title": "Cat's Meow",
                    "desc": "You're the cats MeeeeOOOOW!!! (to person receiving applause)"
                },
                {
                    "title": "Caterpillar And Leaf",
                    "desc": "Boys pretend to be holding a leaf. They munch, munch, munch, munch it, then they burp. (We hold no responsibility for continuous burping that may follow.)"
                },
                {
                    "title": "Catsup",
                    "desc": "Hold bottle in left hand and try to pound catsup out of the bottle with your right hand. "
                },
                {
                    "title": "Catsup Bottle",
                    "desc": "Hold left hand like you had a catsup bottle in your hand. Then strike your left fist like you would the bottom of the bottle. Do this several times in rapid successions."
                },
                {
                    "title": "Cat's Meow",
                    "desc": "You're the cats MeeeeOOOOW! ! ! (to person receiving applause)"
                },
                {
                    "title": "Caught Fish",
                    "desc": "Hold out left hand, palm up, and make flopping, gasping motions with the right hand on the palm of the left hand."
                },
                {
                    "title": "Caveman",
                    "desc": "Beating fists on chest yelling 'Captain CavvvveMaaaannnnn!'"
                },
                {
                    "title": "Caveman",
                    "desc": "Shout 'A-yabba-dabba-Cub-a-roo' while holding the right arm in the air and pointing one finger, then two, then three fingers together."
                },
                {
                    "title": "Centipede",
                    "desc": "My feet are killing me!!!"
                },
                {
                    "title": "Centipede",
                    "desc": "My shoe bill is outrageous!!!"
                },
                {
                    "title": "Centipede Yell",
                    "desc": "Group stands and yells: Ninety-nine THUMP!! Ninety-nine THUMP!! Ninety-nine THUMP!! This wooden leg is murder!!! \r\n"
                },
                {
                    "title": "Charge",
                    "desc": "Line up both fists in front of mouth (your horn), with one fist touching your lips, sing, 'Da-da-da-dat-da-dah!'"
                },
                {
                    "title": "Checkered Race Car",
                    "desc": "Wave arm in figure 8 motion in front of you."
                },
                {
                    "title": "Cheer",
                    "desc": "Divide the group into three groups. The leader calls, \"What does a Tiger Cub do?\" and points to each group in turn. \r\n"
                },
                {
                    "title": "Cheerio Cheer",
                    "desc": "Cheerio-Cheerio-Cheerio."
                },
                {
                    "title": "Cheerleader Yell",
                    "desc": "\"Rah, Rah, Rah!! SIS BOOM BAH!! RAH, RAH, RAW! \""
                },
                {
                    "title": "Cheese",
                    "desc": "Say \"Grate, grate, grate!\""
                },
                {
                    "title": "Cheese Grater",
                    "desc": "Take the cheese out of the refrigerator, get the grater from the drawer, and while grating the cheese say, 'Great, great, great, great... (The 'great' should increase in tempo and intensity.) "
                },
                {
                    "title": "Cherry",
                    "desc": "Pick a cherry, roll in your mouth, then spit the pit out with a loud \"P-TUU.\""
                },
                {
                    "title": "Chicken",
                    "desc": "Bend your arms like wings of a chicken and while moving your arms up and down, cackle like a chicken."
                },
                {
                    "title": "Chicle",
                    "desc": "Ingredient in gum that makes it chewy from Sapodilla trees in Mexico. Chew your gum, clicking your teeth together as loud as you can."
                },
                {
                    "title": "Chief",
                    "desc": "\"How, how, how\""
                },
                {
                    "title": "Chinese",
                    "desc": "How! How! How! Phooey, Phooey, Phooey."
                },
                {
                    "title": "Chinese",
                    "desc": "Ding How (meaning \"Very Good\")"
                },
                {
                    "title": "Chinese Bow",
                    "desc": "Stand, fold your arms, bow from the waist while saying, \"Ah Phooey.\""
                },
                {
                    "title": "Ching",
                    "desc": "Ching ching ching ching\r\nbing bing bing bing\r\nPolly Wolly, Golly Wolly\r\nWicky Wacky Woo,\r\nWe're gonna do just what we wanna do\r\nWe're gonna make a lot of noise just for you.\r\nWe're not gonna yell out oohs and ahs\r\nWe're just gonna yell out fourteen rahs\r\n1,2,3,4 rah rah rah rah\r\n5,6,7,8 rah rah rah rah\r\n9,10,11,12 rah rah rah rah\r\n13, 14, rah rah\r\nThere you have it peachy keen\r\nFourteen rahs for Troop Fourteen."
                },
                {
                    "title": "Chinook Salmon",
                    "desc": "Pretend your hand and arm is a salmon swimming upstream. Wiggle it back and forth three or four times, then jump up over the rapids, then yell \"I made it!\""
                },
                {
                    "title": "Chip-Chop",
                    "desc": "Divide the room in half. As you point to one side, they say \"chip\" and when you point to the other side, they say \"chop.\" Vary the speed and direction you point."
                },
                {
                    "title": "Choo Choo Train",
                    "desc": "Divide audience into 2 parts: have them clap in sequence as you motion your right hand to one and your left to the other."
                },
                {
                    "title": "Chopsticks",
                    "desc": "Clap your index fingers together."
                },
                {
                    "title": "Christmas Bells",
                    "desc": "Pretend to hold a bell rope, then get the left side of the audience to say \"DING\" on the down stroke and the other side of the audience to say \"DONG\" on the"
                },
                {
                    "title": "Christmas Stocking",
                    "desc": "Act as if emptying stocking, then put it on your right foot."
                },
                {
                    "title": "Chuckwagon Cook Cheer",
                    "desc": "Come an' git it!!"
                },
                {
                    "title": "Chugging Cheer",
                    "desc": "Chug, Chug, Chug, Chug, Chug, Chug, Chug, Chug, Chug, Chug, Chug; Toot Toot (Make motions of train wheel, going faster and faster with speed of chugs)."
                },
                {
                    "title": "Circle",
                    "desc": "(Also called Round of Applause)\r\n"
                },
                {
                    "title": "Circus Train",
                    "desc": "'Chug, a chug, toot, toot.' Make sounds of the animals on the train. "
                },
                {
                    "title": "Clam",
                    "desc": "Fold hands together, interlocking fingers. Make noise by pressing palms together."
                },
                {
                    "title": "Clam",
                    "desc": "Tell everyone to roll up their sleeves for this strenuous applause. Double up their fists and put the left arm in front of their face and the right arm over their head. Then, silently open and close the right fist."
                },
                {
                    "title": "Clam",
                    "desc": "Put back of hands together and open and close hands several times. "
                },
                {
                    "title": "Clanger",
                    "desc": "Clang, Clang, Clang. Have everyone go at the same time."
                },
                {
                    "title": "Clap and Cheer",
                    "desc": "When the leader raises his right hand, everyone should clap. When the leader raises his left hand, everyone should cheer. When both hands are raised, everyone should clap and cheer. Raise and lower both arms independently or together several times."
                },
                {
                    "title": "Clap Yell, The",
                    "desc": "[Clap, clap, clap, clap, clap-clap-clap-clap], Fourteen."
                },
                {
                    "title": "Clapping Furrows",
                    "desc": "Have one boy or person in each row or section start this one. They will clap twice and then clap the hand of the person next to them. Continue to clap in unison in this manner until everyone in the room is clapping."
                },
                {
                    "title": "Clark Kent Cheer",
                    "desc": "Looks like a job for Superscout! "
                },
                {
                    "title": "Class A",
                    "desc": "Clap rapidly in the following rhythm: 1-2-3-4, 1-2, 1-2, 1-2-3-4, 1-2, 1-2, 1-2-3-4...(pause)..One big clap."
                },
                {
                    "title": "Class B",
                    "desc": "Just like the Class A except that on the last clap, you come back with your hands and make one big clap."
                },
                {
                    "title": "Class B Clap",
                    "desc": "Clap hands to this rhythm: l-2-3-4, 1-2, 1-2, l-2-3-4, l-2, 1-2, l-2-3-4, l-2-3-4, except miss last one."
                },
                {
                    "title": "Class C",
                    "desc": "Just like the class B except that after missing the clap, you come back with your hands and make one big clap."
                },
                {
                    "title": "Class C Clap",
                    "desc": "Clap hands to this rhythm: 1-2-3-4, 1-2, 1-2, 1-2-3-4, 1-2, 1-2, 1-2-3-4, 1-2-3-4, miss one, 1."
                },
                {
                    "title": "Class D Clap",
                    "desc": "Clap hands to this rhythm: 1-2-3-4, 1-2-3-4, 1-2-3-4, 1-2-3-4, 1-2-3-4. "
                },
                {
                    "title": "Class E Clap",
                    "desc": "Clap hands to this rhythm: 1-2-3-4, 1-2-3-4, 1-2-3-4, 1-2-3-4, 1-2-3-4, then yell \"GREAT JOB!\""
                },
                {
                    "title": "Clean Air",
                    "desc": "Take in as much air as you can through your nose, hold it, then exhale and say, \"Ahhhhhhh!!\""
                },
                {
                    "title": "Clean Up Park",
                    "desc": "Pretend to be picking up stuff, examine one piece and exclaim, 'A $20 bill!!'"
                },
                {
                    "title": "Clean Up Schoolyard",
                    "desc": "Pick up piece of paper and stuff it into bag, pick up another, examine and say, 'This is the homework I lost yesterday, yeaaaaaaaa!' \r\n"
                },
                {
                    "title": "Cliff Faller",
                    "desc": "AAAAHHHHH----kersplat!"
                },
                {
                    "title": "Clippity Clop",
                    "desc": "Cub Scouts slap their legs to the rhythm of hoof beats' clippity clop, clippity clop, clippity clop."
                },
                {
                    "title": "Clown",
                    "desc": "Hold fingers at both corners of mouth, pull mouth up into a smile and say, \"SMILE EVERYONE SMILE\". "
                },
                {
                    "title": "Clowns",
                    "desc": "Boys jump up and down and laugh like crazy. "
                },
                {
                    "title": "Cock-of-the-Walk",
                    "desc": "Make the sound of a rooster, \"Cock-a-doodle-do.\""
                },
                {
                    "title": "Coconut",
                    "desc": "Pretend to shinny up a coconut tree,(Place arms out front as if hugging tree, move one hand and arm up a time and then the other), pretend to pick the coconut, let it fall to the geound(whistle as if a bomb was falling), hits the ground with a bang!! Shinny down (reverse your climbing motion), pretend to hit the coconut to open it, then say: THIS SURE IS A NUTTY APPLAUSE!!!"
                },
                {
                    "title": "Coffee Grinder",
                    "desc": "With one hand on the ground, arm stiff, body stretched out straight, head back, walk around in a circle, using arm as a pivot."
                },
                {
                    "title": "Coffeehouse cheer",
                    "desc": "Snap your fingers a lot"
                },
                {
                    "title": "Coin Flip",
                    "desc": "Flip a coin. When it is heads, clap. When it is tails, cheer. "
                },
                {
                    "title": "Coin Toss Cheer",
                    "desc": "Everyone pretends to reach into his/her pocket for a coin, Flip the imaginary coin into the air; it lands in the left hand. Slap it over onto the right hand and yell \"Heads!'"
                },
                {
                    "title": "Columbus",
                    "desc": "Put hands up like you're holding a telescope and shout \"Land Ho\"."
                },
                {
                    "title": "Community Sneeze",
                    "desc": "The Cubs are assigned into three groups. One group is assigned \"Hashee.\" The second group \"Hishee\" and the third \"Hoshee.\" At the signal, they all shout at once, each his assigned word. The result is a grand winter time \"sneeze.\""
                },
                {
                    "title": "Compass",
                    "desc": "Your arm, from elbows to tips of fingers, is positioned in front of the body, pointing upward, simulating a compass needle. Then the \"Needle \" sways from side to side. Swaying less each time, as a needle settles down finally coming to rest firmly on North, with \"Needle\" arm pointing upward."
                },
                {
                    "title": "Compass",
                    "desc": "Take your compass out of your pocket. Hold it in front of you to get your bearings. With your other hand, point to the person/group you are recognizing and shout, \"WAY TO GO!!\""
                },
                {
                    "title": "Compsognathus",
                    "desc": "1 ft. tall, the chicken dinosaur. 'Cock-adoodle-doooo!' "
                },
                {
                    "title": "Computer",
                    "desc": "Beep - gotta bug! Beep - gotta bug!"
                },
                {
                    "title": "Computer",
                    "desc": "'Cannot compute...cannot compute...Yes! CAN compute!!'"
                },
                {
                    "title": "Computer",
                    "desc": "'Cannot compute, data overflow, division by zero, Den (Pack) _____ to TOO great.'"
                },
                {
                    "title": "Computer",
                    "desc": "Turn your computer on and say 'Click!' Type in your password and say, 'Click! Click! Click! Click!' Say, 'What does the computer say?' Audience answers, 'DOES NOT COMPUTE!'"
                },
                {
                    "title": "Computer \"Freeze\"",
                    "desc": "Make a big show of getting ready to clap. Bring hands together as if to clap but \"freeze\" just before the hands make contact with each other."
                },
                {
                    "title": "Computer Cheer",
                    "desc": "Boys recite in a monotone, 'That does not compute!' (this is another one for the 'groaner' skits)"
                },
                {
                    "title": "Computer Cheer",
                    "desc": "'Does not compute! Does not compute!'"
                },
                {
                    "title": "Conductor Cheer",
                    "desc": "While holding out one hand say \"Your ticket please\""
                },
                {
                    "title": "Confused Robot Cheer",
                    "desc": "Walk in place, stiff-legged, saying, \"Does not compute. Does not compute.'"
                },
                {
                    "title": "Constitution",
                    "desc": "(Shout) \"We the people, APPROVE!\""
                },
                {
                    "title": "Construction Flagger",
                    "desc": "Wave your arms and yell 'Slow down!'"
                },
                {
                    "title": "Coo Coo",
                    "desc": "Everyone nods their heads up and down and say: \"COO-COO\" as many times as you tell them, as if you were striking the hour."
                },
                {
                    "title": "Cookie Cheer",
                    "desc": "'Yummy, yummy, yummy!' "
                },
                {
                    "title": "Cookie Cheer",
                    "desc": "Crummy, crummy, crummy'"
                },
                {
                    "title": "Cookie Clap",
                    "desc": "Everyone takes a big bowl in their arms. In bowl, dump ingredients to make cookies, such as: flour, sugar, salt, chocolate chips and dill pickles (have the boys tell out the ingredients and you'll get some odd cookies). After the ingredients are in the bowl, you take a big spoon and with stirring motion yell \"Crummy, Crummy, Crummy\"."
                },
                {
                    "title": "Cookie Jar",
                    "desc": "Put your cookie jar under your left arm, hold your arm out in position. With your right hand, reach way down inside the \"jar\" and all that is left is \"Crumby, crumby, crumby.\""
                },
                {
                    "title": "Cootie or Flea",
                    "desc": "Have everyone raise his hand above his head. Applaud by clicking the nails of the thumb and forefinger on each hand."
                },
                {
                    "title": "Cork",
                    "desc": "Hold out one hand as though holding the neck of a bottle. Put a cork in the bottle, then hit it in with the palm of the other hand."
                },
                {
                    "title": "Cork Cheer",
                    "desc": "Put bottle between legs, work cork with fingers, cork pops out \r\nsurprising you, say 'Pop! shhhhhhhhh' and the liquid goes all over \r\neverything."
                },
                {
                    "title": "Corn Cheer",
                    "desc": "1. Pretend to eat ear of corn one end to the other. 2. At the end say \"Ding\" like a typewriter."
                },
                {
                    "title": "Corn On The Cob",
                    "desc": "Pretend to eat corn off the cob very rapidly."
                },
                {
                    "title": "Count Down",
                    "desc": "\"10, 9, 8, 7, 6, sick, sick, sick, sick...\""
                },
                {
                    "title": "Country Pig",
                    "desc": "\"Suuuuuuuuuuuu, eeeeeeeeeee, Suuuuuuuuu, eeeeeeeee--oink, oink, oink.\""
                },
                {
                    "title": "Cow",
                    "desc": "Pretend to milk cow saying: \"Squirt, squirt, squirt, mooo.\""
                },
                {
                    "title": "Cow Yell",
                    "desc": "MOOOOO!!! MOOOOO!!! MOOOOO!!!"
                },
                {
                    "title": "Cowboy",
                    "desc": "Pretend to strum a guitar and sing, 'Tee ole dle ladeeeeee.'"
                },
                {
                    "title": "Cowboy",
                    "desc": "\"yip-ee-yie- yay!' waving arm in a circle overhead as if to throw a lasso."
                },
                {
                    "title": "Cowboy",
                    "desc": "Pretend to strum a guitar and sing, \"I'm an old cowhand, Yippee, I-O-Ki-Yeah!!!\""
                },
                {
                    "title": "Cowboy",
                    "desc": "Put index finger in the air and make a circular motion as you say, \"Yeehaw!\""
                },
                {
                    "title": "Cowboy",
                    "desc": "Fine as Cream Gravy!! (very good, top notch)"
                },
                {
                    "title": "Cowboy",
                    "desc": "Raise hand in air as if waving hat, saying \"Whoopee!!\""
                },
                {
                    "title": "Cowboy Stomp",
                    "desc": "Slap your thighs and stomp your feet and say Jingle, jingle, jingle!"
                },
                {
                    "title": "Cowboy Whoop",
                    "desc": "\"Yeeeeee Ha!!!\""
                },
                {
                    "title": "Coyote",
                    "desc": "Have the everyone stand, cup their hands around their mouth and say: \"YIP, YIP, YIPEEEE!!!!!\" VARIATION: Add: \"ARC, ARC, AROOOOOOOOO!! GEE, It's lonely out here.\""
                },
                {
                    "title": "Crab",
                    "desc": "Have the group stand: Have them pretend to be on a boat, by swaying back and forth, and from side to side, have them grab hold of a rope as if they are hauling in their trap, have them grab the trap box and say: \"THIS IS THE BIGGEST KING CRAB I HAVE EVER SEEN!!!\""
                },
                {
                    "title": "Crab",
                    "desc": "\"PINCH, PINCH, PINCH\"."
                },
                {
                    "title": "Cracker",
                    "desc": "Pretend to have a cracker in your hand, crumble it saying, \"CRUMMY, CRUMMY!\""
                },
                {
                    "title": "Cracker Cheer",
                    "desc": "Hold imaginary cracker in hand. Pretend to take a bite. Smile and say 'MMMM,GOOOD"
                },
                {
                    "title": "Crazy",
                    "desc": "Put arm over head and clasp hands. Moving head all around yell \"Hooooooooooooooow!\""
                },
                {
                    "title": "Crazy Scientist Applause",
                    "desc": "Pretend to be stirring something in a vial or bottle in one hand, then with the other pretend to pour something into the 'bottle you were stirring,' all the time laughing something like this: Ya Ha HAA, I've done it! ! Then yell: BOOM! ! ! ! !"
                },
                {
                    "title": "Crazy Woodchopper",
                    "desc": "Make a big deal of chopping down a tree, then keep trimming it until you have a toothpick to pick your teeth with."
                },
                {
                    "title": "Cricket",
                    "desc": "Each Cub snaps the thumbnail from a front upper tooth in his mouth producing a clicking sound. (This is also sometimes called the cricket handclap.)"
                },
                {
                    "title": "Cricket",
                    "desc": "Click thumbnail and fingernail together."
                },
                {
                    "title": "Cricket Or Flea Applause",
                    "desc": "Flick middle fingernail and thumbnail together."
                },
                {
                    "title": "Cub Scout",
                    "desc": "Shout \"Den ___ has lots of fun! \r\nWe work together and get things done.\""
                },
                {
                    "title": "Cub Scout  II",
                    "desc": "Shout \"Hoo-rah, Hooray! Hooray, Hooray, We're the Cub Scouts of the BSA!\""
                },
                {
                    "title": "Cub Scout  III",
                    "desc": "Shout \"Rip, rap, rap, rip! Rip, rap, ree! Loyal happy Cub Scouts are we!\""
                },
                {
                    "title": "Cub Scout  IV",
                    "desc": "Yell \"What's the best den?\" and have all the other dens yell back their den number."
                },
                {
                    "title": "Cub Scout Cheer",
                    "desc": "\"Do Your Best! Be Prepared! Shout! Shout! Shout! Tiger Cub! Wolf Cub! Bear Cub! Webelos Scout!\""
                },
                {
                    "title": "Cub Scout Chef",
                    "desc": "Use right hand to rub tummy in circular motion while saying \"Yum, Yum!\""
                },
                {
                    "title": "Cub Scout Family Cheer",
                    "desc": "'We are One Big Happy Cub Scout Family!' Divide the room into three groups. Assign and practice (pointing at different group and varying the order): Group 1--'One'; Group 2--'Big'; Group 3--'Happy'; All--'Cub Scout Family'. Then Cubmaster says 'We are' and point to Groups 1, 2, 3 and All."
                },
                {
                    "title": "Cub Scout Yell",
                    "desc": "\"Do Your Best! Be Prepared! Shout! Shout! Shout! Wolf Cub! Bear Cub! Webelos Scout!\""
                },
                {
                    "title": "Cub Scouts and Den Chief",
                    "desc": "All about the town\r\nHail to our leader\r\nCubmaster Mr. Brown"
                },
                {
                    "title": "Cubby",
                    "desc": "Leader yells, \"What's the best pack?\" and everyone answers with pack number."
                },
                {
                    "title": "Cubby",
                    "desc": "Yell \"What's the best den?\"and have all the dens yell back their own den numbers. "
                },
                {
                    "title": "Cubmaster",
                    "desc": "\"Cub Scouts and Den Chiefs, all around the Pack, Hail to our leader Cubmaster ____________.\"?\"Yeaaaaa!\""
                },
                {
                    "title": "Cubmaster Says",
                    "desc": "The Cubmaster says, Clap your hands (everybody claps two times) 'stomp your feet\"(everybody stomps \r\ntwo times), then everyone yells together 'Pack _____ can't be beat!\""
                },
                {
                    "title": "Cubs are Cool",
                    "desc": "Cubs are so cool, they can even freeze the atmosphere with this cheer. \r\n"
                },
                {
                    "title": "Cubstruction Cheer",
                    "desc": "'Wow! Look at THAT!!'"
                },
                {
                    "title": "Garbage Disposal",
                    "desc": "Hold hands up in the shape of a sink. Your mouth is the drain, so turn it up too. Now shake your head and make all kinds of gurgling and grinding noises!"
                },
                {
                    "title": "Garbage Disposal",
                    "desc": "Turn you face up, open mouth, make gurgling sound, swallow big."
                },
                {
                    "title": "Garbage Truck",
                    "desc": "Start with hands over head together, lower arms, open, clap, lift up, open and make sounds of compressing garbage."
                },
                {
                    "title": "Gazalla",
                    "desc": "Gazalla gazalla gazalla gazzay\r\nGet out, get out, get out of our way,\r\nReebo, Reybo, Sis Boom Bah,\r\nTroop Fourteen, rah rah rah"
                },
                {
                    "title": "Gee",
                    "desc": "Cup your hand around the mouth and yell \"GEE, YOU DID A GREAT JOB, KEEP UP THE GOOD WORK!!!!\"\r\n"
                },
                {
                    "title": "General Patton",
                    "desc": "Rise, give Cub Scout salute and say, \"Tanks a lot, tanks a lot!\""
                },
                {
                    "title": "Genius",
                    "desc": "Look surprised and say, \"Boy look what i discovered\" or \"Wow, look what I made.\"\r\n"
                },
                {
                    "title": "Genius Applause",
                    "desc": "Applaud by patting your head, rubbing your tummy and shouting, 'Yeaaaa!' at the same time."
                },
                {
                    "title": "George Jetson Cheer",
                    "desc": "'Jane! Stop this crazy thing !' (a good cheer for those skits that go on and on and on and on!)"
                },
                {
                    "title": "George Washington",
                    "desc": "That was great. I cannot tell a lie!"
                },
                {
                    "title": "George Washington Cheer",
                    "desc": "That was great. I cannot tell a lie. Variation: Get out axe and swing it at a tree while saying, \"Chip, chop, chop, TIMBER!\" then yell, \"WRONG TREE!\""
                },
                {
                    "title": "German",
                    "desc": "Wunderbar!  Wunderbar!  Ja Ja Gut! (pronounced 'voonder bar, voonder bar, ya ya goot!')"
                },
                {
                    "title": "Geronimo",
                    "desc": "Tap hand against mouth and say WOO, WOO, WOO, GERONIMO!"
                },
                {
                    "title": "Get a Ricksaw",
                    "desc": "Get a ricksaw, get a bucksaw,\r\nget a ricksaw bucksaw boom\r\ngosh a-mighty, high a-mighty,\r\ngive Fourteen more room.\r\n(repeat thrice, each time louder)"
                },
                {
                    "title": "Ghost",
                    "desc": "Wave hands like a ghost and say: \"WHOOOO, WHOO, WHOOOOOOO!!\" Variation: Wail, \"BOO! BOO! BOO!\" three times and then yell: \"YAHHH!!\""
                },
                {
                    "title": "Ghost Applause",
                    "desc": "Wail like a ghost three times, \"\"Whoooo, whooo, whooo!\"\""
                },
                {
                    "title": "Ghost Cheer",
                    "desc": "Boooooooooooo!"
                },
                {
                    "title": "Giant Beehive",
                    "desc": "Buzz like a hive of bees. When the Leader raises his/her hand, the volume increases. Lowering the hand causes the vol ume to decrease."
                },
                {
                    "title": "Give 'Em Two",
                    "desc": "Applaud with only the fore and middle fingers."
                },
                {
                    "title": "Give A Big Hand",
                    "desc": "Hold out an open palm towards performer."
                },
                {
                    "title": "Give A Hoot",
                    "desc": "Divide the audience into two sections. Have one section yell, \"Give A Hoot!\"and the other section yell, \"Don't Pollute!\" Alternate pointing at each section, pointing faster and faster."
                },
                {
                    "title": "Give Two Big Hands",
                    "desc": "This deserves two big hands, hold both hands up open palm towards audience."
                },
                {
                    "title": "Glug, Glug, Glug",
                    "desc": "Wipe your mouth and sigh \"AHHHHhhhhhh, I sure feel and look better.!!!\" Variation: Same as above except when you get the water, take a comb out of the back pocket, dip it into the water, pretend to run the comb through your hair, pull out a mirror , look at yourself and say the last line above."
                },
                {
                    "title": "Go Cart",
                    "desc": "Stand up with legs bent at right angles, put hands in front of you as if steering and say, \"BAAARRROOOOOMMM!\" Variation: Add, \"Look at me go! BARRRROOOMM!!"
                },
                {
                    "title": "Go Cart",
                    "desc": "Move hands in down hill motion and shout \"Swooosh, Zooom\"."
                },
                {
                    "title": "Golden Spike Applause, The",
                    "desc": "All stand. Those on one half of the room face those on the other side of the room. Each half pretends to take a turn hitting the golden spike. As they swing their imaginary hammers, have them yell \"Pound! Pound! Pound!\" This yell will alternate from one side of the room to the other. After 3 turns, all yell \"DONE!\" (Note: This was the word sent by telegraph when the final spike was driven to connect the Transcontinental railroad.)"
                },
                {
                    "title": "Goldie Locks",
                    "desc": "'Bears, Bears, Bears!'"
                },
                {
                    "title": "Golf",
                    "desc": "Shout \"FORE\" and pretend to hit the ball, place hand over above eyes to follow where the ball went.\r\n"
                },
                {
                    "title": "Gomer Pyle",
                    "desc": "'Shazam!!\""
                },
                {
                    "title": "Gomer Pyle",
                    "desc": "'SUPPRISE, SUPPRISE, SUPPRISE'"
                },
                {
                    "title": "Gondolier",
                    "desc": "Make motion as if poling a boat and sing out \"Oh, so, lo, mi, Oh.\""
                },
                {
                    "title": "Good Bye Santa",
                    "desc": "Pretend to throw a Pack onto your back and say 'Merry Christmas to all, and to all a good night!'"
                },
                {
                    "title": "Good Citizen",
                    "desc": "\"Give yourself a pat on the back.\""
                },
                {
                    "title": "Good Food",
                    "desc": "Pat your tummy and yell 'I can't believe I ate the whole thing!!'"
                },
                {
                    "title": "Good Going",
                    "desc": "Group stands and says ' GOOD GOING GOOD GOING GOOD GOING starting off loud and ending softly."
                },
                {
                    "title": "Good Heavens (For an unusual skit)",
                    "desc": "The Cheer Leader says: Let's give this something really GOOD. Repeat after me. \r\nCheer Leader: Good. \r\nCircle: Good. \r\nCheer Leader: Good \r\nCircle: Good \r\nCheer Leader: Good Heavens ! What next ?? \r\nCircle: Good Heavens ! What next ??"
                },
                {
                    "title": "Good Job",
                    "desc": "Chip-chop type: \"Great-Going\" (3 times)"
                },
                {
                    "title": "Good Job",
                    "desc": "Say Good Job then pat yourself on the back."
                },
                {
                    "title": "Good Job",
                    "desc": "Divide the room in half. As you point to one side, they say \r\n\"Good\". When you point to the other half of the audience, they say \"Job\". Vary the speed and the direction you point. Aim for volume"
                },
                {
                    "title": "Good Knight's",
                    "desc": "Everyone stand and shout, 'Good Night!' (this one's good for ending a meeting)"
                },
                {
                    "title": "Good Turn",
                    "desc": "Stand up and turn around."
                },
                {
                    "title": "Good Turn",
                    "desc": "Stand up and turn in a circle while saying, 'Tigers do a good turn daily!' "
                },
                {
                    "title": "Good Turn, The",
                    "desc": "Stand up and turns around while clapping."
                },
                {
                    "title": "Good-bye Santa",
                    "desc": "Pretend to throw a pack onto your back and say, 'Merry Christmas to all and to all a good night.\""
                },
                {
                    "title": "Goodbye Santa Claus",
                    "desc": "Pretend to throw a pack onto your back and say \"Merry Christmas to all, and to all a good night.\""
                },
                {
                    "title": "Grand",
                    "desc": "Everyone is sitting in chairs. All stomp their feet three times loudly, then slap leg three times, then clap hands 3 times. Then stand up all together and shout \"Ra, Ra, Ra!\""
                },
                {
                    "title": "Grand How Yell",
                    "desc": "HOW! HOW! HOO-O-OO-OOW!\r\n"
                },
                {
                    "title": "Grand Salute",
                    "desc": "(Save for special honors.) Same as for Grand Applause with feet, legs, and hands. Instead of shouting when standing up, give the Cub Scout Salute as a group to the person you are honoring."
                },
                {
                    "title": "Grand Salute",
                    "desc": "Strike knees with hands 5 times. (Count 1-2-3-4-5) \r\nStamp feet 5 times. (Count 1-2-3-4-5) \r\nClap hands 5 times. (Count 1-2-3-4-5) \r\nStand up. \r\nSalute."
                },
                {
                    "title": "Grand Sneeze",
                    "desc": "\"A-h-h-h Chooooo! Three times, each time getting louder.\r\n"
                },
                {
                    "title": "Grand Stand Applause",
                    "desc": "All are seated. They stamp their feet three times, then slap legs three times. Then all stand and shout, 'Rah! Rah! Rah!'"
                },
                {
                    "title": "Grape",
                    "desc": "Peel grape, throw into air, catch in mouth."
                },
                {
                    "title": "Grape",
                    "desc": "Use in conjunction with the Watermelon and Cantaloupe applauses. Hold an imaginary grape between thumb and first finger. Pop grape into mouth with appropriate sound."
                },
                {
                    "title": "Grape",
                    "desc": "Hold one hand out as if holding a bunch of grapes, with the other hand pick a grape, chew it and spit out the pit."
                },
                {
                    "title": "Grape Juice",
                    "desc": "Every one stomps around as if stomping grapes, then reach down with one hand dipping with a glass and drinking it, saying, \"AAAAAhhhhh.\"\r\n"
                },
                {
                    "title": "Great (Tony the Tiger cheer)",
                    "desc": "Leader starts quietly starting with GRRR and goes around circle to complete word."
                },
                {
                    "title": "Great Going Cheer",
                    "desc": "Have one half of the audience say, \"Great\" and the other half say, \"Going.\" Alternate each side."
                },
                {
                    "title": "Great Job",
                    "desc": "Group stands and says 'GREAT JOB! GREAT JOB! GREAT JOB!'"
                },
                {
                    "title": "Great Job",
                    "desc": "Have one half of the audience say, \"Great\" and the other half say, \"Going.\" Alternate each side."
                },
                {
                    "title": "Great Salt Lake",
                    "desc": "Pretend to go swimming there. As you get in water, it is cold, so say 'Ouch, ouch, ouch!' Then float along without sinking, and say 'Ahhhhh!' "
                },
                {
                    "title": "Green Jello",
                    "desc": "Put it on your plate, jiggle it and watch it quiver, then slurp it all up."
                },
                {
                    "title": "Guillotine",
                    "desc": "Pretend to wind a crank pulling the blade up, tie it off, take an imaginary axe and cut the rope. Knife your hand down like a blade, saying \"Slooosh\". Then roll one over the other while saying \"Thud, flop, flop, flop.\" Variation: Insert persons name after getting applause on last flop and say: \"Haven't you got those heads of lettuce chopped yet."
                },
                {
                    "title": "Guitar",
                    "desc": "Hold left hand to side as.if holding neck of a guitar, cup right hand with thumb extended up and move it up and down as if on the strings while moving the fingers on the left hand as if changing keys while saying in a musical voice Wtrum-um-um, Strum-urn-urn, Strum-urn-a"
                },
                {
                    "title": "Gung Hay Fat Choy",
                    "desc": "Pretend to open a fortune cookie and read the fortune. Yell out \"Gung Hay Fat Choy! And Best Wishes!\""
                },
                {
                    "title": "Guppy",
                    "desc": "Suck in both sides of your mouth and make a kissing noise three times.\r\n"
                },
                {
                    "title": "Half a Clap",
                    "desc": "Put one hand behind you and the other in front of you making a clapping motion (no sound.)"
                },
                {
                    "title": "Half A Hand",
                    "desc": "Hold up one hand with the palm open, with the other hand, cover the open hand so only half shows.\r\n"
                },
                {
                    "title": "Half A How",
                    "desc": "Yell, \"Huh!!!\""
                },
                {
                    "title": "Half A How And An Ugh Yell",
                    "desc": "HUH, UGH!!!"
                },
                {
                    "title": "Half a How Yell",
                    "desc": "HUH !!!"
                },
                {
                    "title": "Ham and eggs",
                    "desc": "Split the audience into 2 groups. The leader says the lines to each group in turn and they reply very loudly. Everyone shouts the first and last lines as loudly as possible. \r\n\r\nAll - Haaaam and eggs, Haaaam and eggs \r\nFirst group - I like mine done golden brown \r\nSecond group - I like mine done upside down \r\nFirst group - Flip `em \r\nSecond group - Flop `em \r\nFirst group - Flip `em \r\nSecond group - Flop `em \r\nAll - Haaaam and eggs"
                },
                {
                    "title": "Hamburger",
                    "desc": "Make a hamburger patty by clapping hands turning left hand on top, then left hand on the bottom.\r\n"
                },
                {
                    "title": "Hamburger Applause",
                    "desc": "Make a hamburger patty by clapping hands turning left hand on top, then left hand on the bottom."
                },
                {
                    "title": "Hammer",
                    "desc": "Hold nail and play like you are hammering nail. You pretend to miss and hit your finger. Say \"ouch, ouch, ouch.\""
                },
                {
                    "title": "Hammer",
                    "desc": "Left palm up like a block of wood, right palm hammers on the left"
                },
                {
                    "title": "Hammer Applause",
                    "desc": "Hold nail in one hand and hammer with other hand, saying 'Bang, bang, bang, ouch!' (and shake hand that got hit)."
                },
                {
                    "title": "Hammer Applause:hand Washer",
                    "desc": "Hold nail in one hand and hammer with other hand, saying \"Bang, bang, bang, ouch!\" (and shake hand that got hit)."
                },
                {
                    "title": "Hand and Foot",
                    "desc": "Applaud with striking hand on foot."
                },
                {
                    "title": "Handkerchief",
                    "desc": "Throw a handkerchief into the air with instructions for the applause to last until you catch it or it falls to the floor. Vary the length of the applause. Long throw, short throw, or no throw at all."
                },
                {
                    "title": "Handy",
                    "desc": "Hold up your hand, palm out and say: \"You're handy to have around. "
                },
                {
                    "title": "Hangman",
                    "desc": "Put your hand behind your neck like you are holding a hangman's noose, then roll eyes and stick out your tongue.\r\n"
                },
                {
                    "title": "Hankey",
                    "desc": "Drop hankey, applause only while hanky is in the air"
                },
                {
                    "title": "Happy Holidays",
                    "desc": "Done similarly to 'Chip, Chop\" Divide audience into two groups, raise right hand and half say HAPPY, raise left hand and the other half say HOLIDAYS. Or do Merry Christmas, Happy Chanukah, Happy Kwanzaa Or three groups ' Happy New Year Or any other holiday you wish '"
                },
                {
                    "title": "Happy New Year Cheer",
                    "desc": "Say, \"Gung hay fat choy!\""
                },
                {
                    "title": "Harp",
                    "desc": "Hold both hands extended in front of you and move the fingers on both hands while you pull them toward yourself and say,, in a soft musical voice \"Pluck-uck-uck, Pluck-uck-uck\" (3 times)"
                },
                {
                    "title": "Hat Cheer",
                    "desc": "Cubmaster throws his hat into the air. All yell until the hat touches the ground. Then all yelling stops."
                },
                {
                    "title": "Hay and Straw",
                    "desc": "Divide the group into two sections, tell one group that when you point to them they are to yell, \"HAY\". Tell the other section they are to yell, \"STRAW\" !!! Vary the speed in which you point to the different groups. Variation\r\nWhen the leader yells hay or straw, the group responds with the opposite word.\r\n"
                },
                {
                    "title": "Hay Cheer",
                    "desc": "Divide the group into two sections.  Tell one group that when you point to them they are to yell 'HAY!'  Tell the other group they are to yell 'STRAW!'  Vary the speed at which you point to the different groups.  Variation:  when the leader yells hay or straw, the group responds with the opposite word."
                },
                {
                    "title": "Hay Fever",
                    "desc": "Pretend to sneeze into a handkerchief. \"Ah-ah-ah-ah-choo.\""
                },
                {
                    "title": "Heap Howls",
                    "desc": "Announce; \"Lets give a Heap Howl for _____.\" \r\nOn signal, all yell sharply: \"Howl! Howl! Heap Howl!\""
                },
                {
                    "title": "Heart And Sole",
                    "desc": "Slap heart and sole of shoe.\r\n"
                },
                {
                    "title": "Heavenly Hows",
                    "desc": "How, How, Howlelujah (raise arms to the sky)."
                },
                {
                    "title": "Heavy Vegetable",
                    "desc": "Squash, squash, squash"
                },
                {
                    "title": "Heel Click",
                    "desc": "Stand with your feet apart. Jump into the air, click your heels twice. Land with your feet apart."
                },
                {
                    "title": "Hello Behind You",
                    "desc": "An alternative to the Introduction Cheer, tell everyone at the count of 3, turn around and meet the person behind you. On '3', everyone should be turned backwards."
                },
                {
                    "title": "Helper",
                    "desc": "Group stands and cheers, \"Great job! Great JOB! GREAT JOB!\" Getting louder each time.\r\n"
                },
                {
                    "title": "Hi There",
                    "desc": "(Used when introducing someone new or a guest) --The group stands, waves their left hand at the person, and says as loud as they can, \"Hi, there. Welcome to _______.\""
                },
                {
                    "title": "High Country",
                    "desc": "Everyone takes in a deep breath through the nose and clap hands on their chests, as if enjoying the fresh air."
                },
                {
                    "title": "High Desert",
                    "desc": "Yucca, yucca, yucca."
                },
                {
                    "title": "High Desert Applause",
                    "desc": "(standing) Yucca, yucca, yucca."
                },
                {
                    "title": "High Jump",
                    "desc": "Run down your arm with two fingers and when you reach the wrist, jump hand up in air and land with the back of one hand to the palm of the other hand with a slap."
                },
                {
                    "title": "Hike The Mountain",
                    "desc": "March in place. Begin with head erect, shoulders back and a steady step. As mountain becomes steeper, slow down the march and bend forward as if straining to continue the hike. At the top, collapse back in your seat, wipe your brow with sleeve, and sigh, \"We made it.\""
                },
                {
                    "title": "Hiker's",
                    "desc": "Pretend to take out a compass and hold it in front of you. Then point forward, saying 'way to go!'"
                },
                {
                    "title": "Hiking Cheer",
                    "desc": "The leader shouts each of the following phrases, echoed in turned by the audience: \"Trail map! Water! Boots broken in! Let's go hiking!\""
                },
                {
                    "title": "Holland Windmill Applause",
                    "desc": "Hold both arms out straight at shoulder level. Standing on one foot, spin around while rotating arms in circle. Make a loud shoosh sound like the wind."
                },
                {
                    "title": "Home Alone",
                    "desc": "Grab the bottle of shaving lotion and sprinkle some on your hand. Rub your hands together, slap the lotion on your cheeks and yell \"Ahhhhhhhh!\"."
                },
                {
                    "title": "Home Run",
                    "desc": "Simulate swinging a bat, then shade your eyes with your hands and yell, \"Thar she goes.\"\r\n"
                },
                {
                    "title": "Home Run",
                    "desc": "Simulate swinging a bat at a ball, shade your eyes with your hand and yell, \"It's a home run! Yeah!\""
                },
                {
                    "title": "Horse",
                    "desc": "Clip-clop, clip-clop, clip-clop, clip-clop..(this is done 10 times very fast.)"
                },
                {
                    "title": "Horse",
                    "desc": "Make the sound of a galloping horse by slapping your hands against your thighs."
                },
                {
                    "title": "Horse",
                    "desc": "Gallop in place saying clippety clop."
                },
                {
                    "title": "Horse Cheer",
                    "desc": "Neigh like a horse three times."
                },
                {
                    "title": "Horsefly",
                    "desc": "(slap different parts of your arms back and head, trying to get the horsefly)"
                },
                {
                    "title": "Horsing Around",
                    "desc": "Make galloping noises and whinny."
                },
                {
                    "title": "Hospital",
                    "desc": "\"Sick, sick, sick.\""
                },
                {
                    "title": "Hospital Cheer",
                    "desc": "Yell \"Is it one?\" Group replies, \"No\". \"Is it two?\" \"No\". \"IS it three?\" \"No\". Etc. \"Is it six?\" Yes, its sick, sick, sick!\""
                },
                {
                    "title": "Hot Dog Cheer",
                    "desc": "Leader shakes fist in air. People stand, applaud, holler, etc. When leader brings fist down, all yell \"HOT DOG!\""
                },
                {
                    "title": "Hot Dog with Mustard",
                    "desc": "Get your hot dog and put it in a bun. Pick up the mustard bottle and squeeze some mustard on the hot dog, then take a big bite and say, \"Yummmmm!\""
                },
                {
                    "title": "Hot Pepper",
                    "desc": "Take a bite of a hot pepper, chew and swallow. Suddenly it's hot, real hot' express it by holding throat and yelling, 'Ahhhhhhhhh!'"
                },
                {
                    "title": "Hot Troop",
                    "desc": "LEADER: My name is ________ and you know what I got?\r\nTROOP: What do you got?\r\nLEADER: I got a troop that is hotter than hot!\r\nTROOP: How hot is hot?\r\nLEADER: We play games and do crafts too!\r\nALL: And We're a whole lot LOUDER THAN YOU!!!\r\n"
                },
                {
                    "title": "How",
                    "desc": "Shooting hand straight up in the air, when it is all the way out yell--HOW."
                },
                {
                    "title": "How",
                    "desc": "Make a straight line up to complete square"
                },
                {
                    "title": "How - Western Style",
                    "desc": "Stamp feet three times, slap knees three times, pound chest with fists three times, \"HOW\"  emphasize \"HOW' with a fist raised toward the sky."
                },
                {
                    "title": "How from the North",
                    "desc": "How, How, How, Brmr!"
                },
                {
                    "title": "How From the South",
                    "desc": "How, How, How, You'all!"
                },
                {
                    "title": "How Heap",
                    "desc": "HOW! HOW! HEAP HOW!"
                },
                {
                    "title": "How To Make A Cheers Box",
                    "desc": "Find a Cheer laundry detergent box. Print out these cheers, yells and applauses on card stock. Cut the card stock up so that one cheer is on each piece of paper. Put them all in the Cheer box. Take the box with you to your meetings or campfires. When it is time for a cheer, have a Scout take the cheer out of the box and lead it."
                },
                {
                    "title": "How with a Northern Exposure Yell",
                    "desc": "How, How, How, Brrrrr!"
                },
                {
                    "title": "How with a Southern Exposure Yell",
                    "desc": "How, How, How, You'all!"
                },
                {
                    "title": "How Yell",
                    "desc": "Raise arm to fullest extent and yell:\"HOW!\"\r\n"
                },
                {
                    "title": "How, Half and Quarter",
                    "desc": "How, Ugh, Eek!!!"
                },
                {
                    "title": "Howdy",
                    "desc": "How, how, howdy partner."
                },
                {
                    "title": "Howdy",
                    "desc": "Yell, 'Hoooow'Deeee!!!' (You can add 'Paaaaardnerrrr!' and/or 'And welcome!')"
                },
                {
                    "title": "Howdy Pard",
                    "desc": "HOOOOW DDD DEEE PARRRD!!!!"
                },
                {
                    "title": "Howdy Yell",
                    "desc": "HOOOOW DDD DEEEE!!!"
                },
                {
                    "title": "Hunter",
                    "desc": "Divide into 3 groups. 1. Hand to eye looking for game. 2. Point to group 2. 3. Slap hand on leg rhythmically. (KEEP DOING THIS UNTIL TIME FOR SECOND ROUND) 1. Put arrow in bow, pull, and say 'TWANG'. 2. Stop pointing and say 'ZING'. \r\n\r\n\r\n3. Stop slapping and say 'THUMP'."
                },
                {
                    "title": "Hurricane",
                    "desc": "\"Big wind, big wind, big wind.\""
                },
                {
                    "title": "Hydraulics",
                    "desc": "Move hand up slowly with pumping action. Then let it go limp. Do again. "
                },
                {
                    "title": "Hyena Cheer",
                    "desc": "Everyone throws their heads back and laughs crazily like a hyena."
                },
                {
                    "title": "Ice Cube",
                    "desc": "Shape an ice cube with a thumb and index finger, saying, \"COOOOL'"
                },
                {
                    "title": "Ice Water",
                    "desc": "Pretend to wipe sweat from brow with bandanna. Pick up pitcher and pour yourself a glass of ice water. Throw head back as you drink water, then say, 'Ahh...that was COOOOOL!'"
                },
                {
                    "title": "Icicle",
                    "desc": "Burr, burr, burr"
                },
                {
                    "title": "Idea",
                    "desc": "Put your finger on the side of your face and say, \"That's the best idea yet!'"
                },
                {
                    "title": "Imaginary",
                    "desc": "Pretend you are clapping but have hands go by each other instead of hitting each other."
                },
                {
                    "title": "Imaginary Cheer",
                    "desc": "Pretend you are clapping but have hands go by each other instead of hitting each other."
                },
                {
                    "title": "Indian",
                    "desc": "Stomp feet three times, beat chest three times, 5 Indian yells with hand over mouth.\r\n"
                },
                {
                    "title": "Indian",
                    "desc": "\"HOW-HOW-HOW ... UGH!\""
                },
                {
                    "title": "Indian War Drum",
                    "desc": "Pound your chest with your fists for a few seconds and end with a big war whoop, \"Yiiiii!\""
                },
                {
                    "title": "Indian Yell",
                    "desc": "Stomp feet three times, beat chest three times, 5 Indian yells with hand over mouth."
                },
                {
                    "title": "Indiana Jones",
                    "desc": "Swing hand and arm back and then forward simulating the snapping of a whip. Snakes, it would have to be snakes.\r\n"
                },
                {
                    "title": "Indiana Jones Yell",
                    "desc": "Swing hand and arm back and then forward simulating the snapping of a whip. Snakes, it would have to be snakes."
                },
                {
                    "title": "Indy 500",
                    "desc": "Vroom Vroom"
                },
                {
                    "title": "Interrupted",
                    "desc": "Bring hands together like a clap, but stop before they touch. Repeat several times."
                },
                {
                    "title": "Introduction cheer",
                    "desc": "Have everyone introduce themselves at the same time, thus saving a lot of time."
                },
                {
                    "title": "Invention",
                    "desc": "Look surprised and say 'Boy, look what I discovered' or WOW, look what I made. Pretend to hold up a test tube in one hand. Pour something into it; then something else, then shout, 'Booommm!' "
                },
                {
                    "title": "Invention",
                    "desc": "I've made it, I've made it, I don't know what it is, but I've made it."
                },
                {
                    "title": "Invention Cheer",
                    "desc": "I've made it, I've made it, I don't know what it is, but I've made it."
                },
                {
                    "title": "Inventor",
                    "desc": "Look surprised and say, 'Wow, look what I made!"
                },
                {
                    "title": "Iron Man",
                    "desc": "Flex muscles and then pretend to iron a shirt on an ironing board. \r\n"
                },
                {
                    "title": "Italian Applause",
                    "desc": "\"Bravo! Bravo Bravissimo!\""
                },
                {
                    "title": "I'm a Star",
                    "desc": "Hold your hand in front of your face & Say 'Now there is a star for sure!'"
                },
                {
                    "title": "Jackhammer",
                    "desc": "Hold jackhammer with both hands and begin using it. 'Bap-bap-bap-bap-bap!'"
                },
                {
                    "title": "Jalopy",
                    "desc": "Ahh OO Ga, Ahh OO Ga, Aah OO Ga"
                },
                {
                    "title": "Japanese",
                    "desc": "Place hands together about chest high and say Ah So, Ah So while giving little bows.."
                },
                {
                    "title": "Japanese",
                    "desc": "Place palms together, fingertips up about chest high and bow head saying: \"You have done a most honorable job!\" "
                },
                {
                    "title": "Javelin",
                    "desc": "Hold hand as if close over a javelin, raise arm above shoulder and pretend to throw the javelin forward, wait a couple of secs and say \"Thud\".\r\n"
                },
                {
                    "title": "Jaws",
                    "desc": "Make sound of Jaws theme. Put palms together and open and close like jaws as you 'sing' the Jaws theme."
                },
                {
                    "title": "Jaws",
                    "desc": "Do two measures (DUM dum, DUM dum, DUM dum, DUM, dum) of the theme from \"Jaws\" then lean forward, draw back your lips to show menacing teeth, and say \"Chomp, chomp, chomp\""
                },
                {
                    "title": "Jaws",
                    "desc": "Make a shark mouth by putting elbows together. Open arms and yell, 'Help!' Close arms and say, 'Delicious!' "
                },
                {
                    "title": "Jaws (Shark) Cheer",
                    "desc": "Chomp, Chomp, Chomp."
                },
                {
                    "title": "Jaws (version 2)",
                    "desc": "Hold arms to cover face (Hands holding elbows) yell \"AAAAAH, HELP !\"\r\n"
                },
                {
                    "title": "Jet Breaking Sound Barrier",
                    "desc": "Fly your hand like a jet saying 'Zoooommmmm' then bring your other hand up and clap once as loud as you can and say 'BOOM!'"
                },
                {
                    "title": "Jet Clap",
                    "desc": "Swish your hand across the front of you like a jet and clap your hands twice, real fast to simulate the sonic boom.\r\n"
                },
                {
                    "title": "Jet Plane",
                    "desc": "Hold palm of right hand straight and move in swooping motion from right to left, back to right and then to left. Give a good loud \"zoom\" with each motion."
                },
                {
                    "title": "Jim Bowie",
                    "desc": "Simulate throwing a large knife."
                },
                {
                    "title": "Jingle Bells",
                    "desc": "Stand and wiggle all over while saying 'jingle, jingle, jingle.'"
                },
                {
                    "title": "Jockey Cheer",
                    "desc": "Stand with knees slightly bent, cap on backwards.\r\n"
                },
                {
                    "title": "Jolly Green Giant",
                    "desc": "Ho, Ho, Ho in a deep voice.."
                },
                {
                    "title": "Jousting",
                    "desc": "Start by yelling, 'Charge !' Then clap hands on thighs to sound like horses running. Finally end by jumping up and yelling, 'Crash!'"
                },
                {
                    "title": "Judge",
                    "desc": "Pound gavel by clenching fist, pounding it in open palm, & say, 'Order in the court!'"
                },
                {
                    "title": "Juggler",
                    "desc": "Take out pretend things to juggle, such as eggs, bowling balls, pies, etc. Drop one with a yell. "
                },
                {
                    "title": "Jump Up",
                    "desc": "Have the group jump up, sit down, and jump up, then yell: '____ just can't be beat! \" "
                },
                {
                    "title": "Jungle Cheer",
                    "desc": "Ee-Ee, Caw, Caw, Screech"
                },
                {
                    "title": "Karate",
                    "desc": "Do karate chop motion while yelling 'Eeeh Yah!\""
                },
                {
                    "title": "Karate Watermelon",
                    "desc": "Pretend to pick up a watermelon, place on a table, bow with palms together. Cut watermelon with a karate chop motion saying \"Eeeh Yah!\"."
                },
                {
                    "title": "Ketchup",
                    "desc": "Everyone makes a fist with their left hand and slaps the side of their fist with their right hand, as if trying to coax ketchup from a bottle. Six quick slaps and then the ketchup comes out in one big noised dolled: Slap-skip-slap-slap-skip-slap balloons!"
                },
                {
                    "title": "Ketchup",
                    "desc": "Pretend to pound on the bottom of the bottle six times, saying, \"Pop, pop, pop, pop, pop\" on the sixth pop, go \"Squish, uh, oh. Too much.\""
                },
                {
                    "title": "Ketchup",
                    "desc": "Pretend to unscrew bottle cap. Turn bottle over and pound on bottom (side of hand)"
                },
                {
                    "title": "Ketchup Bottle",
                    "desc": "Pat bottom of bottle (left hand), then the third time the ketchup comes out all over \"BLLLLGGGG\"."
                },
                {
                    "title": "Ketchup Bottle",
                    "desc": "Slap the top of your fist with the other hand."
                },
                {
                    "title": "Keyboard",
                    "desc": "Fingers on the keyboard, say 'Type, type, type, type.'"
                },
                {
                    "title": "Keyboard",
                    "desc": "Drum fingers on a hard, flat surface as if typing on the keyboard."
                },
                {
                    "title": "Keyboard",
                    "desc": "'Clickety, clickety, clack, clickety, clickety, clack."
                },
                {
                    "title": "Killer Bees in this Beehive",
                    "desc": "Instruct everyone to start humming. The as you raise your hands the humming gets louder. When you lower your hands the humming gets quieter."
                },
                {
                    "title": "King",
                    "desc": "Slightly bow and say: \"Long Live the King!'"
                },
                {
                    "title": "King Of The Hill Yell",
                    "desc": "\"King of the hill! King of the Hill! (Person's name) is KING OF THE HILL!! \""
                },
                {
                    "title": "Kiowa Indian Yell",
                    "desc": "Ask everyone to stand and follow the leader. First, stamp your feet three times. Then slap your knees three times, beat your chest three times, and shake your fist three times. After all this, give a loud Indian yell patting your hand over your mouth."
                },
                {
                    "title": "Kiss The Cooks",
                    "desc": "Throw kisses"
                },
                {
                    "title": "Kitty Litter Applause",
                    "desc": "\"Sandy Claws, Sandy Claws, Sandy Claws\""
                },
                {
                    "title": "Knee Clap",
                    "desc": "Clap hands on knees while hopping from one foot to another. Be sure to raise knees high"
                },
                {
                    "title": "Knight",
                    "desc": "Kneel and place your right hand on your left shoulder, then on your right shoulder, while saying -- I dub thee Sir Knight.\r\n"
                },
                {
                    "title": "Knight",
                    "desc": "Have the person receiving the applause kneel and place his right hand on his left shoulder. The group stands and yells, \"Hail Sir Knight ! Welcome to our Roundtable!!!"
                },
                {
                    "title": "Knight and Dragon",
                    "desc": "Take that, you dragon! (While thrusting a sword) "
                },
                {
                    "title": "Knight Applause",
                    "desc": "Kneel and place your hand on your left shoulder, while saying: 'I dub thee, Sir Knight.'"
                },
                {
                    "title": "Knight Cheer",
                    "desc": "Take that, you dragon! (While thrusting a sword)"
                },
                {
                    "title": "Knights",
                    "desc": "Raise both arms over your head and say, 'TO ARMS, TO ARMS, TO ARMS'"
                },
                {
                    "title": "Knights",
                    "desc": "Hold left arm bent in front of you like holding a shield and use right hand as though sword fighting, making a few swishes through the air and then jab."
                },
                {
                    "title": "Launch",
                    "desc": "(Count down 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 and toss a handkerchief into the air and cheer as loudly as they can until it hits the ground)."
                },
                {
                    "title": "Lawn Sprinkler",
                    "desc": "Hold hands together and straight out in front of you. Slowly turn to the right, with a fast return to the left, while making sounds like a sprinkler, \"spsss, spsss,spsss.\""
                },
                {
                    "title": "Lawrence Welk/Fred Flintstone",
                    "desc": "Yell \"A-one and a-two and a YABBA DABBA DOO!\" Accompany the \"Yabba dabba doo!\" with fists clenched and a vigorous side-to-side motion of the hips."
                },
                {
                    "title": "leader Yell",
                    "desc": "\"Rah, Rah, Rah!! SIS BOOM BAH!! RAH, RAH, RAW! \""
                },
                {
                    "title": "Leader's",
                    "desc": "Chow! Chow! Bow! Wow! (Den Leader's name) Wow! Wow!\""
                },
                {
                    "title": "Leaky Faucet Cheer",
                    "desc": "Hold your index finger out, tip it up and down saying, \"Drip, drip, drip!'"
                },
                {
                    "title": "Leaky Tire",
                    "desc": "HISSSSS sssss ssss sss sss ss s s."
                },
                {
                    "title": "Leaning Tower Of Pisa Cheer",
                    "desc": "Have the group stand and on the count of three, lean to the left."
                },
                {
                    "title": "Leo The Lion Yell",
                    "desc": "\"Roar, Roar, Roar, ROAR!!\""
                },
                {
                    "title": "Let It Grow",
                    "desc": "Dig, dig, plant, plant, sprinkle, sprinkle, sprinkle."
                },
                {
                    "title": "Let's Really Hear It",
                    "desc": "Put your hand to your ear and listen."
                },
                {
                    "title": "Liberty Bell Cheer",
                    "desc": "Ding, Ding, Ding, Dong! Let freedom ring!"
                },
                {
                    "title": "Liberty Bell Yell",
                    "desc": "Ding, Ding, Ding, Dong! Let freedom ring!"
                },
                {
                    "title": "Light Bulb",
                    "desc": "Pretend like screwing in light bulb, saying, \"Bright, bright, bright.\""
                },
                {
                    "title": "Light Bulb Applause",
                    "desc": "Put hands above head like a light bulb and say, 'Blink, Blink, Blink'"
                },
                {
                    "title": "Light Switch",
                    "desc": "\"Click, click, click\"."
                },
                {
                    "title": "Lightbulb Applause",
                    "desc": "Put hands above head like lightbulb and say Blink, blink, blink."
                },
                {
                    "title": "Lightening",
                    "desc": "With one hand draw a zig-zag in the air in front of you saying, \"ZAP, ZAP, ZAP.\""
                },
                {
                    "title": "Lightning",
                    "desc": "With one hand draw a ziz-zag in the air in front of you saying, \"ZAP,ZAP,ZAP.\"\r\n"
                },
                {
                    "title": "Lightning",
                    "desc": "\"Buzz,\" while making a sign like lightning."
                },
                {
                    "title": "Lightning",
                    "desc": "Shake your finger like jagged lightning and go 'ShhShh' on each jagged movement. To add thunder - add a 'BOOM' after every 4 lightning jags or so. "
                },
                {
                    "title": "Lights In The Sky Yell",
                    "desc": "\"Twinkle, twinkle little star. You're the best we've seen so far!\""
                },
                {
                    "title": "Lights in the Sky Yell",
                    "desc": "Look up in the star to find the stars, then say, \"Twinkle, Twinkle, Twinkle\"."
                },
                {
                    "title": "Lion Applause",
                    "desc": "'Roar, Roar, ROAR!!'"
                },
                {
                    "title": "Lion Tamer",
                    "desc": "Simulate having chair and big whip. Hold chair out and crack whip, yelling: BACK, BACK, BACK. "
                },
                {
                    "title": "Lion Tamers",
                    "desc": "\"Back Simba, Back\""
                },
                {
                    "title": "Litterbug",
                    "desc": "Crackle, Clatter, Dump\". (repeat 3 times)"
                },
                {
                    "title": "Litterbug",
                    "desc": "Slap back of hand several times with a frown on your face."
                },
                {
                    "title": "Little Engine Applause, The",
                    "desc": "\"I think I can, I think I can, ...I DID IT!'"
                },
                {
                    "title": "Little Engine Cheer",
                    "desc": "Start \"I think I can, I think I can...\" slowing down gradually. Then (reaching the summit) \"YES! I KNEW I COULD, I KNEW I COULD!\" (getting faster)."
                },
                {
                    "title": "Littlest Clap",
                    "desc": "Clap thumb and first finger together several times."
                },
                {
                    "title": "Livewire",
                    "desc": "Grab onto a live electrical wire and shake the whole body."
                },
                {
                    "title": "Lobster",
                    "desc": "While speaking in a low voice say, 'Pinchy, pinchy, pinchy.' At the\r\nsame time move all the fingers and thumbs together in pinching\r\nmotions."
                },
                {
                    "title": "Locomotive",
                    "desc": "Begin on the he heels of your hands, slowly and together. Gradually increase speed, working towards the finger tips and finally over the ends of the fingers. The last  part is raise your hand over your eyes as a gesture of looking in the distance.\r\n"
                },
                {
                    "title": "Locomotive",
                    "desc": "Slowly slap arm, increase speed, \"WHOO-WHOO, WHOO-WHOO\""
                },
                {
                    "title": "Locomotive",
                    "desc": "Have arms at side bent at the elbow. Rotate arms in a circular motion at one's side while saying \"CHUG, CHUG, CHUG, WHOO, WHOO.\""
                },
                {
                    "title": "Lollipop",
                    "desc": "Everyone pretends to have a large lollipop.  Start licking it from the bottom to the top going 'Mmmmmmmmm.'"
                },
                {
                    "title": "Lone Ranger",
                    "desc": "Where does the Lone Ranger take his garbage? \r\nTo de dump, to de dump, to de dump, dump, dump"
                },
                {
                    "title": "Lone Ranger",
                    "desc": "Hi Ho Silver away!!"
                },
                {
                    "title": "Louder and Louder (a yell from one den or patrol to another)",
                    "desc": "\"I like Cub (or Boy) Scouts; yes, I do! I like Cub (or Boy) Scouts; how about you?\" And point to the group that is to respond in the same way."
                },
                {
                    "title": "Louder Big Hand Cheer",
                    "desc": "Give a BIG HAND CHEER. Then the leader says, 'Louder.' Everyone holds up the other hand too."
                },
                {
                    "title": "Low Desert Applause",
                    "desc": "(squatting) Yucca, yucca, yucca."
                },
                {
                    "title": "Lucky Duck Cheer",
                    "desc": "Sight a pretend duck through your pretend rifle sight. The duck says, 'QUACK, QUACK'. The rifle goes 'BANG, BANG'. The duck continues flying saying, 'QUACK, QUACK'."
                },
                {
                    "title": "Lucky Duck or Lucy Goosey",
                    "desc": "Pantomime following an imaginary duck through the air with a rifle. The duck says \"Quack, quack, quack!\" The hunter's rifle goes \"Bang, bang, bang!\" The duck continues flying--\"Quack, quack.\""
                },
                {
                    "title": "Lumberjack",
                    "desc": "Pretend to cut a tree with a saw while saying, \"Zuba, Z-zub, z-zuba. Then yell \"Timber.\""
                },
                {
                    "title": "Lumberjack",
                    "desc": "Pretend to be chopping a tree then shout \"Chop, Chop, Chop, TIMMMMBERRRR!\""
                },
                {
                    "title": "Lumberjack",
                    "desc": "With a partner, first person makes a fist with thumb up. Second person grasp thumb and makes a fist with thumb up. First person grasp that thumb and makes fist thumb up. Second person repeats. With all four hands together, make back and forth sawing motion."
                },
                {
                    "title": "Lunch Bag Cheer",
                    "desc": "Blow up paper bag and pop it, :Kaabooooom!'"
                },
                {
                    "title": "Mad Chef",
                    "desc": "Pretend to be mixing and pouring while laughing wildly."
                },
                {
                    "title": "Mad Doctor",
                    "desc": "Laughing wickedly, prepare the patient, lift up the sheet, put on your mask, turn to your assistant and say Scalpel, Sponge, sponge. (Speaking faster and faster) Sponge, sponge, sponge. Oh, no!!! Transfusion!!!"
                },
                {
                    "title": "Mad Scientist",
                    "desc": "Pretend to hold up a test tube in one hand. Pour something into it, then something else, then go \"BooooooooooOOOOMM!\""
                },
                {
                    "title": "Mad Scientist",
                    "desc": "Pretend to hold a test tube in one hand. Pour something into it; then something else, then shout \"Boooommm!\""
                },
                {
                    "title": "Magic Cheer",
                    "desc": "Put hand up sleeve then pull it out and shout 'Sha-zam'!"
                },
                {
                    "title": "Magic Cheer",
                    "desc": "Group waves hands back and forth and says \"Hocus Pocus!!\" three times."
                },
                {
                    "title": "Magic Hand",
                    "desc": "Hold hands out in front of you, then put them behind your back, saying \"Now you see them now you don't\". Repeat three times or until your hands actually disappear."
                },
                {
                    "title": "Magic Neckerchief Cheer",
                    "desc": "Explain that you have a magic neckerchief that controls cheering. When you throw it into the air, audience members can make as much noise as they want, but when the neckerchief is in your hand or on the floor, they must be quiet. Try throwing it, and faking it."
                },
                {
                    "title": "Magic Trick",
                    "desc": "Abracadabra, Alakazam (Put hand over mouth because the rest of the words have disappeared.)"
                },
                {
                    "title": "Magician",
                    "desc": "Take the (imaginary) hat off your head, make a magical gesture over the ham and say, \"Abracadabra\""
                },
                {
                    "title": "Magician",
                    "desc": "Stand and pretend to reach up inside your sleeve, pull your hand out and yell \"SHAZAAM!\""
                },
                {
                    "title": "Magician",
                    "desc": "Pretend to reach in a hat and pull out a rabbit and say 'TA . . DA .'."
                },
                {
                    "title": "Magician's Cheer",
                    "desc": "Everyone turns around with his/her eyes closed, saying, \"Abracadabra! Presto change-o! Yea!\""
                },
                {
                    "title": "Magician's Mix-up",
                    "desc": "Remove your imaginary top hat, invert it, and hold it in front of you. Wave an imaginary wand over the hat and say 'Abracadabra;' pause, and then say, 'poof!' When saying 'poof' jump straight up, landing on all fours in a squatting position like a frog, and croak, 'Ribbit, ribbit.'"
                },
                {
                    "title": "Magician's Assistant",
                    "desc": "Take a step back, extend both arms out to one side (like Vanna White), and say, 'T-da!'"
                },
                {
                    "title": "Magician's Mix-up Cheer",
                    "desc": "Remove your imaginary top hat, invert it, and hold it in front of you. Wave an imaginary wand over the hat and say \"Abracadabra;' pause, and then say, \"poof!' When saying \"poof' jump straight up, landing on all fours in a squatting position like a frog, and croak, \"Ribbit, ribbit.'"
                },
                {
                    "title": "Magnifying Glass",
                    "desc": "Pretend to look carefully with the magnifying glass, 'Ohhhhhh!'"
                },
                {
                    "title": "Man In The Moon",
                    "desc": "Circle face with hands and say 'I eat green cheese.'"
                },
                {
                    "title": "Marbles",
                    "desc": "Hold hand up close to side of face and pretend to shoot marbles while bending over slightly."
                },
                {
                    "title": "Marching Band Cheer",
                    "desc": "Use the Band Practice Cheer, but have everyone march in place while playing."
                },
                {
                    "title": "Marilyn Monroe",
                    "desc": "(Sway hips) \"HIP, hip, hooray\", \"Hip, hip, hooray.\"\r\n"
                },
                {
                    "title": "Marshmallow",
                    "desc": "Put your marshmallow on a stick, hold it over the fire. It catches fire. Hurry and blow it out. Cool it. And say, 'Just right!'"
                },
                {
                    "title": "Martian Cheer",
                    "desc": "Say 'Take me to your leader!' "
                },
                {
                    "title": "Match",
                    "desc": "Pretend to strike a match on the seat of your pants, it lights on the second try. Look at it burn, shake your hand and yell \"YEEEEEEEEEEEE-OOOOOOOOO______OOW!\"\r\n"
                },
                {
                    "title": "Mazda",
                    "desc": "Zoom Zoom"
                },
                {
                    "title": "McDonald's' Quarter Pounder",
                    "desc": "Double up fist, lay quarter on top of hand hit it two or three times."
                },
                {
                    "title": "Megaphone",
                    "desc": "Pick up a huge imaginary megaphone that is so big you need two hands to hold it in the air. Hold the hand closest to the mouth in a small circle as if it is gripping the small end of the megaphone. On the count of three, everyone yells, \"great job!\""
                },
                {
                    "title": "Melting Icicle Cheer",
                    "desc": "Hands and fingers down and say, 'Drip, drip, drip.' "
                },
                {
                    "title": "Mercury",
                    "desc": "Say, 'Mercury is the closest planet to the sun. One day is 88 days long. The shaded side is 350 degrees below zero. The sunny side is 770 degrees.' Everyone jump up and down like your feet are burning. "
                },
                {
                    "title": "Mermaid",
                    "desc": "Stand up, put your legs together, put your hands on your hips, and sway your hips back and forth while saying 'Hip, Hip, Hooray!'"
                },
                {
                    "title": "Merry Christmas Cheer",
                    "desc": "Divide into two groups, raise right hand and half say MERRY, raise left hand and the other half say CHRISTMAS, three times."
                },
                {
                    "title": "Mexican Hat Dance",
                    "desc": "Put hands on feet and stamp feet while turning around in a circle."
                },
                {
                    "title": "Mexican Hat Dance",
                    "desc": "Take your hat off your head, throw it on ground, stomp on it and yell, 'Smashed sombrero!' "
                },
                {
                    "title": "Micro-wave Cheer",
                    "desc": "Put thumbs in belt loops and wave remaining fingers."
                },
                {
                    "title": "Middlesex or Winnie the Pooh Yell",
                    "desc": "Middlesex or Winnie the Pooh \r\n"
                },
                {
                    "title": "Mighty Duck Cheer",
                    "desc": "Flap arms and quack"
                },
                {
                    "title": "Milk Shake",
                    "desc": "Shake contents in a shaker bottle, slurp the drink.\r\n"
                },
                {
                    "title": "Milk Shake",
                    "desc": "Pretend to put milk and ice cream into a shaker bottle.  Shake the shaker bottle real hard, pour into a glass and pretend to put a straw into the glass.  Then make a slurping noise as you pretend to drink it."
                },
                {
                    "title": "Milking the Cow",
                    "desc": "You need two people for this one. With one person's arms out in front, fingers interlocked, thumbs down, other person comes and takes a thumb in each hand and does the motion of milking a cow."
                },
                {
                    "title": "Milkshake",
                    "desc": "Hold out hands as though holding a shaker or glass. Rapidly mix your \"shake,\" then empty it with a loud sucking noise on the \"straw.\""
                },
                {
                    "title": "Mistake",
                    "desc": "Clap your hands, but miss."
                },
                {
                    "title": "Mistletoe Applause",
                    "desc": "Hold mistletoe with one hand above head and say \"smooch, smooch, smooch\"."
                },
                {
                    "title": "Model \"t\"",
                    "desc": "Pretend to honk your horn and say \"Ooooga, Ooooga, Ooooga\"."
                },
                {
                    "title": "Model T",
                    "desc": "Push your nose and say \"beep, beep!' Then with your hand flat pretend to push a horn and say \"honk, honk!' Push your tummy and say \"Ah-u-gah, ah-u-gah!'"
                },
                {
                    "title": "Model T Ford Handshake",
                    "desc": "Crank around with hand, make sound like motor turning over."
                },
                {
                    "title": "Modem Applause",
                    "desc": "'Brong, brong, brong, brong, brong, Connected!'"
                },
                {
                    "title": "Monkey",
                    "desc": "Stand on one foot, scratch yourself and say, \"He, he, he, he, he.\""
                },
                {
                    "title": "Monkey",
                    "desc": "Semi-squat position. Raise your left hand to ribs under left armpits, right hand to ribs under right armpit. Make motions of scratching while hopping up and down and yell \"Eeek, eeek!\""
                },
                {
                    "title": "Monkey Cheer",
                    "desc": "Ooo, Ooo, Ooo (while acting like a monkey)"
                },
                {
                    "title": "Monkey Yell",
                    "desc": "Get into a semi-squat position. Raise your hands up to your ribs under your armpits (like a monkey!). Scratch and hop around saying \"Eeek, eeek, eeek, eeek!\""
                },
                {
                    "title": "Moose Cheer",
                    "desc": "Place open hands by ears to form antlers and call \"OOOOO-AAA-OOOO.\""
                },
                {
                    "title": "Mork",
                    "desc": "Nanoo Nanoo"
                },
                {
                    "title": "Mosquito",
                    "desc": "Everyone slaps their arm once, then scratches the 'mosquito bite'."
                },
                {
                    "title": "Mosquito",
                    "desc": "z-z-z-z-z-z-z-z-z (Trace flight of mosquito with finger) Clap hands once for the swat saying 'Gotcha'."
                },
                {
                    "title": "Mosquito",
                    "desc": "Move your eyes like you are following a flying insect and make a buzzing sound. Clap hands together like a swat anywhere in front of you and say 'Got It!' "
                },
                {
                    "title": "Mosquito",
                    "desc": "With hand, slap yourself on the neck, arms, legs, while saying \"Oooo, Aaaah.\" This can also be done by taking one finger and moving it around in the air as a mosquito flying (making a buzzing sound at the same time), letting it land on your arm, slapping at it, and then shaking off the dead mosquito."
                },
                {
                    "title": "Mosquito",
                    "desc": "Follow an imaginary mosquito around with your index finger, say \"Bzzzz.\" As mosquito lands on your arm, make a \"Cluck\" sound (with tongue). Mosquito sucks blood,  \"Sluuuuuuurrppp\" Smack mosquito with other hand, \"SMACK\"."
                },
                {
                    "title": "Mosquito",
                    "desc": "With hand, slap yourself on the neck, arms, legs, while saying \"Oooo, Aaaah.\" This can also be done by taking one finger and moving it around in the air as a mosquito flying (making a buzzing sound at the same time), letting it land on your arm, slapping at it, and then shaking off the dead mosquito."
                },
                {
                    "title": "Mosquito",
                    "desc": "Clap many times by slapping yourself as if mosquitoes are biting you. "
                },
                {
                    "title": "Mosquito",
                    "desc": "(slap all over yourself)  \r\n**Warning, the Cubmaster may have to use some special bug spray to get this cheer to stop."
                },
                {
                    "title": "Mosquito",
                    "desc": "Clap hands once for the swat saying \"GOTCHA\""
                },
                {
                    "title": "Mosquito Applause",
                    "desc": "With hand, slap yourself on the neck, arms, legs, etc."
                },
                {
                    "title": "Mosquito Cheer",
                    "desc": "(slap all over yourself)  \r\n**Warning, the Cubmaster may have to use some special bug spray to get this cheer to stop."
                },
                {
                    "title": "Mosquito Swat",
                    "desc": "Buzzzzzzzzz, slap all over"
                },
                {
                    "title": "Mother",
                    "desc": "Mother, Mother, She's the one. If Mother can't do it, it can't be done.\r\n"
                },
                {
                    "title": "Mother Cheer",
                    "desc": "Mother, Mother, She's the one. If Mother can't do it, it can't be done."
                },
                {
                    "title": "Motor Boat",
                    "desc": "Pull on starter cord a few times while fluttering tongue on roof of mouth. Then start the sound of a motor boat."
                },
                {
                    "title": "Motorboat",
                    "desc": "Flutter your hand in front of you while your tongue flutters.\r\n"
                },
                {
                    "title": "Motorboat",
                    "desc": "Pretend to get into your boat, try to start the engine with the electric starter, whrrr, whrrr, vaaaaarrrooooom!!!! Pretend to drive your boat off."
                },
                {
                    "title": "Motorboat",
                    "desc": "Knife hand out from you in a swishing manner while fluttering tongue on roof of your mouth to imitate sound of engine"
                },
                {
                    "title": "Motorcycle",
                    "desc": "Have everyone stand up, pretend to get onto a motorcycle, rev up the engine, and say \"Tally Ho and away we go!'"
                },
                {
                    "title": "Motorcycle",
                    "desc": "Hold your hands like you're gripping handlebars."
                },
                {
                    "title": "Motorcycle",
                    "desc": "Raise foot and kick downward three times while making a sputtering sound. Hold hands like gripping handle bars. On the third attempt, the engine starts say \"Varooooom.\""
                },
                {
                    "title": "Motorcycle",
                    "desc": "Lift up the left foot and slam it down starting the engine with your hands pretending to hold handlebars and saying \"V-V-r-a-a-a-a-m-m-m-m.\" "
                },
                {
                    "title": "Motorcycle",
                    "desc": "Start with foot, rev up, and take off with hands out like holding handlebars."
                },
                {
                    "title": "Mount Rushmore",
                    "desc": "Shout Washington, Jefferson, Lincoln, Roosevelt!"
                },
                {
                    "title": "Mount Rushmore",
                    "desc": "Hurry, Hurry, Hurry!"
                },
                {
                    "title": "Mount Saint Helen's Cheer",
                    "desc": "Make fists out of both hands and put them together. Make the sound of steam building \"ssssSSSS\", the sound builds; then when the mountain erupts yell \"POP as hands and arms extend over the head.\r\n"
                },
                {
                    "title": "Mount St. Helen's",
                    "desc": "Hold both arms out to your side, bend over slightly, and HOLD"
                },
                {
                    "title": "Mountain Climber",
                    "desc": "March in place as if hiking up a mountain. Put a hand to your forehead, scan horizon, and say, 'I've seen it all now!'"
                },
                {
                    "title": "Mountain Climbers",
                    "desc": "Pretend climbing on mountain. A rock slips off. Put your hand over your eyes, look down and yell - Look OUT BELOW !"
                },
                {
                    "title": "Mouse",
                    "desc": "Assume the position of holding a computer mouse in your hand. Pushing with forefinger on the imaginary mouse say, 'Click, click, click.'"
                },
                {
                    "title": "Mouse",
                    "desc": "'Squeak, squeak, squeak!'"
                },
                {
                    "title": "Movie Star",
                    "desc": "Stand, sway hips back and forth and say, 'Hip, hip, hooray!' "
                },
                {
                    "title": "Mr. Spock",
                    "desc": "Live Long and Prosper"
                },
                {
                    "title": "Mrs. Clause Applause",
                    "desc": "Shake your finger and say \"Here's your lunch, buckle up, and don't be late for dinner\"."
                },
                {
                    "title": "Mule Skinner Style",
                    "desc": "How, How, Hee-ap How."
                },
                {
                    "title": "Muscle Man",
                    "desc": "Show off oversized muscles"
                },
                {
                    "title": "Musical",
                    "desc": "Announce the name of a well-known song such as \"Yankee Doodle\" or \"Dixie\" and ask everyone to clap to its rhythm. For a novel finish, tell everyone to miss on the last note. Someone always forgets."
                },
                {
                    "title": "Nail Pounding",
                    "desc": "Start the nail, drive it in and hit the thumb yelling,  \"OOO-UUU-CCC-HHH!\""
                },
                {
                    "title": "Nail Pounding Cheer",
                    "desc": "'Pound, pound, pound. THERE!'"
                },
                {
                    "title": "National Bird-Eagle",
                    "desc": "Lock your thumbs together and flutter fingers like wings and say: \"Cree, Cree!\""
                },
                {
                    "title": "New Person",
                    "desc": "Welcome Ya'll"
                },
                {
                    "title": "New Person Cheer",
                    "desc": "'Hi, there. Welcome, welcome, WELCOME!' (Effective when given by continuing Cub Scouts and families after new families or leaders are introduced.)"
                },
                {
                    "title": "News Editor Cheer",
                    "desc": "Stop the presses! I want to get off! "
                },
                {
                    "title": "Newspaper Boy",
                    "desc": "\"Extra, Extra, read all about it!\""
                },
                {
                    "title": "Nickel's Worth",
                    "desc": "Flip your thumb as though flipping a coin, then catch it and slap it on the back of your other hand."
                },
                {
                    "title": "Night Before Christmas",
                    "desc": "\"Mommy, Daddy, I can't sleep!\" (in a little child's voice)."
                },
                {
                    "title": "Nike",
                    "desc": "Swoosh!"
                },
                {
                    "title": "No Flies on Us",
                    "desc": "Another \"let's see who the loudest group is\" cheer. This little bit is usually repeated three times for each group, and the loudest group gets to leave first from dinner.\r\n"
                },
                {
                    "title": "Noah's Ark Cheer",
                    "desc": "Each boy makes the sound of his favorite animal."
                },
                {
                    "title": "Noise Machine",
                    "desc": "Control sides of audience with your right and left hands, raise and lower means louder and softer. A humming sound is nice, but try oohs and ahhs and anything else you want."
                },
                {
                    "title": "Noise Machine",
                    "desc": "Leader has a stick about 3 feet long. The group is to stamp their feet louder and louder as the stick is raised and softer and softer as it is lowered. "
                },
                {
                    "title": "Noise Pollution",
                    "desc": "Raise hands and have everyone yell as loudly as they can. Lower hands and volume of yells go down. When hands are on floor, everyone must be extremely quiet. Do several times - raise and lower volume. Then, with hands on floor ask the Pack to listen to absolute quiet."
                },
                {
                    "title": "Non-swimmer's",
                    "desc": "Hold your nose with one hand 3 fingers over your head. As you sink below the surface, say \"Grub, grub, grub.\""
                },
                {
                    "title": "Northern Watermelon",
                    "desc": "Do the watermelon cheer, then say, \"You'se guys!\""
                },
                {
                    "title": "Not so Lucky Duck",
                    "desc": "Same as?\"Lucky Duck\"?but duck hits ground with a \"Splat!\" after rifle shots."
                },
                {
                    "title": "Nutty Cheer",
                    "desc": "'Cashew! Cashew! Cashew!' "
                },
                {
                    "title": "Ocean",
                    "desc": "All yell, 'Swell, swell, swell!' "
                },
                {
                    "title": "Official Applause And Cheer",
                    "desc": "Left hand raised, group claps. Right hand raised, group cheers. Raise both hand, they do both"
                },
                {
                    "title": "Ohh-ahh-eee Cheer",
                    "desc": "Everyone interlocks fingers, then extends the arms outward and make a large 0 and exclaim loudly, 'OHHH!' Then the interlocked fingers are extended above the head with arm pressed close against the ears and exclaim loudly 'AHH!' Now unlock the fingers, put them til the corner of mouth and the11 extend them wide to the sides, exclaiming loudly 'EEEEEEEEEE!' "
                },
                {
                    "title": "Oil Refinery",
                    "desc": "Start by pretending you are Paul Bunyan and pick an oil derrick and sit it down on ground (thud.) Then move your arm like a drill moving downward (buzz.) Then strike oil, move arms up and out while saying \"Crude, crude, crude.\""
                },
                {
                    "title": "Oil refinery",
                    "desc": "Crude, crude, crude"
                },
                {
                    "title": "Oil Well",
                    "desc": "Stand up, place both hands over head and grasp thumbs together. Wiggle fingers and say \"Gush, gush, gush!\" "
                },
                {
                    "title": "Okay",
                    "desc": "Divide into two groups. One group yells, 'O!' the other 'Kay!' "
                },
                {
                    "title": "Oklahoma",
                    "desc": "All stand as if on stage ready to sing, fling out arms, sing 'OOOOOOkIa'wait a minute! We live in _________________!\""
                },
                {
                    "title": "Oklahoma Indian",
                    "desc": "Hold Cub Scout sign behind head like feathers. Say \"UGH\". Lean forward from waist and say \"UGH\" again. Leap into air, extending Cub Scout sign high into air. "
                },
                {
                    "title": "Old Indian Cheer",
                    "desc": "'Sum, Urn, Ugh!' "
                },
                {
                    "title": "Olympic",
                    "desc": "Hold right hand high (as if holding a torch) and run in place."
                },
                {
                    "title": "Olympics",
                    "desc": "Join hands, raise them over head and shout, \"Go for the Gold!\""
                },
                {
                    "title": "Olympics",
                    "desc": "The best winter Olympics anyone ever had. Everyone pat yourselves on the back. "
                },
                {
                    "title": "Once Over",
                    "desc": "Circle hands, at bottom of circle clap palm of one hand and back of the other hand together.\r\n"
                },
                {
                    "title": "Once Over Applause",
                    "desc": "Everyone stands up and gives their neighbor double high fives."
                },
                {
                    "title": "One How Yell",
                    "desc": "Yell the word \"HOW\" loudly. Can be built up to more hows as needed."
                },
                {
                    "title": "One Note",
                    "desc": "Have group sing one note and hold it as long as possible."
                },
                {
                    "title": "One you Never Heard",
                    "desc": "Fake a clap but miss at the last moment."
                },
                {
                    "title": "One-ton Canary",
                    "desc": "Put hands under armpits, say in a deep voice, \"Chirp, chirp, chirp\". "
                },
                {
                    "title": "Opec (oil Well) Yell",
                    "desc": "CRUDE, CRUDE, CRUDE."
                },
                {
                    "title": "Opera",
                    "desc": "Tap index fingers together."
                },
                {
                    "title": "Opera Singer Applause",
                    "desc": "Clasp hands in front of chest and belt out a loud 'LAAAAAAA!'"
                },
                {
                    "title": "Orchestra",
                    "desc": "This one can be a lot of fun because it is a combination of all the above four. Divide your group into four groups with each group doing a different instrument as described above. When you, the orchestra director gives the signal they all do their sounds at once."
                },
                {
                    "title": "Ordinary",
                    "desc": "This is just plain clapping! "
                },
                {
                    "title": "Oriental Yell",
                    "desc": "\"Phooey, phooey, phooey.\""
                },
                {
                    "title": "Oscar Meyer Cheer",
                    "desc": "'Hot Dog!' "
                },
                {
                    "title": "Oscar Meyer's Other Cheer",
                    "desc": "'Baloney!' "
                },
                {
                    "title": "Overeater's Yell",
                    "desc": "Looking uncomfortable, rub stomach and say slowly: \"I can't believe I ate the whole thing.\""
                },
                {
                    "title": "Owl",
                    "desc": "Hoot, hoot, hoot."
                },
                {
                    "title": "Owl",
                    "desc": "Say: \"Whooo's the greatest? YOOOOUUUU! That's  whooooo!\""
                },
                {
                    "title": "Pac Man",
                    "desc": "Make hand into shape of a pac man figure. Open and close fingers and thumb like a mouth chewing and in a nasal voice say \"wonka-wonka-wonka-wonk.\""
                },
                {
                    "title": "Pack",
                    "desc": "Yell in unison: \"Clap your hands.\" (Clap 5 times) \"Stomp your feet.\" (Stomp 5 times) \"Pack ___ can't be beat!\""
                },
                {
                    "title": "Pack",
                    "desc": "Shout \"Razzle, dazzle, never frazzle, not a thread of wool. All together, that's the way we pull.\""
                },
                {
                    "title": "Pack or Troop Yell",
                    "desc": "Shout \"Bing-a-lacka, bing-a-lacka, bing, bing, bing; ching-a-lacka, ching-a-lacka, ching, ching, ching; Bing-a-lacka, ching-a-lacka, Who are we? Pack or Troop #______, yes sir-reee!\""
                },
                {
                    "title": "Pack or Troop Yell Applause",
                    "desc": "Shout \"Strawberry shortcake, eskimo pop, Pack or Troop #_____ Always on top!\""
                },
                {
                    "title": "Pack Yell!",
                    "desc": "Clap your hands ( 3 times), Stomp your feet (3 times), \"Pack can't be beat!\"'"
                },
                {
                    "title": "Pack/troop",
                    "desc": "Everyone yell together, \"Clap your hands,\" then clap hands together two times. Then yell \"Stomp your feet,\" then stomp feet three times on the floor. Then say, \"PACK(TROOP) _____ can't be beat.\"\r\n"
                },
                {
                    "title": "Pack/Troop Cheer",
                    "desc": "Razzle, dazzle, never frazzle, not a thread but wool. All together, all together, that's the way we pull."
                },
                {
                    "title": "Palm Tree Cheer",
                    "desc": "Stand like a tree with palms up."
                },
                {
                    "title": "Pancake",
                    "desc": "Pretend to be holding a frying pan and a spatula in your hands. Pretend to put the spatula under the pancake and flip the pancake into the air. Look into the air as though watching the pancake flip in the air. Catch the pancake with the spatula,and flip it on your hand making a loud \"Clap.\""
                },
                {
                    "title": "Panning for Gold",
                    "desc": "Kneel down like you are at a riverside with your pan. Begin to swirl it as if panning for gold, then say, ' One more hour, just one more hour!'"
                },
                {
                    "title": "Paper Bag",
                    "desc": "1. Pretend to hold a paper bag. 2. Make a motion to simulate opening the bag, forming a neck, and pretend to blow it up! 3. Then make a motion to pop it and yell, \"Pop!\""
                },
                {
                    "title": "Paper Bag",
                    "desc": "Make motions to simulate opening a paper bag., forming neck, blowing it up and pop it, saying \"POP\" loudly."
                },
                {
                    "title": "Parakeet And Canary Applause",
                    "desc": "Divide the audience into two groups, the Parakeets and the Canaries. When you point to the parakeets, they sing \"Cheep.\" When you point to the Canaries, they sing \"Chirp.\" When you point to both, they must sing together. See what happens when you go fast or slow."
                },
                {
                    "title": "Parrot",
                    "desc": "Make wings with your arms, flap and say, \"Polly wants to say, You're GREAT!\""
                },
                {
                    "title": "Partner",
                    "desc": "Do this in a group. One person puts hands out with the palm up on the right hand, and the palm down on the left hand. The next person places his hands on them, so the palms are together. Then proceed to clap with each other."
                },
                {
                    "title": "Party Cheer",
                    "desc": "Throw hands in the air and say, \"Confetti, Confetti, Confetti.\"\r\n"
                },
                {
                    "title": "Pat on the Back",
                    "desc": "Everyone pat the back of the left shoulder with their right hand."
                },
                {
                    "title": "Patriotic",
                    "desc": "Shout \"U.S.A.\" and thrust right hand with doubled fist skyward while shouting \"Hooray. Onward and upward!\""
                },
                {
                    "title": "Patriotic",
                    "desc": "Shout: \"USA, USA!!!\" Then stand up and salute."
                },
                {
                    "title": "Patriotic II",
                    "desc": "Shout \"America, America, you're the greatest!!\" Then stand and salute."
                },
                {
                    "title": "Paul Bunyan",
                    "desc": "Pretend to hold axe over shoulder then bring it down quickly while saying \"chop.\" Do this 3 times then shout \"Timber,\" holding arms out in front of you while you catch the trees, then pout them into your giant wood box. \"Clung, clung, clung.\""
                },
                {
                    "title": "Paul Bunyan",
                    "desc": "'Don't be blue, Babe!'"
                },
                {
                    "title": "Paul Bunyan Applause",
                    "desc": "Make motions as if sawing down a tree, meanwhile, alternately blowing out and sucking in air with 'shhhh' sounds. After all of these, and the tree is cut down, yell: 'TIMBERRRR' with a hand held along side your mouth:"
                },
                {
                    "title": "Paul Bunyan Cheer",
                    "desc": "Divide group in 2 sections. Have group 1 say \"Chip\" when you point to them and have group 2 say \r\n\"Chop\" when pointed at. Have the groups speed up and at the end yell \"Timber ... Whoosh\". \r\nPatriotic Applause: Shout, \"USA\" and thrust hand with double fist skyward, then shout \"Hooray, onward and upward\"."
                },
                {
                    "title": "Paul Revere",
                    "desc": "Pretend to be riding a horse while moving up and down while saying \"The British are coming, the British are coming!\""
                },
                {
                    "title": "Paw Applause",
                    "desc": "Clap palms of hands together and shout, \"Arf! Arf! Arf!\""
                },
                {
                    "title": "Peanut",
                    "desc": "Take imaginary peanut between two fingers. Pinch and shake into open mouth. Do three times, then rub stomach while saying \"Where's the Alka Seltzer?\""
                },
                {
                    "title": "Pecos Bill",
                    "desc": "Pretend to twirl a 10 ft rattlesnake lasso and say 'Rattle, rattle, rattle!'"
                },
                {
                    "title": "Penguin",
                    "desc": "Wrap your arms around yourself as if you are very cold. Say, \"Brrrrrr. Its cold!\""
                },
                {
                    "title": "Pennsylvania University",
                    "desc": "Draw right fist back to shoulder, then throw punch while yelling P U.\r\n"
                },
                {
                    "title": "Pepper",
                    "desc": "Pick a pepper off a vine or tree, look at it, lick your chops. Take a big bite, chew and swallow. ITS HOT, REALLY HOT--express it by holding your throat and \"Water.\""
                },
                {
                    "title": "Personal Cheer",
                    "desc": "Stomp feet three times and shout personal name.\r\n"
                },
                {
                    "title": "Peso",
                    "desc": "Say, 'Money, money, money, money!' while holding arm out with right hand cupped and rubbing thumb on fingers as loud as you can."
                },
                {
                    "title": "Philmont Rain",
                    "desc": "If you've ever been to the Philmont Scout Ranch you know it rains in a very distinctive way there. From far off across the Mesa you see the darkening clouds coming closer. Suddenly one large drop of rain strikes your tent. (Strike your left shoulder with your right hand.) As the clouds come closer the rain gets stronger, (strike the left shoulder with the right hand and then travel down the left arm striking with the right hand getting faster and faster so that when you reach the back of the left hand it sounds like a rain storm.) As the clouds pass by the rain gradually slows (reverse the process) until one final drop plops on the tent (right hand on left shoulder.)"
                },
                {
                    "title": "Phone",
                    "desc": "Act like you are answering a phone with your hand' Everyone yells: \"Ring-a-ling! Ding-a-ling! Hello! Hello! Hello!\""
                },
                {
                    "title": "Physical Fitness Cheer",
                    "desc": "While jogging in place, shout, \"Huff and Puff, Huff and Puff, working out is really tough!"
                },
                {
                    "title": "Picking Up After A Litterbug",
                    "desc": "Spot some trash, pick it up and put in can, clap, slide hands together as though you are brushing them off and smile big. \r\n"
                },
                {
                    "title": "Pickle",
                    "desc": "Bite a piece of pickle and say, \"That's the best darn pickle I ever heard.\""
                },
                {
                    "title": "Picnic",
                    "desc": "Make like the army of ants who came to eat up your picnic lunch. Hold out left arm with two fingers of right hand walk them down toward hand while saying \"Hup, two, three, four.\" When fingers reach opened palm grab them while saying \"Gotcha!\""
                },
                {
                    "title": "Picnic",
                    "desc": "Rub stomach and say, 'Yummy in the tummy!' "
                },
                {
                    "title": "Picnic Applause",
                    "desc": "Make like the army of ants who come to eat your picnic lunch. Hold out left arm and with two fingers of right hand walk them down the arm toward the hand while saying 'hup, two, three, four.' When fingers reach opened palm, grab fingers and say 'Gotcha'. \r\n"
                },
                {
                    "title": "Pie in the Face",
                    "desc": "Turn to the person to your left and pretend to push pie into their face, make sloppy-squishy noises."
                },
                {
                    "title": "Pig",
                    "desc": "'Sui, sui, sui, pig, pig, pig.'"
                },
                {
                    "title": "Pinata",
                    "desc": "Pretend to hit pinata, say \"Swoosh\" (Miss), \"Swoosh\" (miss), \"Swoosh\" (hit) \"HOORAY.\""
                },
                {
                    "title": "Pinata",
                    "desc": "BANG, BANG, BOOM! Make motions of breaking the pinata"
                },
                {
                    "title": "Pinewood Derby",
                    "desc": "Hold right hand above head and bring it down with hand pointing in front of you as a pinewood car going down a track while saying \"Swoooooshhh, Thud.\""
                },
                {
                    "title": "Pink Panther Picnic",
                    "desc": "Leader says: \"What did the Pink Panther say when he stepped on an ant?\" Audience (standing) grinds one heel on the floor while singing to the tune of \"The Pink Panther Theme:\" \"Dead Ant, dead ant, dead ant, dead ant, dead ant, dead ant...\""
                },
                {
                    "title": "Pinky",
                    "desc": "Clap little fingers together.\r\n"
                },
                {
                    "title": "Pioneer",
                    "desc": "Divide the audience in half. On the signal from the Cubmaster, one side asks, 'What shall I do? What shall I do?' and the other side responds, 'Go West, young man, go West!'"
                },
                {
                    "title": "Pioneers",
                    "desc": "P-I-O-N double E R\r\nPioneers, Pioneers,\r\nThat's who we are\r\nP-I-O-N double E R\r\nPioneers, Pioneers,\r\nBest by far"
                },
                {
                    "title": "Pirate",
                    "desc": "\"Yo, ho, ho, and a bottle of Sprite. \r\n"
                },
                {
                    "title": "Pirate",
                    "desc": "At last you land lovers, walk that plank. Glub, glub, glub."
                },
                {
                    "title": "Pirate",
                    "desc": "\"Avast You land-lubbers, walk that plank-  Glub, glub, glub.\""
                },
                {
                    "title": "Pizza",
                    "desc": "Cut pizza and then take slice and say \"Yum, yum, yum.\""
                },
                {
                    "title": "Pizza",
                    "desc": "Flip a pizza in the air while saying, 'Mama mia!' "
                },
                {
                    "title": "Plane",
                    "desc": "Hold imaginary plane in hands and plane the wood to the sound of 'zzzziiiiiippp!'"
                },
                {
                    "title": "Plant",
                    "desc": "Crouch near floor, take deep breath, hands together, like saying prayer with eyes closed, slowly rise upward spreading fingers and as you are on tip-toes, look up (to sun,) open eyes and exhale \"Ahhhh.\""
                },
                {
                    "title": "Planting Trees",
                    "desc": "Pretend to dig hole, place tree in hole, shovel in dirt, and stomp feet to pack dirt around the tree."
                },
                {
                    "title": "Polar Bear Hug",
                    "desc": "Put your arms around your own shoulders and give yourself a big hug."
                },
                {
                    "title": "Pole Vault",
                    "desc": "Stand two fingers of one hand on the other arm like legs. Have them run down the arm to the wrist and then leap into the air, as the hand comes down, CLAP!\r\n"
                },
                {
                    "title": "Police Officer",
                    "desc": "'Excuses, excuses, excuses is all I hear all day long, but you did great!'"
                },
                {
                    "title": "Politician",
                    "desc": "Pat your self on the back. "
                },
                {
                    "title": "Politician Yell",
                    "desc": "\"Vote for ______ Vote for _______ Vote for_______ !  He's/She's our choice!\""
                },
                {
                    "title": "Pony",
                    "desc": "Clap your hands together, then slap your leg with each hand to simulate a pony trot.\r\n"
                },
                {
                    "title": "Pony Express",
                    "desc": "Have everyone gallop in place and shout YIPPEE two or three times."
                },
                {
                    "title": "Popcorn",
                    "desc": "With one hand closed, cover it with the other hand. Let the closed fingers \"grow\" from under the other hand and then, spring the fingers open saying, \"Pop! Pop! Pop!\""
                },
                {
                    "title": "Popeye",
                    "desc": "1st group yells \"Where's my spinach! Where's my spinach! 2nd group yells \"Toot, toot! You're Popeye the sailor man! Here's your spinach! 1st group \"well, blow me down, I love my spinach! Toot, toot!\r\n"
                },
                {
                    "title": "Potato",
                    "desc": "\"Mash, mash, mash .'"
                },
                {
                    "title": "Pow Wow Cheer",
                    "desc": "Explain to audience then when you call out, \"POW\" they are to respond \"WOW\" and vice-versa."
                },
                {
                    "title": "Power Outage",
                    "desc": "Stare into the imaginary computer screen in front of you with a concerned look that you just lost all of your data when the power went out. Whisper \"Please don't, please don't, please don't.\" and then (realizing you didn't loose the data) shout \"YES!\""
                },
                {
                    "title": "Present Cheer",
                    "desc": "Pretend that you are opening a present. When you open the box, say, \"Oooh, Aaaaah!\""
                },
                {
                    "title": "President",
                    "desc": "Salute and say \"Hail to the Chief.\"\r\n"
                },
                {
                    "title": "Presidential Cheer",
                    "desc": "Salute and say: Hail to the Chief"
                },
                {
                    "title": "Private Eye",
                    "desc": "Put hands over eyes and say, 'What do you want to know?'"
                },
                {
                    "title": "PTA Applause",
                    "desc": "Just plain old clapping for those who lack any imagination."
                },
                {
                    "title": "Pterodactyl",
                    "desc": "Soar through the air on wide spread wings saying, 'Eek, eek, eek! "
                },
                {
                    "title": "Pump",
                    "desc": "Have everyone get out their bucket, hang it on the end of their pump, back up a step or two, then pretend to take hold of the pump handle and start to pump. Do this for about ten pumps and say \"The bucket is full.\"\r\n"
                },
                {
                    "title": "Pump Handle",
                    "desc": "Grasp the hand of the pump and work it up and down while making an appropriate \"Squeek\" with each pump."
                },
                {
                    "title": "Quarter turns",
                    "desc": "Have the group stand up to applaud. They clap once, turn a 1/4 turn and clap again, turn another 1/4 turn and clap again, and continue like that until they have completed a full turn."
                },
                {
                    "title": "Quick Applause",
                    "desc": "Have the group remain seated and on your mark, have them clap one quick time."
                },
                {
                    "title": "Quick Clap",
                    "desc": "Hold left arm straight out to side, swing right arm around the front of your body and make one slap, saying 'VROOM!'"
                },
                {
                    "title": "Quiet Applause",
                    "desc": "Applaud quietly, barely touching hands together."
                },
                {
                    "title": "Race Car",
                    "desc": "Say \"Varoooom\" five times starting quietly and increasing in loudness each time while shifting gears with right hand.\r\n"
                },
                {
                    "title": "Racers",
                    "desc": "Move hand like a racer and go ZZZRRrrroooooooommmmm three times"
                },
                {
                    "title": "Radar Dector",
                    "desc": "Say, 'Ping, ping, ping, ping, ping,' really fast. 'Good, right on speed!'"
                },
                {
                    "title": "Railroad",
                    "desc": "Make arms go back and forth and say \"CHUG A CHUG A\" pull on whistle and say \"WHOOOO WHOOOO WHOOOO\". "
                },
                {
                    "title": "Railroad Signal",
                    "desc": "Hands next to head. Open/close palms. Say \"Blink, Blink ...\""
                },
                {
                    "title": "Rain",
                    "desc": "Twiddle fingers and make a noise like rain and then walk in place while saying, 'Slosh, slosh, slosh'. "
                },
                {
                    "title": "Rain Bird Sprinkler",
                    "desc": "With pointer finger on the side of your nose, slowly turn head from right to left while making a 'Oh, ch, ch' noise. Then move the head quickly from left to right making a 'p-p-p-p-p' sound (or use 'raspberry' sound). "
                },
                {
                    "title": "Rain Clap",
                    "desc": "Everyone starts by tapping their right thumbs on the palms of their left hands to represent the first few drops of rain. Then use two fingers, three fingers, four, five and the palms of hands. \r\n"
                },
                {
                    "title": "Rain Dance",
                    "desc": "Indian dance in a circle, pat your mouth while looking up at the sky and howling for rain."
                },
                {
                    "title": "Rainbird",
                    "desc": "With pointer finger in front of your lips, slowly turn head from right to left while making \"CH, CH, CH\" noise. Then, move head quickly from left to right making a p-p-p-p sound."
                },
                {
                    "title": "Rainbird",
                    "desc": "Place your arms out in front of you with the palms together, then move them to your right as far as you can: Then begin to move them to your left slowly, stopping at short intervals, making a sound as if water was squirting from the end of a sprinkler, and clap your hands once move to the left side as far as you can go then rapidly move back to the right making a rapid sound of water spurting from the sprinkler, clapping as you do this."
                },
                {
                    "title": "Rainstorm",
                    "desc": "To simulate rain, have everyone pat one finger of the left hand and one finger of the right hand. Gradually increase the intensity of the storm by increasing the fingers hitting together. Decrease the number of fingers as the storm passes.\r\n"
                },
                {
                    "title": "Rainstorm",
                    "desc": "Start clapping with one finger against opposite palm, then, 2, 3, 4,5 and reverse, ending with finger again."
                },
                {
                    "title": "Rainstorm",
                    "desc": "Pat knees lightly, increase, at hand signal \"BOOM\"."
                },
                {
                    "title": "Rainstorm",
                    "desc": "Start by gently patting knees alternately to simulate light rain. Increase the noise by switching to hand clapping as the storm reaches it's height. With a hand signal, have everyone shout 'BOOM' to represent thunder. Gradually decrease the hand clapping \r\nand then pat the knees as the storm subsides."
                },
                {
                    "title": "Rainstorm Applause",
                    "desc": "Follow these actions (when put together, they sound like a rainstorm): Rub hands together, snap fingers, clap hands, slap thighs, stomp feet, slap thighs, clap hands, snap fingers, rub hands, rest hands on lap."
                },
                {
                    "title": "Rainstorm Cheer",
                    "desc": "To simulate rain, have everyone pat one finger of the left hand and one finger of the right hand. Gradually increase the intensity of the storm by increasing the fingers hitting together. Decrease the number of fingers as the storm passes."
                },
                {
                    "title": "Ram",
                    "desc": "Lower head as ram and yell 'CHARRRGE -----THUD'."
                },
                {
                    "title": "Rank Yell",
                    "desc": "Be Prepared! Be Prepared! Shout! Shout! Shout! Bobcat,Wolf, Bear, and Webelos Scout! "
                },
                {
                    "title": "Raquel Welch",
                    "desc": "HIP! HIP! Hooray! (swing hips to side to side)"
                },
                {
                    "title": "Rattlesnake",
                    "desc": "Hisssssssssss"
                },
                {
                    "title": "Rattlesnake",
                    "desc": "Rattle, rattle,----hiss, hiss."
                },
                {
                    "title": "Rawhide",
                    "desc": "Head em up! Move em out!"
                },
                {
                    "title": "Real Big Hand",
                    "desc": "Make a fist with the thumb extended, put thumb to lips and pretend to blow, open hand and extend fingers gradually with each puff. Hold up hand when fully extended.\r\n"
                },
                {
                    "title": "Recycle",
                    "desc": "Two, four, six, eight, recycling is really great' Reuse, reduce, and RECYCLE!"
                },
                {
                    "title": "Recycle",
                    "desc": "Pick up an empty soda can, stomp on it and throw into a recycling can \r\n"
                },
                {
                    "title": "Recycle",
                    "desc": "Pat yourself on the back several times. \r\n"
                },
                {
                    "title": "Recycle Cheer",
                    "desc": "Shout, \"REDUCE, REUSE, RECYCLE!\""
                },
                {
                    "title": "Recycle Cheer",
                    "desc": "Give everyone an empty soda can and have everyone stomp on it and throw into a trash can OR use imaginary can with motions."
                },
                {
                    "title": "Recycle Cheer",
                    "desc": "Use it up, wear it out, make it do, or do without!"
                },
                {
                    "title": "Reduce, Reuse, Recycle",
                    "desc": "Divide the audience into three sections. Have the first section yell, \"Reduce!\", the second section yell, \"Reuse!\", and the third section yell, \"Recycle!\" Alternate pointing at each section, pointing faster and faster."
                },
                {
                    "title": "Reel",
                    "desc": "Pretend to be fishing (cast out the line, reel it in). Do this three times, pretending to catch a big fish the fourth time. Reel it in, grab your net, and bring the fish in. Hold the fish up and say, \"Look at this beauty!\""
                },
                {
                    "title": "Regatta",
                    "desc": "Hold you right hand, palm up, in front of your mouth and pretend holding a sailboat. \"Release\" the boat with a series of puffing blows."
                },
                {
                    "title": "Reindeer",
                    "desc": "Put your thumbs to your head with the fingers forming antlers. Say \"dash away, dash away, dash away all!'"
                },
                {
                    "title": "Reindeer",
                    "desc": "Make antlers with hands, blink eyes and say \"BLINK, BLINK, BLINK!\""
                },
                {
                    "title": "Reindeer",
                    "desc": "Pretend to crack a whip and say, 'On Dasher, on Comet, on Cupid'."
                },
                {
                    "title": "Relay",
                    "desc": "First person in row claps next person's hand and so on down to the end of the row.\r\n"
                },
                {
                    "title": "Relay Applause",
                    "desc": "Start at one side, have each row slap the hand of the person neti to them, so on down the line."
                },
                {
                    "title": "Reporter Cheer",
                    "desc": "What a scoop! "
                },
                {
                    "title": "Reverse Applause",
                    "desc": "Move hands away from each other.\r\n"
                },
                {
                    "title": "Rhythm Clap",
                    "desc": "1-2-3-4, 1-2-3-4, 1-2-3-4"
                },
                {
                    "title": "Ringmaster's",
                    "desc": "Leader says \"And now, behind me in the Center Ring, the Cubs!!!\" All cubs respond by growling \"YEOOOOOOOOO-OW\". "
                },
                {
                    "title": "Rip Van Winkle",
                    "desc": "Pretend to snore then wake up. Stretch and say, 'WOW, that was a great dream.'"
                },
                {
                    "title": "Road Runner",
                    "desc": "Beep-Beep-Zoom"
                },
                {
                    "title": "Road runner",
                    "desc": "\"swoo-sh, swoo-sh, zoom.\""
                },
                {
                    "title": "Roadrunner Cheer",
                    "desc": "Stand up and run in place as fast as you can while saying, 'BEEP-BEEP, BEEP-BEEP'."
                },
                {
                    "title": "Robot",
                    "desc": "Walk stiff legged with arms in place saying in a monotone voice, \"DOES NOT COMPUTE, DOES NOT COMPUTE!\"\r\n"
                },
                {
                    "title": "Robot",
                    "desc": "The boys make a robot -like motions while saying, 'Beep-beep. beep-beep'."
                },
                {
                    "title": "Rocket Applause",
                    "desc": "Light match on log, bend over, light fuse, have count down while still bending over, \"5, 4, 3, 2, 1, Blast Off\" On \"blast off,\" jump as high as possible into the air."
                },
                {
                    "title": "Rocket Cheer",
                    "desc": "This one should be loud. Get Rocket. Push Button. Eeeeeeeeeeeeeeerrrrrrrrrrrrrrrr bang!"
                },
                {
                    "title": "Rocket Cheer",
                    "desc": "Everyone stands and with clenched fist held high they holler \"The sky's the limit. We can do anything. Boom, boom. Boom!'"
                },
                {
                    "title": "Rocket Cheer",
                    "desc": "Everyone stands and puts hands out to their sides like a penguin. Then twirl in a circle and say \"Oops, we never made if off the ground. Sputter, sputter. Maybe next time.'"
                },
                {
                    "title": "Rocket Cheer",
                    "desc": "Have everyone stand and hold their arms straight up clasping their hands together over their heads forming an arrow shape. On the count of a 3-2-1 blastoff, they bend their knees and then jump high in the air (as if they were the rocket blasting off) at the same time yelling \r\n\"We have LIFT-OFF!'"
                },
                {
                    "title": "Rocket Ship",
                    "desc": "Count down, 10,9,8,7, . . . On zero everybody yells 'Blast Off' and moves from a crouching position to jumping high in the air."
                },
                {
                    "title": "Rocky Mountain Cheer",
                    "desc": "\"Pebbles! Stones! Rocks! Look out below!' This cheer can also be done by three groups with everyone yelling the last phrase together."
                },
                {
                    "title": "Roller Coaster",
                    "desc": "Make wavy motion with hand, getting higher and higher, saying \"Ah-h-h-h\" while doing this. Then, pause at the top, rapidly lower hands while giving \"shrieks.\""
                },
                {
                    "title": "Roller Coaster",
                    "desc": "Use hand to simulate a roller coaster car going uphill. Say, 'Click, click, click!' Finally at the top, your hand goes down quickly and all say, 'Wheeeee!' "
                },
                {
                    "title": "Roman Candle",
                    "desc": "Like Rocket Applause, but you have three bangs, then say \"wiz, wiz, wiz\" while moving your hands and arms out quickly in different directions."
                },
                {
                    "title": "Rooster",
                    "desc": "Placing your thumbs in your armpits, wave the arms up and down like wings while crowing."
                },
                {
                    "title": "Rooster",
                    "desc": "Stand up tall and crow, \"Cock-a-doodle do!\""
                },
                {
                    "title": "Rooster Yell",
                    "desc": "Placing your thumbs in your armpits, flap your arms and crow."
                },
                {
                    "title": "Round of Applause",
                    "desc": "Clap hands while turning in a circle"
                },
                {
                    "title": "Roundhouse Applause, The",
                    "desc": "All stand, turn in a slow circle, and say \"What a great trip!'"
                },
                {
                    "title": "Rousing Hand",
                    "desc": "Hold hand with palm open in front of you about waist high, then thrust it high into the air going up and down several times."
                },
                {
                    "title": "Rudolph",
                    "desc": "Put thumbs to your head with fingers up, forming antlers. Wrinkle your nose, saying.  Blink, Blink, Blink.\"\r\n"
                },
                {
                    "title": "UFO",
                    "desc": "Hold index finger to forehead and shout, \"Take me to your leader.\""
                },
                {
                    "title": "UFO",
                    "desc": "Have the group look up, shade their eyes with one hand, point with the other and yell, \"Look, it's a UFO!!!\" Have them turn their heads as if the object is moving. "
                },
                {
                    "title": "UFO",
                    "desc": "Open and close your fingers and say, 'Blink, blink, blink'."
                },
                {
                    "title": "Umpire",
                    "desc": "Stee-rike!\r\n"
                },
                {
                    "title": "Un-Applause or Reverse Applause, The",
                    "desc": "Start with hands together and quickly bring apart."
                },
                {
                    "title": "Uncoordinated Applause",
                    "desc": "Clap hands, but miss completely."
                },
                {
                    "title": "Undersea",
                    "desc": "Hold your nose with one hand, hold the other hand over your head and raise three fingers one at a time as you say, 'Glug, glug. glug.',"
                },
                {
                    "title": "Upper Hand",
                    "desc": "Stand on your toes, holding your hands straight over your head to applause"
                },
                {
                    "title": "USA-BSA Cheer",
                    "desc": "Two groups. One group yells, \"USA!\" The other group yells, \"BSA!\" Repeat three times. Then both groups yell together, \"That's us!\""
                },
                {
                    "title": "Utah",
                    "desc": "Clap three times, yell 'Utah, Utah.' Clap three times, yell 'You are the greatest,' clap three times. Repeat three times. "
                },
                {
                    "title": "Venetian",
                    "desc": "Make motions as if you were poling a boat and sing out lustily, \"Oh, so lo mio.\""
                },
                {
                    "title": "Venus",
                    "desc": "2nd closest to sun. It is very hot, covered with clouds and has lightning storms. Fan yourself, jump, pretend to dodge the lightning, Say, 'That was a good one.' "
                },
                {
                    "title": "Victory",
                    "desc": "\"Victory, victory is our cry! Yeaaaa! \" Then add the name of the person."
                },
                {
                    "title": "Viking",
                    "desc": "Attack! Attack! Attack! Retreat! Retreat! Retreat! Retreat!\r\n"
                },
                {
                    "title": "Viking",
                    "desc": "Motion as if using the oars on a Viking Ship, row together back and forth several times."
                },
                {
                    "title": "Violin",
                    "desc": "Hold left hand extended as if holding violin, with head tipped a little as if holding instrument under chin. With right hand make the bow go across the strings as you say in a loud scratchy voice, \"Squeek-eek-eek, Squawk-awkawk\", \"Squeek-eek-eek, Squawk-awk-awk\""
                },
                {
                    "title": "VIP",
                    "desc": "How do you do, How do you do, Mr. ________, We welcome you!! "
                },
                {
                    "title": "Volcano",
                    "desc": "Twirl hands while making a rumbling sound in your throat. At the end, throw hands up and go \"Barrrooom!\""
                },
                {
                    "title": "Volcano",
                    "desc": "Put your hands together in front of you, push them up together until they're over your head and have them \"spill lava\" while you make a rumbling sound."
                },
                {
                    "title": "Saguaro Cactus",
                    "desc": "Put arms up in air like a cactus. A woodpecker lands on your belly and starts to peck, then tickles you so you start laughing and giggling."
                },
                {
                    "title": "Sailboat Regatta",
                    "desc": "Hold right hand palm up in front of face and blow across it with a series of puffs."
                },
                {
                    "title": "Sailing",
                    "desc": "Pretend to sit in a sail boat. When the captain (Cubmaster) says, \"Coming about\" duck your head to avoid getting hit by the boom as it swings around."
                },
                {
                    "title": "Sailors Cheer",
                    "desc": "With hand on forehead, look around and say \"Land-Ho.\""
                },
                {
                    "title": "Saint Bernard Cheer",
                    "desc": "Point up the mountain and yell, \"To the rescue!\""
                },
                {
                    "title": "Salt and Pepper",
                    "desc": "Hold both fists out in front of you and raise both thumbs. Then turn them over and shake the shakers."
                },
                {
                    "title": "Santa",
                    "desc": "Ho-Ho-Ho\""
                },
                {
                    "title": "Santa",
                    "desc": "Rub your stomach while saying \"Ho, Ho, Ho, Merry Christmas.\""
                },
                {
                    "title": "Santa Applause",
                    "desc": "Have the boy who gathered the most stocking stuffers come to the front of the group. In his honor, have the audience stand, rub their stomachs three times and call out, 'Ho, Ho, Ho, Way to Go.'"
                },
                {
                    "title": "Santa Cheer",
                    "desc": "Ho! Ho! Ho! Merry Christmas! (Then touch the end of your nose and go \"Ping\".)"
                },
                {
                    "title": "Santa Chimney",
                    "desc": "\"Oooh; Ouch; Rattle; Bang; Craaaassshhh! Ho, ho, ho, Merry Christmas!\""
                },
                {
                    "title": "Santa Chimney",
                    "desc": "Begin to slide down chimney and say 'WHEEZE, GRUNT, RATTLE, BANG, CRAAAAAASHHHHHH'."
                },
                {
                    "title": "Santa Claus",
                    "desc": "Put hands on stomach (belly) as to hold it up, and say 'HO, HO, HO' with a BOUNCE TO IT ALL."
                },
                {
                    "title": "Santa Claus",
                    "desc": "'Ho, ho, ho!' Pull on reins and say, 'Where's Rudolph?'"
                },
                {
                    "title": "Santa Claus Chimney",
                    "desc": "Pretend to be driving your sleigh, say: \"Whoa!\" (pulling up on the reins), get out of the sleigh, pretend to climb into the chimney, begin to slide down and struggle, say: \"Wheeze, grunt, rattle, clank, oh, no,\" move hands as if falling trying to grasp the sides of the chimney, then yell: \"Craaaasssshhhh and then put your finger   to your mouth and say, \"Shhhhhhh!\""
                },
                {
                    "title": "Santa Clause",
                    "desc": "Put hands on stomach (belly) as to hold it up, and say \"HO, HO, HO\" with a BOUNCE TO IT ALL."
                },
                {
                    "title": "Santa Cub",
                    "desc": "Put hands on belly, lean back slightly while saying 'Ho, Ho, Ho, Merry Cubbing'"
                },
                {
                    "title": "Santa's Workshop",
                    "desc": "Make a hammering motion while saying, \"Bang, Bang. Ouch!\" Then stick your thumb in your mouth."
                },
                {
                    "title": "Santa's Farewell",
                    "desc": "'Merry Christmas to all and to all a good night!'"
                },
                {
                    "title": "Satellite",
                    "desc": "Move right hand in a circle over head, opening and closing fist while saying in a high falsetto voice, \"gleep-gleep, gleep, gleep\""
                },
                {
                    "title": "Satellite",
                    "desc": "Put hands together, interlocked with fore fingers pointing upward. Push hands straight up with explosion noise. When hands are above your head, open hands, waving above your head as you are saying 'Beep, Beep, Beep'."
                },
                {
                    "title": "Saturn",
                    "desc": "Second largest gaseous planet, surrounded by rings of ice & gravel. Has 9 moons, some as big as Earth, and they are more habitable than the planet. It is very beautiful. Say, 'Beautiful.' "
                },
                {
                    "title": "Saw",
                    "desc": "Pretend to get a piece of lumber, measure it, pretend to draw a line, place pencil behind the ear, pick up your pretend saw and begin to saw holding your lumber with one hand and sawing with the other, while making your best sawing impression.\r\n"
                },
                {
                    "title": "Scab Sandwich",
                    "desc": "A cheer:\r\n\r\nScab sandwich, puss on top,\r\nMonkey vomit, camel snot,\r\nRabbit eyeballs, dipped in glue,\r\nYummy Yummy, good for you!"
                },
                {
                    "title": "Scouting For Food",
                    "desc": "\"Pretend to collect Scouting for Food bags that get heavier and heavier with each bag collected until you finally collapse under weight.\""
                },
                {
                    "title": "Screen",
                    "desc": "Close eyes, reach our to turn on - open eyes and say, 'Blip'."
                },
                {
                    "title": "Seal",
                    "desc": "Extend arms, cross hands at the wrist and flap hands several times.\r\n"
                },
                {
                    "title": "Seal Applause",
                    "desc": "Extend your arm straight out in front of you and clap with stiff arms while saying, ''Arf, arf, arf, arf "
                },
                {
                    "title": "Seal of Approval",
                    "desc": "Put your thumbs in your armpits, then move arms up and down like a seal moving its \r\nflippers and say \"Arf, Arf, Arf\" several times. Variation: Add: Pretend you are balancing a ball on the \r\nend of your nose."
                },
                {
                    "title": "Seasick Sailor",
                    "desc": "Hold your stomach, while rocking slowly back and forth and saying, 'Ohhhhhh.'"
                },
                {
                    "title": "Sectional Applause",
                    "desc": "Divide the group into three or four sections. They are only to applaud when you are pointing at them. Vary the order and duration of your pointing."
                },
                {
                    "title": "See And Do It Applause",
                    "desc": "Leader makes up various motions, which the boys copy. The sillier the motions, the better."
                },
                {
                    "title": "Shine Your Halo",
                    "desc": "Children open palm and move in a circular motion over their head."
                },
                {
                    "title": "Short Grand Howl",
                    "desc": "Have everyone form a circle around the person to whom the Grand Howl is to be given. Ask each person to squat, make the two-fingered Cub Scout sign with each hand, and touch the fingers of both hands on the floor between the feet. Then lead the boys in a long howl, \"Ah-h-kay-y-la! We-e-ell do-o-o-o o-u-r best!\" As they yell, \"best\" have them jump to their fet with thier hands high above their heads and given the Cub Scout sign."
                },
                {
                    "title": "Showboat",
                    "desc": "Make like an old riverboat with rotating arms like a paddle and make a sound like a boat whistle, \"bur-r-rp, bur-r-rp, bur-r-rp.\""
                },
                {
                    "title": "Siesta Cheer",
                    "desc": "Remain seated and pull an imaginary sombrero over face while snoring loudly.\r\n"
                },
                {
                    "title": "Silent 4 Hit 4",
                    "desc": "Have the group clap 12 times, but the first 4 they miss they hands, then hit 4 times, and then miss 4 times WELL JOB Have the group stand and yell \" Swell Job! \" 3 times."
                },
                {
                    "title": "Silent Applause",
                    "desc": "Tell everyone in the group to clap 12 times. But they should miss their hands the first 10 times, hit on the 11th and miss again on the 12th!"
                },
                {
                    "title": "Silent Scream",
                    "desc": "Have the group stand, cup their hands around their mouth, and pretend to scream, but no sound comes out."
                },
                {
                    "title": "Silent Smoke",
                    "desc": "Make a fist with one hand, point the index finger, hold it close to the chest, then with a circular motion, begin to slowly raise your arm, keeping the finger extended until it is high over your head.\r\n"
                },
                {
                    "title": "Silent Yell",
                    "desc": "Raise both fists to level with hand and shout without any sound while shaking both fists. Or else have everyone stand in unison and open their mouths and scream without making any sound.\r\n"
                },
                {
                    "title": "Silver and Bronze",
                    "desc": "Leader says \"Blue and Gold\"...the audience says \"Silver and Bronze\"do this 2 to 4 times"
                },
                {
                    "title": "Sing & Dance",
                    "desc": "Stand up. When the leader's hand is raised, everyone twists and shouts (or sings in full voice); when the hand is lowered, all is silent (and perhaps frozen in dance position?)"
                },
                {
                    "title": "Singers",
                    "desc": "Sing any simple song or melody with a la, la, la, la, la, la, la ."
                },
                {
                    "title": "Sir Isaac Newton",
                    "desc": "Grab the back of your head and say, \"Ouch, what was that!\""
                },
                {
                    "title": "Siren",
                    "desc": "Say ErrrrRRRRRRRRrrrrrrr"
                },
                {
                    "title": "Siren Cheer",
                    "desc": "At the leader's signal, everyone makes a siren noise until the leader gives the \"stop' signal."
                },
                {
                    "title": "Six Shooter",
                    "desc": "Point finger in the air and say \"BANG\" six times, then blow smoke from the end of the gun."
                },
                {
                    "title": "Skateboard",
                    "desc": "Stand up and move top part of body from one side to the other as if trying to keep balance and say, \"Zoooommm.\"\r\n"
                },
                {
                    "title": "Skittle Skattle",
                    "desc": "Skittle Skattle Skootle Skaatle\r\nBittle Battle Bootle Baatle\r\nWe are all from Troop Fourteen\r\nThe best troop that has ever been seen\r\nFa-diddle-ee-daddle-ee\r\nDoo-dally-daddally\r\nLickety splickety spleen\r\nMalapalooza, lalapalooza Troop Fourteen"
                },
                {
                    "title": "Skunk",
                    "desc": "\"PPPPPPPP UUUUUUU!\""
                },
                {
                    "title": "Sky Rocket",
                    "desc": "Squat down and do a count down 10, 9, 8, etc. then yell \"Blast-off,\" jumping up with arms together pointing towards the sky."
                },
                {
                    "title": "Sky Rocket",
                    "desc": "Make a motion of striking a match on your pants, lean over to light your rocket. Make a \"SH, SH, SH\" sound, point from the floor to the sky as if you were following it in flight with your finger. CLAP hands and say \"BOOM\" spread arms wide and say \"AH____AH____AH\".\r\n"
                },
                {
                    "title": "Sky Rocket",
                    "desc": "Whistle up the scale and then shout \"BOOM! AAAH!\" As you whistle, gradually raise your hands and then gradually lower them on AAAH. Gradually soften the AAAH to complete silence."
                },
                {
                    "title": "Sky Rocket",
                    "desc": "sssssssssssss - BOOM! Ahhhhhhhhhhh"
                },
                {
                    "title": "Skyrocket",
                    "desc": "In pantomime, the group following the yell leader, plant imaginary rockets in the ground, light a match (on seat of their pants) and apply it to the rocket fuse. As the rocket rises, the group begins to whistle (softly at first and then louder) and after a short pause, all shout BANG!"
                },
                {
                    "title": "Sleeping Chair",
                    "desc": "Close your eyes and tilt your head and go into a deep snore."
                },
                {
                    "title": "Sleeping under the stars",
                    "desc": "Make hands like a pillow and snore!"
                },
                {
                    "title": "Sleeping Under the Stars Applause",
                    "desc": "Make snoring sounds."
                },
                {
                    "title": "Sleepy head Applause",
                    "desc": "Nod your heads, as if asleep, and start cutting the zzz's."
                },
                {
                    "title": "Sleigh",
                    "desc": "Bob up and down on chair like riding in a sleigh and say \"ting-a-ling\" three times."
                },
                {
                    "title": "Sleigh",
                    "desc": "Say \"Ding-a-ling\" three times."
                },
                {
                    "title": "Sleigh",
                    "desc": "\"Jingle, Jangle, Jingle, Jangle\""
                },
                {
                    "title": "Slow Motion",
                    "desc": "Clap by moving the hands VERY slowly"
                },
                {
                    "title": "Smashed Thumb",
                    "desc": "Pretend to hammer a nail in a board and saying \"Bang, bang, ouch!\""
                },
                {
                    "title": "Smoke",
                    "desc": "Using pointing finger, point upward and have it go into a circular motion as smoke would go up."
                },
                {
                    "title": "Smoke Signal",
                    "desc": "Pretend to put a blanket over a fire and then remove to release smoke (done silently?)"
                },
                {
                    "title": "Smoke Signal Cheer",
                    "desc": "1. Have the group make a fist with one hand point the index finger, hold it close to chest. 2. Then raise in a circular motion very slowly, until your arm is as high in the air as possible."
                },
                {
                    "title": "Smokey The Bear",
                    "desc": "Only YOU can prevent forest fires!!!"
                },
                {
                    "title": "Smokey The Bear",
                    "desc": "'Cough, cough, cough, Don't play with matches!' \r\n"
                },
                {
                    "title": "Snake",
                    "desc": "Put hands together above your head. While standing, slither with your body\r\nin place and say, 'SSSSSSSSSSSSS'."
                },
                {
                    "title": "Snake or Leaky Tire",
                    "desc": "Hissssssss"
                },
                {
                    "title": "Snapping Fingers",
                    "desc": "Instead of clapping, snap fingers to applaud the honoree."
                },
                {
                    "title": "Sneeze (community)",
                    "desc": "Divide group into three sections. One section is assigned 'HASHEE', the second section 'HISHEE', and the third section 'AUSHEE'. At the signal, they all shout at once, each his assigned word. The result is a grand wintertime sneeze. "
                },
                {
                    "title": "Snow",
                    "desc": "Hold your hands over your head, bring them down slowly while wiggling your fingers, saying, \"Flaky, flaky, flaky.\""
                },
                {
                    "title": "Snow ball",
                    "desc": "scoop up some snow, pack it into a ball, throw it, whistle like bomb falling, \"plop\""
                },
                {
                    "title": "Snow Cheer",
                    "desc": "Hold your hands over your head, bring them down slowly while wiggling your fingers, saying, \"flaky, flaky, flaky. \""
                },
                {
                    "title": "Snowball",
                    "desc": "Gather up a handful of snow, mold a ball, throw it, then clap your hands together as it makes impact."
                },
                {
                    "title": "Snowball",
                    "desc": "Pick up snow, pack it into a ball, throw it and yell 'Splaaaat\"\"!"
                },
                {
                    "title": "Snowball Cheer",
                    "desc": "Leader throws a wad of white paper into the air. As it hits the ground, all say \"Happy Holiday!\""
                },
                {
                    "title": "Snowflake",
                    "desc": "Connect opposite pinky fingers to thumbs, wiggle your hands like a snowflake and say \"Twinkle, twinkle, twinkle.\""
                },
                {
                    "title": "Solar Power",
                    "desc": "Pretend to slather on suntan lotion, put on sunglasses, and sunbathe. Say \"The sun-it's a gas!\" "
                },
                {
                    "title": "Sole",
                    "desc": "Pick up one of your feet and hold it in one of your hands and iwth the other hand tap the sole of that foot."
                },
                {
                    "title": "Sonic Boom",
                    "desc": "Open mouth and move hands but say nothing---a couple of seconds later, yell \"BOOM!\""
                },
                {
                    "title": "Soul",
                    "desc": "For those who put their heart and soul into something. Pat the palm of one hand on the sole of one shoe."
                },
                {
                    "title": "Soul Cheer",
                    "desc": "Announce that this cheer is for people who put their heart and soul into what they're doing. Pat the palm of one hand on the sole of your shoe and place the other over your heart. Do this three times. "
                },
                {
                    "title": "Sound Barrier Cheer",
                    "desc": "Fly your hand like a jet saying \"Zoooommmmm' then bring your other handup and clap once as loud as you can and say \"Booommm!'"
                },
                {
                    "title": "Southern Applause",
                    "desc": "\"How, how, how, you all-ll\""
                },
                {
                    "title": "Southern Watermelon Cheer",
                    "desc": "Do watermelon cheer, then say, \"You all!\""
                },
                {
                    "title": "Southwest Applause",
                    "desc": "\"What plant grows in the southwest?\" \r\nResponse: \"Yucca, yucca, yucca.\""
                },
                {
                    "title": "Space Hero",
                    "desc": "With arm thrust skyward saying, 'To infinity and beyond'"
                },
                {
                    "title": "Spaceship Cheer",
                    "desc": "Count down '10-9-8-7-6-5-4-3-2-l Blast off!' using hand motions, attain orbit and say, 'Beep-beep-beep-beep.' "
                },
                {
                    "title": "Spanish Applause",
                    "desc": "Stand with left hand on hip and right hand held above head in manner of flamenco dancer. Simultaneously, snap fingers of your right hand and stomp your feet in a fast tempo while turning slowly. Continue until you have made a complete circle. About every quarter turn, yell \"Ole.\""
                },
                {
                    "title": "Spanish Cheese Grater",
                    "desc": "Do motions from above but say 'El Greato, El Greato, El Greato'.'"
                },
                {
                    "title": "Spanish Dancer",
                    "desc": "Stand with left hand on hip and right hand held above head in manner of flamenco dancer. Simultaneously, snap fingers of your right hand and stomp your feet in a fast tempo while turning slowly. Continue until you have made a complete circle. About every quarter turn, yell \"Ole.\""
                },
                {
                    "title": "Spider",
                    "desc": "Walk all four fingers of one hand up the other arm and then scream 'EEEEEKK!\""
                },
                {
                    "title": "Spider Applause",
                    "desc": "Walk all four fingers of one hand up the other arm and then scream \"EEEKKK!\""
                },
                {
                    "title": "Spirit Cheer",
                    "desc": "Divide the group into two sections. The first section chants: \r\n"
                },
                {
                    "title": "Spock",
                    "desc": "'Very logical.'"
                },
                {
                    "title": "Spring Applause",
                    "desc": "Spring up and down and go \"boing, boing, boing\"."
                },
                {
                    "title": "Sprinkler",
                    "desc": "With pointer finger in front of your lips, slowly turn head from right to left making a ch-ch-ch-ch noise. Then, move head quickly from right to left making a p-p-p-p-p-p sound."
                },
                {
                    "title": "Square How",
                    "desc": "'HOW' (make a straight line right), 'HOW' (make a straight line down) 'HOW' (make a straight line left)."
                },
                {
                    "title": "Square How with a Dot",
                    "desc": "SAME AS SQUARE HOW, then hit right in the center of the square and say 'POK' (say it sharply)."
                },
                {
                    "title": "Squashed Bug Cheer",
                    "desc": "Cubmaster counts out three slaps. On the third slap, the boys each imitate the squashed bug of their choice."
                },
                {
                    "title": "Squashing Grapes",
                    "desc": "Everyone stands and stomps grapes."
                },
                {
                    "title": "Squeaky Door",
                    "desc": "Hold out arm, moving it slowly from right to left while saying, 'Squeeeeeek'. When over to left side lift up left hand and clap hands sharply together as a slamming door."
                },
                {
                    "title": "Stamp Collector's Applause",
                    "desc": "Hold left hand in front of you, palm up. Place first two fingers of right hand to mouth as if licking stamp and then strike the palm of your left hand smartly with them. Do this several times rapidly."
                },
                {
                    "title": "Stamp Collectors Applause",
                    "desc": "Lick fingers, slap other hand"
                },
                {
                    "title": "Stamp of Approval",
                    "desc": "Stamp feet on the ground."
                },
                {
                    "title": "Stamp of Approval",
                    "desc": "Pound the palm of your left hand rapidly with your right fist. For another version, throw a handkerchief or cap into the air and have the boys stamp their feet until the cap hits the ground."
                },
                {
                    "title": "Stamp Of Approval",
                    "desc": "Throw a neckerchief in the air. Boys stamp until it hits the ground."
                },
                {
                    "title": "Stamp Of Approval",
                    "desc": "Have the group stamp their feet, slowly at first, then faster and faster."
                },
                {
                    "title": "Stamp Of Approval",
                    "desc": "Pound right balled up fist in open palm of left hand. "
                },
                {
                    "title": "Stampede Applause",
                    "desc": "Yell 'BANG', have group stomp their feet and yell, 'STAMPEDE'."
                },
                {
                    "title": "Stampede Yell",
                    "desc": "Pat hands on knees like running cattle and bawl like a cow"
                },
                {
                    "title": "Standing and Sitting Applause",
                    "desc": "Standing Applause--Have everyone stand up.\r\n"
                },
                {
                    "title": "Standing Ovation",
                    "desc": "From a sitting position, stand up, form arms in a circle above head and say \"OOOOOOOHHHHH.'"
                },
                {
                    "title": "Standing Ovation",
                    "desc": "Stand up and make an oval with your arms over your head."
                },
                {
                    "title": "Star",
                    "desc": "\"Twinkle, twinkle, twinkle.\""
                },
                {
                    "title": "Star Cheer",
                    "desc": "Crouch down with hands on knees, then straighten up and extend your arms high and wide, and shout, \"What a star you are!'"
                },
                {
                    "title": "Star Light",
                    "desc": "\"Twinkle, twinkle!\""
                },
                {
                    "title": "Starbucks",
                    "desc": "Whistle and shake your hand in the air like your fingers are burning."
                },
                {
                    "title": "Stars in the Sky",
                    "desc": "Look up at the sky and say 'Twinkle, twinkle, twinkle, what a grand sight'"
                },
                {
                    "title": "Starter Cheer",
                    "desc": "On your mark, get set, go! (Clap hands loudly on go.)"
                },
                {
                    "title": "Statue Of Liberty",
                    "desc": "Stand and raise imaginary torch and say, Welcome to America!"
                },
                {
                    "title": "Steam Boat",
                    "desc": "Use both hands to make large rotary motions as if they were paddle wheels on an old sie wheeler. At the same time, say \"chug-achug-chug\" at intervals reaching up with right hand and pull down as if operating a steam whistle and say \"Toot-Toot.\""
                },
                {
                    "title": "Steamroller",
                    "desc": "Split the campfire into 2. One half are frogs they repeat the word rivet, the other half go Shhhh.., as the camp leader brings his hands together everyone shouts louder until the hands touch when everyone shouts Kersplat!!"
                },
                {
                    "title": "Stew-pendous Cheer",
                    "desc": "LEADER: Is it soup? \r\nGROUP: No! \r\nLEADER: Is it broth? \r\nGROUP: No! \r\nLEADER: Is it stew? \r\nGROUP: Yes! It's stew-pendous!"
                },
                {
                    "title": "Stomp and Slap",
                    "desc": "When you raise your right hand, everyone stomps feet rapidly. When you raise your left hand, everyone slaps thighs rapidly. When you raise both hands, everyone stomps and slaps."
                },
                {
                    "title": "Stomp Applause",
                    "desc": "Count the stomps, the greater the award, the more the stomps."
                },
                {
                    "title": "Stork Stand",
                    "desc": "Stand with hands on hips. Place one foot against the inside of your other knee. Bend the raised knee \r\noutward. Count to ten without moving from place."
                },
                {
                    "title": "Storm Cheer, The",
                    "desc": "Cubs jump up and down and wave their arms while making as much thunder noise as possible."
                },
                {
                    "title": "Strike it rich",
                    "desc": "Hold hands in front as if panning for gold. After 'swirling' the pretend pan, yell three times: 'I'm rich! I'm rich! I'm rich!'"
                },
                {
                    "title": "Strike It Rich",
                    "desc": "Pretend that a match is being lit by striking it against the seat of your pants. You peer into the cave and then you yell, 'I've struck it rich! I've struck it rich!'"
                },
                {
                    "title": "Strong Man",
                    "desc": "Lift imaginary weights to arms length - grunt \r\nLift imaginary weights to chest height - grunt \r\nLift imaginary weights to above head - grunt and cheer!!"
                },
                {
                    "title": "Strongman",
                    "desc": "Pretend to lift a heavy object and say \"uh, uh, ahhhhh!\""
                },
                {
                    "title": "Summer's Over Yell",
                    "desc": "All parents stand up, yell, YEAH!, while waving your hands about."
                },
                {
                    "title": "Sung",
                    "desc": "This is Actually a Sung Cheer. \r\nThe words are: \r\nBrav-o! Brav-o! Brav-o! Brav-iss-im-o! \r\nBrav-o! Brav-o! Ver-y well done! \r\nBrav-o! Brav-iss-im-o! \r\nBrav-o! Brav-iss-im-o! \r\nBrav-o! Brav-iss-im-o! \r\nVer-y well done!"
                },
                {
                    "title": "Super scout",
                    "desc": "Faster then a speeding bullet, more powerful then a locomotive, able to leap tall buildings in a single bound. It's Super scout!"
                },
                {
                    "title": "Supersonic",
                    "desc": "Wave arms wildly and open mouth as if yelling, then sit quietly for several moments then yell loudly."
                },
                {
                    "title": "Surf Board",
                    "desc": "Pretend to be riding a surf board, run it onto the beach, jump off, spread arms wide, say \"Success!\""
                },
                {
                    "title": "Surfer's",
                    "desc": "\"Surf's Up!\""
                },
                {
                    "title": "Surfing In Tomorrow's World",
                    "desc": "Pretend to sit at computer and type. Pretend to surf a wave."
                },
                {
                    "title": "Swat the fly",
                    "desc": "Using your hand and arm as if they were a fly swatter, swat at a pretend fly, and then yell: 'Got, ya!!'"
                },
                {
                    "title": "Swimmer's Belly",
                    "desc": "Put both hands out in front of you and slap your hands  together once. Look both ways and say, \"Where's the water, where's the  water.\""
                },
                {
                    "title": "Swimming",
                    "desc": "Bend forward from waist down and do swimming crawl stroke"
                },
                {
                    "title": "Swimming",
                    "desc": "Pretend to swim using the breast stroke, clap hands together as you put your arms forward. "
                },
                {
                    "title": "Swine Yell",
                    "desc": "Suueeee, Pig! Pig! Pig!\r\n"
                },
                {
                    "title": "Sword",
                    "desc": "Pretend to have a sword in your hand. Swing it across the body three times saying, \"Swish, Swish, Swish.\"\r\n"
                },
                {
                    "title": "Sylvester The Cat Cheer",
                    "desc": "'Th-h-h-ufferin Th-h-h-uccath-h-h! ! (make sure that the boys are not 'aimed' at each other before this cheer!)"
                },
                {
                    "title": "Walk",
                    "desc": "Tramp, Tramp, Tramp.\r\n"
                },
                {
                    "title": "War Drum",
                    "desc": "Beat your chest saying, \"BOOM, BOOM, BOOM, BOOM!\""
                },
                {
                    "title": "War Drum",
                    "desc": "Beat on your chest saying, BOOM, BOOM, BOOM!!!"
                },
                {
                    "title": "War Hoop",
                    "desc": "Pound on your chest a few times and then yell, \"YIIIIIIII\""
                },
                {
                    "title": "Water",
                    "desc": "Hold your throat as if parched for a drink and say \"Water'water'water'."
                },
                {
                    "title": "Water Cheer",
                    "desc": "\"How, how, how, water, water, glug, glug, glug, Ah-hh.\""
                },
                {
                    "title": "Water Faucet",
                    "desc": "Turn on the faucet, fill your glass and drink it and say, 'AHHHH'!"
                },
                {
                    "title": "Water Skier",
                    "desc": "Hold arms out like holding tow line saying, 'You-ee, splash!' "
                },
                {
                    "title": "Water Sprinkler",
                    "desc": "Make fist with the right hand with thumb sticking out. Place end of thumb on end of nose. Rapidly open and close fist while saying \"Choo, choo, choo, choo,\" etc. sounding like a water sprinkler and turning around as you go. After a complete turn spin back around the opposite direction, again like a water sprinkler, saying \"Wheeee.\""
                },
                {
                    "title": "Water Sprinkler",
                    "desc": "Clap slowly from left to right, then quickly clap while rotating right to left."
                },
                {
                    "title": "Watermelon",
                    "desc": "Take up watermelon in both hands, chomp up one way and spit out seeds, in a Bronx cheer. (For those of you who are purists, the proper terminology is a 'bi-labial fricative'.) Note: this cheer could be considered 'poor taste'."
                },
                {
                    "title": "Watermelon (Aggie)",
                    "desc": "Eat big watermelon, GULP! (Swallow seeds)"
                },
                {
                    "title": "Wave",
                    "desc": "Start with one side and let the wave go around the room twice. "
                },
                {
                    "title": "Wave",
                    "desc": "Rise and raise arms above head then sit back down, as done at sports events. "
                },
                {
                    "title": "Wave Cheer",
                    "desc": "The group starts at one side of the room, rising and raising arms above their heads, then sitting back down as the wave moves on."
                },
                {
                    "title": "Wave, The",
                    "desc": "\"For a SWELL job!\" Rise and raise arms above head then sit back down, as done at sports events. When the wave reaches the last person, it can come back the other way."
                },
                {
                    "title": "Way Back",
                    "desc": "Make a fist but point your thumb backward like a hitchhiker does. Move your arm from front to back as you say \"Way back!\""
                },
                {
                    "title": "We Can Yell",
                    "desc": "We can, We can, We know we can, We must, We'll try to be the best in town..and we'll succeed or bust!\""
                },
                {
                    "title": "We Want You",
                    "desc": "Everyone yells \"I Want You' and points their finger at the honoree (like in the Uncle Sam posters)."
                },
                {
                    "title": "We're Great Yell",
                    "desc": "\"Weeeee'rrreeee Greeeaaaattt!\""
                },
                {
                    "title": "Weather Satellite",
                    "desc": "Move right hand in a circle over your head, opening and closing your fist while saying \"Gleep, Gleep, Gleep\"."
                },
                {
                    "title": "Webelos",
                    "desc": "Shout \"Webelos, Webelos, Webelos.\""
                },
                {
                    "title": "Webelos",
                    "desc": "Shout \"Webelos are neat; they can't be beat. So let's give a yell; Webelos are swell!\""
                },
                {
                    "title": "Webelos",
                    "desc": "Make Boy Scout sign and say \"We'll Be Loyal Scouts\"."
                },
                {
                    "title": "Webelos",
                    "desc": "Shout, WHO'S THE BEST, EVERYONE KNOWS, WE-BE-LOS, WE-BE-LOS."
                },
                {
                    "title": "Webelos Yell",
                    "desc": "Webelos are great, they can't be beat! So let's give a yell, Webelos are swell!"
                },
                {
                    "title": "Weight Lifter",
                    "desc": "Attempt to lift a bar-bell weight and say \"Aaaagh\" as you get it over your head, then drop it to the floor with a \"Thud.\""
                },
                {
                    "title": "Welcome",
                    "desc": "This is a good one to use when introducing a newcomer. Have the group say with much enthusiasm, \"WELCOME, WELCOME, WELCOME!\", or use two welcomes and a hello."
                },
                {
                    "title": "Welcome Aboard",
                    "desc": "Motion with your hand and say, \"Welcome Aboard!\""
                },
                {
                    "title": "Well Done",
                    "desc": "Say well done then have the audience echo it back to you."
                },
                {
                    "title": "Western Cheer",
                    "desc": "Divide audience in half on signal from Cubmaster one side asks \"What shall I do? What shall I do?' The other side responds \"Go west young man, go west.'"
                },
                {
                    "title": "Western How",
                    "desc": "Stamp feet three times, slap knees three times, whip hand around head three times, and yell \"YIPPI-I-A.\"\r\n"
                },
                {
                    "title": "Whale",
                    "desc": "Have the group yell: 'We're a whale of a Pack'"
                },
                {
                    "title": "Whale",
                    "desc": "The group yells: 'We had a whale of a time, please come back!!!'"
                },
                {
                    "title": "Whale",
                    "desc": "Place one hand in front of you palm down, place other hand made into a fist on top of the other hand at the wrist, flip the bottom hand; move it from one side of the body to the other and say: 'Spurt, spurt, spurt!!'"
                },
                {
                    "title": "Whale",
                    "desc": "Shake hand like fish swimming and then bring other hand up like a spout and go 'PHSSH.'"
                },
                {
                    "title": "Whale Applause",
                    "desc": "\"Blubber, blubber, blubber!'"
                },
                {
                    "title": "Whale Cheer",
                    "desc": "Blubber! Blubber! Blubber!"
                },
                {
                    "title": "Whale Cheer",
                    "desc": "Shake hand like a fish swimming and then bring other hand up like a spout and go 'Phsssh. ' "
                },
                {
                    "title": "Whaler's",
                    "desc": "Thar she blows!"
                },
                {
                    "title": "What Are We Cheer",
                    "desc": "At the beginning of the meeting, tell the audience that anytime during the meeting you say 'What are we?' and they are to respond 'One big, happy Family'. "
                },
                {
                    "title": "Wheely Cheer",
                    "desc": "\"That was Wheely, Wheely, Wheely Good!\""
                },
                {
                    "title": "When I Do",
                    "desc": "The orders are \"When I bring my hands together, you do. When I do not, you must not.\" Then go through several false motions to see if you can catch the group napping.\r\n"
                },
                {
                    "title": "When I Do, You Do",
                    "desc": "Give the group the instructions to do whatever you do until you say: \"CEASE!\" Then applaud, stamp, turn, etc. Then say: \"CEASE!\" and do a few more movements to see if anyone will forget and follow you."
                },
                {
                    "title": "Where's my spinach",
                    "desc": "Popeye: 1st group yells: \"Where's my spinach! Where's my spinach! 2nd group yells: \"Toot, toot! You're Popeye the  sailor man! Here's your spinach! 1st group: \"well, blow me down, I love my spinach! Toot, toot!"
                },
                {
                    "title": "Where's the water",
                    "desc": "Put both hands out in front of you and slap your hands together once. Look both ways and say, \"Where's the water, where's the water.\""
                },
                {
                    "title": "Whip",
                    "desc": "Pretend to snap a whip and yell, \"Yhaw, Yhaw.\""
                },
                {
                    "title": "Whip",
                    "desc": "Pretend to holding a whip and make the motion of snapping it in the air while saying \"YWAH, YWAH, YWAH\"."
                },
                {
                    "title": "Whistle",
                    "desc": "Group whistles a well-known tune (Andy Griffith theme works great!)"
                },
                {
                    "title": "Whittlers",
                    "desc": "Get out your knife, make sure it's sharp, get your block of wood, pretend to start to whittle, then pretend to let the blade slip-cut yourself. Yell Oooooooh!"
                },
                {
                    "title": "Whittling Stick",
                    "desc": "Pick up a tall stick off the ground, take out your pocket knife, and start making notches in the stick, going higher and higher. When you get as far as you can reach, say, \"Top Notch!\""
                },
                {
                    "title": "Wiggle Your Tummy",
                    "desc": "Wiggle your thumbs."
                },
                {
                    "title": "Wild Man",
                    "desc": "Wave your hands, shake your head and make a loud \"AAUUGGHHH.\""
                },
                {
                    "title": "Wind",
                    "desc": "Take a deep breath, puff out cheeks and yell \"Hot air! Hot Air!\" "
                },
                {
                    "title": "Windmill cheer",
                    "desc": "Hold both arms out straight at shoulder level. Standing on one foot, spin around while rotating arms in a circle. Make a loud whoosh noise like the wind."
                },
                {
                    "title": "Wink",
                    "desc": "Tell the group this a very difficult applause. Have them stand, turn towards the person receiving the applause and wink 3 times. That's it!"
                },
                {
                    "title": "Winston Churchill",
                    "desc": "Make a 'V' sign with your index and middle fingers and shout: \"Victory!\""
                },
                {
                    "title": "Witch",
                    "desc": "Say in witchy voice \"Heee, Heee, Heee.\"\r\n"
                },
                {
                    "title": "Witch Cheer",
                    "desc": "'Cackle, cackle, cackle.'"
                },
                {
                    "title": "Witch's Brew",
                    "desc": "Pretend to be stirring a large pot with a spoon and with a cackling voice say, \"Boil, boil, toil, and bubble. (sung to the tune: Partridge In A Pear Tree) Four M & M's, three pumpkin seeds, two candy corn and an extra-large, shiny bat glove."
                },
                {
                    "title": "Witch's Brew Applause",
                    "desc": "Pretend to be stirring a large pot with a spoon and with a cackling \r\nvoice say, 'Boil, boil, toil, and bubble. \r\n(sung to the tune: Partridge In A Pear Tree) Four M & M's, three \r\npumpkin seeds, two candy corn and an extra-large, shiny bat \r\nglove."
                },
                {
                    "title": "Wolf",
                    "desc": "Give a wolf howl 4 times, each time turning one quarter of a turn."
                },
                {
                    "title": "Wolf",
                    "desc": "Cup hands around mouth, bend at the waist and as you howl like a wolf, come up until you are tilting your head back. Do this 3 times. \"Aaaaarrrooooooo!\""
                },
                {
                    "title": "Wolf",
                    "desc": "Wolf, wolf, wolf, then give wolf howl."
                },
                {
                    "title": "Wolf Applause",
                    "desc": "Give a Wolf howl four times, each time turning one quarter of a turn making a full turn."
                },
                {
                    "title": "Wolf Cheer",
                    "desc": "Cup hands around mouth, bend over at the waist and as you howl like a wolf, come up until you are tilting your head back and leaning backwards. Do this three times: 'Aaaaaaaaarrroooooooooo!!!'"
                },
                {
                    "title": "Wolf Cheer",
                    "desc": "Make fists out of your hands and place at the side of your head, like wolf ears, then howl."
                },
                {
                    "title": "Wolf Cheer",
                    "desc": "\"HOW, HOW, HOW; then simulate WOLF WHISTLE."
                },
                {
                    "title": "WOLF HOWL",
                    "desc": "Howl four times, each time turning one-quarter of a turn making one full turn."
                },
                {
                    "title": "Wood Chopper's Cheer",
                    "desc": "\"HOW, ,HOW, HOW; CHOP, CHOP, CHOP; TIMBERRRRR.\""
                },
                {
                    "title": "Wood plane",
                    "desc": "Hold imaginary wood plane in hands and plane the wood to the sound of zzzziiiiiippp!'"
                },
                {
                    "title": "Woodchopper",
                    "desc": "Shout \"Chop, chop, T-I-M-B-E-R.\""
                },
                {
                    "title": "Woodchopper's Cheer",
                    "desc": "\"HOW, HOW, HOW; CHOP, CHOP, CHOP; TIMBEEERRR\"."
                },
                {
                    "title": "Woodcutter",
                    "desc": "Nod your heads, as if asleep, and start cutting the zzz's."
                },
                {
                    "title": "Woodcutter's Applause",
                    "desc": "Nod your heads, as if asleep, and start cutting the zzz's."
                },
                {
                    "title": "Woodpecker",
                    "desc": "Knock on your chair 5 times."
                },
                {
                    "title": "Woodpecker",
                    "desc": "Have group nod as fast as they can and say, \"Peck, peck, peck, peck, peck, peck!!!!\""
                },
                {
                    "title": "Woodsy Owl Cheer",
                    "desc": "\"Give a hoot! Don't pollute!\""
                },
                {
                    "title": "Woodworking",
                    "desc": "1) Rip-ah Rip-ah OUCH! using a hand saw or 2) BAM! BAM! OUCH! using a hammer"
                },
                {
                    "title": "Working Elf",
                    "desc": "Pick up hammer and say, 'Hammer, hammer, hammer, Nail, nail, nail. Glue, glue, glue, Build, build build.'"
                },
                {
                    "title": "Works Of Art",
                    "desc": "Pretend to paint, step back, spread arms, and say \"Oooooooooo, Ahhhhhhhhh, Magnificent!"
                },
                {
                    "title": "World Brotherhood Cheer",
                    "desc": "Divide the room in half. One side will shouts 'World' and the other shouts 'Brotherhood.' All together 'That's Scouting!'"
                },
                {
                    "title": "Wow",
                    "desc": "A long drawn out W-o-o-o-o-w, starting softly and low in pitch then rising higher and louder then back down."
                },
                {
                    "title": "WOW!",
                    "desc": "Make the letter \"W\" with each hand by extending three middle fingers. Make an \"o\" with your mouth and place hands on either side of your head."
                },
                {
                    "title": "Taming of the Wild Lion",
                    "desc": "Simulate having a chair and whip in hand. Hold chair out and crack whip while yelling \"Back, back, back!\" Help, help, the lion has the whip."
                },
                {
                    "title": "Tarzan",
                    "desc": "Beat chest and make the Tarzan call: \"aheeeeeaheeeeeah,"
                },
                {
                    "title": "Tarzan Cheer",
                    "desc": "'I like bananas (pantomime eating a banana), coconuts (throw coconut), and grapes (eat grapes). That's why they call me (yell next part), 'Tarzan of the Apes'.' "
                },
                {
                    "title": "Teapot Applause",
                    "desc": "Hold one hand on your waist, the other in the air crooked like a teapot spout. Whistle, then tip to pour with a loud \"Glug-glug-glug.\""
                },
                {
                    "title": "Telegraph Applause",
                    "desc": "\"Clickety, clickety, clack! Click! Clickety, Clack!\""
                },
                {
                    "title": "Telephone Solicitor",
                    "desc": "\"Hello, hello, No I don't need my carpets cleaned!\" Slam phone down."
                },
                {
                    "title": "Ten Clap, The",
                    "desc": "###, ###, ###, X' YEAH!!"
                },
                {
                    "title": "Terminally Incompetent",
                    "desc": "Hold hand flat in front of you. Push it forward, as if sliding a disk into a disk drive. Say, \"Whirr! Whirr!' Type and say, \"Click, click, click, click!' Save and say, \"Whirr! Whirr!' Shout, \"WHERE DID IT GO? WHERE DID IT GO?'"
                },
                {
                    "title": "Test Tube",
                    "desc": "Act like you are holding a test tube in your left hand. Pour a reactant into it with your right hand. Place your thumb over the test tube and shake rapidly. After shaking, lift your thumb and yell, 'BOOM!'"
                },
                {
                    "title": "Texas Desert",
                    "desc": "Yucca, yucca, yucca'"
                },
                {
                    "title": "Texas How",
                    "desc": "How! How! Howdy pardner!"
                },
                {
                    "title": "Texas Oil Refinery",
                    "desc": "Crude, crude, crude'"
                },
                {
                    "title": "Texas Pac Man",
                    "desc": "Spread arms in front of you like?Pacman Applause?and open and close arms while saying \"Wa, Wa, Wa, Wa, Wa.\""
                },
                {
                    "title": "Texas Welcome Yell",
                    "desc": "HOOOOW DDD DEEE PARRRD!!!!"
                },
                {
                    "title": "That's the Way I Like It",
                    "desc": "Wiggle fingers to the left and right in front of you as you sing, \"That's the way, uh huh uh huh, I like it.\""
                },
                {
                    "title": "Thinker, The",
                    "desc": "While frowning, stroke your chin with your right hand and say, YI-IMMMMM MMMMMMM!"
                },
                {
                    "title": "Thomas Edison",
                    "desc": "Hold both hands together in front of you as if flying a kite. Jerk back suddenly while saying \"Zap, Zap, Zap!\" (lightning)"
                },
                {
                    "title": "Three Big Hows",
                    "desc": "Announce, \"Let's give three big 'hows' for __________.\" On signal, all yell sharply, \"How, How, How!\""
                },
                {
                    "title": "Three How Yell",
                    "desc": "How, How, How."
                },
                {
                    "title": "Three Howls And A Ugh",
                    "desc": "\"Howl! Howl! Howl! Ugh!\""
                },
                {
                    "title": "Three Howls Applause, The",
                    "desc": "The leader thrusts his fist downward and the Cubs yell \"HOWL!\" The leader thrusts his fist back up into the air and the Cubs repeat \"HOWL!\" He thrusts his fist back down again and they yell \"HOWL!\" (Get the Pack used to this one so they do it on \"signal\" so that when you're at a District or Council event you can \"show up\" the other Packs.) "
                },
                {
                    "title": "Three Hows and an Ugh",
                    "desc": "How! How! How! Ugh! (for Southern style, add a drawled \"Yuh all.\""
                },
                {
                    "title": "Three Hows, Indian Style",
                    "desc": "How. How, Heap How."
                },
                {
                    "title": "Three Hows, Southern Style",
                    "desc": "How, How, How, Y'all."
                },
                {
                    "title": "Three Hows, Texas Style",
                    "desc": "How, How, Howdy Pardner."
                },
                {
                    "title": "Three How's With A Northern Touch",
                    "desc": "How! How! How! (With a shiver at the end.)"
                },
                {
                    "title": "Three Little Pigs",
                    "desc": "Oink, Oink, Oink!"
                },
                {
                    "title": "Three Strikes",
                    "desc": "Turn head to the side sharply while saying, \"Strike!\" Do these three times and end with, \"You're out!\"\r\n"
                },
                {
                    "title": "Thumbs Up",
                    "desc": "Hold out a hand at arms length, make a fist with the thumb up. For variation add, GREAT JOB!"
                },
                {
                    "title": "Thunder and Lightening Cheer",
                    "desc": "Group yells out 'Boooom!, Boooom! Boooom! then 'Zaaaap! Zaaaap! Zaaaap! then 'Booom! Boooom! Boooom!"
                },
                {
                    "title": "Thunder and Rain Applause",
                    "desc": "Start by gently patting knees alternately to simulate rain falling. Increase the noise by switching to hand clapping as the storm reaches its height. With a hand signal, have everyone shout \"Boom.\""
                },
                {
                    "title": "Thunder and Rain Applause",
                    "desc": "Have the group remain seated. Have them place their hands, with the palms open, on their knees. Starting from the left side of the room, have them softly tap their knees to simulate light rain. As the 'storm' moves across the room, have each section pat louder and louder until it gets to the center, when everyone stands, yells, 'BOOOOM' to simulate thunder, then sits down. The 'storm' moves to the right, with the 'rain' becoming softer as it moves to the right, then fades away."
                },
                {
                    "title": "Thunder Cheer",
                    "desc": "Group shouts, \"Kaboom! Kaboom! Kaboom!"
                },
                {
                    "title": "Thunderbolt",
                    "desc": "Pound fist against hand while saying \"Boom, boom, boom, let's get cracking.\""
                },
                {
                    "title": "Thunderous",
                    "desc": "Start with rapid, very loud claps and gradually soften to all quiet."
                },
                {
                    "title": "Thunderstorm",
                    "desc": "Pat both hands on top of knees to resemble sound of soft rain. Clap hands in front to resemble harder rain. Raise both hands over head and shout \"boom\" to resemble thunder. Clap hands again in front end by patting knees softly."
                },
                {
                    "title": "Tiger",
                    "desc": "Shout, \"Grrrreat! Thrust fist upward Tony Tiger style."
                },
                {
                    "title": "Tiger Cheer",
                    "desc": "Give me a T T \r\nGive me an I I \r\nGive me a G G \r\nGive me an E E \r\nGive me an R R \r\n"
                },
                {
                    "title": "TIGER CUB",
                    "desc": "Repeat this cheer three times. The first time is spoken softly, the second a little louder and the third time is yelled loudly with a big Tiger growl at the end: \r\n'The wonderful thing about Tigers...is that Tigers are wonderful things.'"
                },
                {
                    "title": "Tiger Cub Cheer",
                    "desc": "Divide the group into three groups. The leader calls, 'What does a Tiger Cub do?' and points to each group in turn. \r\nGroup 1 yells 'Follows!' when the leader points to them. \r\nGroup 2 responds 'Helps!,' and Group 3 cheers 'Gives!' \r\nVary the speed and order in subsequent cheers."
                },
                {
                    "title": "TIGER CUB CHEER II",
                    "desc": "'Tigers have the spirit. \r\nYes, we do! \r\nTigers have the spirit. \r\nHow 'bout you?' \r\n"
                },
                {
                    "title": "TIGER CUB CHEER III",
                    "desc": "'We're the Tigers, \r\nAnd we're proud to say, \r\nWe'll be back next year as Wolves, \r\n'Cause that's the Cub Scout way.'"
                },
                {
                    "title": "Tightrope Walker",
                    "desc": "Have your arms out as if balancing on a tightrope. Lean to one side and say \"Aaaiiiii\" as you simulate falling.\r\n"
                },
                {
                    "title": "Timber Cheer",
                    "desc": "When you point to one half of the group, they yell, CHIP ! \r\n"
                },
                {
                    "title": "Tiny Tim",
                    "desc": "'God Bless Us Every One!'"
                },
                {
                    "title": "Tonto",
                    "desc": "Leader says \"Where does Tonto take his trash?\" The audience yells in reply, \"To de dump, to de dump, to de dump dump dump,\" to the rhythm of a running horse in a sing-song manner while clapping hands on thighs. (Like Lone Ranger)\r\n"
                },
                {
                    "title": "Tony the Tiger Applause",
                    "desc": "'You're grrrreaaaaatttt!!!'"
                },
                {
                    "title": "Tornado",
                    "desc": "Stand up, while in place, turn around twice, then click your heels twice and say, \"There's no place like home, there's no place like home.\""
                },
                {
                    "title": "Tornado Applause",
                    "desc": "Whirl your finger like a tornado and yell, 'Toto!'"
                },
                {
                    "title": "Tortilla",
                    "desc": "Slap both hands together, alternating one hand and the other from top to bottom. On every fourth clap, shout, \"OLE!\"\r\n"
                },
                {
                    "title": "Tortilla Applause",
                    "desc": "Flatten your tortilla by rubbing your palms together in a circle. When it is good and flat, spread your arms apart, flip the tortilla from hand to hand three times. On the fourth time, throw your hands up in the air, yell \"Ole,\" and bring your hands down as if catching the tortilla with a loud clap. You can vary this by pretending to roll the tortilla and eating it while saying, \"Yum, yum!\""
                },
                {
                    "title": "Total Genius",
                    "desc": "'I've made it, I've made it, I don't know what it is but I've made it!'"
                },
                {
                    "title": "Toucan Yell",
                    "desc": "Hold hands in front of mouth, simulating a bird opening its beak, several times while saying \"TOUCAN, TOUCAN, TOUCAN! A CUB(SCOUT) CAN TOO!!!\"\r\n"
                },
                {
                    "title": "Touchdown",
                    "desc": "Quickly throw both arms up into the air with fingers close together pointing upward \r\n(as if to signal a touchdown) and yell and scream and cheer."
                },
                {
                    "title": "Tourist",
                    "desc": "Look around the room in an exaggerated fashion and say \"Oooo--and Ah-h-h\" This is supposed to represent the rubbernecking tourist gawking at some of the Wonders of the World."
                },
                {
                    "title": "Tourist Applause",
                    "desc": "Look around the room as if gawking in some tourist sight and say \"Oooooh and Ahhhh.\""
                },
                {
                    "title": "Tra La La",
                    "desc": "Tra-la la   tra-la la   tra lala lala la\r\nTra-la la   tra-la la   tra lala lala la\r\nTra la la   tra la la   tra lala lala\r\nTra la la   tra la la   tra la la la la \r\n(shout name of pack)"
                },
                {
                    "title": "Tractor",
                    "desc": "Pretend to start up an old tractor by making a sputtering sound to a putt ' putt (show hand gestures by turning a crank)."
                },
                {
                    "title": "Trail Blazer",
                    "desc": "Put hand to forehead like looking far away and say 'Blaze, Blaze'."
                },
                {
                    "title": "Trail Boss Cheer",
                    "desc": "Round 'em up!"
                },
                {
                    "title": "Trail Cook",
                    "desc": "'Come and get it!'"
                },
                {
                    "title": "Train",
                    "desc": "Divide audience into groups to make different train sounds, getter faster and faster until a bell rings.\r\n"
                },
                {
                    "title": "Train",
                    "desc": "Chugga-chugga- choo ' choo!"
                },
                {
                    "title": "Train",
                    "desc": "Begin with group sitting down, clap their hands on their knees to a 4-beat rhythm with the loudest clap on the first beat, increasing tempo until the train is at full speed, then yell: \"Whoooo whooo! \" and bring the train in to a halt."
                },
                {
                    "title": "Train",
                    "desc": "Say \"Cub-A, Cub-A, Cub-A\", getting louder, and louder and at the end pull the whistle and say \"woooooooo\" ."
                },
                {
                    "title": "Train",
                    "desc": "Divide the pack into two groups. Have each group clap once when you point to there. Begin \r\nslowly pointing alternately to each side. Gradually increase speed as \"train' approaches. When \"train\" is \r\ngoing fast, point to the same side twice to end the applause."
                },
                {
                    "title": "Train Applause",
                    "desc": "Divide audience into groups to make different train sounds, get faster and \r\nfaster until a bell rings."
                },
                {
                    "title": "Train Cheer",
                    "desc": "Divide the pack into three groups. First group yells, \"ALL ABOARD!\" Then second group yells, \"CHUGA, CHUGA, CHUGA, CHUGA.\" Finally third group yells, \"TOOT, TOOOOOOT!\""
                },
                {
                    "title": "Train Passing Cheer",
                    "desc": "Say \"WHOO-oooooooooo\" decreasing pitch like a passing train"
                },
                {
                    "title": "Train Station",
                    "desc": "Pretend to be the conductor, and say \"Destination ' SUCCESS!'"
                },
                {
                    "title": "Train Ticket",
                    "desc": "\"You're just the ticket!\""
                },
                {
                    "title": "Train Yell",
                    "desc": "(Repeat each line 5 times)\r\nTreacle roll, treacle roll (gradually getting faster). Suet pudding, suet pudding (gradually slowing down). Bread and cheese, bread and cheese (quick and lively). Fish and chips, fish and chips-s-s (slowing to a stop)."
                },
                {
                    "title": "Trained Circus Flea",
                    "desc": "Have everyone raise his hands above his head. Applaud by clicking the nails of the thumb and forefinger on each hand. "
                },
                {
                    "title": "Transcontinental",
                    "desc": "All stand, raise your right hand and point your index finger in the air as if making a point and say \"That's TRANSCONTINENTAL!' with great enthusiasm."
                },
                {
                    "title": "Trapeze Artists",
                    "desc": "Swing your arms up and down like you are on the bar waiting for someone to swing to you. Open hands, you catch them successfully. Smile big, suddenly they fall.. Scream, then smile. They landed in the net safely. 'Good!' "
                },
                {
                    "title": "Trapper Cheer",
                    "desc": "Pull back on the jaws of a pretend trap. Just as it is about ready to set, it snaps shut on your fingers. 'YEOW!'"
                },
                {
                    "title": "Tree Cheer",
                    "desc": "While reaching arms both above your head, yell, \"Tree-mendous!!\", \"Tree-mendous!!\" \"Tree-mendous!!\""
                },
                {
                    "title": "Tree Cheer",
                    "desc": "You can pretend you are a tree and leaf (leave)."
                },
                {
                    "title": "Tree Chopper",
                    "desc": "Get out axe and swing it at a tree while saying, \"Chip, chop, chop, TIMBER!\" then yell, \"WRONG TREE!\"\r\n"
                },
                {
                    "title": "Treetopper",
                    "desc": "Simulate climbing a tree, branch at a time; cut off the top with your axe and yell \"timber.\""
                },
                {
                    "title": "Triangle",
                    "desc": "Hold left hand in front of you as if holding the triangle, while holding.the right hand as if you're holding the small rod. Then make motion as if striking it while saying in a high ringing voice, \"Ringing-ing, Ring-ing-ing\""
                },
                {
                    "title": "Trombone",
                    "desc": "One hand as trombone slide and other covering mouth, go 'WA, WA, WA, WA.'."
                },
                {
                    "title": "Trucker",
                    "desc": "Pretend you are driving a big rig. Reach above your head for the horn cord and as you make a pulling motion say loudly Honk, Honk!"
                },
                {
                    "title": "Trumpet",
                    "desc": "da-da-da-da-dada-da-da-CHARGE!\r\n"
                },
                {
                    "title": "Tummy",
                    "desc": "Ask everybody to wiggle their tummy. Most will try to wiggle their tummy. Put your fist in the air and wiggle your \"thumby.\""
                },
                {
                    "title": "Turkey",
                    "desc": "Walk around in a small circle saying \"Gobble, gobble, gobble.\" Then rub stomach saying, \"Yummy, yummy, yummy.\""
                },
                {
                    "title": "Turkey",
                    "desc": "Yell, 'Turkey, turkey, turkey.'"
                },
                {
                    "title": "Turkey",
                    "desc": "Put hands under armpits to make wings, flap wings and yell, \"Gobble, gobble, gobble.\""
                },
                {
                    "title": "Turn 4 Quarters",
                    "desc": "Group stands, claps their hands 1-2 pause 3 -4, turns a quarter turn, stamps feet to same rhythm, turns another quarter turn, beats chest in same rhythm, turns again and yells: \"Rah, rah! (pause) Rah, rah! \" turns last quarter and does all 4 things."
                },
                {
                    "title": "Turn Applause",
                    "desc": "Have the group stand and applaud, then turn a third of a circle, applaud, turn another third, applaud, turn the last third and applaud again."
                },
                {
                    "title": "Turn Complete",
                    "desc": "Group stands and claps, stamps feet, beat chest, and yells: \"Rah, rah! \" while turning slowly in a full circle, TONY THE TIGER you're ggrrrrrrrrreeeeeaaatttt!!!"
                },
                {
                    "title": "Turn, Stamp, Applaud",
                    "desc": "Have the group stand, applaud, turn a third of a circle, stamp their feet 3 times, turn another third, applaud, turn the last third and stamp their feet 3 tunes and sit down."
                },
                {
                    "title": "Turtle",
                    "desc": "Fold arms in front of face with face hidden."
                },
                {
                    "title": "Turtle",
                    "desc": "Fold arms, place in front of bowed head, spread arms and stick head out, saying \"nerk! nerk!\""
                },
                {
                    "title": "Turtle",
                    "desc": "Hold your right forearm over your left forearm, in front of your face. Then you spread your forearms apart and move your head in the space and say, \"Neeerk\" while bobbing your head from left to right. Move your head back and close your arms."
                },
                {
                    "title": "Two & One-half Hows (Tired)",
                    "desc": "Instead of UGH, use a tired slow UUUUUUHHHHHH. For a variation, try the contented HOW, giving a sigh instead of the UGH."
                },
                {
                    "title": "Two & One-half Hows Or How How Ugh Yell",
                    "desc": "Yell \"How, How, Ugh!!\" (as this is done emphasize each How with your fist in front of your body. On Ugh, yank your arms back to the side of your body. Do it more rapidly and bit off each word more quickly each time.\r\n"
                },
                {
                    "title": "Two And A Half Howls",
                    "desc": "Same as the THREE HOWLS except on the last signal, the Cubs yell \"UGH!\" "
                },
                {
                    "title": "Two and One-Half Hows",
                    "desc": "How, How, Ugh!!!"
                },
                {
                    "title": "Two Clap, The",
                    "desc": "Everyone clap twice only. This is helpful when there are a lot of recognitions to get through."
                },
                {
                    "title": "TWO HANDED SAW",
                    "desc": "Everyone pairs off into two's, Each pair sticks their hands out with their thumbs up. Alternately grab each other's thumbs until all four hands are each holding a thumb. Move arms and hands back and forth as if sawing."
                },
                {
                    "title": "Two Hows",
                    "desc": "Give two big hows: \"How! How!\""
                },
                {
                    "title": "Two Ten Claps",
                    "desc": "(Do the 'Ten Clap' twice, ending in YEAH)"
                },
                {
                    "title": "Two Toots",
                    "desc": "While making a motion like pulling on a whistle rope, shout \"Toot! Toot!\""
                },
                {
                    "title": "Two-handed Saw",
                    "desc": "Everyone pairs off into two's. Each pair sticks their hands out with their thumbs up. Alternately grab each other's thumbs until all four hands are each holding a thumb. Move arms and hands back and forth as if sawing.\r\n"
                },
                {
                    "title": "Typewriter",
                    "desc": "Pretend to type, with fingers moving rapidly while saying \"Tick, Tick Tick'"
                },
                {
                    "title": "Typewriter",
                    "desc": "Move fingers as if typing, yell 'DING', and act as if you are returning the carriage. "
                },
                {
                    "title": "Typewriter Cheer",
                    "desc": "'Click, click, click, ding. Click, click, click, ding.' "
                },
                {
                    "title": "Tyrannosaurus Rex",
                    "desc": "Put arms up curled with claws, growl ferociously, then say, 'I'll have a king sized burger and large fries, please.' "
                },
                {
                    "title": "Yodelers",
                    "desc": "Cup hands around mouth saying, \"Yodel, ley, lee, who.\""
                },
                {
                    "title": "You're a Quart Low!!!",
                    "desc": "Variation: Add to the above: You could sure use an oil change and pretend to put it back, close the hood with a SLAM!! !"
                },
                {
                    "title": "You've Got Mail!",
                    "desc": "There are certain sounds that we specifically associate with the computer and certain programs on the computer. One of those is the America On Line' (AOL) singsong \"You've Got Mail\" notification. This applause uses that same sing-song \"melody\" to announce \"You Done Good.\""
                },
                {
                    "title": "Yum, Yum",
                    "desc": "Good food! (Rub tummy.) Yum, healthy food! (Rub tummy.) Yum, yum, full tummy! (Rub tummy.) Yum, yum!"
                },
                {
                    "title": "Zee End",
                    "desc": "Tell your group this is to be the last applause for the night, have them take a deep breath, and yell: \"This is zeee end!\""
                },
                {
                    "title": "Zig-a-mala",
                    "desc": "In this yell, the leader shouts ZIG-A-Mala three times, each time increasing the volume and each time the campers answer Z-E-E-E. After the third Z-E-E-E, the leader throws up his hands, and all shout together, WHA."
                },
                {
                    "title": "Ziggy",
                    "desc": "Ziggy, ziggy, hoy, hoy, hoy Ziggy, ziggy, hoy, hoy, hoy"
                },
                {
                    "title": "Zipper",
                    "desc": "Begin by trying to get your jacket zipper put together at the bottom and after several misses, pull up the zipper and pretend to get your neck caught and cry out 'OUCH!'"
                }
            ];
        }
    }
})();