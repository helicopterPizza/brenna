import CommandField from './CommandField'

import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

const CommandColumn = ({commands}) => {
    return(
        <div>
            <SortableContext items={commands} strategy={verticalListSortingStrategy}>
                {commands.map((command, index) => (
                    <CommandField id={command.stepID} command={command} key={command.stepID}></CommandField>
                ))}
            </SortableContext>
        </div>
    )
}
export default CommandColumn;