import { toolsErrorReference } from '../config/References';
import api from './api';

export default class ToolsRepository {
  async LoadAllTools() {
    try {
      const response = (await api.get('/tools')).data;

      return response;
    } catch {
      return [toolsErrorReference];
    }
  }
  async SearchTools(query: string) {
    try {
      const response = (await api.get(`/tools?q=${query}`)).data;

      return response;
    } catch {
      return [toolsErrorReference];
    }
  }
  async SearchToolsbyTags(tag: string) {
    try {
      const response = (await api.get(`/tools?tags_like=${tag}`)).data;

      return response;
    } catch {
      return [toolsErrorReference];
    }
  }

  async PostTool(data: {}) {
    try {
      await api.post('/tools', data).then((response) => console.log(response));
    } catch {
      return [toolsErrorReference];
    }
  }
}
