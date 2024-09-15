import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { useUser } from './UserContext';

// Mocking the useUser hook to simulate user data
jest.mock('./UserContext', () => ({
  useUser: jest.fn(),
}));

describe('Navbar Component', () => {
  test('renders all navbar links', () => {
    render(<Navbar />);

    const signupLink = screen.getByText(/הרשמה/i);
    const loginLink = screen.getByText(/התחברות/i);
    const dayTradeLink = screen.getByText(/מסחר יומי/i);
    const longTermLink = screen.getByText(/מסחר לונג/i);
    const toolsLink = screen.getByText(/כלים/i);
    const psychologyLink = screen.getByText(/פסיכולוגיה/i);
    const algorithmLink = screen.getByText(/אלגוריתם/i);
    const homeLink = screen.getByText(/דף בית/i);

    expect(signupLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
    expect(dayTradeLink).toBeInTheDocument();
    expect(longTermLink).toBeInTheDocument();
    expect(toolsLink).toBeInTheDocument();
    expect(psychologyLink).toBeInTheDocument();
    expect(algorithmLink).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
  });

  test('renders user avatar if user is logged in', () => {
    const mockUser = {
      name: 'Test User',
      profilePic: '/profile.jpg',
    };

    useUser.mockReturnValue({ user: mockUser });

    render(<Navbar />);

    const avatar = screen.getByAltText(/Test User/i);
    expect(avatar).toBeInTheDocument();
    expect(avatar.src).toContain('http://localhost:5000/profile.jpg');
  });

  test('does not render avatar if user is not logged in', () => {
    useUser.mockReturnValue({ user: null });

    render(<Navbar />);

    const avatar = screen.queryByAltText(/Test User/i);
    expect(avatar).not.toBeInTheDocument();
  });
});
