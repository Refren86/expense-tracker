import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Button } from '../Button';

describe('Button component', () => {
  it('Should render text inside', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText(/Click me/i)).toBeInTheDocument();
  });
});