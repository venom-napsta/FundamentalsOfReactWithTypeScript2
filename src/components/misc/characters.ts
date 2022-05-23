// import shuffle from 'lodash.shuffle';
import data from './data';

export type CharacterType = {
    name:string;
    alignment: string;
    intelligence: number;
    speed: number;
};

export const fetchCharacter = ():Promise<CharacterType> =>{
    const [character] = data;
    // const [character] = shuffle(data);
    return Promise.resolve(character)
}
