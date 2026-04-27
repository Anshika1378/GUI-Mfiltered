import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
import AdFraudPage from '../app/ad-fraud/page';

describe('Ad Fraud Page', () => {
  it('renders the ad fraud dashboard content', () => {
    render(
      <ThemeProvider defaultTheme="dark" attribute="class">
        <AdFraudPage />
      </ThemeProvider>,
    );

    expect(screen.getByText(/Ad Fraud Detection/i)).toBeInTheDocument();
    expect(screen.getByText(/Total Traffic/i)).toBeInTheDocument();
    expect(screen.getByText(/Recent incidents/i)).toBeInTheDocument();
  });
});
