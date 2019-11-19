import { Tamagotchi } from '../src/tamagotchi.js';

describe('Memetchi', () => {
    jest.useFakeTimers();
    let memetchi;

    beforeEach(function() {
        memetchi = new Tamagotchi("Memetchi");
        memetchi.time_click();
        //memetchi.feed();
    });
    afterEach(function() {
        jest.clearAllTimers();
    });
    test('should have a name, hungry level,and bored level', () => {
        expect(memetchi.name).toEqual("Memetchi");
        expect(memetchi.hungry).toEqual(8);
        expect(memetchi.bored).toEqual(7);
        
    });
    test('should give "Happy" if hungry and bored are less than thresholders', () => {
        expect(memetchi.mood()).toEqual("Happy");
       
    });

    test('should give valid output name with mood:', () => {
        expect(memetchi.toString()).toEqual("I am Memetchi. I feel Happy")
            
           
        });

    test('should hungry increase level of 11 after 6001 milliseconds', () => {
        jest.advanceTimersByTime(6000);
        expect(memetchi.hungry).toEqual(11);
        expect(memetchi.bored).toEqual(10);
    });

    test('should test if hungriness goes down after fed', () => {
        memetchi.feed();
        expect(memetchi.hungry).toEqual(6);
        
    });

    test('should test if bored goes down after teaching', () => {
        memetchi.play();
        expect(memetchi.bored).toEqual(4);
        
    });

    test('should teach tamagotchi a new word', () => {
        memetchi.teach("hi");
        expect(memetchi.sound[0]).toEqual("hi");
    });
    test('should make tamagotchi speak', () => {
        memetchi.teach("hi");
        expect(memetchi.speak()).toEqual("hi");
    });
});
