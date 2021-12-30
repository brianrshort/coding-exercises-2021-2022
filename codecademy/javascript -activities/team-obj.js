const team = {
    _players : [
      {
        firstName: "Joe",
        lastName: "Blow",
        age: 12
      },
      {
        firstName: "Becky",
        lastName: "Souvlecki",
        age: 15
      },
      {
        firstName: "Harold",
        lastName: "Korl",
        age: 25
      }
    ],
    _games : [
      {
        opponent: "Broncos",
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: "Guardians",
        teamPoints: 56,
        opponentPoints: 77
      },
      {
        opponent: "Phantoms",
        teamPoints: 72,
        opponentPoints: 97
      },
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer: function(firstName, lastName, age) {
      let obj = {
        firstName,
        lastName,
        age
      };
      this._players.push(obj);
    },
    addGame: function(opponent, teamPoints, opponentPoints) {
      let obj = {
        opponent,
        teamPoints,
        opponentPoints
      };
      this._games.push(obj);
    }
  
  }
  
  team.addPlayer("Steph","Curry", 28);
  team.addPlayer("Lisa","Leslie", 44);
  team.addPlayer("Bugs","Bunny", 76)
  console.log(team.players)
  team.addGame("Buckets",89, 98)
  console.log(team.games)