let pathChoices = [
    {
        id: 0,
        pathName: 'getPlayerName',
        text: 'Halt! Before we go any further... What is thy nameth?',
        choices: {
            score: 0
        },
        coins: false,
        roundTwo: false,
        pressEnter: false,
        gameover: false
    },

    {
        id: 1, 
        pathName: `welcome`,
        text:`Huzzah, Noble ${playerName}! Welcome to ye kingdom! For seven years ye have pined for Princess Wren's hand in marriage. Her father, King Bloodworth III, has sent a declaration throughout the land for all knights to compete to win his blessing. 
        The first knight to bring the ancient Claymore of Justice back to the King will win the heart and hand of Princess Wren forever. 
        Legend has it the ancient Claymore is hidden in the Monstrous Caverns past the depths of the Deadhaze forest. Danger and Mystery abound.
        Do ye choose to embark on this treacherous journey?`,
        choices: {
            score: 0,
            yes: 2, 
            no: 3
        },
        coins: false,
        roundTwo: false,
        pressEnter: false,
        gameover: false
    },

    {
        id: 2,
        pathName: 'yes',
        text: 'You load up your trusty steed and start down a path. Will you go NORTH, EAST, OR WEST?',
        choices: {
            score: 0,
            north: 4,
            east: 11,
            west: null //update
        },
        coins: false,
        roundTwo: false,
        pressEnter: false,
        gameover: false
    },

    {
        id: 3,
        pathName: 'no',
        text: 'Admittedly, an odd choice to enter the dungeon and not play the game. Alas, farewell.',
        choices: {
            score: 0,
            nextText: null // update with Game Over id 
        },
        coins: false,
        roundTwo: false,
        pressEnter: true,
        gameover: true

    },

    {
        id: 4,
        pathName: 'north',
        text: `Ye go North! Thou dost not pay attention to the road ahead and your steed gets stuck in a ditch. You look around and see a rope, a carrot, and another man's horse. 
        You may USE ROPE, USE CARROT, or TAKE HORSE. What shall ye do?`,
        choices: {
            score: 0,
            rope: 5,
            carrot: 6,
            horse: 7,
        },
        coins: false,
        roundTwo: false,
        pressEnter: false,
        gameover: false
        
    },

    {
        id: 5,
        pathName: 'rope',
        text: `Ye take the rope and pull thy steed out of the ditch! His neck is bruised but he seems fine enough. You continue down the path.`,
        choices: {
            score: -5,
            nextText: 8
        },
        coins: false,
        roundTwo: false,
        pressEnter: true,
        gameover: true
    },

    {
        id: 6,
        pathName: 'use carrot',
        text: `Ye use the carrot to coax thy steed out of the ditch. You are rewarded for your ingenuity. You continue down the path…`,
        choices: {
            score: 10,
            nextText: 8
        },
        coins: false,
        roundTwo: false,
        pressEnter: true,
        gameover: false,
    },

    {
        id: 7,
        pathName: 'take horse',
        text: `You steal another man's horse. The man was hiding in the bushes and saw you take his horse. He hunts you down and stabs you in the back.`,
        choices: {
            score: -7,
            nextText: null //update with GameOver id
        },
        coins: false,
        roundTwo: false,
        pressEnter: true,
        gameover: true 
    },

    {
        id: 8,
        pathName: 'elopement',
        text: `As you continue down the path, you see a womanly figure appear in the distance. You draw closer…. You see it is Princess Wren herself! Princess Wren asks you to run away with her. 
        You may ELOPE or NOT ELOPE. What shall ye do?`,
        choices: {
            score: 0,
            elope: 9,
            notElope: 10
        },
        coins: false,
        roundTwo: false,
        pressEnter: false,
        gameover: false                 
    },

    { 
        id: 9,
        pathName: 'elope',
        text: `You elope with Princess Wren. Word spreads across the land. King Bloodworthe sends his guards to hunt you down and kill you.`,
        choices: {
            score: -7,
            nextText: null // update with GameOver ID
        },
        coins: false,
        roundTwo: false,
        pressEnter: true,
        gameover: true
    },

    {
        id: 10,
        pathName: 'not elope',
        text: `Alas! You have kept your honor intact by obeying the King's wishes. You continue on your journey.`,
        choices: {
            score: 10,
            nextText: null // update id for EAST/WEST junction
        },
        coins: false,
        roundTwo: false,
        pressEnter: true,
        gameover: false
    },

    {
        id: 11,
        pathName: 'east',
        text: `You walk East for several hours. You find you are lost. You look around and see a stranger sleeping under a tree. 
        You may ASK FOR HELP or CONTINUE. What shall ye do?`,
        choices: {
            score: 0,
            askForHelp: 12,
            continue: 13
        },
        coins: false,
        roundTwo: false,
        pressEnter: true,
        gameover: false
    },

    {
        id: 12,
        pathName: 'ask for help',
        text: `You wake the stranger and ask them for help. Your pride is hurt, but you are rewarded for your humility. You find your way back to the path.`,
        choices: {
            score: 8,
        },
        coins: false,
        roundTwo: false,
        pressEnter: true,
        gameover: false
    },

    {
        id: 13,
        pathName: 'continue',
        text: `You continue walking without asking for help. With your head buried in the map, you walk straight into a tree. How embarrassing. 
        Alas, you find your way back to the path.`,
        choices: {
            score: -6,
            nextText: 14
        },
        coins: false,
        roundTwo: false,
        pressEnter: true,
        gameover: false
    },

    {
        id: 14,
        pathName: 'knight party',
        text: `You continue to walk down the path. You hear someone calling your name from behind you. You turn around and see it is Sir Chad from your old fraternity. Sir Chad invites you to a Knightly Rager party down the road. You are feeling weary from your journey and could use a pint of mead…
        You may GO PARTY or NOT PARTY. What shall ye do?`
    }























]