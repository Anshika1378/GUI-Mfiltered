import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
import UserIdentityPage from '../app/user-identity/page';

describe('User Identity Page', () => {
  it('renders the identity verification dashboard content', () => {
    render(
      <ThemeProvider defaultTheme="dark" attribute="class">
        <UserIdentityPage />
      </ThemeProvider>,
    );

    expect(screen.getByText(/Identity verification/i)).toBeInTheDocument();
    expect(screen.getByText(/Verification history/i)).toBeInTheDocument();
    expect(screen.getByText(/User profile snapshot/i)).toBeInTheDocument();
  });
});
