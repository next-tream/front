import { TInputChangeEvent } from "./handler.type";

export interface ISearchBarProps {
	inputText: string;
	onChangeInput: (event: TInputChangeEvent) => void;
	onClickReset: () => void;
  onClickSearch: () => void;
}