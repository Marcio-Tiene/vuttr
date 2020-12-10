import { LocalStorageTools } from '../config/References';
import { IToolSLocalStorage } from '../interfaces/ITools';
import { v4 as uuidv4 } from 'uuid';

export default class ToolsRepository {
  LoadAllTools = () => {
    if (!localStorage.getItem('myTools')) {
      localStorage.setItem('myTools', JSON.stringify([LocalStorageTools]));
    }

    return JSON.parse(
      localStorage.getItem('myTools') as string
    ) as IToolSLocalStorage[];
  };
  SearchToolsbyTags(tag: string) {
    const toolList = JSON.parse(
      localStorage.getItem('myTools') as string
    ) as IToolSLocalStorage[];
    const toolsFilteredByTags = toolList.filter((tool: IToolSLocalStorage) =>
      tool.tags.includes(tag)
    );

    return toolsFilteredByTags;
  }

  SearchTools(query: string) {
    const toolList = JSON.parse(
      localStorage.getItem('myTools') as string
    ) as IToolSLocalStorage[];
    const toolsFilteredByTags = toolList.filter(
      (tool: IToolSLocalStorage) =>
        tool.title.includes(query) ||
        tool.description.includes(query) ||
        tool.tags.includes(query)
    );
    return toolsFilteredByTags;
  }

  PostTool(data: {}) {
    const toolList = JSON.parse(
      localStorage.getItem('myTools') as string
    ) as IToolSLocalStorage[];
    const newId = uuidv4();
    const toolToPost = { ...data, id: newId };

    toolList.unshift(toolToPost as IToolSLocalStorage);

    const saveStringfyedTools = JSON.stringify(toolList);
    localStorage.clear();

    localStorage.setItem('myTools', saveStringfyedTools);
  }

  DeleteTool(id: string) {
    const toolList = JSON.parse(
      localStorage.getItem('myTools') as string
    ) as IToolSLocalStorage[];
    const indexToRemove = toolList.findIndex((tool) => tool.id === id);

    toolList.splice(indexToRemove, 1);

    localStorage.clear();
    const deletedStringfyed = JSON.stringify(toolList);
    localStorage.setItem('myTools', deletedStringfyed);
  }
}
