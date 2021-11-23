// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  
  const pAequorFactory = function(num, arr) {
    return {
      specimenNum: num,
      dna: arr,
      mutate: function() {
        let rand = returnRandBase();
        let randNum = Math.floor(Math.random() * 16);
        if (this.dna[randNum] === rand) {
          rand = returnRandBase();
        }
        this.dna.splice(randNum, 1, rand);
        return this.dna;
      },
      compareDNA: function(obj) {
        let counter = 0;
        for (var i = 0; i < obj.dna.length; i++) {
          if (obj.dna[i] === this.dna[i]) {
            counter++;
          }
        }
        let percent = counter / 16 * 100;
        console.log(`Specimen ${this.specimenNum} and specimen ${obj.specimenNum} have ${percent}% DNA in common`);
      },
      willLikelySurvive: function() {
        let counter = 0;
        for (var i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === "C" || this.dna[i] === "G") {
            counter++;
          }
        }
          let countPercentage = counter / 16 * 100;
          console.log(countPercentage)
          if (countPercentage > 60) {
            return true;
          } else {
            return false;
          }
        }
      }
    }
  
  
  const newPAequor = pAequorFactory(7, mockUpStrand());
  const newTwo = pAequorFactory(9, mockUpStrand());
  console.log(newPAequor.dna)
  newPAequor.mutate();
  console.log(newPAequor.dna)
  console.log(newPAequor.willLikelySurvive())
  newPAequor.compareDNA(newTwo);
  