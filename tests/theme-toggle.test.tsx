import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'next-themes';
import ThemeToggle from '../components/theme-toggle';

describe('ThemeToggle', () => {
  it('renders the theme toggle button and switches theme', async () => {
    render(
      <ThemeProvider defaultTheme="dark" attribute="class">
        <ThemeToggle />
      </ThemeProvider>,
    );

    const button = await screen.findByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/mode/i);

    await userEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});
