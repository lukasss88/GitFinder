import { vi } from 'vitest';

const setQueryMock = vi.fn();

vi.mock('../context/SearchQueryContext', () => ({
    useSearchQuery: () => ({
        setQuery: setQueryMock,
    }),
}));

import { render, screen, fireEvent, act } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
    beforeAll(() => {
        vi.useFakeTimers();
    });

    afterAll(() => {
        vi.useRealTimers();
    });


    it('renders the input field', () => {
        render(<SearchBar />);
        const input = screen.getByPlaceholderText('Search...');
        expect(input).toBeInTheDocument();
    });

    it('calls setQuery with the debounced value when input changes', () => {
        render(<SearchBar />);
        const input = screen.getByPlaceholderText('Search...');

        fireEvent.change(input, { target: { value: 'new query' } });
        act(() => {
            vi.advanceTimersByTime(400);
        });
        expect(setQueryMock).not.toHaveBeenCalled();

        act(() => {
            vi.advanceTimersByTime(200);
        });

        expect(setQueryMock).toHaveBeenCalledWith('new query');
    });
});
