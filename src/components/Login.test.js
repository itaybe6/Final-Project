import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import Login from './Login';
import { useUser } from './UserContext';
import { useNavigate } from 'react-router-dom';

jest.mock('axios');
jest.mock('./UserContext', () => ({
  useUser: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Login Component', () => {
  const mockSetUser = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useUser.mockReturnValue({ setUser: mockSetUser });
    useNavigate.mockReturnValue(mockNavigate);
  });

  test('renders email and password fields', () => {
    render(<Login />);

    const emailField = screen.getByLabelText(/email address/i);
    const passwordField = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  test('updates state on input change', () => {
    render(<Login />);

    const emailField = screen.getByLabelText(/email address/i);
    const passwordField = screen.getByLabelText(/password/i);

    fireEvent.change(emailField, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordField, { target: { value: 'password123' } });

    expect(emailField.value).toBe('test@example.com');
    expect(passwordField.value).toBe('password123');
  });

  test('submits form and calls axios and navigation', async () => {
    const mockResponse = { data: { id: 1, name: 'Test User' } };
    axios.post.mockResolvedValueOnce(mockResponse);

    render(<Login />);

    const emailField = screen.getByLabelText(/email address/i);
    const passwordField = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(emailField, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordField, { target: { value: 'password123' } });

    fireEvent.click(loginButton);

    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:5000/users/login',
      JSON.stringify({ email: 'test@example.com', password: 'password123' }),
      { headers: { 'Content-Type': 'application/json' } }
    );
    expect(mockSetUser).toHaveBeenCalledWith(mockResponse.data);
    expect(mockNavigate).toHaveBeenCalledWith('/BasicConcept');
  });
});
