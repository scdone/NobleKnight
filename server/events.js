

const allEvents = []

const firstEvent = [
    {
        id: 0,
        eventName: `welcome`,
        eventText: `Huzzah, Noble ________ Welcome to ye kingdom!  
        For seven years ye have pined for the beautiful Princess Wren's hand in marriage. Her father, King Bloodworth III, has sent a declaration throughout the land for all knights to compete to win his blessing. 
        The first knight to bring the ancient Almighty Claymore of Justice back to the King will win the heart and hand of Princess Wren forever. 
        Legend has it the ancient Claymore is hidden in the Monstrous Caverns past the depths of the Deadhaze forest. Danger and Mystery abound...
        Do ye choose to embark on this treacherous journey, YES or NO?`,
        choices: {
            firstChoice: {
                choiceName: `YES`,
                choiceText: `You load up your trusty steed and start down a path in hopes of winning over Princess Wren forever...`,
                gameOver: false,
                changeScore: 10
            },
            secondChoice: {
                choiceName: `NO`,
                choiceText: `Admittedly, an odd choice to enter the dungeon and not play the game. Alas, farewell.`,
                gameOver: true,
                changeScore: -100
            }
        }  
    }
]

const events = [
    {
        id: 1,
        eventName: `horse`,
        eventText: `As you travel down the path, ye dost not pay attention to the road ahead. Your steed trips and falls in a ditch. He refuses to climb out. You look around and see a carrot and another man's horse. 
        You may USE CARROT or TAKE OTHER HORSE. What shall ye do?`,
        choices: {
            firstChoice: {
                choiceName: `USE CARROT`,
                choiceText: `Ye use the carrot to coax thy steed out of the ditch. You are rewarded for your ingenuity. You continue down the path…`,
                gameOver: false,
                changeScore: 10,
            },
            secondChoice: {
                choiceName: `TAKE OTHER HORSE`,
                choiceText: `You steal another man's horse. The man was hiding in the bushes and saw you steal his horse. He hunts you down and stabs you in the back.`,
                gameOver: true,
                changeScore: -7
            }
        }
    },

    {
        id: 2,
        eventName: `elopement`,
        eventText: `As you continue down the path, you see a womanly figure appear in the distance. You draw closer…. You see it is Princess Wren herself! Princess Wren asks you to run away with her. 
        You may ELOPE or NOT ELOPE. What shall ye do?`,
        choices: {
            firstChoice: {
                choiceName: `ELOPE`,
                choiceText: `You elope with Princess Wren. Word spreads across the land. King Bloodworthe sends his guards to hunt you down and kill you.`,
                gameOver: true,
                changeScore: -7 
            },
            secondChoice: {
                choiceName: `NOT ELOPE`,
                choiceText: `Alas! You have kept your honor intact by obeying the King's wishes. You continue on your journey.`,
                gameOver: false,
                changeScore: 12
            },
        }
    },

    {
        id: 3,
        eventName: `get lost`,
        eventText: `You walk East for several hours. You find you are lost. You look around and see a stranger sleeping under a tree. 
        You may ASK FOR HELP or CONTINUE WALKING. What shall ye do?`,
        choices: {
            firstChoice: {
                choiceName: `ASK FOR HELP`,
                choiceText: `You wake the stranger and ask them for help. Your pride is hurt, but you are rewarded for your humility. You find your way back to the path.`,
                gameOver: false,
                changeScore: 8
                },
            secondChoice: {
                choiceName: `CONTINUE WALKING`,
                choiceText: `You continue walking without asking for help. With your head buried in the map, you walk straight into a tree. How embarrassing. 
                Alas, you find your way back to the path.`,
                gameOver: false,
                changeScore: -5
                }
            }
    },

    {
        id: 4,
        eventName: `knight party`,
        eventText: `You continue to walk down the path. You hear someone calling your name from behind you. You turn around and see it is Sir Chad from your old fraternity. Sir Chad invites you to a Knightly Rager party down the road. You are feeling weary from your journey and could use a pint of mead…
        You may GO PARTY or NOT PARTY. What shall ye do?`,
        choices: {
            firstChoice: {
                choiceName: `GO PARTY`,
                choiceText: `You go to the Knightly Rager and have a great time. Or so far as you can remember…. You wake up the next morning alone in a meadow with empty pints all around. You are hungover but alive. You decide to get up and continue your journey.`,
                gameOver: false,
                changeScore: -8
            },
            secondChoice: {
                choiceName: `NOT PARTY`,
                choiceText: 'You stop in at the party and drink one pint. Your old friends ask you to stay and party, but you decide to continue on your journey. You can party another time. You are rewarded for your maturity',
                gameOver: false,
                changeScore: 5
            }
        }

    },

    {
        id: 5,
        eventName: `troll bridge`,
        eventText: `As you go down the path, you come to a large bridge. You hear the bushes rustle. A large, hairy troll emerges from underneath the foliage. He folds his arms across his chest and blocks you from crossing the bridge. You see a dagger glimmer in his waistband. You may BRIBE TROLL or FIGHT TROLL. What shall ye do?`,
        choices: {
            firstChoice: {
                choiceName: `BRIBE TROLL`,
                choiceText: `The troll is insulted you thought he could be bribed. He pulls out his dagger and slices your throat.`,
                gameOver: true,
                changeScore: -9
            },
            secondChoice: {
                choiceName: `FIGHT TROLL`,
                choiceText: `You pull out your sword and chop off the troll's head. Blood spurts everywhere. You step over his body and cross the bridge.`,
                gameOver: false,
                changeScore: 14
            }
        }
    },

    {
        id: 6,
        eventName: `man in road`,
        eventText: `You cross the bridge and continue your journey. You hear faint groaning in the distance. As you continue, you see an injured man lying by the side of the road. He begs you to help him. 
        You may HELP or NOT HELP. What shall ye do?`,
        choices: {
            firstChoice: {
                choiceName: `HELP`,
                choiceText: `You stop to help the man and get him on his way. You are rewarded for your kindness.`,
                gameOver: false,
                changeScore: 10
            },
            secondChoice: {
                choiceName: `NOT HELP`,
                choiceText: `You ignore the man and continue on your journey. Hath ye never heard 'What goes around comes around?' You have a random heart attack and die.`,
                gameOver: true,
                changeScore: -3
            }
        }
    },

]

const lastEvents = [
    {
        id: 7,
        eventName: `find cave`, 
        eventText: `You go through the DeadHaze forest dodging Terrible Evils and Deep Pitfalls of Sorrow. As you emerge from the forest, you see the Monstrous Caverns in the distance. You get closer and find the mouth of a cave. You hear deep bellows coming from within. 
        You may ENTER or TURN AROUND. What shall ye do?`,
        choices: {
            firstChoice: {
                choiceName: `ENTER`,
                choiceText: `You enter the cave and are engulfed in darkness...`,
                gameOver: false,
                changeScore: 3
            },
            secondChoice: {
                choiceName: `TURN AROUND`,
                choiceText: `You turn around in fear. Coward! How could you come all this way only to give up when you find the cave? You die of shame and cowardice.`,
                gameOver: true,
                changeScore: -20
            }
        }        
    },

    {
        id: 8,
        eventName: `sword`,
        eventText: `You enter the cave. As your eyes adjust to the darkness, you see a mighty dragon sleeping in the back of the cave. The deep bellows you heard were the dragon’s snores. Near his enormous snout, you see a glowing rock with a sword stuck in the top. You recognize the sword as the Almighty Claymore of Justice. 
        The dragon appears to be guarding the sword. 
        You may TAKE SWORD or WITHDRAW QUIETLY. What shall ye do?`,
        choices: {
            firstChoice: {
                choiceName: `TAKE SWORD`,
                choiceText: `HUZZAH, NOBLE _________ You take the sword without waking the dragon. You return to the kingdom and give the Almighty Claymore of Justice to King Bloodworthe. Impressed with your bravery, he gives you his blessing to marry Princess Wren. She swoons over your strength and skill. QUEST COMPLETED!`,
                gameOver: false,
                changeScore: 80
            },
            secondChoice: {
                choiceName: `WITHDRAW QUIETLY`,
                choiceText: `You turn around in fear. Coward! How could you come all this way only to give up when you see a mere dragon? You die of shame and cowardice.`,
                gameOver: true,
                changeScore: -100
            }
        }        
    }
]



module.exports = {
    allEvents:allEvents,
    firstEvent: firstEvent,
    events:events,
    lastEvents:lastEvents
}