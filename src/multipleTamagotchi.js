class ListTamagotchi{
    constructor()
    {
        this.list = [];
        this.currentID =0;
    }
    addTamagotchi(tamagotchi)
    {
        tamagotchi.id = assignID();
        this.list.push(tamagotchi);
    }
    assignID()
    {
        this.currentID+=1;
        return this.currentID;
    }
    findTamagotchiByIndex(idx)
    {
        for(let index=0; index<this.list; index++)
        {
            if(this.list[index])
            {
                if(this.list[index].id===idx)
                {
                    return this.list[index];
                }
            }
        }
    }
    listAllTamagotches()
    {
        let output = "";
        for(let index=0; index<this.list; index++)
        {
            if(this.list[index])
            {
               output+=this.list[index]+"\n";
            }
        }

    }
}