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
        var cheers = getCheers();
        var randomCheers = _.sortBy(cheers, 'order');

        var service = {
            all: function () {
               return cheers;
            },
            getCount: getCount,
            get: function (cheerId) {
                return cheers[cheerId];
            },
            currentCheer: function() {return currentCheer;},
            nextCheer: nextCheer,
            resetCheers: resetCheers
        };

        activate();
        return service;

        function activate() {
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
        function getCheers() {
            // These are the default cheers
            cheers = [
                {id: 62, order: getOrder(), title: 'Almost', description: 'With hands far apart, bring them rapidly together but miss just before meeting each other.'},
                {id: 1,  order: getOrder(), title: 'Archery', description: 'Shoot arrow and shout "BULLS EYE."'},
                {id: 2,  order: getOrder(), title: 'Avon Lady Cheer', description: '"Dinnnnng! Donnnng!"'},
                {id: 3,  order: getOrder(), title: 'Baseball Cheer', description: '"Back, Back, Back, It\'s out of here! Homerun!"'},
                {id: 4,  order: getOrder(), title: 'Bee Cheer', description: '"Bzzzzzzzz, Bzzzzzzz, OUCH!"'},
                {id: 5,  order: getOrder(), title: 'Beehive Cheer', description: 'Buzz gets louder or softer when leader\'s hand is high or low.'},
                {id: 6,  order: getOrder(), title: 'Bear Cheer', description: '"Grrrrrr!"'},
                {id: 7,  order: getOrder(), title: 'Big Hand', description: 'Leader says, "let\'s give them a big hand" everybody holds up one hand, palm out.'},
                {id: 8,  order: getOrder(), title: 'Blastoff', description: '"10 9 8 7 6 5 4 3 2 1 BLASTOFF!"'},
                {id: 9,  order: getOrder(), title: 'Canned Cheer', description: 'Leader opens and closes imaginary can, to start and stop cheering.'},
                {id: 10, order: getOrder(), title: 'Canned Laughter', description: 'Leader opens and closes imaginary can, to start and stop laughter.'},
                {id: 11, order: getOrder(), title: 'Cat cheer', description: '"MeeeeOOOOW!!!"'},
                {id: 12, order: getOrder(), title: 'Clam', description: 'Fold hands together, interlocking fingers. Make noise by pressing palms together.'},
                {id: 13, order: getOrder(), title: 'Class A', description: 'Clap in this rhythm: 1-2-3-4, 1-2, 1-2, 1-2-3-4, 1-2, 1-2, 1-2-3-4...(pause)..One big clap.'},
                {id: 14, order: getOrder(), title: 'Cow Cheer', description: '"MOOOOO!!!"'},
                {id: 15, order: getOrder(), title: 'Cowboy Cheer', description: 'Twirl lasso. Yell: "Yeeee Haaaw!!!"'},
                {id: 16, order: getOrder(), title: 'Coyote Cheer', description: '""YIP, YIP, YIPEEEE!!!!!!!!'},
                {id: 17, order: getOrder(), title: 'Doctor\'s Cheer', description: 'Open up, tongs out, everyone say "Aaaaaah!"'},
                {id: 18, order: getOrder(), title: 'Dog Cheer', description: '"Woof, woof, woof!"'},
                {id: 19, order: getOrder(), title: 'Drum Roll', description: 'Pat knees soft then loud, then one last pat.'},
                {id: 20, order: getOrder(), title: 'Duck Call', description: 'Make a duck call by making a circle with thumb & index finger. Blow like a trumpet.'},
                {id: 21, order: getOrder(), title: 'Easy Duck Call', description: 'Make a duck call as above but instead yell, "Here duck! Here duck!"'},
                {id: 22, order: getOrder(), title: 'Dynamite', description: 'Light fuse, "Sssssssssssssss, BOOM!"'},
                {id: 23, order: getOrder(), title: 'Eskimo', description: 'Hold your shoulders, shiver, say "Brrrr."'},
                {id: 24, order: getOrder(), title: 'Ferris Wheel', description: 'Like Round of Applause but also say "Ooooh" on the way up, "Aaaah" on the way down.'},
                {id: 25, order: getOrder(), title: 'Fireworks Cheer', description: 'Look up at the ceiling and say "OOOOOH!" "AHHHHH!"'},
                {id: 26, order: getOrder(), title: 'Food Cheer', description: '"Yuuuummm!"'},
                {id: 27, order: getOrder(), title: 'Football', description: 'Signal a touchdown and yell "Touchdown!"'},
                {id: 28, order: getOrder(), title: 'Fred Flintstone Cheer', description: '"Yabba-dabba-doo".'},
                {id: 29, order: getOrder(), title: 'Frog Cheer', description: 'Crouch down. Jump Up."Ribbit! Ribbit!"'},
                {id: 30, order: getOrder(), title: 'Ghost, fast', description: '"Boo!"'},
                {id: 31, order: getOrder(), title: 'Ghost, scary', description: 'Stand, hands up: "Whooooooooo."'},
                {id: 32, order: getOrder(), title: 'Good Turn', description: 'Stand, clap as you turn in one full circle.'},
                {id: 33, order: getOrder(), title: 'Homerun cheer', description: '"Back…Back…Back…HOMERUN!'},
                {id: 34, order: getOrder(), title: 'Ice cube cheer', description: '"COOOOOOOOOL!"'},
                {id: 35, order: getOrder(), title: 'Jet flying', description: '"ZOOOOOM"'},
                {id: 36, order: getOrder(), title: 'Jet flying backwards', description: '"MOOOOOZ!"'},
                {id: 37, order: getOrder(), title: 'Ketchup Bottle Cheer', description: 'Hold bottle in one hand and slap with other hand to get ketchup out.'},
                {id: 38, order: getOrder(), title: 'Magician\'s Cheer', description: '"Taaa Daaa!"'},
                {id: 39, order: getOrder(), title: 'Mosquito Cheer', description: 'Slap face, neck, shoulders, etc.'},
                {id: 40, order: getOrder(), title: 'One hand cheer', description: 'Leader: "What is the sound of one hand clapping?" Everyone claps one hand.'},
                {id: 41, order: getOrder(), title: 'Photographer\'s cheer', description: 'Pretend to take their picture. "Everyone smile. Say Cheeese!"'},
                {id: 42, order: getOrder(), title: 'Pig Cheer', description: 'Suueeee, Pig! Pig! Pig!'},
                {id: 43, order: getOrder(), title: 'Politician\'s Cheer', description: 'Pat yourself on the back.'},
                {id: 44, order: getOrder(), title: 'Popcorn Cheer', description: '"Pop! . . . Pop! . . Pop! Pop! Pop! Pop! Pop! Pop! Pop! Pop! Pop!"'},
                {id: 45, order: getOrder(), title: 'Relay Clap', description: 'First person claps second person\'s hand and then relay it on through all of the Cubs.'},
                {id: 46, order: getOrder(), title: 'Roller Coaster Cheer', description: 'Hold onto bar, tip back, say "Click,click, click, click, click, WHEEEEEE!"'},
                {id: 47, order: getOrder(), title: 'Round of Applause', description: 'While clapping hands, move them around in a circle in front of you.'},
                {id: 48, order: getOrder(), title: 'Seal of Approval', description: 'Put your arms straight out together. Clap flippers and say "Ort, Ort, Ort"'},
                {id: 49, order: getOrder(), title: 'Silent Yell', description: 'Everyone stands and open their mouths and screams without making any sound.'},
                {id: 50, order: getOrder(), title: 'Six Shooter Cheer', description: 'Point imaginary gun in air and say "BANG!" six times.'},
                {id: 51, order: getOrder(), title: 'Supersonic Cheer', description: 'Wave arms; pretend to cheer. Sit down wait a moment, then make sounds.'},
                {id: 52, order: getOrder(), title: 'Surgeon\'s Cheer', description: 'Right Side of room: "Scalpel!" Left Side: "Sponge!" Back: "Oops!" Go faster & faster.'},
                {id: 53, order: getOrder(), title: 'Theater Cheer', description: '"Bravo! Bravo! Bravo!"'},
                {id: 54, order: getOrder(), title: 'Thunderstorm Cheer', description: 'Pat knees soft them loud, then yell "Booom"'},
                {id: 55, order: getOrder(), title: 'Tiger call', description: 'Quietly: "Here, kitty, kitty, kitty." "Here, kitty, kitty, kitty."'},
                {id: 56, order: getOrder(), title: 'Tony the Tiger cheer', description: '"They\'re Greeeeeat!"'},
                {id: 57, order: getOrder(), title: 'Water Sprinkler', description: 'Move outstretched arm in a circle: "Choo, Choo, Choo, etc." Swing back "Whee!"'},
                {id: 58, order: getOrder(), title: 'Watermelon', description: 'Hold a big slice in both hands, suck up from one end to the other, spit out the seeds.'},
                {id: 59, order: getOrder(), title: 'Wave', description: 'As done at sports, stand, raise hand and cheer then sit as a wave around the room.'},
                {id: 60, order: getOrder(), title: 'Wave of applause', description: 'Lie Wave but clap on your turn.'},
                {id: 61, order: getOrder(), title: 'Wolf Cheer', description: 'Wolf howl: "Wooooooooooooooooooo!"'}
            ];
            return cheers;
        }

        function getOrder() {
            return Math.random();
        }
    }
})();