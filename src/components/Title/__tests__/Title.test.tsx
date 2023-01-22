import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Title } from '../Title';

describe('Title component', () => {
  it('Should render text inside', () => {
    render(<Title text="Some title" />);
    expect(screen.getByText(/Some title/i)).toBeInTheDocument();
  });
});
