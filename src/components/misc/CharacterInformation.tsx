import { CharacterType } from './characters';
import { Table, TableRow } from './Table';

export const CharacterInformaton = ({
    character
}: {
    character: CharacterType;
}) => {
    return (
        <article>
            <header><h1>{character.name}</h1></header>
            <Table>
                <TableRow heading="Alignment" value={character.alignment} />
                <TableRow heading="Intelligence" value={character.intelligence} />
                <TableRow heading="Speed" value={character.speed} />
            </Table>
        </article>
    )
}




