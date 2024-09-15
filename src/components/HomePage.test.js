import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { useUser } from './UserContext';
import TradingCalculator from './TradingCalculator';
import StockCarousel from './StockCarousel';
import TradingViewWidget from './TradingViewWidget';
import TipsWithAnimatedIcons from './TipsWithAnimatedIcons';

// Mock the useUser hook
jest.mock('./UserContext', () => ({
  useUser: jest.fn(),
}));

// Mock the components used in HomePage
jest.mock('./TradingCalculator', () => () => <div>Trading Calculator Component</div>);
jest.mock('./StockCarousel', () => () => <div>Stock Carousel Component</div>);
jest.mock('./TradingViewWidget', () => () => <div>Trading View Widget Component</div>);
jest.mock('./TipsWithAnimatedIcons', () => () => <div>Tips With Animated Icons Component</div>);

describe('HomePage Component', () => {
  test('renders greeting with user name if user is logged in', () => {
    const mockUser = { name: 'Test User' };
    useUser.mockReturnValue({ user: mockUser });

    render(<HomePage />);

    const greeting = screen.getByText(/שלום, Test User!/i);
    expect(greeting).toBeInTheDocument();
  });

  test('renders greeting for guest if no user is logged in', () => {
    useUser.mockReturnValue({ user: null });

    render(<HomePage />);

    const guestGreeting = screen.getByText(/שלום אורח/i);
    expect(guestGreeting).toBeInTheDocument();
  });

  test('renders TradingCalculator, StockCarousel, TradingViewWidget, and TipsWithAnimatedIcons components', () => {
    useUser.mockReturnValue({ user: null });

    render(<HomePage />);

    const tradingCalculator = screen.getByText(/Trading Calculator Component/i);
    const stockCarousel = screen.getByText(/Stock Carousel Component/i);
    const tradingViewWidget = screen.getByText(/Trading View Widget Component/i);
    const tipsWithAnimatedIcons = screen.getByText(/Tips With Animated Icons Component/i);

    expect(tradingCalculator).toBeInTheDocument();
    expect(stockCarousel).toBeInTheDocument();
    expect(tradingViewWidget).toBeInTheDocument();
    expect(tipsWithAnimatedIcons).toBeInTheDocument();
  });
});
