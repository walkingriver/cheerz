/**
 * A simple service that returns some default cheers.
 */
(function () {
    'use strict';

    angular
        .module('cheerz')
        .factory('cheerContext', ['$http', cheerContext]);

    function cheerContext($http) {
        // Might use a resource here that returns a JSON array
        var cheers = [];
        var service = {
            all: function () {
                if(cheers || !cheers.length) getCheers();
                return cheers;
            },
            get: function (cheerId) {
                return cheers[cheerId];
            }
        };

        return service;

        function getCheers() {
            // These are the default cheers
            cheers = [
                {id: 62, title: 'Almost', description: 'With hands far apart, bring them rapidly together but miss just before meeting each other.'},
                {id: 1, title: 'Archery', description: 'Shoot arrow and shout "BULLS EYE."'},
                {id: 2, title: 'Avon Lady Cheer', description: '"Dinnnnng! Donnnng!"'},
                {id: 3, title: 'Baseball Cheer', description: '"Back, Back, Back, It\'s out of here! Homerun!"'},
                {id: 4, title: 'Bee Cheer', description: '"Bzzzzzzzz, Bzzzzzzz, OUCH!"'},
                {id: 5, title: 'Beehive Cheer', description: 'Buzz gets louder or softer when leader\'s hand is high or low.'},
                {id: 6, title: 'Bear Cheer', description: '"Grrrrrr!"'},
                {id: 7, title: 'Big Hand', description: 'Leader says, "let\'s give them a big hand" everybody holds up one hand, palm out.'},
                {id: 8, title: 'Blastoff', description: '"10 9 8 7 6 5 4 3 2 1 BLASTOFF!"'},
                {id: 9, title: 'Canned Cheer', description: 'Leader opens and closes imaginary can, to start and stop cheering.'},
                {id: 10, title: 'Canned Laughter', description: 'Leader opens and closes imaginary can, to start and stop laughter.'},
                {id: 11, title: 'Cat cheer', description: '"MeeeeOOOOW!!!"'},
                {id: 12, title: 'Clam', description: 'Fold hands together, interlocking fingers. Make noise by pressing palms together.'},
                {id: 13, title: 'Class A', description: 'Clap in this rhythm: 1-2-3-4, 1-2, 1-2, 1-2-3-4, 1-2, 1-2, 1-2-3-4...(pause)..One big clap.'},
                {id: 14, title: 'Cow Cheer', description: '"MOOOOO!!!"'},
                {id: 15, title: 'Cowboy Cheer', description: 'Twirl lasso. Yell: "Yeeee Haaaw!!!"'},
                {id: 16, title: 'Coyote Cheer', description: '""YIP, YIP, YIPEEEE!!!!!"!!!"'},
                {id: 17, title: 'Doctor\'s Cheer', description: 'Open up, tongs out, everyone say "Aaaaaah!"'},
                {id: 18, title: 'Dog Cheer', description: '"Woof, woof, woof!"'},
                {id: 19, title: 'Drum Roll', description: 'Pat knees soft then loud, then one last pat.'},
                {id: 20, title: 'Duck Call', description: 'Make a duck call by making a circle with thumb & index finger. Blow like a trumpet.'},
                {id: 21, title: 'Easy Duck Call', description: 'Make a duck call as above but instead yell, "Here duck! Here duck!"'},
                {id: 22, title: 'Dynamite', description: 'Light fuse, "Sssssssssssssss, BOOM!"'},
                {id: 23, title: 'Eskimo', description: 'Hold your shoulders, shiver, say "Brrrr."'},
                {id: 24, title: 'Ferris Wheel', description: 'Like Round of Applause but also say "Ooooh" on the way up, "Aaaah" on the way down.'},
                {id: 25, title: 'Fireworks Cheer', description: 'Look up at the ceiling and say "OOOOOH!" "AHHHHH!"'},
                {id: 26, title: 'Food Cheer', description: '"Yuuuummm!"'},
                {id: 27, title: 'Football', description: 'Signal a touchdown and yell "Touchdown!"'},
                {id: 28, title: 'Fred Flintstone Cheer', description: '"Yabba-dabba-doo".'},
                {id: 29, title: 'Frog Cheer', description: 'Crouch down. Jump Up."Ribbit! Ribbit!"'},
                {id: 30, title: 'Ghost, fast', description: '"Boo!"'},
                {id: 31, title: 'Ghost, scary', description: 'Stand, hands up: "Whooooooooo."'},
                {id: 32, title: 'Good Turn', description: 'Stand, clap as you turn in one full circle.'},
                {id: 33, title: 'Homerun cheer', description: '"Back…Back…Back…HOMERUN!'},
                {id: 34, title: 'Ice cube cheer', description: '"COOOOOOOOOL!"'},
                {id: 35, title: 'Jet flying', description: '"ZOOOOOM"'},
                {id: 36, title: 'Jet flying backwards', description: '"MOOOOOZ!"'},
                {id: 37, title: 'Ketchup Bottle Cheer', description: 'Hold bottle in one hand and slap with other hand to get ketchup out.'},
                {id: 38, title: 'Magician\'s Cheer', description: '"Taaa Daaa!"'},
                {id: 39, title: 'Mosquito Cheer', description: 'Slap face, neck, shoulders, etc.'},
                {id: 40, title: 'One hand cheer', description: 'Leader: "What is the sound of one hand clapping?" Everyone claps one hand.'},
                {id: 41, title: 'Photographer\'s cheer', description: 'Pretend to take their picture. "Everyone smile. Say Cheeese!"'},
                {id: 42, title: 'Pig Cheer', description: 'Suueeee, Pig! Pig! Pig!'},
                {id: 43, title: 'Politician\'s Cheer', description: 'Pat yourself on the back.'},
                {id: 44, title: 'Popcorn Cheer', description: '"Pop! . . . Pop! . . Pop! Pop! Pop! Pop! Pop! Pop! Pop! Pop! Pop!"'},
                {id: 45, title: 'Relay Clap', description: 'First person claps second person\'s hand and then relay it on through all of the Cubs.'},
                {id: 46, title: 'Roller Coaster Cheer', description: 'Hold onto bar, tip back, say "Click,click, click, click, click, WHEEEEEE!"'},
                {id: 47, title: 'Round of Applause', description: 'While clapping hands, move them around in a circle in front of you.'},
                {id: 48, title: 'Seal of Approval', description: 'Put your arms straight out together. Clap flippers and say "Ort, Ort, Ort"'},
                {id: 49, title: 'Silent Yell', description: 'Everyone stands and open their mouths and screams without making any sound.'},
                {id: 50, title: 'Six Shooter Cheer', description: 'Point imaginary gun in air and say "BANG!" six times.'},
                {id: 51, title: 'Supersonic Cheer', description: 'Wave arms; pretend to cheer. Sit down wait a moment, then make sounds.'},
                {id: 52, title: 'Surgeon\'s Cheer', description: 'Right Side of room: "Scalpel!" Left Side: "Sponge!" Back: "Oops!" Go faster & faster.'},
                {id: 53, title: 'Theater Cheer', description: '"Bravo! Bravo! Bravo!"'},
                {id: 54, title: 'Thunderstorm Cheer', description: 'Pat knees soft them loud, then yell "Booom"'},
                {id: 55, title: 'Tiger call', description: 'Quietly: "Here, kitty, kitty, kitty." "Here, kitty, kitty, kitty."'},
                {id: 56, title: 'Tony the Tiger cheer', description: '"They\'re Greeeeeat!"'},
                {id: 57, title: 'Water Sprinkler', description: 'Move outstretched arm in a circle: "Choo, Choo, Choo, etc." Swing back "Whee!"'},
                {id: 58, title: 'Watermelon', description: 'Hold a big slice in both hands, suck up from one end to the other, spit out the seeds.'},
                {id: 59, title: 'Wave', description: 'As done at sports, stand, raise hand and cheer then sit as a wave around the room.'},
                {id: 60, title: 'Wave of applause', description: 'Lie Wave but clap on your turn.'},
                {id: 61, title: 'Wolf Cheer', description: 'Wolf howl: "Wooooooooooooooooooo!"'}
            ];
            return cheers;
        }
    }
}())