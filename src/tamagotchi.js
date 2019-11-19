export class Tamagotchi {
 constructor(name){
   this.name = name;
   this.hungry = 8;//Math.random()*(8)+2;
   this.bored = 7;//Math.rendom()*(9)+3;
   this.sound = [];
   this.index = 0;
   this.hungry_decrement = 2;
   this.bored_decrement = 3;
   this.hungry_threshold = 10;
   this.bored_threshold = 12;
 }
  mood()
  {
    if(this.hungry<=this.hungry_threshold && this.bored<=this.bored_threshold)
    {
      return "Happy";
    }
    else if(this.hungry>this.hungry_threshold)
    {
      return "Angry";
    }
    else if(this.bored>this.bored_threshold)
    {
      return "Bored"
    }
  }
  time_click()
  {
    setInterval(()=>{
    this.hungry+=1,
    this.bored+=1;},2000);
  }
  reduce_hunger()
  {
    this.hungry -= this.hungry_decrement;//Math.max(0,this.hunger - 2);
  }
  reduce_bored()
  {
    this.bored -= this.bored_decrement; //Math.max(0,this.bored - 3);
  }
  feed()
  {
    return this.reduce_hunger();
  }
  play()
  {
    return this.reduce_bored();
  }
  // assignID()
  // {
  //   this.index+=1;
  //   return this.index;
  // }
  teach(word)
  {
    //word.id = this.assignID();
    this.sound.push(word);
    this.index++;
  }
  speak()
  {
    let rendomIdx = Math.rendom()*(this.sound.length);
    return this.sound[rendomIdx];
  }
  
  toString(){
    let output="I am "+this.name+". I feel "+this.mood();
    return output;
  }




}


