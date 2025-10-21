/**
 * Type definitions for Obsidian Cursor project
 */

export interface MiyabiConfig {
  version: string;
  project: {
    name: string;
    owner: string;
    repository: string;
  };
  agents: Record<string, any>;
  automation: Record<string, any>;
}

export interface AgentStatus {
  name: string;
  enabled: boolean;
  status: 'idle' | 'running' | 'completed' | 'error';
}
