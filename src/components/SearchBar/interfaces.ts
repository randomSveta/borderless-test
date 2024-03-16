export interface ISearchBarProps {
  onSearch: (query: string) => void;
  candidates?: string[];
}
