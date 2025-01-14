import { create } from 'zustand';

interface IStreamingState {
	isStreaming: boolean;
	setIsSteaming: (newState: boolean) => void;
}

export const useStreamingStateStore = create<IStreamingState>((set) => ({
	isStreaming: false,
	setIsSteaming: (newState) => set(() => ({ isStreaming: newState })),
}));
